<template>
  <div id="about-events">
    <normalTitle title="大事记" subTitle="Memorabilia"></normalTitle>
    <div class="stage">
      <el-carousel
        height="100%"
        :autoplay="false"
        indicator-position="none"
        arrow="always"
        @change="handleChange"
      >
        <el-carousel-item
          class="list-box"
          v-for="(list, key) in eventList"
          :key="key"
        >
          <div class="period">{{ `${eventStart}-${eventEnd}` }}</div>
          <div class="headline">T11艺术教育学院大事记</div>
          <transition-group name="list" tag="div" class="list">
            <div
              class="list-item"
              v-show="currentShow == key"
              v-for="(v, k) in list"
              :key="k"
            >
              <div class="dot-line">
                <div class="dot"></div>
                <div class="line"></div>
              </div>
              <div class="item-content">
                <div class="content">
                  <div class="one" v-for="(c, k) in v.content" :key="k">
                    {{ c }}
                  </div>
                </div>
                <div class="year">{{ v.year }}</div>
              </div>
            </div>
          </transition-group>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="next">
      <div class="next-title">未来发展计划：</div>
      <normalContent :content="nextContent"></normalContent>
    </div>
  </div>
</template>
<script>
import normalTitle from "../../components/NormalTitle";
import normalContent from "../../components/NormalContent";
export default {
  name: "aboutEvents",
  data() {
    return {
      eventStart: 2018,
      eventEnd: 2019,
      events: [
        {
          year: 2019,
          content: [
            "10月——T11郑州总部完成组建，开始正式运营。",
            "10月——T11郑州总部完成组建，开始正式运营。"
          ]
        },
        {
          year: 2019,
          content: ["8月——南城校区入驻机构30家，在校生源突破1700人。"]
        },
        {
          year: 2018,
          content: ["5月——南城校区招募生源400人。"]
        },
        {
          year: 2018,
          content: ["4月——20家培训机构入驻新乡南城校区。"]
        },
        {
          year: 2018,
          content: ["3月——T11新乡首家3200平“南城校区”开始正式运营。"]
        },
        {
          year: 2019,
          content: ["10月T11郑州总部完成组建，开始正式运营。"]
        },
        {
          year: 2019,
          content: ["8月南城校区入驻机构30家，在校生源突破1700人。"]
        },
        {
          year: 2018,
          content: ["5月南城校区招募生源400人。"]
        },
        {
          year: 2018,
          content: ["4月 20家培训机构入驻新乡南城校区。"]
        },
        {
          year: 2018,
          content: ["3月T11新乡首家3200平“南城校区”开始正式运营。"]
        }
      ],
      currentShow: 0,
      nextContent: [
        "2020年，T11实现省会城市、地级城市、县级城市的校区标本打造，校区数量不低于5个，学生数量不低于10000人，学费收入不低于1亿元；",
        "2021年，完成总部城市郑州20个直营校区的开设，并明确加盟模式，加盟校区100家，学生数量不低于100000人，学费收入不低于10亿元，活动运营收入不低于2亿元；",
        "2022年，加盟校区突破500家，学生数量不低于100万人，学费收入不低于100亿元，活动运营收入不低于20亿元，配套电商收入不低于3亿元，流量变现收入不低于5亿元。",
        "2024年，加盟校区目标1000家......"
      ]
    };
  },
  computed: {
    eventList() {
      let result = [];
      for (var i = 0, len = this.events.length; i < len; i += 5) {
        result.push(this.events.slice(i, i + 5));
      }
      return result;
    }
  },
  methods: {
    handleChange(currentIndex, oldIndex) {
      this.currentShow = currentIndex;
    }
  },
  components: {
    normalTitle,
    normalContent
  }
};
</script>
<style lang="stylus" scoped>
.stage
  background-color var(--main-color)
  background-image:
    linear-gradient(90deg, var(--main-color) 0% 20%, rgba(23, 158, 158, 0.93) 30% 80%, var(--main-color) 90% 100% );
  background-size: 5px
  color: #fff
  height 500px
  .el-carousel
    height 100%
  .list-box
    display flex
    flex-direction column
    box-sizing border-box
    padding 20px 60px 0 60px
    .period
      font-size 40px
      color rgba(255, 255, 255, 0.5)
      margin-bottom 20px
    .headline
      font-size 28px
    .list
      flex 1
      display flex
      align-items flex-end
      .list-item
        position relative
        display flex
        margin 0 15px
        flex 1
      .dot-line
        display flex
        flex-direction column
        align-items center
        .dot
          width 15px
          height 15px
          border-radius 50%
          border: 2px solid #fff
          margin-top 3px
        .line
          width 2px
          flex 1
          background-color #fff
      .item-content
        margin-left 20px
        .content
          text-indent 20px
          font-size 13px
          line-height 25px
          margin 40px 0 5px
        .year
          text-align center
          margin-bottom 20px
          font-size 40px
          letter-spacing 10px
      .list-enter-active, .list-leave-active
        transition: all 1s;
      .list-enter, .list-leave-to
        transform translateY(100%);
.next .next-title
  padding: 40px 80px 0
  font-size 24px
</style>

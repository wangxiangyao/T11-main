<template>
  <div id="about-us">
    <normalTitle title="团队介绍" subTitle="Team introduction"></normalTitle>
    <div class="us">
      <div class="content margin-15p">
        <div class="content-main">
          <div class="name">{{ currentOne.name }}</div>
          <div class="position">{{ currentOne.position }}</div>
          <i class="iconfont icon-jiantou-xia"></i>
          <div class="info" v-for="(v, k) in currentOne.info" :key="k">
            {{v}}
          </div>
        </div>
        <div class="photo-box">
          <img :src="currentOne.photo" alt="" class="photo">
        </div>
        <div class="history-box">
          <div class="topBox">
            <div class="topBox-text">成绩</div>
          </div>
          <div class="history-item" v-for="(v, k) in currentOne.history" :key="k">
            <div class="line-dot">
              <div class="line"></div>
              <div class="dot"></div>
            </div>
            <div class="history-message">
              <div class="company-name">{{ v.company }}</div>
              <div class="company-position">{{ v.position }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="select">
        <div class="select-box">
          <el-carousel type="card" :initial-index="1" :autoplay="false" indicator-position="none" arrow="never" @change="switchOne">
            <el-carousel-item class="select-item-box" :key="key" v-for="(value, key) in us" >
              <div class="select-item">
                <div class="avator-box">
                  <img :src="value.avator" alt="" class="avator">
                </div>
                <div class="name">{{ value.name }}</div>
                <div class="info" v-for="(v, k) in value.info" :key="k">
                  {{v}}
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import normalTitle from "../../components/NormalTitle";
export default {
  name: "aboutUs",
  data() {
    return {
      us: [
        {
          id: 1,
          name: "贺应斌",
          position: "创始人",
          photo: require('../../assets/fengfeng.png'),
          avator: require('../../assets/heyingbin-avator.png'),
          info: [
            "啊手动阀手动阀手动阀",
            "啊手动阀手动阀手动阀手动阀手动阀手动阀",
            "啊手动阀手动阀"
          ],
          history: [
            {
              company: '贺应斌的第一个公司',
              position: '销售经理'
            },
            {
              company: '贺应斌的第二个公司',
              position: '运营总监'
            },
            {
              company: '贺应斌的第三个公司',
              position: '董事'
            }
          ]
        },
        {
          id: 2,
          name: "冯枫",
          position: "创始人",
          photo: require('../../assets/fengfeng.png'),
          avator: require('../../assets/fengfeng-avator.png'),
          info: [
            "啊手动阀手动阀手动阀",
            "啊手动阀手动阀手动阀手动阀手动阀手动阀",
            "啊手动阀手动阀"
          ],
          history: [
            {
              company: '北京胜者国际营销策划机构',
              position: '策划经理'
            },
            {
              company: '河南帝隆集团',
              position: '副总裁'
            },
            {
              company: '河南壹仓优品百货有限公司',
              position: '副总经理 董事'
            }
          ]
        },
        {
          id: 3,
          name: "贺飞",
          position: "创始人",
          photo: require('../../assets/fengfeng.png'),
          avator: require('../../assets/hefei-avator.png'),
          info: [
            "啊手动阀手动阀手动阀",
            "啊手动阀手动阀手动阀手动阀手动阀手动阀",
            "啊手动阀手动阀"
          ],
          history: [
            {
              company: '贺飞的第一个公司',
              position: '前端负责人'
            },
            {
              company: '贺飞的第二个公司',
              position: '技术总监'
            },
            {
              company: '贺飞的第三个公司',
              position: '董事'
            }
          ]
        }
      ],
      selectOne: 2
    }
  },
  computed: {
    currentOne() {
      return this.us.filter((v) => {
        return v.id == this.selectOne
      })[0];
    }
  },
  methods: {
    switchOne(id) {
      console.log(id)
      this.selectOne = id + 1;
    }
  },
  components: {
    normalTitle
  },
  
};
</script>
<style lang="stylus">
#about-us
  .us
    .select
      display flex
      justify-content center
      background-color var(--main-color)
      padding-bottom 20px
      .select-box
        width: 1000px
      .select-item-box
        display flex
        justify-content center
        .el-carousel__mask
          background-color transparent
      .select-item

        display flex
        flex-direction column
        align-items center
        width: 160px
        padding: 30px 15px
        background-color #fff
        box-shadow 0 8px 8px rgba(10,16,20,.54),0 0 8px rgba(10,16,20,.12)
        .name 
          font-size: 20px
          font-weight bold
    .info
      font-size: 12px;
      text-align center
    .content
      display flex
      justify-content center
      padding: 40px 40px 0 40px
      .photo
        display flex;
      .content-main, .history-box
        flex 1
        margin-top: 80px
      .content-main
        display flex
        flex-direction column
        justify-content flex-start
        align-items center
        .name
          font-size: 40px;
          font-weight bold
        .position
          font-size: 45px
        .iconfont
          color var(--main-color)
          font-size: 40px
        .info
          font-size 14px
          margin-top: 20px
      .history-box
        display flex
        flex-direction column
        align-items flex-start
        .topBox
          display flex;
          justify-content center
          align-items center
          border: 3px solid var(--main-color)
          width: 40px
          height 40px
          transform rotate(45deg)
          .topBox-text
            transform rotate(-45deg)
        .history-item:nth-child(2) .line-dot
          margin-top: 5px
        .history-item
          display flex
          width: 100%
          .line-dot
            display flex
            flex-direction column
            align-items center
            margin-left: 18px
          
            .line
              width 2.5px
              height 50px
              background-color var(--main-color)
            .dot
              width: 10px
              height 10px
              border-radius 50%
              background-color var(--main-color)
          .history-message
            display flex
            justify-content space-between
            align-items flex-end
            flex 1
            font-size 12px
            margin-left 20px
</style>


<template>
  <div class="home">
    <homeCarousel :list="list" />
    <div class="belief home-box margin-15p">
      <div class="title">企业文化</div>
      <div class="sub-title">Enterprise culture</div>
      <div class="blief-img-box">
        <img class="belief-img" src="../assets/belief.png" alt="" />
      </div>
    </div>
    <div class="about-company home-box margin-15p">
      <div class="title">公司介绍</div>
      <div class="sub-title">Company profile</div>
      <div class="content-box">
        <p class="content">
          河南T11艺术教育学校创立于2018年，是国内首家艺术教育机构综合体，由国内知名互联网公司、上市公司管理层、金融行业
          精英发起创立，获得了国内IDJ资本、T腾讯资本、宏泰基金等多家投资机构的高度关注和倾力支持，并和国内多家上市公司、知名
          教育品牌结成战略联盟。
        </p>
        <p class="content">
          致力于以“教育资源下沉、教育生源上行”的发展核心，通过商业地产资源整合，深刻解决上游教育机构拓店周期、开店成本、
          招生压力、管理运营乏力等痛点，同时解决下游孩子家长试错成本、路途周转、质量监督、级别晋升等痛点。为上游机构塑造品牌，
          提升质量，减负发展提供助力，为下游孩子家长提高教育投资性价比。最终形成集线下、商业、媒体、线上为一体的全新形式的教育
          机构，打造全国一线教育连锁综合体品牌。
        </p>
      </div>
    </div>
    <div class="news-stage home-box">
      <div class="news-stage-box">
        <div class="news-stage-bg">
          <img
            class="news-stage-bg-img"
            src="../assets/home-news-bg.png"
            alt=""
          />
        </div>
        <div class="news-stage-content">
          <div class="title">新闻中心</div>
          <div class="sub-title">News Center</div>
          <div class="box">
            <div class="list">
              <div
                class="item"
                v-for="(v, k) in news"
                :key="k"
                @click="handleToOneArticleById(v)"
              >
                <i class="dot"></i>
                <p class="abstract">{{ v.digest }}</p>
                <span class="time">{{
                  fmt("yyyy-MM-dd", new Date(v.time))
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="elegance-display home-box margin-15p">
      <div class="title">风采展示</div>
      <div class="sub-title">Elegance display</div>
      <Elegance :list="elegance" />
      <div class="box">
        <div class="item">
          <img class="img" src="../assets/Elegance1.png" alt="" />

          <p class="abstract">
            可结合实际开发哈酒开好房间阿萨德可结合实际开发哈酒开阿拉速度快就会
            发几款是的尽快哈介绍客户的骄傲和实际到货好房可结合实际
          </p>
        </div>
        <div class="item">
          <img class="img" src="../assets/Elegance2.png" alt="" />

          <p class="abstract">
            可结合实际开发哈酒开好房间阿萨德可结合实际开发哈酒开阿拉速度快就会
            发几款是的尽快哈介绍客户的骄傲和实际到货好房可结合实际
          </p>
        </div>
        <div class="item">
          <img class="img" src="../assets/Elegance3.png" alt="" />

          <p class="abstract">
            可结合实际开发哈酒开好房间阿萨德可结合实际开发哈酒开阿拉速度快就会
            发几款是的尽快哈介绍客户的骄傲和实际到货好房可结合实际
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeCarousel from "../components/HomeCarousel/index";
import Elegance from "../components/Dx/Elegance/index";

export default {
  name: "home",
  computed: {
    list() {
      let a =
        this.$store.state.CarouselList.length == 0
          ? "../assets/bg-header.png"
          : this.$store.state.CarouselList;
      return a;
    },
    elegance() {
      return [
        "http://192.168.0.109:10002/fileUpload/df2b6f78-ae25-4f8c-9e19-a5ba7f13d96c89f01bb21931e779f1c8b4736ca6761f.jpeg",
        "http://192.168.0.109:10002/fileUpload/9218c207-29cd-4adf-bc1e-0222957e6e0e1169f6e0e44020c490e358da29abcf0c.jpg"
      ];
    },
    news() {
      return this.$store.getters["article/allNewsByTime"];
    }
  },
  methods: {
    fmt(fmt, Date) {
      var o = {
        "M+": Date.getMonth() + 1, //月份
        "d+": Date.getDate(), //日
        "h+": Date.getHours(), //小时
        "m+": Date.getMinutes(), //分
        "s+": Date.getSeconds(), //秒
        "q+": Math.floor((Date.getMonth() + 3) / 3), //季度
        S: Date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (Date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    },
    handleToOneArticleById(article) {
      let sort = "";
      if (article.sort == 1) {
        sort = "company";
      } else {
        sort = "activity";
      }
      this.$router.push(`/news/${sort}/${article.id}`);
    }
  },
  components: {
    homeCarousel,
    Elegance
  }
};
</script>
<style scoped>
.home-box {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home .title {
  color: #666;
  font-size: 25px;
}
.home .sub-title {
  font-size: 20px;
}
.home .content {
  margin: 15px 12%;
  text-align: justify;
  line-height: 40px;
  text-indent: 40px;
}
.blief-img-box {
  margin-top: 40px;
}
.news-stage {
  background-size: 5px;
  color: #fff;
  position: relative;
}
.news-stage-bg {
  display: flex;
}
.news-stage-box {
  position: relative;
}
.news-stage .news-stage-content {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  flex-direction: column;
  align-items: center;
  padding: 40px 80px;
  box-sizing: border-box;
}
.news-stage .title {
  color: #fff;
}
.news-stage .box {
  display: flex;
  justify-content: center;
  padding: 40px 80px;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
}
.news-stage .list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 200px;
  width: 100%;
  box-sizing: border-box;
}
.news-stage .item {
  display: flex;
  justify-content: space-between;
}
.news-stage .item .abstract {
  margin: 0 60px 40px 20px;
  max-width: 768px;
  text-indent: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: justify;
  flex: 1;
}
.news-stage .item .dot {
  flex: none;
  align-self: flex-start;
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-top: 5px;
}
.news-stage .item .time {
  flex: none;
  font-size: 14px;
  letter-spacing: 2px;
  font-style: italic;
}
.elegance-display .box {
  display: flex;
  padding-top: 10px;
  width: 100%;
  justify-content: space-between;
}
.elegance-display .box .item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.elegance-display .box .item .abstract {
  width: 280px;
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
  line-height: 25px;
}
.elegance-display .box .item .img {
  align-self: center;
}
</style>

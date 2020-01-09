<template>
  <div id="app">
    <div class="header">
      <Nav></Nav>
    </div>
    <div class="state" v-if="isShowBanner">
      <img id="bg-header-img" src="./assets/bg-header.png" alt="" />
      <div class="title-box">
        <div class="title" v-if="mode == 1">
          <div class="main-title">
            尊师重道<i class="title-space"></i>深水静流
          </div>
          <div class="sub-title">
            Respecting Teachers and Respecting Highways
          </div>
        </div>
        <div class="title" v-else-if="mode == 3">
          <div class="main-title">T11艺术教育学院</div>
          <div class="main-title-2">全国招募令</div>
        </div>
        <div class="title" v-else-if="mode == 2">
          <div class="main-title-2">关于我们</div>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view
        v-if="$route.name == 'home'"
        class="main-content"
      ></router-view>
    </keep-alive>
    <router-view v-if="$route.name != 'home'"></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import "./assets/iconfont/iconfont.css";
import "./assets/global.css";
import Nav from "./components/Nav.vue";
import myFooter from "./components/Footer.vue";

// import scroll from "./assets/scroll"; // TODO: 回到顶部准备的库
import { mapActions } from "vuex";

export default {
  name: "app",
  components: { Nav, myFooter },
  data() {
    return {};
  },
  computed: {
    mode() {
      // 判断当前的一级路由位置
      var path = this.$route.path;
      if (path.includes("home") || path.includes("news")) {
        return 1;
      } else if (path.includes("about")) {
        return 2;
      } else if (path.includes("joinUs")) {
        return 3;
      }
      return 1;
    },
    isShowBanner() {
      var path = this.$route.fullPath;
      if (path.includes("home") || path.includes("download")) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    ...mapActions(["getCarouselAndQr"]),
    ...mapActions("article", ["getArticleList"])
  },
  mounted() {
    this.getCarouselAndQr();
    this.getArticleList({ sort: "activity", page: 0 });
    this.getArticleList({ sort: "company", page: 0 });
  }
};
</script>

<style>
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 1440px;
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
}
.main-content {
  flex: auto;
}
#bg-header-img {
  width: 100%;
}
.state {
  position: relative;
}
.title-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.title {
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-title {
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 5px;
}
.main-title-2 {
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 5px;
}
.sub-title {
  font-size: 25px;
  letter-spacing: 3px;
}
.title-space {
  padding: 0 15px;
}
</style>

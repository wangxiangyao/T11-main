<template>
  <div class="subnav-bar">
    <div class="subnav-path subnav-box">
      <i class="iconfont icon-home" />
      <div class="path">{{ nav.title }}</div>
      <i class="iconfont icon-jiantou"></i>
      <div class="path">{{ nav.children[currentNav].title }}</div>
    </div>
    <div class="subnav-item subnav-box">
      <router-link class="subnav" v-for="(value, name) in nav.children" :key="name" :to="`${nav.router.path}/${value.router.path}`">{{ value.title }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "subNav",
  props: {
    name: String,
  },
  computed: {
    nav(){
      return this.$store.state.nav[this.name];
    },
    currentNav() {
      let paths = this.$route.fullPath.split('/');
      return paths[2];
    }
  }
};
</script>
<style scoped>
.subnav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  padding-left: 20px;
}
.subnav-path {
  display: flex;
  align-items: center;
}
.subnav-item {
  display: flex;
}
.subnav-box {

}
.icon-home {
  color: #666;
  font-size: 18px;
}
.icon-jiantou {
  color: #666;
  font-size: 12px;
}
.path {
  color: #666;
  padding: 0 20px;
}
.subnav {
  text-decoration: none;
  color: #666;
  padding: 30px 0;
  margin-left: 40px;
  border-bottom: 2px solid transparent;
}
.subnav.router-link-active {
  border-bottom: 2px solid var(--main-color);
}
</style>

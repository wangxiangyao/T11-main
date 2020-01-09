<template>
  <div class="News margin-15p">
    <SubNav name="news"></SubNav>
    <router-view></router-view>
  </div>
</template>
<script>
import SubNav from "../../components/SubNav";
export default {
  name: "news",
  data() {
    return {
    }
  },
  components: {
    SubNav
  },
  methods: {
    listenResize() {
      this.$EventBus.$emit("resize");
    }
  },
  mounted() {
    window.addEventListener('resize', this.listenResize)
  },
  destroyed() {

    window.removeEventListener('resize', this.listenResize);
  }
};
</script>
<style lang="stylus">
.News
  min-height 800px
</style>

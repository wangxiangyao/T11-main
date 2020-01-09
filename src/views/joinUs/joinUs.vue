<template>
  <div class="join-us">
    <!-- <SubNav name="joinUs" class="margin-15p" ></SubNav> -->
    <router-view></router-view>
  </div>
</template>
<script>
import SubNav from "../../components/SubNav";
export default {
  name: "joinUs",
  data() {
    return {
      
    }
  },
  components: {
    SubNav
  },
  
};
</script>
<style lang="stylus" scoped>
  .join-us
    margin 0 0
  .margin-15p
    margin 0 15%
</style>

<template>
  <div class="about">
    <SubNav name="about" class="margin-15p"></SubNav>
    <more v-show="$route.name == 'companyMore'" />
    <div class="about-content" v-show="$route.name != 'companyMore'">
      <Company class="margin-15p" />
      <Us />
      <Events class="margin-10p"/>
    </div>
  </div>
</template>
<script>
import SubNav from "../../components/SubNav";
import Company from "./company";
import Events from "./events";
import Us from "./us";
import more from "./more"
export default {
  name: "about",
  data() {
    return {
      
    }
  },
  beforeRouteUpdate (to, from, next) { 
    let name = to.name
    if (name == "us" || name =="events") {
      document.querySelector(`#about-${name}`).scrollIntoView()
    }
    next()
  },
  mounted() {
    let name = this.$route.name
    if (name == "us" || name =="events") {
      this.$nextTick(() => {
        document.querySelector(`#about-${name}`).scrollIntoView()
      })
    }
  },
  components: {
    SubNav,
    Company,
    Events,
    Us,
    more
  },
  
};
</script>
<style lang="stylus" scoped>
.about
  margin 0
.about-content
  margin-bottom: 40px
.margin-10p
  margin: 0 10%
</style>

<template>
  <div id="home-carousel">
    <el-carousel :height="height" :interval="5000" @change="handleSwitch">
      <el-carousel-item class="list-box" v-for="(item, key) in list" :key="key">
       <img class="img-item" ref="img" :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>

export default {
  name: 'homeCarousel',
  props: ['list'],
  data() {
    return {
      height: '0px',
      currentIndex: 0
    }
  },
  methods: {
    setHeight() {
      this.height = `${this.$refs.img[this.currentIndex].height}px`
    },
    handleSwitch(to, from) {
      this.currentIndex = to
      this.setHeight();
    },
    listenResize() {
      this.setHeight();
    }
  },
  
  mounted() {
    window.addEventListener('resize', this.listenResize)
    this.$nextTick(() => {
      this.setHeight();
      setTimeout(() => {
        this.setHeight();
      }, 500)
    })
  },
  activated() {
    this.$nextTick(() => {
      this.setHeight();
    })
  },
  updated() {
    this.$nextTick(() => {
      this.setHeight();
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.listenResize);
  },
}
</script>
<style lang="stylus">
#home-carousel
  .img-item
    width: 100%
    max-height: 700px
    min-height 50px
</style>

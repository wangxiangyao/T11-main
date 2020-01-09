<template>
  <div class="Elegance-box">
  </div>
</template>
<script>
import b from "./banner"

export default {
  name: 'Elegance',
  props: ['list'],
  data() {
    return {
      
    }
  },
  methods: {
    init() {
      const { Slide, THREERoot, createTweenScrubber } = b;
      var root = new THREERoot({
        createCameraControls: !true,
        antialias: window.devicePixelRatio === 1,
        fov: 80
      })

      root.renderer.setClearColor(0x000000, 0)
      root.renderer.setPixelRatio(window.devicePixelRatio || 1)
      root.camera.position.set(0, 0, 60)

      var width = 100
      var height = 60


      var slide = new Slide(width, height, 'out')
      var l1 = new THREE.ImageLoader()
      l1.setCrossOrigin('Anonymous')
      l1.load(
        this.list[0],
        function(img) {
          slide.setImage(img)
        }
      )
      root.scene.add(slide)

      var slide2 = new Slide(width, height, 'in')
      var l2 = new THREE.ImageLoader()
      l2.setCrossOrigin('Anonymous')
      l2.load(
        this.list[1],
        function(img) {
          slide2.setImage(img)
        }
      )

      root.scene.add(slide2)

      var tl = new TimelineMax({ repeat: -1, repeatDelay: 1.0, yoyo: true })

      tl.add(slide.transition(), 0)
      tl.add(slide2.transition(), 0)

      createTweenScrubber(tl)

      window.addEventListener('keyup', function(e) {
        if (e.keyCode === 80) {
          tl.paused(!tl.paused())
        }
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="stylus">

</style>

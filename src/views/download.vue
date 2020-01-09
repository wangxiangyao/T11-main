<template>
  <div class="download">
    <div class="bg">
      <img class="bg-img" src="../assets/download-bg.png" alt="">
    </div>
    <div class="download-message">
      <div class="download-nav">
        <router-link class="download-nav-btn" to="/download/teacher">老师端</router-link>
        <router-link class="download-nav-btn" to="/download/parents">家长端</router-link>
      </div>
      <div class="download-title">24小时</div>
      <div class="download-title">为孩子辅导功课</div>
      <div class="download-gap"></div>
      <div class="download-content">
        <div class="download-btn-box">
          <div class="download-btn" :class="{active: platform == 'ios'}" @click="handleSwitchPlatform('ios')">
            <i class="iconfont icon-ios" ></i>
            ios版下载
          </div>
          <div class="download-btn" :class="{active: platform == 'android'}" @click="handleSwitchPlatform('android')">
            <i class="iconfont icon-android"></i>
            android版下载
          </div>
        </div>
        <div class="download-code">
          <img class="qr-img" :src="currentDownloadPath" alt="">
          <!-- <vue-qr :text="currentDownloadPath" :size="166"></vue-qr> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState, mapActions } from "vuex"
import VueQr from 'vue-qr';

export default {
  name: "download",
  components: {
    VueQr
  },
  data() {
    return {
      platform: 'ios',
    }
  },
  computed: {
    ...mapState(['downloadPath']),
    kind() {
      if (this.$route.fullPath.split('/')[2] == "teacher" ) {
        return "teacher"
      } else {
        return "parents"
      }
    },
    currentDownloadPath() {
      return this.downloadPath[this.kind][this.platform]
    }
  },
  methods: {
    handleSwitchPlatform(platform) {
      this.platform = platform;
    }
  }
}

</script>
<style scoped>
  .download {
    margin: 0;
    position: relative;
    height: 100vh;
    min-height: 700px;
    width: 100%;
  }
  .download .bg {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .download .bg .bg-img {
    object-fit: cover;
    object-position: top;
  }

  /* 具体的下载相关信息 */
  .download .download-message {
    display: flex;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10%;
    padding-left: 15%;
  }
  .download .download-message .download-nav {
    display: flex;
  }
  .download .download-nav-btn {
    padding: 10px 30px;
    color: #fff;
    border: 1px solid #fff;
    margin-right: 30px;
  }
  .download .download-nav-btn.router-link-active {
    background-color: var(--main-color);
    border-color: var(--main-color);
  }
  .download .download-title {
    margin-top: 20px;
    color: #fff;
    font-size: 40px;
  }
  .download .download-gap {
    width: 80px;
    height: 3px;
    background-color: #fff;
    margin: 30px 0 80px 0;
  }
  .download .download-content {
    display: flex;
  }
  .download .download-content .download-btn-box {
    display: flex;
    flex-direction: column;
  }
  .download .download-content .download-btn {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 24px;
    padding: 15px 30px;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }
  .download .download-content .download-btn .iconfont {
    font-size: 40px;
    margin-right: 15px;
  }
  .download .download-content .download-btn:hover {
    background-color: var(--sub-color);
  }
  .download .download-content .download-btn.active {
    background-color: var(--main-color)
  }
  .download .download-content .download-code {
    margin-left: 40px;
  }
  .download .download-content .download-code .qr-img {
    width: 166px;
    height: 166px;
  }
  /* IE8+ */
  .download .bg .bg-img{
    width: 100%;
  }
</style>

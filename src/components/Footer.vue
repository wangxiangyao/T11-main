<template>
  <div class="footer">
    <div class="footer-bar">
      <img class="logo" src="../assets/logo.png" alt="T11" />
      <div class="footer-nav-box">
        <div class="footer-nav" v-for="(value, name) in nav" :key="name">
          <router-link class="title" :to="value.router.path">{{
            value.title
          }}</router-link>
          <template v-if="value.children">
            <router-link
              class="item"
              v-for="(value, name) in value.children"
              :key="name"
              :to="value.to"
              >{{ value.title }}</router-link
            >
          </template>
        </div>
        <div class="communication">
          <div class="co-title">联系我们</div>
          <div class="item">地址：郑州市中原区T11艺术教育学院</div>
          <div class="item">电话：15937887274</div>
          <div class="item">邮箱：bjt@168.com</div>
        </div>
        <div class="QR-code"></div>  
      </div>
    </div>
    <div class="footer-message">
      <div class="message-box box-1">
        <div class="message">增殖电信业务经营许可证：京ICP证120107号</div>
        <div class="message">京公网安备：11010502015324</div>
      </div>
      <div class="message-box box-2">
        <div class="message">网络文化经营许可证：京网文 [2017] 9364-1070号</div>
        <div class="message">京公网安备：11010502015324</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
  data() {
    return {}
  },
  computed: {
    nav() {
      return this.$store.state.nav
    }
  }
}
</script>
<style scoped>
.footer .footer-bar {
  display: flex;
  padding: 0 15%;
  background-color: var(--main-color);
  align-items: center;
}
.logo {
  flex: none;
  width: 150px;
  height: 95px;
}
.footer-nav-box {
  display: flex;
  flex: 1;
  margin-left: 10px;
}
.footer-nav {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  align-items: center;
}
.footer-nav .title {
  font-size: 18px;
  padding: 10px 0;
}
.footer-nav .item {
  color: #fff;
  font-size: 14px;
  padding-top: 5px;
}
.footer-nav .title:hover,
.footer-nav .item:hover {
  color: var(--sub-color);
}
.communication {
  display: flex;
  color: #fff;
  flex-direction: column;
  flex: 1;
  padding: 20px;
}
.communication .co-title {
  font-size: 18px;
  padding: 10px 0;
}
.communication .item {
  font-size: 12px;
  padding-top: 5px;
}
.QR-code {
  width: 100px;
  height: 100px;
  background-color: #fff;
  align-self: center;
  margin: 0 20px;
}
.footer-message {
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: rgb(51, 51, 51);
  color: rgb(251, 251, 251);
  font-size: 14px;
}
.message-box {
  display: flex;
  flex-direction: column;
}
.message-box.box-1 {
  align-items: flex-end;
  margin-right: 80px;
}
.message-box .message {
  margin: 5px;
}
</style>

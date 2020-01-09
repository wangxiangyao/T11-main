<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="../assets/logo.png" alt="T11" />
    </div>
    <div class="nav-box">
      <div class="nav-item" v-for="(value, name) in nav" :key="name">
        <router-link class="nav" :to="value.router.path">{{
          value.title
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  computed: {
    nav() {
      return this.$store.state.nav;
    }
  }
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  padding: 0 15%;
  background-color: rgba(0, 0, 0, 0.7);
}
.nav-box {
  display: flex;
  flex: none;
}
.nav-item {
  display: flex;
  justify-content: center;
  width: 150px;
}
.nav {
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 20px 10px;
  width: 100px;
}
.nav.router-link-active {
  background-color: var(--main-color);
}
.nav:hover {
  background-color: var(--main-color);
}
.logo {
  display: flex;
  flex: auto;
  padding: 5px;
}
</style>

<template>
  <div class="normal-title">
    <div class="title">{{ title }}</div>
    <div class="sub-title">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: "normalTitle",
  props: ["title", "subTitle", "color"]
};
</script>
<style scoped>
.normal-title {
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.normal-title .title {
  color: #666;
  font-size: 25px;
}
.normal-title .sub-title {
  font-size: 20px;
}
</style>

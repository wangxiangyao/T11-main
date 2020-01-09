<template>
  <div class="normal-content">
    <p class="content" v-for="(value, key) in content" :key="key">
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  name: "normalContent",
  props: ['content']
  
};
</script>
<style scoped>
.normal-content .content {
    margin: 15px 12%;
    text-align: justify;
    line-height: 40px; 
    text-indent: 40px;
  }
</style>

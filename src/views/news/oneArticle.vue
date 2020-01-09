<template>
  <div class="oneArticle">
    <myArticle v-if="!article.isLoading" :article="article" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import myArticle from "../../components/Article";
export default {
  name: "oneArticle",
  props: ["id", "sort"],
  data() {
    return {};
  },
  methods: {
    ...mapActions("article", ["getArticleById"])
  },
  computed: {
    article() {
      return this.$store.state.article[this.sort].list[this.id];
    }
  },
  beforeMount() {
    this.getArticleById({ sort: this.sort, id: this.id });
  },
  components: {
    myArticle
  }
};
</script>
<style scoped></style>

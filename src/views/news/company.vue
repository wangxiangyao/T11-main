<template>
  <div class="company">
    <div class="list" v-if="isList && !company.isLoading">
      <div class="item" v-for="(item, key) in articleList" :key="key">
        <articleBreviary :article="item" />
      </div>
      <div class="pagenation-box">
        <el-pagination
          layout="prev, pager, next"
          :page-size="4"
          :total="company.total"
          :current-page="company.page + 1"
          @current-change="currentChange"
        >
        </el-pagination>
      </div>
    </div>
    <div class="one" v-else-if="!isList">
      <oneArticle :id="theArticleId" sort="company" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import articleBreviary from "../../components/ArticleBreviary";
import oneArticle from "./oneArticle";

export default {
  name: "company",
  methods: {
    ...mapActions("article", ["getArticleList"]),
    currentChange(page) {
      this.getArticleList({
        sort: "company",
        page: page - 1
      });
    }
  },
  computed: {
    ...mapState("article", ["company"]),
    isList() {
      return this.$route.name == "companyById" ? false : true;
    },
    theArticleId() {
      if (this.isList) {
        return 0;
      } else {
        return this.$route.params.id;
      }
    },
    articleList() {
      let list = [];
      return this.company.listByPage[this.company.page].map(id => {
        return this.company.list[id];
      });
    }
  },
  components: {
    articleBreviary,
    oneArticle
  }
};
</script>
<style scoped>
.company .list {
  margin: 40px;
}
.pagenation-box {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
</style>

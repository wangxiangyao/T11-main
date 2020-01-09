<template>
  <div class="activity">
    <div class="list" v-if="isList && !activity.isLoading">
      <div class="item" v-for="(item, key) in articleList" :key="key">
        <articleBreviary :article="item" />
      </div>
      <div class="pagenation-box">
        <el-pagination
          layout="prev, pager, next"
          :page-size="4"
          :total="activity.total"
          :current-page="activity.page + 1"
          @current-change="currentChange"
        >
        </el-pagination>
      </div>
    </div>
    <div class="one" v-else-if="!isList">
      <oneArticle :id="theArticleId" sort="activity" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

import articleBreviary from "../../components/ArticleBreviary";
import oneArticle from "./oneArticle";

export default {
  name: "activity",
  methods: {
    ...mapActions("article", ["getArticleList"]),
    currentChange(page) {
      this.getArticleList({
        sort: "activity",
        page: page - 1
      });
    }
  },
  computed: {
    ...mapState("article", ["activity"]),
    isList() {
      return this.$route.name == "activityById" ? false : true;
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
      return this.activity.listByPage[this.activity.page].map(id => {
        return this.activity.list[id];
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
.activity .list {
  margin: 40px;
}
.pagenation-box {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
</style>

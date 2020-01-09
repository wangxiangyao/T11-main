<template>
  <div class="myArticle">
    <div class="left">
      <div class="bg">
        <img class="bg-img" src="../assets/news-main-bg.png" alt="" />
      </div>
      <div class="message">
        <div class="sort">
          <i class="iconfont icon-shuqian"></i>
          <div class="sort-name">
            {{ article.sort == 2 ? "活动\n新闻" : "公司\n新闻" }}
          </div>
        </div>
        <div class="date">
          <div class="month">{{ month }}</div>
          <div class="grip">月</div>
          <div class="day">{{ day }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="article-title">
        <div class="logo">
          T11
        </div>
        <div class="caption">
          {{ article.title }}
        </div>
      </div>
      <div class="article-content" v-html="article.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myArticle",
  props: ["article"],
  computed: {
    month() {
      let month = new Date(this.article.time).getMonth() + 1;
      if (month < 10) {
        return `0${month}`;
      } else {
        return `${month}`;
      }
    },
    day() {
      let day = new Date(this.article.time).getDate();
      if (day < 10) {
        return `0${day}`;
      } else {
        return `${day}`;
      }
    }
  }
};
</script>
<style scoped>
.myArticle {
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
}
.myArticle .left {
  position: relative;
  max-width: 250px;
  flex: none;
  align-self: flex-start;
}
.myArticle .left .bg {
  display: flex;
}
.myArticle .left .bg .bg-img {
  width: 100%;
}
.myArticle .left .message {
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.myArticle .left .sort {
  display: flex;
  background-color: var(--main-color);
  color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
}
.myArticle .left .date {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
.myArticle .left .icon-shuqian {
  color: var(--sub-color);
  position: absolute;
  top: -1px;
  font-size: 25px;
}
.myArticle .left .sort .sort-name {
  font-size: 20px;
  white-space: pre-line;
}
.myArticle .left .date .month {
  font-size: 30px;
}
.myArticle .left .date .day {
  font-size: 13px;
}
.myArticle .left .date .grip {
  font-size: 12px;
}

/* 右侧文章内容样式 */
.myArticle .right {
  margin-left: 40px;
}
.myArticle .right .article-title {
  display: flex;
  font-size: 16px;
  font-weight: bold;
}
.myArticle .right .article-title .logo {
  padding-right: 10px;
  margin-right: 10px;
  font-style: italic;
}
.myArticle .right .article-content {
  margin-top: 28px;
}
</style>

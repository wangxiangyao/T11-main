<template>
  <div class="articleBreviary" @click="handleToOneArticleById">
    <div class="left">
      <div class="bg">
        <img src="../assets/news-main-bg.png" alt="" />
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
      <div class="normal" ref="normal">
        <div class="caption-box">
          <div class="logo">
            T11
          </div>
          <div class="caption">
            {{ article.title }}
          </div>
        </div>
        <div class="digest">
          {{ article.digest }}
        </div>
        <div class="more" ref="more">查看更多 ></div>
      </div>
      <div class="active">
        <div class="caption-box" :style="{ width }">
          <div class="logo">
            T11
          </div>
          <div class="caption" :style="{ width }">
            {{ article.title }}
          </div>
        </div>
        <div class="digest" :style="{ width }">
          {{ article.digest }}
        </div>
        <div class="more" :style="{ width: moreWidth }">查看更多 ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "articleBreviary",
  props: {
    article: Object
  },
  data() {
    return {
      width: `0px`,
      moreWidth: `0px`
    };
  },
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
  },
  mounted() {
    this.getWidth();
    this.$EventBus.$on("resize", this.getWidth);
  },
  destroyed() {
    this.$EventBus.$off("resize", this.getWidth);
  },
  methods: {
    getWidth() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.width = `${this.$refs.normal.clientWidth - 118}px`;
          this.moreWidth = `${this.$refs.more.clientWidth + 4}px`;
        }, 150);
        setTimeout(() => {
          this.width = `${this.$refs.normal.clientWidth - 118}px`;
          this.moreWidth = `${this.$refs.more.clientWidth + 4}px`;
        }, 250);
        setTimeout(() => {
          this.width = `${this.$refs.normal.clientWidth - 118}px`;
          this.moreWidth = `${this.$refs.more.clientWidth + 4}px`;
        }, 500);
      });
    },
    handleToOneArticleById() {
      this.$router.push(`${this.$route.path}/${this.article.id}`);
    }
  }
};
</script>
<style scoped>
.articleBreviary {
  display: flex;
  margin-top: 30px;
}
.articleBreviary:hover {
  cursor: pointer;
}
.articleBreviary .left {
  position: relative;
}
.articleBreviary .left .bg {
  display: flex;
}
.articleBreviary .left .message {
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.articleBreviary .left .sort {
  display: flex;
  background-color: var(--main-color);
  color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
}
.articleBreviary .left .date {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
.articleBreviary .left .icon-shuqian {
  color: var(--sub-color);
  position: absolute;
  top: -1px;
  font-size: 30px;
}
.articleBreviary .left .sort .sort-name {
  font-size: 40px;
  white-space: pre-line;
}
.articleBreviary .left .date .month {
  font-size: 60px;
}
.articleBreviary .left .date .day {
  font-size: 26px;
}
.articleBreviary .left .date .grip {
  font-size: 24px;
}

/* 右侧新闻摘要样式 */
.articleBreviary .right {
  position: relative;
  flex: 1;
}
.articleBreviary .right .active {
  position: absolute;
  top: 0;
  background-color: var(--main-color);
  color: #fff;
  overflow: hidden;
  flex-wrap: nowrap;
}
.articleBreviary .right .active {
  display: none;
}
.articleBreviary:hover .right .active .more {
  box-sizing: border-box;
  background-color: var(--sub-color);
}
.articleBreviary .right .normal {
  box-sizing: border-box;
  flex: 1;
}
.articleBreviary .right .normal,
.articleBreviary:hover .right .active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.articleBreviary .right .caption-box,
.articleBreviary .right .more {
  margin-left: 100px;
  margin-right: 20px;
}
.articleBreviary .right .caption-box {
  display: flex;
  font-size: 18px;
}
.articleBreviary .right .caption-box .logo {
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid #000;
}
.articleBreviary .right .active .caption-box .logo {
  border-right: 1px solid #fff;
}
.articleBreviary .right .digest {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: justify;
  font-size: 14px;
  margin: 40px 20px 40px 100px;
}
.articleBreviary .right .more {
  padding: 3px 10px;
  border: 1px solid var(--sub-color);
  align-self: flex-start;
  font-size: 14px;
}

.articleBreviary:hover .right .active {
  animation: out 0.5s;
}
.articleBreviary .left .sort,
.articleBreviary .left .date {
  transition: opacity 1s;
  opacity: 1;
}
.articleBreviary:hover .left .sort,
.articleBreviary:hover .left .date {
  transition: opacity 1s;
  opacity: 0;
}

@keyframes out {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes in {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>

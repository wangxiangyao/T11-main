<template>
  <div class="about-more margin-15p">
    <normalTitle title="公司介绍" subTitle="Company introduction"></normalTitle>
    <normalContent :content="ep"></normalContent>
  </div>
</template>
<script>
import normalTitle from "../../components/NormalTitle";
import normalContent from "../../components/NormalContent";
export default {
  name: "aboutMore",
  data() {
    return {
      ep: [
        "河南T11艺术教育学校创立于2018年，是国内首家艺术教育机构综合体，由国内知名互联网公司、上市公司管理层、金融行业精英发起创立，获得  国内IDJ资本、T腾讯资本、宏泰基金等多家投资机构的高度关注和倾力支持，并和国内多家上市公司、知名教育品牌结成战略联盟。",
        "致力于以“教育资源下沉、教育生源上行”的发展核心，通过商业地产资源整合，深刻解决上游教育机构拓店周期、开店成本、招生压力、管理运营乏力等痛点，同时解决下游孩子家长试错成本、路途周转、质量监督、级别晋升等痛点。为上游机构塑造品牌，提升质量，减负发展提供助力，为下游孩子家长提高教育投资性价比。最终形成集线下、商业、媒体、线上为一体的全新形式的教育机构，打造全国一线教育连锁综合体品牌。",
        "T11艺术教育平台致力于打造全国少儿艺术教育生态圈，让三四线城市的孩子享受一线城市的教育。"
      ]
    }
  },
  components: {
    normalTitle,
    normalContent
  },
  
};
</script>
<style lang="stylus" scoped>
.about-more
  margin-bottom: 60px
</style>

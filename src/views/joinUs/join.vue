<template>
  <div class="join">
    <div class="box margin-15p">
      <normalTitle title="加盟优势" subTitle="Alliance advantage" />
      <normalContent :content="ep[0]"></normalContent>
    </div>
    <div class="box condition-box">
      <div class="condition-content">
        <div class="bg-full">
          <img class="full" src="../../assets/bg-header.png" alt="">
        </div>
        <div class="condition margin-15p">
          <div class="condition-title">
            <div class="title" >加盟条件</div>
            <div class="sub-title" >Conditions for entry</div>
          </div>
          <div class="item">
            <div class="ract"></div>
          </div>
          <div class="item">
            <div class="ract"></div>
          </div>
          <div class="item">
            <div class="ract"></div>
          </div>
          <div class="item">
            <div class="ract"></div>
          </div>
          <div class="item">
            <div class="ract"></div>
          </div>
          <div class="item">
            <div class="ract"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="box apply-box margin-15p">
      <normalTitle title="加盟申请" subTitle="Application for entry" />
      <div class="apply-form">
        <p class="alert">
          留下联系方式，我们会有专业的加盟顾问与您联系，一对一为您详细介绍具体服务，帮您更高效的完成入驻
        </p>
        <el-form  ref="form" :model="applyForm" label-width="100px">
          <el-form-item label="联系人姓名">
            <el-input v-model="applyForm.customerName"></el-input>
          </el-form-item>
          <el-form-item label="联系人电话">
            <el-input v-model="applyForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="加盟地址">
            <el-input v-model="applyForm.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" type="primary" @click="onSubmit">立即申请</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="box contact-box margin-15p">
      <normalTitle title="联系我们" subTitle="Contact US" />
      <div class="contact">
        <div class="liaison">
          <img class="liaison-avator" src="../../assets/zhangfeng-avator.png" alt="">
          <span class="item name">张峰</span>
          <span class="position item">招商经理</span>
          <span class="phone-number item">电话：123456789</span>
          <span class="weChat item">微信：546-3213</span>
          <span class="mailbox item">邮箱：123456798@qq.com</span>
        </div>
        <div class="liaison">
          <img class="liaison-avator" src="../../assets/zhangfeng-avator.png" alt="">
          <span class="item name">张峰</span>
          <span class="position item">招商经理</span>
          <span class="phone-number item">电话：123456789</span>
          <span class="weChat item">微信：546-3213</span>
          <span class="mailbox item">邮箱：123456798@qq.com</span>
        </div>
        <div class="liaison">
          <img class="liaison-avator" src="../../assets/zhangfeng-avator.png" alt="">
          <span class="item name">张峰</span>
          <span class="position item">招商经理</span>
          <span class="phone-number item">电话：123456789</span>
          <span class="weChat item">微信：546-3213</span>
          <span class="mailbox item">邮箱：123456798@qq.com</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import normalTitle from '../../components/NormalTitle';
import normalContent from "../../components/NormalContent"
import api from "../../API/API"
export default {
  name: "join",
  components: {
    normalTitle,
    normalContent
  },
  data() {
    return {
      ep: [
        [
          "T11艺术教育学院，是省内首家下沉式少儿艺术教育综合体，专注于少儿综合素质教育提升，旨在整合一线艺术教育资源，将一线资源下沉至三四线城市，让更多的适龄儿童接受到优质的、公平的教育机会，让更多的孩子有机会拥有丰富多彩的人生。",
          "T11艺术教育学院，是省内首家下沉式少儿艺术教育综合体，专注于少儿综合素质教育提升，旨在整合一线艺术教育资源，将一线资源下沉至三四线城市，让更多的适龄儿童接受到优质的、公平的教育机会，让更多的孩子有机会拥有丰富多彩的人生。",
          "T11艺术教育学院，是省内首家下沉式少儿艺术教育综合体，专注于少儿综合素质教育提升，旨在整合一线艺术教育资源，将一线资源下沉至三四线城市，让更多的适龄儿童接受到优质的、公平的教育机会，让更多的孩子有机会拥有丰富多彩的人生。",
        ]
      ],
      applyForm: {
        customerName: '',
        phone: '',
        address: '',
        customerType: 2,
      }
    }
  },
  methods: {
    onSubmit() {
      api.postCustomer(this.applyForm)
    }
  }
};
</script>
<style lang="stylus" scoped>
  .margin-15p
    margin 0 15%
  .join
    .box
      .content
        margin-top 0
        margin-bottom 10px
        text-align center
    .condition-box .condition-content
      position relative
      .bg-full
        display flex
        .full
          width 100%
    .condition-box
      margin-top 40px
    .condition
      display flex
      flex-wrap wrap
      justify-content center
      align-items center
      position absolute
      top 0
      width 70%
      height 100%
      .condition-title 
        color #fff
        width: 100%;
        padding-top: 10px
        padding-bottom 0
        display: flex;
        flex-direction: column;
        align-items: center;
        .title
          font-size 25px
        .sub-title
          font-size 20px
      .item
        flex 1 1 33%
        display flex
        justify-content center
        .ract
          width: 35%
          background-color #fff
          &:after
            content: '';
            display: block;
            padding-top: 100%;
    .apply-box
      display flex
      flex-direction column
      align-items center
    .apply-form
      display flex
      flex-direction column
      align-items center
      margin-top: 40px;
      padding: 40px 100px
      box-shadow 0 8px 8px rgba(10,16,20,.24),0 0 8px rgba(10,16,20,.12)
      .alert
        margin 20px 0
        color var(--main-color)
        font-size 14px
      .el-form
        width 650px
      .submit
        width 100%
        font-size: 18px;
    .contact-box
      margin-bottom 80px
      .contact
        display flex
        justify-content space-around
      .liaison
        display flex
        flex-direction column
        align-items center
        font-size 16px
        .liaison-avator
          width 150px
          height 150px
        .name.item
          font-weight bold
          margin-top: 20px
        .item
          margin-top: 10px
</style>

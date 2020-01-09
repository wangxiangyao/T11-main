<template>
  <div class="organization">
    <div class="box margin-15p">
      <normalTitle title="入驻优势" subTitle="Occupying advantage" />
      <p class="content">
        <b>位置：</b>我们位于大学路政通路东北角；紧邻城区主干道；拥有得天独厚展示面的黄金“咖位”
      </p>
      <p class="content">
        <b>房租支持：</b>3500平米校区，免费试用 装修
      </p>
      <p class="content">
        <b>装修支持：</b>郑州大学设计院专业设计，良好的的工作环境，我们免费提供
      </p>
      <p class="content">
        <b>招生支持：</b>60人专职团队，全年提供招生服务
      </p>
      <p class="content">
        <b>团队支持：</b>专业的运营团队，帮您解决招生对接、活动协调、机构互动、家长接待、日常疑难等一系列问题
      </p>
      <p class="content">
        <b>线上支持：</b>我们有专属的APP，提供机构日常管理、线上客户交流以及品牌知名度的推广
      </p>
      <p class="content">
        <b>发展支持：</b>团队有我、资金有我、资源有我、未来不再“孤军奋战”
      </p>
      <p class="content">
        T11，我们一起
      </p>
    </div>
    <div class="box condition-box">
      
      <div class="condition-content">
        
        <div class="bg-full">
          <img class="full" src="../../assets/bg-header.png" alt="">
        </div>
        <div class="condition margin-15p">
          <div class="condition-title">
            <div class="title" >入驻条件</div>
            <div class="sub-title" >Conditions for entry</div>
          </div>
          <p class="content">
            <b>位置：</b>我们位于大学路政通路东北角；紧邻城区主干道；拥有得天独厚展示面的黄金“咖位”
          </p>
          <p class="content">
            <b>房租支持：</b>3500平米校区，免费试用 装修
          </p>
          <p class="content">
            <b>装修支持：</b>郑州大学设计院专业设计，良好的的工作环境，我们免费提供
          </p>
          <p class="content">
            <b>招生支持：</b>60人专职团队，全年提供招生服务
          </p>
          <p class="content">
            <b>团队支持：</b>专业的运营团队，帮您解决招生对接、活动协调、机构互动、家长接待、日常疑难等一系列问题
          </p>
          <p class="content">
            <b>线上支持：</b>我们有专属的APP，提供机构日常管理、线上客户交流以及品牌知名度的推广
          </p>
          <p class="content">
            <b>发展支持：</b>团队有我、资金有我、资源有我、未来不再“孤军奋战”
          </p>
          <p class="content">
            T11，我们一起
          </p>
        </div>
      </div>
    </div>
    <div class="box apply-box margin-15p">
      <normalTitle title="入驻申请" subTitle="Application for entry" />
      <div class="apply-form">
        <p class="alert">
          留下联系方式，我们会有专业的入驻顾问与您联系，一对一为您详细介绍具体服务，帮您更高效的完成入驻
        </p>
        <div class="form-list">
          <el-form ref="form" :model="applyForm" label-width="100px">
            <el-form-item label="联系人姓名">
              <el-input v-model="applyForm.customerName" :maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="联系人电话">
              <el-input v-model="applyForm.phone" :maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="机构名称">
              <el-input v-model="applyForm.organization" :maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="机构地址">
              <el-input v-model="applyForm.address"
                type="textarea"
                :maxlength="100"
                :show-word-limit="true"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="submit" type="primary" @click="onSubmit">立即申请</el-button>
            </el-form-item>
          </el-form>
        </div>
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
import api from '../../API/API';

export default {
  name: "organization",
  components: {
    normalTitle,
  },
  data() {
    return {
      ep: [
        {
          title: "入驻优势",
          subTitle: "Occupying advantage",
          content:[
            
          ]
        }
      ],
      applyForm: {
        customerName: '',
        phone: '',
        organization: '',
        address: '',
        customerType: 1
      }
    }
  },
  methods: {
    onSubmit() {
      for (let [k, v] of Object.entries(this.applyForm)) {
        if (typeof v == "string" && v.trim() == '') {
          this.$message.error("值不能为空")
          return
        }
      }
      api.postCustomer(this.applyForm)
        .then((data) => {
          if (data.data.status == 1) {
            this.$message.success("申请成功")
          } else {
            this.$message.error("失败")
          }
        })
        .catch((err) => {
          this.$message.error("失败：" + err)
        })
    }
  }
};
</script>
<style lang="stylus" scoped>
  .margin-15p
    margin 0 15%
  .organization
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
      .content
        color: #fff;
    .condition-box
      margin-top 40px
    .condition
      display flex
      flex-direction column
      flex-wrap wrap
      justify-content flex-start
      position absolute
      top 0
      width 70%
      height 100%
      box-sizing border-box
      padding-top:  40px
      .content
        margin-top: 20px
      .condition-title 
        color #fff
        width: 100%;
        padding-top: 10px
        padding-bottom 40px
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

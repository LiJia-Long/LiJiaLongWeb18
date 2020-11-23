<template>
  <div id="app">
    <Tou title="会话评价"></Tou>
    <div class="cont">
      <div class="right2">
        <p>预览</p>
        <p>请对客服的服务质量做出评价<br><el-rate v-model="value1"></el-rate></p>
        <p>
            <el-input
              style="width: 300px;margin-left:30px;margin-top:30px"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
          </p>
          <p class="btn1">
            <el-button type="primary" @click="open()">保存</el-button>
          </p>
      </div>
      <div class="right1">
        <div class="right1-1">
          <p>会话评价</p>
          <p class="p1">邀请用户对客服进行评价，让企业客观了解自己的服务质量</p>
          <p>
            人工客服是否解决问题
            <el-switch
              v-model="value4"
              active-color="#006eff"
              inactive-color="#cccccc"
            >
            </el-switch>
          </p>
          <p class="p1">
            开启此功能后，在人工客服满意度评价页显示是否解决问题选项，帮助统计客服解决问题的能力。
          </p>
          <p>
            结束对话时系统自动邀请评价
            <el-switch
              v-model="value5"
              active-color="#006eff"
              inactive-color="#cccccc"
            >
            </el-switch>
          </p>
          <p>设置邀请评价文案</p>
          <p>
            <el-input
              style="width: 400px"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
          </p>
          <p class="btn">
            <el-button type="primary" @click="open()">保存</el-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu810",
  components: {
    Tou,
  },
  data() {
    return {
      value4: true,
      value5: true,
      value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  
    };
  },
  methods: {
    open() {
      this.$message({
        message: "保存成功",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
.cont {
  float: right;
  margin-left: 70px;
  background: #e6f1ff;
  width: 1295px;
  margin-top: 60px;
}
.right1 {
  background: #ffffff;
  width: 660px;
  float: right;
  margin-top: 10px;
  margin-left: 10px;
  height: 600px;
}
.right1 p {
  line-height: 60px;
}
.right2 {
  background: #ffffff;
  width: 350px;
  float: right;
  margin-top: 10px;
  height: 600px;
  margin-left: 10px;
}
.p1 {
  color: #999999;
  font-size: 14px;
}
.right1-1 {
  padding: 20px;
}
.right2 p:nth-of-type(1) {
  padding: 40px;
}
.right2 p:nth-of-type(2) {
  text-align: center;
  line-height: 60px;
}
.btn1{
    text-align: center;
    margin: 50px 0px;
}
</style>
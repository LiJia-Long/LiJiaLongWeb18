<template>
  <div id="app">
    <Tou title="新增客服信息"></Tou>
    <div class="cont">
      <div class="right">
        <div class="p">
          <p>新增客服信息</p>
          <hr style="width: 990px; border: 1px solid #dedede" />
          <p>
            <span>上传头像:</span
            ><img src="../assets/img/9.png" align="center" /><img
              src="../assets/img/10.png"
              align="center"
            />
          </p>
          <p>
            <span>*邮箱地址</span>
            <input type="text" placeholder="该邮箱将作为客服人员的登录账号" />
          </p>
          <p>
            <span>*客服昵称</span> <input type="text" placeholder="与外部客户沟通时使用" />
          </p>
          <p><span>*真实姓名</span> <input type="text" placeholder="请输入" /></p>
          <p>
            <span>客服工号 </span> <input type="text" placeholder="请输入" />
          </p>
          <p>
            <span>客服手机号码</span> <input type="text" placeholder="请输入" />
          </p>
          <hr style="width: 990px; border: 1px solid #dedede" />
          <p>密码设置</p>
          <p>
            <span>原密码</span> <input type="text" placeholder="请输入原密码" />
          </p>
          <p>
            <span>新密码</span> <input type="text" placeholder="请输入新密码" />
          </p>
          <p>
            <span>确认新密码</span>
            <input type="text" placeholder="请再次输入密码" />
          </p>
          <router-link to="/Zu83" tag="p" class="s">
              <el-button>取消并返回</el-button>
          </router-link>
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
  name: "Zu83-1",
  components: {
    Tou,
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
.right {
  background: #ffffff;
  width: 1020px;
  float: right;
  margin-top: 10px;
  margin-left: 10px;
}
.p p {
  text-align: left;
  padding: 20px;
  line-height: 40px;
}
.p span {
  color: #999999;
}
.p {
  width: 500px;
  float: left;
  padding-left: 20px;
}
.p img {
  padding: 0px 30px;
}
.p img:nth-of-type(1) {
  padding-left: 80px;
}
.right input {
  float: right;
  height: 40px;
  border: none;
  background: #dedede;
  width: 300px;
  text-indent: 10px;
}
.s{
    float: left;
}
.btn{
    float: left;
}
</style>
<template>
  <div id="app">
    <Tou title="自动回复"></Tou>
    <div class="cont">
      <div class="right">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
        <div class="di">
          <p>
            机器人欢迎消息
            <el-switch
              v-model="value"
              active-color="#006eff"
              inactive-color="#cccccc"
            >
            </el-switch>
          </p>
          <p class="p">每段对话开启时，系统将自动向顾客发送一段欢迎语</p>
          <p>
            <el-input
              style="width: 400px; margin: 10px"
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
        <div class="di">
          <p>
            机器人欢迎消息
            <el-switch
              v-model="value2"
              active-color="#006eff"
              inactive-color="#cccccc"
            >
            </el-switch>
          </p>
          <p class="p">每段对话开启时，系统将自动向顾客发送一段欢迎语</p>
          <p>
            <el-input
              style="width: 400px; margin: 10px"
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
        <div class="di">
          <p>
            机器人欢迎消息
            <el-switch
              v-model="value3"
              active-color="#006eff"
              inactive-color="#cccccc"
            >
            </el-switch>
          </p>
          <p class="p">每段对话开启时，系统将自动向顾客发送一段欢迎语</p>
          <p>
            <el-input
              style="width: 400px; margin: 10px"
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
  name: "Zu86",
  components: {
    Tou,
  },
  data() {
    return {
      activeName: "first",
      value: true,
      value2: true,
      value3: true,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
  background: #e6f1ff;
  width: 1295px;
  margin-top: 60px;
}
.right {
  float: right;
  width: 1000px;
  background: #ffffff;
  margin-top: 10px;
  margin-left: 50px;
  padding: 15px;
}
.p {
  color: #999999;
  font-size: 13px;
}
.btn {
  margin: 20px;
}
</style>
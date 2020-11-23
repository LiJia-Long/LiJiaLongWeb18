<template>
  <div id="app">
    <Tou title="基础设置"></Tou>
    <div class="cont">
      <div class="right">
        <p>
          通知工单创建人
          <el-switch
            v-model="value"
            active-color="#006eff"
            inactive-color="#cccccc"
          >
          </el-switch>
        </p>
        <p class="p1">工单被更新时，同步通知工单创建人</p>
        <hr />
        <p>
          自动接单状态
          <el-switch
            v-model="value2"
            active-color="#006eff"
            inactive-color="#cccccc"
          >
          </el-switch>
        </p>
        <p class="p1">关闭时，将不会分配给您工单。</p>
        <hr />
        <p>
          工单回复可见范围
          <el-radio v-model="radio" label="1">仅客服可见</el-radio>
          <el-radio v-model="radio" label="2">所有人可见</el-radio>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu818",
  components: {
    Tou,
  },
  data() {
    return {
      radio: 1,
      value: true,
      value2: true,
    };
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
  padding: 15px;
}
.right hr {
  margin: 20px 0px;
}
.right p {
  margin: 20px 0px;
}
.p1 {
  color: #999999;
  font-size: 14px;
}
</style>
<template>
  <div id="app">
    <Tou title="对话规则"></Tou>
    <div class="cont">
      <div class="right">
        <p>
          自动结束会话
          <el-switch
            v-model="value"
            active-color="#006eff"
            inactive-color="#cccccc"
          >
          </el-switch>
        </p>
        <p class="p1">
            超过 <span class="p2">20</span> 分钟无响应时自动发送
        </p>
        <hr>
        <p>
          访客离线自动结束对话
          <el-switch
            v-model="value2"
            active-color="#006eff"
            inactive-color="#cccccc"
          >
          </el-switch>
        </p>
        <p  class="p1">
            访客离线超过 <span class="p2">20</span> 秒自动结束对话
        </p>
        <hr>
        <p>
          客服离线自动转接
          <el-switch
            v-model="value3"
            active-color="#006eff"
            inactive-color="#cccccc"
          >
          </el-switch>
        </p>
        <p class="p1">
            正常对话过程中如顾客发送消息时客服已离线，则对话将被自动转接给在线的客服
        </p>
        <p  class="p1">
            访客发送消息后 <span class="p2">20</span> 秒客服一直没有在线则自动转接
        </p>
        <hr>
        <p>
          进入对话窗立即开始对话
          <el-switch
            v-model="value4"
            active-color="#006eff"
            inactive-color="#cccccc"
          >
          </el-switch>
        </p>
        <p  class="p1">
            开启后顾客进入对话窗时客服就会立即接入对话，客服可以主动与顾客沟通。关闭则必须顾客发送首条消息时客服才接入对话
        </p>
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
      value: true,
      value2: true,
      value3: true,
      value4: true
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
.right hr{
  margin: 20px 0px;
}
.right p{
  margin: 20px 0px;
}
.p1{
    color: #999999;
    font-size: 14px;
}
.p2{
    color: black;
    padding: 10px;
    background: #d4d4d4;
    line-height: 50px;
}
</style>
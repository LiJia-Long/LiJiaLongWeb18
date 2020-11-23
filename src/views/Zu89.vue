<template>
  <div id="app">
    <Tou title="分配规则"></Tou>
    <div class="cont">
      <div class="right">
        <p>基础分配</p>
        <div class="an">
          <div>
            <el-radio v-model="radio" label="1">
              <span>按排序轮流分配</span><br />
              <span style="float: right; text-indent: 23px"
                >设定一个客服排序, 新的对话按此排序, 在可分配的客服间轮流分配,
                从排序最靠前的开始</span
              >
            </el-radio>
          </div>
          <hr style="border: 1px solid #dedede" />
          <div>
            <el-radio v-model="radio" label="2">
              <span>按排序优先分配</span><br />
              <span style="float: right; text-indent: 23px"
                >设定一个客服排序, 优先给排序靠前的客服分配到对话数量上限,
                才会分配给排序下一位的客服</span
              >
            </el-radio>
          </div>
          <hr style="border: 1px solid #dedede" />
          <div>
            <el-radio v-model="radio" label="3">
              <span>按平均分配</span><br />
              <span style="float: right; text-indent: 23px"
                >根据每位客服的对话量维持一个平均的工作量分配。</span
              >
            </el-radio>
          </div>
        </div>
        <div class="an2">
          <p></p>
          <p>
            回头客分配
            <el-switch
              v-model="value3"
              active-color="#006eff"
              inactive-color="#cccccc"
            >
            </el-switch>
          </p>
          <p class="p1">
            开启后顾客进入对话窗时客服就会立即接入对话，客服可以主动与顾客沟通。关闭则必须顾客发送首条消息时客服才接入对话
          </p>
          <p>
            客户排队超时优先
            <el-switch
              v-model="value4"
              active-color="#006eff"
              inactive-color="#cccccc"
            >
            </el-switch>
          </p>
          <p class="p1">
            开启后顾客进入对话窗时客服就会立即接入对话，客服可以主动与顾客沟通。关闭则必须顾客发送首条消息时客服才接入对话
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu89",
  components: {
    Tou,
  },
  data() {
    return {
      radio: "1",
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
}
.right:nth-of-type(1) {
  padding-left: 30px;
  padding-top: 20px;
  font-size: 20px;
}
.an {
  background: #f3f8ff;
  margin-top: 20px;
}
.an div {
  text-align: left;
  line-height: 80px;
}
.p1 {
  color: #999999;
  font-size: 14px;
}
.an2{
    margin-top: 20px;
}
.an2 p{
  margin: 20px 0px;
  font-size: 14px;
}
</style>
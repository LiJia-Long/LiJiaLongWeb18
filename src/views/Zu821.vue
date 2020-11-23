<template>
  <div id="app">
    <Tou title="消息通知"></Tou>
    <div class="cont">
      <div class="right">
        <div class="dao" @click="qk">清空所有记录</div>
        <div class="an" >
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="系统消息" name="first">
            <div v-show="aaa">
              <p class="zi">
                <span class="zi1">账户即将到期提醒</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">系统将于3天后到期，请尽快续费，以免影响您正常使用。</span>
            </p>
            <hr style="border:1px solid #dedede">
            <p class="zi">
                <span class="zi1">账户即将到期提醒</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">系统将于3天后到期，请尽快续费，以免影响您正常使用。</span>
            </p>
             <hr style="border:1px solid #dedede">
            <p class="zi">
                <span class="zi1">账户即将到期提醒</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">系统将于3天后到期，请尽快续费，以免影响您正常使用。</span>
            </p>
             <hr style="border:1px solid #dedede">
            <p class="zi">
                <span class="zi1">账户即将到期提醒</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">系统将于3天后到期，请尽快续费，以免影响您正常使用。</span>
            </p>
            <hr style="border:1px solid #dedede">
            </div>
            
          </el-tab-pane>
          <el-tab-pane label="通知公告" name="second">
            <div v-show="aaa">
              <p class="zi">
                <span class="zi1">产品上新通知</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span>
            </p>
            <hr style="border:1px solid #dedede">
            <p class="zi">
                <span class="zi1">产品上新通知</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span>
            </p>
             <hr style="border:1px solid #dedede">
            <p class="zi">
                <span class="zi1">产品上新通知</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span>
            </p>
             <hr style="border:1px solid #dedede">
           <p class="zi">
                <span class="zi1">产品上新通知</span><span class="zi2">2020/09/09 10:55</span><br>
                <span class="zi3">WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span>
            </p>
            </div>
            
          </el-tab-pane>
        </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu821",
 
  components: {
    Tou,
  },
  data() {
    return {
      activeName: "first",
       aaa:true,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    
    qk() {
      this.$confirm(
        "消息清空后无法恢复，确定清空所有消息吗？",
        "清空确认",
        {
          confirmButtonText: "确定",
          type: "warning",
        }
      ).then(() => {
        this.$message({
          type: "success",
          message: "清空成功!",
        });
        this.aaa=false;
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
  float: right;
  width: 1020px;
  background: #ffffff;
  margin-top: 10px;
  margin-left: 10px;
  padding: 15px;
}
.dao {
  text-align: center;
  width: 120px;
  border: 1px solid #999999;
  float: right;
  height: 40px;
  line-height: 40px;
  color: #999999;
}
.dao:hover {
  border: 1px solid #006eff;
  color: #006eff;
  cursor: pointer;
}
.an{
  width: 890px;
  float: left;
}
.zi2{
  font-size: 13px;
  padding-left: 10px;
  color: #dedede;
}
.zi3{
  font-size: 14px;
  color: #999999;
}
.zi{
  padding-left: 20px;
  line-height: 50px;
}
</style>
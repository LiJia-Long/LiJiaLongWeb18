<template>
  <div id="app">
    <Tou title="会话"></Tou>
    <div class="cont">
      <div class="div1">
        <p class="p1">当前会话</p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
      </div>

      <div class="div2">
        <div class="tou">
          <div class="left1">
            <span>北京市</span>
            <span> 首次会话 </span>
          </div>
          <div class="right1">
            <p>
                <el-button type="text" @click="dialogFormVisible = true"
              ><i class="el-icon-plus"></i>创建工单</el-button
            >
            <el-dialog title="新建工单" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
            
            </p>
            

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu2",
  components: {
    Tou,
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
};
</script>
<style scoped>
.cont {
  width: 1295px;
  margin-left: 70px;
  background: #e6f1ff;
  margin-top: 60px;
  float: right;
}
.div1 {
  float: left;
  background: #ffffff;
  width: 300px;
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 5px;
}
.p1 {
  padding: 20px;
}
.a {
  width: 115px;
  line-height: 25px;
  padding-left: 0px;
  float: left;
}
.tab .el-button {
  width: 300px;
  border: none;
  height: 70px;
}
.b {
  width: 165px;
  font-size: 10px;
  line-height: 25px;
  float: left;
}
.div2 {
  float: left;
  width: 955px;
  margin-top: 10px;
  margin-left: 10px;
  background: #ffffff;
  height: 600px;
}
.tou {
  width: 100%;
  height: 50px;
  background: red;
  line-height: 50px;
}
.left1 {
  float: left;
  padding-left: 10px;
}
.left1 span:nth-of-type(2) {
  font-size: 10px;
  color: #cccccc;
}
.right1{
    float: right;
}
</style>
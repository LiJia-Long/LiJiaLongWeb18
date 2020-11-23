<template>
  <div id="app">
    <Tou title="新增角色信息"></Tou>
    <div class="cont">
      <div class="right">
        <div class="p">
          <p>新增角色信息</p>
          <hr style="width: 990px; border: 1px solid #dedede" />
          <p>
            <span>*角色名称</span
            ><input type="text" placeholder="请输入角色名称" />
          </p>
          <p>
            <span>角色描述</span>
            <el-input style="width:300px;float:right;height:100px"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </p>
          <hr style="width: 990px; border: 1px solid #dedede" />
        </div>
        <div class="an">
              <div style="width:100%;background:#f3f8ff;clear:both;">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">首页</el-checkbox>
              </div>
              <div>
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
              </div>
          </div>
          <router-link to="/Zu85" tag="p" class="s">
              <el-button>取消并返回</el-button>
          </router-link>
          <p class="btn">
            <el-button type="primary" @click="open()">保存</el-button>
          </p>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
const cityOptions = ['数据概况', '访问量统计', '快捷入口', '客服监控'];
export default {
  name: "Zu85-1",
  components: {
    Tou,
  },
  data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
  methods: {
    open() {
      this.$message({
        message: "保存成功",
        type: "success",
      });
    },
    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
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
.s {
  float: left;
  margin: 20px;
}
.btn {
  float: left;
  margin: 20px;
}
.an{
    width: 980px;
    line-height: 50px;
}
</style>
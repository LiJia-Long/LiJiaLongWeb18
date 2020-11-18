<template>
  <div id="app">
    <Tou title="考勤统计"></Tou>
    <div class="cont">
      <div class="cont-left">
        <p class="p1">在线客服</p>
        <p class="tab">
          <el-button slot="reference">
            <router-link to="/Zu7" tag="p" class="b">
              <p class="d">数据总览</p>
            </router-link>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <router-link to="/Zu71" tag="p" class="b"> 工作量统计 </router-link>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <router-link to="/Zu72" tag="p" class="b">
              <p class="c">工作质量统计</p>
            </router-link>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <router-link to="/Zu73" tag="p" class="b">
              <p class="a">考勤统计</p>
            </router-link>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <router-link to="/Zu74" tag="p" class="b">
              <p class="a">访问统计</p>
            </router-link>
          </el-button>
        </p>
      </div>

      <div class="cont-right">
        <div class="head">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="请选择日期"
              end-placeholder="请选择日期"
            >
            </el-date-picker>
          </div>
          <div class="kef">
            <template>
              <el-select v-model="value" placeholder="全部客服组">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </div>
          <div class="daoc">导出当前数据</div>
        </div>

        <div class="table">
          <div class="table1">
            <span>客服昵称</span><span>消息总量</span><span>会话总量</span
            ><span>有效会话总量</span><span>结束会话总量</span
            ><span>会话总时长</span><span>单回话平均消息数</span
            ><span>单回话平均时长</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
          <div class="table2">
            <span>客服小美</span><span style="margin-left: 16px">300</span
            ><span style="margin-left: 38px">26</span
            ><span style="margin-left: 53px">18</span
            ><span style="margin-left: 70px">10</span
            ><span style="margin-left: 51px">50m</span
            ><span style="margin-left: 75px">9</span
            ><span style="margin-left: 77px">9m18s</span>
          </div>
        </div>
        <div class="block feny">
          <span class="demonstration"></span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  name: "Zu71",
  components: {
    Tou,
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "客服组1",
        },
        {
          value: "选项3",
          label: "客服组2",
        },
        {
          value: "选项4",
          label: "客服组3",
        },
        {
          value: "选项5",
          label: "客服组4",
        },
      ],
      value: "",
    };
  },
};
</script>
<style scoped>
.cont {
  width: 1295px;
  float: right;
  margin-top: 60px;
  background-color: #e6f1ff;
}
.cont-left {
  float: left;
  margin-left: 20px;
  margin-top: 10px;
  width: 250px;
  height: 677px;
  position: fixed;
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  font-size: 15px;
}
.d {
  width: 115px;
  line-height: 25px;
  margin-left: -8px;
  font-size: 18px;
}
.d{
    width: 115px;
    line-height: 25px;
    margin-left: -8px;  
   font-size: 18px;
}
.b{
    height: 28px;
    width: 115px;
    line-height: 25px;
    margin-left: -8px;
    font-size: 18px;
}
.c{
    width: 115px;
    line-height: 28px;
    margin-left: 9px;
    font-size: 18px;
}
.a{
    width: 115px;
    line-height: 25px;
       margin-left: -9px;  
    font-size: 18px;
}
.tab .el-button {
  width: 250px;
  border: none;
  height: 70px;
}
.p1 {
  color: #9d9d9d;
  height: 50px;
  border-bottom: 1px solid #9d9d9d;
  line-height: 50px;
  padding-left: 20px;
}
.cont-right {
  float: left;
  width: 1010px;
  background-color: white;
  margin-left: 280px;
  margin-top: 10px;
  border-radius: 5px 5px 5px 5px;
}
.head {
  margin-top: 10px;
  margin-left: 10px;
}
.head div {
  float: left;
}
.kef {
  margin-left: 10px;
}
.daoc {
  width: 120px;
  text-align: center;
  margin-left: 230px;
  line-height: 38px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #c0c4cc;
  color: #c0c4cc;
  cursor: pointer;
  font-size: 13px;
}
.daoc:hover {
  color: #187cff;
  border: 1px solid #187cff;
}

.ddd {
  font-size: 10px;
  line-height: 50px;
}
.shu1 {
  font-size: 40px;
  color: #187cff;
  line-height: 60px;
  font-weight: 900;
}
.two {
  margin-left: 18px;
  margin-top: 32px;
  float: left;
}
.two img {
  width: 1037px;
}
.table {
  float: left;
  margin-left: 15px;
  margin-top: 20px;
}
.table div {
  height: 55px;
  line-height: 55px;
}
.table div:hover {
  background-color: #e6f1ff;
}
.table div span {
  padding-left: 47px;
}
.table1 {
  background-color: #e6f1ff;
  font-size: 14px;
  color: #999999;
}
.table2 {
  font-size: 14px;
}
.feny {
  float: left;
  margin-left: 580px;
  margin-top: 20px;
}
</style>
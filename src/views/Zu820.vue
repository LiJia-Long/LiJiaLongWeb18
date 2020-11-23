<template>
  <div id="app">
    <Tou title="操作日志"></Tou>
    <div class="cont">
      <div class="right">
        <div class="block1">
          <el-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="请选择日期"
            end-placeholder="请选择日期"
            :default-time="['00:00:00', '23:59:59']"
          >
          </el-date-picker>
        </div>
         <div class="ss">
          <input
            type="text"
            class="input"
            placeholder="请输入关键词搜索"
          /><button class="btn">搜索</button>
        </div>
        <div class="dao">导出数据</div>
        <div class="div2">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column prop="date" label="操作人" align="center"></el-table-column>
            <el-table-column prop="name" label="操作动作" align="center"></el-table-column>
            <el-table-column prop="address" label="操作对象" align="center"></el-table-column>
            <el-table-column prop="address2" label="操作时间" align="center"></el-table-column>
            <el-table-column prop="address3" label="操作IP" align="center"></el-table-column>
          </el-table>
          
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
  name: "Zu81",
  components: {
    Tou,
  },
  data(){
    return{
      tableData: [
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
           date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
         date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        },
        {
          date: "七尾",
          name: "新增工单",
          address: "工单标题：客户报价",
          address2: "2019/09/12 10:99",
          address3:"132.224.22.2"
        }
      ],
      
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
  height: 500px;
}
.right{
  float: right;
  width: 1020px;
  background: #ffffff;
   margin-top: 10px;
  margin-left: 10px;
}
.block1{
  float: left;
  padding: 20px;
}
.block{
  float: right;
  margin: 10px 20px;
}
.ss {
  padding: 20px 0px;
  float: left;
}
.input {
  background: #f2f2f2;
  border: none;
  width: 230px;
  height: 40px;
}
.btn {
  width: 60px;
  height: 40px;
  background: #006eff;
  border: none;
  color: #ffffff;
  cursor: pointer;
}
.dao {
  text-align: center;
  width: 80px;
  border: 1px solid #999999;
  float: right;
  height: 40px;
  line-height: 40px;
  color: #999999;
  margin: 20px 10px;
}
.dao:hover {
  border: 1px solid #006eff;
  color: #006eff;
  cursor: pointer;
}
.bd {
  text-align: center;
  width: 80px;
  background: #006eff;
  float: left;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 10px;
}
.dialog {
  height: 400px;
  overflow-y: scroll;
}
</style>
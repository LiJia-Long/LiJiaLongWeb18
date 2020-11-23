<template>
  <div id="app">
    <Tou title="黑名单"></Tou>
    <div class="cont">
      <div class="right">
        <div class="block1">
          <select>
            <option>全部客服组</option>
            <option>全部</option>
            <option>客服组一</option>
            <option>客服组二</option>
            <option>客服组三</option>
          </select>
        </div>
        <div class="block1">
          <select>
            <option>全部客服组</option>
            <option>全部</option>
            <option>客服组一</option>
            <option>客服组二</option>
            <option>客服组三</option>
          </select>
        </div>
        <div class="ss">
          <input
            type="text"
            class="input"
            placeholder="请输入关键词搜索"
          /><button class="btn">搜索</button>
        </div>

        <div class="bd">
          <el-button
            type="text"
            @click="dialogFormVisible = true"
            style="color: #ffffff"
            >添加客户</el-button
          >
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
            <el-table-column type="selection" align="center"></el-table-column>
            <el-table-column
              prop="date"
              label="客户名称"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="真实姓名"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="客服昵称"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address2"
              label="电话"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address3"
              label="邮箱"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address4"
              label="客户等级"
              align="center"
            ></el-table-column>
            <el-table-column label="操作" align="center">
                <router-link to="/Zu51" tag="div">
                    <p style="float:left;padding-top:8px;color:#409EFF;cursor: pointer;">
                        详情
                    </p>
                </router-link>
              
              <el-button
                type="text"
                style="float: right;"
                @click="open"
                >解禁</el-button
              >
            </el-table-column>
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
  name: "Zu813",
  components: {
    Tou,
  },
  data() {
    return {
      value: "",
      tableData: [
        {
          date: "河北省秦皇岛市客户",
          name: "林芳",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "普通用户",
          address4: "2020/09/09 10:09",
        },
        {
         date: "河北省秦皇岛市客户",
          name: "林芳",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "普通用户",
          address4: "2020/09/09 10:09",
        },
        {
         date: "河北省秦皇岛市客户",
          name: "林芳",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "普通用户",
          address4: "2020/09/09 10:09",
        },
        {
          date: "河北省秦皇岛市客户",
          name: "林芳",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "普通用户",
          address4: "2020/09/09 10:09",
        },
        {
          date: "河北省秦皇岛市客户",
          name: "林芳",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "普通用户",
          address4: "2020/09/09 10:09",
        },
        {
         date: "河北省秦皇岛市客户",
          name: "林芳",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "普通用户",
          address4: "2020/09/09 10:09",
        },
        {
          date: "河北省秦皇岛市客户",
          name: "林芳",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "普通用户",
          address4: "2020/09/09 10:09",
        },
      ],
      dialogTableVisible2: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible2: false,
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
  methods: {
    open2() {
      this.$message({
        type: "success",
        message: "添加客户成功",
        center: true,
      });
    },
    open1() {
      this.$message({
        type: "success",
        message: "保存成功",
        center: true,
      });
    },
    open() {
      this.$confirm(
        "确定要解禁该客户吗？",
        "解禁确认",
        {
          confirmButtonText: "确定",
          type: "warning",
        }
      ).then(() => {
        this.$message({
          type: "success",
          message: "解禁成功!",
        });
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
  height: 500px;
}
.right {
  float: right;
  width: 1020px;
  background: #ffffff;
  margin-top: 10px;
  margin-left: 10px;
}
.block1 {
  float: left;
  padding: 20px;
}
.block1 select {
  text-align: center;
  width: 120px;
  background: #f2f2f2;
  border: none;
  height: 40px;
}
.block {
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
  width: 180px;
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
  float: left;
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
  margin-left: 260px;
  margin-right: 10px;
}
.dialog {
  height: 400px;
  overflow-y: scroll;
}
</style>
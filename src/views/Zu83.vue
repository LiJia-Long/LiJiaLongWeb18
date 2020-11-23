<template>
  <div id="app">
    <Tou title="客服管理"></Tou>
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
          <el-dialog
            title="新建客户信息"
            :visible.sync="dialogFormVisible"
            append-to-body="true"
            width="40%"
          >
            <el-form :model="form" class="dialog">
              <el-form-item label="*客户名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="*真实姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="*客户电话" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="*客户邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="*客户公司" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="*客户地址" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="客户等级" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户来源" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <p>
                优先级 <el-radio v-model="radio" label="1">低</el-radio>
                <el-radio v-model="radio" label="2">中</el-radio>
                <el-radio v-model="radio" label="3">高</el-radio>
                <el-radio v-model="radio" label="4">紧急</el-radio>
              </p>
              <el-form-item label="*客户备注" :label-width="formLabelWidth">
                <el-input
                  type="textarea"
                  v-model="form.name"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), open2()"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </div>
        <div class="dao">批量操作</div>
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
              label="ID"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="账号"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="客服昵称"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address2"
              label="客服姓名"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address3"
              label="客服分组"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address4"
              label="客服角色"
              align="center"
            ></el-table-column>
            <el-table-column label="客服状态" align="center">
                <template scope="scope">
                <el-switch
                  v-model="scope.row.value"
                  active-color="rgb(255,136,0)"
                  inactive-color="rgb(242,242,242)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <router-link to="/Zu83-1" tag="div">
                    <p style="float:left;padding-top:8px;color:#409EFF;cursor: pointer;">
                        编辑
                    </p>
                </router-link>
              
              <el-button
                type="text"
                style="float: right;"
                @click="open"
                >删除</el-button
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
  name: "Zu81",
  components: {
    Tou,
  },
  data() {
    return {
      value: "",
      tableData: [
        {
          date: "1253",
          name: "116789@163.com",
          address: "小美",
          address2: "杜微",
          address3: "客服组一",
          address4: "工单客服",
          value:true
        },
        {
          date: "1253",
          name: "116789@163.com",
          address: "小美",
          address2: "杜微",
          address3: "客服组一",
          address4: "工单客服",
          value:true
        },
        {
          date: "1253",
          name: "116789@163.com",
          address: "小美",
          address2: "杜微",
          address3: "客服组一",
          address4: "工单客服",
          value:true
        },
        {
          date: "1253",
          name: "116789@163.com",
          address: "小美",
          address2: "杜微",
          address3: "客服组一",
          address4: "工单客服",
          value:true
        },
        {
          date: "1253",
          name: "116789@163.com",
          address: "小美",
          address2: "杜微",
          address3: "客服组一",
          address4: "工单客服",
          value:true
        },
        {
          date: "1253",
          name: "116789@163.com",
          address: "小美",
          address2: "杜微",
          address3: "客服组一",
          address4: "工单客服",
          value:true
        },
        {
          date: "1253",
          name: "116789@163.com",
          address: "小美",
          address2: "杜微",
          address3: "客服组一",
          address4: "工单客服",
          value:true
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
        "客户信息删除后无法恢复，确定删除此客户信息吗？",
        "删除确认",
        {
          confirmButtonText: "确定",
          type: "warning",
        }
      ).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!",
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
  width: 200px;
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
  margin-left: 180px;
  margin-right: 10px;
}
.dialog {
  height: 400px;
  overflow-y: scroll;
}
</style>
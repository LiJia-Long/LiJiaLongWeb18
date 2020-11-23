<template>
  <div id="app">
    <Tou title="客户标签"></Tou>
    <div class="cont">
      <div class="right">
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
            >添加标签</el-button
          >
          <el-dialog
            title="添加分组"
            :visible.sync="dialogFormVisible"
            append-to-body="true"
            width="40%"
          >
            <el-form :model="form" class="dialog">
              <el-form-item label="*分组名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
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
        <div class="dao">批量删除</div>
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
              label="标签预览"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="使用次数"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address2"
              label="创建时间"
              align="center"
            ></el-table-column>
            <el-table-column label="操作" align="center">
                <el-button type="text" @click="dialogFormVisible2 = true" style="float:left;padding-left:20px">编辑</el-button>
              <el-dialog
                title="添加分组"
                :visible.sync="dialogFormVisible2"
                append-to-body="true"
                width="40%"
              >
                <el-form :model="form" class="dialog">
                  <el-form-item label="*分组名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible2 = false,open2()">确 定</el-button>
                </div>
              </el-dialog>
              
              <el-button
                type="text"
                style="float: right; padding-right: 20px"
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
  name: "Zu812",
  components: {
    Tou,
  },
  data() {
    return {
      value: "",
      tableData: [
        {
          date: "003",
          name: "标签名",
          address: "5",
          address2: "2019/09/12 10:99"
        },
        {
          date: "003",
          name: "标签名",
          address: "5",
          address2: "2019/09/12 10:99"
        },
        {
        date: "003",
          name: "标签名",
          address: "5",
          address2: "2019/09/12 10:99"
        },
        {
         date: "003",
          name: "标签名",
          address: "5",
          address2: "2019/09/12 10:99"
        },
        {
          date: "003",
          name: "标签名",
          address: "5",
          address2: "2019/09/12 10:99"
        },
        {
          date: "003",
          name: "标签名",
          address: "5",
          address2: "2019/09/12 10:99"
        },
        {
          date: "003",
          name: "标签名",
          address: "5",
          address2: "2019/09/12 10:99"
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
        message: "添加分组成功",
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
.block {
  float: right;
  margin: 10px 20px;
}
.ss {
  padding: 20px 20px;
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
  margin-left: 495px;
  margin-right: 10px;
}
</style>
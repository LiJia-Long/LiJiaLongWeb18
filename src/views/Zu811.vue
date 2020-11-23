<template>
  <div id="app">
    <Tou title="客户信息"></Tou>
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
            >添加字段</el-button
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

 <div class="div2">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              prop="date"
              label="字段名称"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="字段类型"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="是否必填"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="address2"
              label="创建时间"
              align="center"
            ></el-table-column>
            <el-table-column label="操作" align="center">
                <el-button type="text" @click="dialogFormVisible2 = true" style="float:left;padding-left:20px">编辑</el-button>
                <el-button type="text" style="float:right;padding-right:20px">上移</el-button>
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

      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu811",
  components: {
    Tou,
  },
  data() {
      return {
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
      tableData: [
        {
          date: "姓名",
          name: "单行文本",
          address: "是",
          address2: "2019/09/12 10:99"
        },
        {
          date: "姓名",
          name: "单行文本",
          address: "是",
          address2: "2019/09/12 10:99"
        },
        {
        date: "姓名",
          name: "单行文本",
          address: "是",
          address2: "2019/09/12 10:99"
        },
        {
         date: "姓名",
          name: "单行文本",
          address: "是",
          address2: "2019/09/12 10:99"
        },
        {
          date: "姓名",
          name: "单行文本",
          address: "是",
          address2: "2019/09/12 10:99"
        },
        {
          date: "姓名",
          name: "单行文本",
          address: "是",
          address2: "2019/09/12 10:99"
        },
        {
          date: "姓名",
          name: "单行文本",
          address: "是",
          address2: "2019/09/12 10:99"
        },
      ],
      }
  },
  methods: {
      open() {
      this.$confirm(
        "分组删除后无法恢复，确定删除此分组信息吗？",
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
    open2() {
      this.$message({
        type: "success",
        message: "保存成功",
        center: true,
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
  background: #ffffff;
  width: 1020px;
  float: right;
  margin-top: 10px;
  margin-left: 10px;
  height: 600px;
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
.bd {
  text-align: center;
  width: 80px;
  background: #006eff;
  float: right;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 380px;
  margin-right: 10px;
}
</style>
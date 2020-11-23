<template>
  <div id="app">
    <Tou title="会话超时设置"></Tou>
    <div class="cont">
      <div class="right">
        <div class="bd">
          <el-button
            type="text"
            @click="dialogFormVisible = true"
            style="color: #ffffff"
            >添加超时回复</el-button
          >
          <el-dialog
            title="添加超时回复"
            :visible.sync="dialogFormVisible"
            append-to-body="true"
            width="40%"
          >
            <el-form :model="form" class="dialog">
                <el-input
              style="width: 440px;margin-left:30px;"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), open1()"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </div>
        <div class="div1">
            <p class="p1">
            当访客超过回复时间没有回复时，随机回复一条给访客。
        </p>
        <hr style="clear:both;width:1000px;margin-top:80px;border:1px solid #f2f2f2">
        <p class="p2">
            <span>请问您还在吗 ？</span><i class="el-icon-delete"  @click="open"></i><i class="el-icon-edit" @click="open1"></i>
        </p>
        <hr style="clear:both;width:1000px;border:1px solid #f2f2f2">
        <p class="p2">
            <span>如果您没有问题，此次会话将关闭。</span><i class="el-icon-delete"  @click="open"></i><i class="el-icon-edit" @click="open1"></i>
        </p>
        <hr style="clear:both;width:1000px;border:1px solid #f2f2f2">
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
  name: "Zu815",
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
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
     open() {
      this.$confirm(
        "删除后无法恢复，确定删除此信息吗？",
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
     open1() {
      this.$message({
        message: "保存成功",
        type: "success",
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
  height: 590px;
}
.bd {
  text-align: center;
  width: 100px;
  background: #006eff;
  float: left;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 3px;
}
.p1{
    float: left;
    line-height: 40px;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 14px;
    color: #acacac;
}
.el-icon-edit{
    color: blue;
    cursor: pointer;
}
.el-icon-delete{
    color: blue;
    cursor: pointer;
}
.p2 i{
    float: right;
    padding: 0px 20px;
    line-height: 50px;
}
.div1 p{
    line-height: 50px;
    padding-left: 10px;
}
.block{
    float: right;
    margin-top: 20px;
}
</style>
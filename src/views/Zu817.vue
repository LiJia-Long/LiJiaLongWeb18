<template>
  <div id="app">
    <Tou title="知识库"></Tou>
    <div class="cont">
      <div class="right">
        <div class="right1">
          <p>全部分类</p>
          <div class="right1-1">
            <i class="el-icon-plus"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <i class="el-icon-top"></i>
            <i class="el-icon-bottom"></i>
            <hr />
            <p>
              <i class="el-icon-message">售前问题</i><br />
              <span>产品相关</span><br />
              <span>服务相关</span><br />
              <span>其他问题</span><br />
              <i class="el-icon-message">售后问题</i><br />
              <i class="el-icon-message">技术问题</i>
            </p>
          </div>
        </div>
        <div class="right2">
          <div class="ss">
            <input type="text" class="input" placeholder="关键词" /><button
              class="btn"
            >
              搜索
            </button>
          </div>
          <div class="bd">
            <el-button
              type="text"
              @click="dialogFormVisible = true"
              style="color: #ffffff"
              >添加分类</el-button
            >
            <el-dialog
              title="添加分类"
              :visible.sync="dialogFormVisible"
              append-to-body="true"
              width="40%"
            >
              <el-form :model="form" class="dialog">
                <el-form-item label="*分类名称" :label-width="formLabelWidth">
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
          <div class="dao">批量操作</div>

          <div class="right2-1">
            <p>
              <el-checkbox v-model="checked"></el-checkbox>
              <span class="ys1">标准问法：</span
              ><span>请问你们公司的主营业务是什么？</span>
              <i class="el-icon-edit" @click="open2()"></i>
              <i class="el-icon-delete" @click="open()"></i><br />
              <span class="ys">相似问法：</span><span>贵司主营业务？</span
              ><br />
              <span class="ys">标准答案：</span
              ><span
                >主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售主营汽车零部…</span
              >
            </p>
          </div>
          <div class="right2-1">
            <p>
              <el-checkbox v-model="checked2"></el-checkbox>
              <span class="ys1">标准问法：</span
              ><span>请问你们公司的主营业务是什么？</span>
              <i class="el-icon-edit" @click="open2()"></i>
              <i class="el-icon-delete" @click="open()"></i><br />
              <span class="ys">相似问法：</span><span>贵司主营业务？</span
              ><br />
              <span class="ys">标准答案：</span
              ><span
                >主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售主营汽车零部…</span
              >
            </p>
          </div>
          <div class="right2-1">
            <p>
              <el-checkbox v-model="checked3"></el-checkbox>
              <span class="ys1">标准问法：</span
              ><span>请问你们公司的主营业务是什么？</span>
              <i class="el-icon-edit" @click="open2()"></i>
              <i class="el-icon-delete" @click="open()"></i><br />
              <span class="ys">相似问法：</span><span>贵司主营业务？</span
              ><br />
              <span class="ys">标准答案：</span
              ><span
                >主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售。主营汽车零部件及精密配件的开发及销售主营汽车零部…</span
              >
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
  name: "Zu817",
  components: {
    Tou,
  },
  data() {
    return {
      checked: false,
      checked2: false,
      checked3: false,
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
    open2() {
      this.$message({
        type: "success",
        message: "添加分类成功",
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
  height: 590px;
}
.right1 {
  float: left;
  padding: 15px;
}
.right1-1 {
  width: 280px;
  line-height: 40px;
  height: 600px;
}
.right1-1 i {
  padding: 0px 20px;
  cursor: pointer;
  color: #006eff;
}
.right1-1 span {
  padding: 0px 20px;
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
  margin: 20px 0px;
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
  margin-left: 200px;
  margin-right: 10px;
}
.right2-1 {
  width: 710px;
  float: left;
}
.right2-1 i {
  float: right;
  padding: 0px 20px;
  line-height: 50px;
  color: #006eff;
  cursor: pointer;
}
.right2-1:hover {
  background: #f7f7f7;
}
.right2-1 span {
  font-size: 13px;
  line-height: 50px;
}
.right2-1 p {
  margin: 10px 0px;
}
.ys {
  color: #006eff;
  padding-left: 20px;
}
.ys1 {
  color: #006eff;
  padding-left: 7px;
}
</style>
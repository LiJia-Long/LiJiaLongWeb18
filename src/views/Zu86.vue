<template>
  <div id="app">
    <Tou title="常用语"></Tou>
    <div class="cont">
        <div class="right">
            <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人库" name="first">
          <div>
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
        <div class="dao">导出数据</div>
          </div>
          <div style="clear:both">
              <el-collapse v-model="activeNames2" @change="handleChange">
              
                      <el-collapse-item
                        title="我的常用语分类一"
                        name="1"
                        class="t"
                      >
                      
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                      </el-collapse-item>
                      <el-collapse-item
                        title="我的常用语分类二"
                        name="3"
                        class="t"
                      >
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                      </el-collapse-item>
                    </el-collapse>
          </div>
          
      </el-tab-pane>
      <el-tab-pane label="公共库" name="second">
           <div>
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
        <div class="dao">导出数据</div>
          </div>
          <div style="clear:both">
<el-collapse v-model="activeNames2" @change="handleChange">
                      <el-collapse-item
                        title="生鲜产品业务常用语"
                        name="1"
                        class="t"
                      >
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                      </el-collapse-item>
                      <el-collapse-item
                        title="推广常用语"
                        name="3"
                        class="t"
                      >
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                      </el-collapse-item>
                    </el-collapse>
          </div>
          
      </el-tab-pane>
    </el-tabs>
        </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu86",
  components: {
    Tou,
  },
  data() {
    return {
      activeName: "first",
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
    handleClick(tab, event) {
      console.log(tab, event);
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
  background: #e6f1ff;
  width: 1295px;
  margin-top: 60px;
}
.right {
  float: right;
  width: 1020px;
  background: #ffffff;
  margin-top: 10px;
  margin-left: 50px;
  padding: 20px;
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
  margin-left: 380px;
  margin-right: 10px;
  color: #ffffff;
  cursor: pointer;
}
</style>
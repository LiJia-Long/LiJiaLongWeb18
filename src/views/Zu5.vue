<template>
  <div id="app">
    <Tou title="访客"></Tou>
    <div class="cont">
      <div class="div1">
        <div class="sd">
          <div>
            <el-select v-model="value" placeholder="全部客服">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>

          <div>
            <el-select v-model="value" placeholder="全部来源">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="block">
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
                append-to-body="true" width="40%" 
              >
                <el-form :model="form"  class="dialog" >
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
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
 <el-form-item label="客户来源" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
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
                    <el-input type="textarea" v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false,open2()"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
        </div>
        <div class="dao1">批量操作</div>
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
            <el-table-column prop="date" label="客户名称" align="center">
            </el-table-column>
            <el-table-column prop="name" label="真实姓名" align="center">
            </el-table-column>
            <el-table-column prop="address" label="电话" align="center">
            </el-table-column>
            <el-table-column prop="address2" label="邮箱" align="center">
            </el-table-column>
            <el-table-column prop="address3" label="客户等级" align="center">
            </el-table-column>
            <el-table-column prop="address4" label="客户来源" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
              <router-link to="/Zu51" tag="span" class="xq"> 详情 </router-link>
              <el-button type="text" @click="dialogFormVisible2 = true"
                >创建工单</el-button
              >
              <el-dialog
                title="新建工单"
                :visible.sync="dialogFormVisible2"
                append-to-body="true" width="40%" 
              >
                <el-form :model="form"  class="dialog" >
                  <el-form-item label="*工单分类" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="*工单标题" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="*工单标题" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <p>📎 添加附件（最多上传5个附件，单个文件最大20M)</p>
                  <el-form-item label="抄送人" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
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

                  <el-form-item label="工单状态" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="受理客服组" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="受理客服" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="所属客户" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible2 = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible2 = false,open1()"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>

              <el-button type="text" @click="open">删除</el-button>
            </el-table-column>
          </el-table>
        </div>
        <div class="div3">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu5",
  components: {
    Tou,
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
      ],
      tableData: [
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "18845678900",
          address2: "1190887@163.com",
          address3: "8分45秒",
          address4: "客服录入",
        },
      ],
      value: "",
      radio: "1",
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
     open1() {
        this.$message({
          type: "success",
          message: '创建成功',
          center: true
        });
     },
      open2() {
        this.$message({
          type: "success",
          message: '添加客户成功',
          center: true
        });
      },
  },
};
</script>
<style  scoped>
.cont {
  width: 1295px;
  margin-left: 70px;
  background: #e6f1ff;
  margin-top: 50px;
  float: right;
}
.div1 {
  width: 1280px;
  background: #ffffff;
  margin-top: 20px;
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.sd {
  width: 330px;
  float: left;
}
.sd div {
  width: 150px;
  margin: 5px 5px;
  float: left;
  
}
.block {
  float: left;
  margin: 10px 0px;
  background: #f2f2f2;
}
.ss {
  float: left;
  margin: 10px 10px;
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
  margin: 10px 0px;
  border: 1px solid #999999;
  float: left;
  height: 40px;
  line-height: 40px;
  color: #999999;
}
.dao:hover {
  border: 1px solid #006eff;
  color: #006eff;
  cursor: pointer;
}
.div2 {
  clear: both;
  height: 500px;
}
.div3 {
  float: right;
  clear: both;
  margin-right: 50px;
  margin-top: 20px;
}
.bd {
  text-align: center;
  width: 80px;
  margin: 10px 0px;
  background: #006eff;
  float: left;
  height: 40px;
  line-height: 40px;
}
.dao1 {
  text-align: center;
  width: 80px;
  margin: 10px 10px;
  background: #006eff;
  float: left;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
}
.xq {
  color: #40aaff;
  cursor: pointer;
}
.dialog{
  height: 400px;
  overflow-y: scroll;
}
</style>
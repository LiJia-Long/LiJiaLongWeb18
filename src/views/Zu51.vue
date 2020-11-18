<template>
  <div id="app">
    <Tou title="客户详情"></Tou>
    <div class="cont">
      <div class="div1">
        <router-link class="dao" to="/Zu5" tag="div"> 返回 </router-link>
        <div class="dao3">
          <el-button
            type="text"
            @click="dialogFormVisible3 = true"
            style="color: #999999"
            >拉黑</el-button
          >
          <el-dialog
            title="拉黑客户"
            width="35%"
            :visible.sync="dialogFormVisible3"
          >
            <el-form :model="form">
              <el-form-item label="拉黑原因" :label-width="formLabelWidth">
                <el-input
                  type="textarea"
                  v-model="form.name"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible3 = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible3 = false), open2()"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </div>
        <div class="dao2" @click="open()">删除客户</div>
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
              <el-button type="primary" @click="dialogFormVisible = false,open3()"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </div>
      </div>

      <div class="div2">
        <div class="left">
          <p>客户信息</p>
          <p>
            <span class="z1">客户名称</span>
            <span class="z2">北京市客户</span>
          </p>
          <p>
            <span class="z1">真实姓名 </span>
            <span class="z2">王伟</span>
          </p>
          <p>
            <span class="z1">客户电话</span>
            <span class="z2">—</span>
          </p>
          <p>
            <span class="z1">客户邮箱</span>
            <span class="z2">—</span>
          </p>
          <p>
            <span class="z1">客户公司</span>
            <span class="z2">—</span>
          </p>
          <p>
            <span class="z1">客户地址</span>
            <span class="z2">—</span>
          </p>
          <p>
            <span class="z1">客户等级</span>
            <span class="z2">普通客户</span>
          </p>
          <p>
            <span class="z1">客户来源</span>
            <span class="z2">访客转化</span>
          </p>
          <p>
            <span class="z1">客户备注</span>
            <span class="z2"> —</span>
          </p>
          <p>
            <span class="z1">客户标签</span>
            <span class="s">已上市</span>
            <span class="s">潜在客户</span>
          </p>
          <hr />
          <p>
            <span class="z1">创建时间</span>
            <span class="z2">2020/09/08 10:33</span>
          </p>
          <p>
            <span class="z1">更新于</span>
            <span class="z2">2020/09/08 10:33</span>
          </p>
          <p>
            <span class="z1">最后登陆</span>
            <span class="z2">2020/09/08 10:33</span>
          </p>
        </div>

        <div class="right">
          <p>
            <img src="../assets/img/logo.png" align="left" />
            <span style="font-size: 20px; padding-left: 10px">王伟</span><br />
            <span style="color: #999999; font-size: 13px; padding-left: 10px"
              >北京</span
            >
          </p>
          <p>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="历史会话" name="first">
                <el-radio-group
                  v-model="tabPosition"
                  style="margin-bottom: 30px"
                >
                  <el-radio-button label="top">全部</el-radio-button>
                  <el-radio-button label="right">本周</el-radio-button>
                  <el-radio-button label="bottom">本月</el-radio-button>
                  <el-radio-button label="left">上月</el-radio-button>
                </el-radio-group>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="访问时间"
                    width="180"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="来源"
                    width="180"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column prop="address" label="客服" align="center">
                  </el-table-column>
                  <el-table-column
                    prop="address2"
                    label="受理客服组"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="address3"
                    label="访问时长"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="address4"
                    label="满意度"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
                 <el-pagination background layout="prev, pager, next" :total="1000" style="float:right;margin-right:20px;margin-top:20px">
          </el-pagination>
              </el-tab-pane>

              <el-tab-pane label="历史工单" name="second">
                  <el-radio-group
                  v-model="tabPosition"
                  style="margin-bottom: 30px"
                >
                  <el-radio-button label="top">全部</el-radio-button>
                  <el-radio-button label="right">本周</el-radio-button>
                  <el-radio-button label="bottom">本月</el-radio-button>
                  <el-radio-button label="left">上月</el-radio-button>
                </el-radio-group>
                <el-table :data="tableData2" style="width: 100%">
                  <el-table-column
                    prop="a1"
                    label="工单ID"
                    width="180"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="a2"
                    label="工单标题"
                    width="180"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column prop="a3" label="工单渠道" align="center">
                  </el-table-column>
                  <el-table-column
                    prop="a4"
                    label="受理客服组"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="a5"
                    label="访问时长"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="a6"
                    label="满意度"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
                 <el-pagination background layout="prev, pager, next" :total="1000" style="float:right;margin-right:20px;margin-top:20px">
          </el-pagination>
              </el-tab-pane>
              <el-tab-pane label="拉黑记录" name="third">
                  <el-radio-group
                  v-model="tabPosition"
                  style="margin-bottom: 30px"
                >
                  <el-radio-button label="top">全部</el-radio-button>
                  <el-radio-button label="right">本周</el-radio-button>
                  <el-radio-button label="bottom">本月</el-radio-button>
                  <el-radio-button label="left">上月</el-radio-button>
                </el-radio-group>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="访问时间"
                    width="180"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="来源"
                    width="180"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column prop="address" label="客服" align="center">
                  </el-table-column>
                  <el-table-column
                    prop="address2"
                    label="受理客服组"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="address3"
                    label="访问时长"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="address4"
                    label="满意度"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
                 <el-pagination background layout="prev, pager, next" :total="1000" style="float:right;margin-right:20px;margin-top:20px">
          </el-pagination>
              </el-tab-pane>
            </el-tabs>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu51",
  components: {
    Tou,
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogTableVisible3: false,
      dialogFormVisible3: false,
      tabPosition: "left",
      activeName: "first",
      tableData: [
        {
          date: "2020/03/09 10:55",
          name: "微信",
          address: "客服小美",
          address2: "未分组",
          address3: "8分45秒",
          address4: "5",
        },
        {
          date: "2020/03/09 10:55",
          name: "微信",
          address: "客服小美",
          address2: "未分组",
          address3: "8分45秒",
          address4: "5",
        },
        {
          date: "2020/03/09 10:55",
          name: "微信",
          address: "客服小美",
          address2: "未分组",
          address3: "8分45秒",
          address4: "5",
        },
        {
          date: "2020/03/09 10:55",
          name: "微信",
          address: "客服小美",
          address2: "未分组",
          address3: "8分45秒",
          address4: "5",
        },
        {
          date: "2020/03/09 10:55",
          name: "微信",
          address: "客服小美",
          address2: "未分组",
          address3: "8分45秒",
          address4: "5",
        }
      ],
      tableData2: [
        {
          a1: "32533819",
          a2: "客户报价",
          a3: "手动入录",
          a4: "未分配",
          a5: "李永乐",
          a6: "2020/03/09 10:55",
        },
        {
         a1: "32533819",
          a2: "客户报价",
          a3: "手动入录",
          a4: "未分配",
          a5: "李永乐",
          a6: "2020/03/09 10:55",
        },
        {
         a1: "32533819",
          a2: "客户报价",
          a3: "手动入录",
          a4: "未分配",
          a5: "李永乐",
          a6: "2020/03/09 10:55",
        },
        {
         a1: "32533819",
          a2: "客户报价",
          a3: "手动入录",
          a4: "未分配",
          a5: "李永乐",
          a6: "2020/03/09 10:55",
        },
       {
          a1: "32533819",
          a2: "客户报价",
          a3: "手动入录",
          a4: "未分配",
          a5: "李永乐",
          a6: "2020/03/09 10:55",
        }
      ],
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
      this.$confirm("客户信息删除后无法恢复，确定删除此客户信息吗？", "删除确认", {
        confirmButtonText: "确定",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
    },
    open2() {
      this.$message({
        message: "已拉黑该客户，可在设置-黑名单中解禁!",
        center: true,
      });
    },
    open3() {
        this.$message({
          type: "success",
          message: '创建成功',
          center: true
        });
      },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.cont {
  width: 1290px;
  margin-top: 60px;
  float: right;
  margin-left: 70px;
  background: #e6f1ff;
}

.dao {
  text-align: center;
  width: 80px;
  margin: 10px 20px;
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
.bd {
  text-align: center;
  width: 80px;
  margin: 10px 0px;
  background: #006eff;
  float: right;
  height: 42px;
  line-height: 40px;
}
.dialog {
  height: 400px;
  overflow-y: scroll;
}
.dao2 {
  text-align: center;
  width: 80px;
  margin: 10px 10px;
  border: 1px solid #999999;
  float: right;
  height: 40px;
  line-height: 40px;
  color: #999999;
}
.dao3 {
  text-align: center;
  width: 80px;
  margin: 10px 0px;
  border: 1px solid #999999;
  float: right;
  height: 40px;
  line-height: 40px;
  color: #999999;
}

.dao2:hover {
  border: 1px solid #006eff;
  cursor: pointer;
}
.dao3:hover {
  border: 1px solid #006eff;
  cursor: pointer;
}
.div2 {
  clear: both;
}
.left {
  float: left;
  background: #ffffff;
  width: 300px;
  height: 560px;
  margin-left: 10px;
}
.z1 {
  color: #dadada;
  font-size: 10px;
}
.z2 {
  font-size: 13px;
}
.s{
  color: #ffffff;
  background: #2ed477;
  margin: 0px 5px;
  font-size: 13px;
}
.left p:nth-of-type(1) {
  padding: 15px;
}
.left span {
  padding: 0px 20px;
  line-height: 35px;
}
.right {
  width: 970px;
  height: 560px;
  background: #ffffff;
  margin-left: 10px;
  float: left;
}
.right p:nth-of-type(1) {
  padding: 20px;
}
</style>
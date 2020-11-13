<template>
  <div id="app">
    <Tou title="会话"></Tou>
    <div class="cont">
      <div class="div1">
        <p class="p1">当前会话</p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
        <p class="tab">
          <el-button slot="reference">
            <img
              src="../assets/img/logo.png"
              width="40px"
              class="img"
              align="left"
            />
            <p class="a">北京客户</p>
            <p class="b">您好，我想咨询一下</p>
          </el-button>
        </p>
      </div>

      <div class="div2">
        <div class="tou">
          <div class="left1">
            <span>北京市</span>
            <span> 首次会话 </span>
          </div>
          <div class="right1">
            <p>
              <el-button type="text" @click="dialogFormVisible = true"
                ><i class="el-icon-plus"></i>创建工单</el-button
              >
              <el-dialog title="新建工单" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域" :label-width="formLabelWidth">
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
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </p>

            <p>
              <el-button type="text" @click="dialogFormVisible = true"
                ><i class="el-icon-back"></i>创建工单</el-button
              >
              <el-dialog title="新建工单" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域" :label-width="formLabelWidth">
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
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </p>

            <p>
              <el-button type="text" @click="dialogFormVisible = true"
                ><i class="el-icon-circle-close"></i>创建工单</el-button
              >
              <el-dialog title="新建工单" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域" :label-width="formLabelWidth">
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
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </p>

            <p>
              <el-button type="text" @click="open"
                ><i class="el-icon-switch-button"></i>结束会话</el-button
              >
            </p>
          </div>
        </div>

        <div class="nr">
          <div class="nr1-1">
            <p>更多记录</p>
            <p>
              <img src="../assets/img/logo.png" width="40px" align="left" />
              <span class="span1">10号客服 2020/06/09 20:09</span><br />
              <span class="span2">您好，请问有什么可以帮您呢？</span>
            </p>
            <p>
              <span class="span1">10号客服 2020/06/09 20:09</span><br />
              <span class="span2">您好，请问有什么可以帮您呢？</span>
              <img src="../assets/img/logo.png" width="40px" align="right" />
            </p>
          </div>
          <div class="nr2-2">
            <span>
              <img src="../assets/img/u330.png" />
            </span>
            <span>
              <img src="../assets/img/img.png" />
            </span>
            <p>
              <input type="text" class="in" placeholder="请输入内容" />
            </p>
            <p class="ni">发送</p>
          </div>
        </div>

        <div class="nr2">
          <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
            <el-tab-pane label="资料" name="first">
              <div class="ds1">
                <p>访客信息</p>
                <p>
                  <span class="z1">来源</span>
                  <span class="z2">113.128.230.51</span>
                </p>
                <p>
                  <span class="z1"> IP地址 </span>
                  <span class="z2"> 113.128.230.51 </span>
                </p>
                <p>
                  <span class="z1">浏览器</span>
                  <span class="z2">Chrome 81.0.4044.138</span>
                </p>
                <p>
                  <span class="z1">屏幕尺寸</span>
                  <span class="z2">1440 x 900</span>
                </p>
                <p>
                  <span class="z1">设备</span>
                  <span class="z2">Mac</span>
                </p>
                
              </div>
              <hr />
              <div class="ds2">
                <p>
                  <span>客户信息</span>
                </p>
                <p>
                  <span class="z1">客户名称</span>
                  <span class="z2">北京市客户</span>
                </p>
                <p>
                  <span class="z1">真实姓名</span>
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
                  <span class="z2">—</span>
                </p>
                <p>
                  <span class="z1">客户标签</span>
                  <span class="s">已上市</span>
                  <span class="s">潜在客户</span>
                </p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常用语" name="second">
              <el-tabs
                v-model="activeName2"
                @tab-click="handleClick"
                stretch="true"
              >
                <el-tab-pane label="个人库" name="first">
                  <div class="h">
                    <img src="../assets/img/ss.png" align="center" />
                    <input
                      type="text"
                      placeholder="搜索常用语"
                      style="border: none; height: 30px; margin-left: 10px"
                    />
                  </div>
                  <div>
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
                  <div class="h">
                    <img src="../assets/img/ss.png" align="center" />
                    <input
                      type="text"
                      placeholder="搜索常用语"
                      style="border: none; height: 30px; margin-left: 10px"
                    />
                  </div>
                  <div>
                    <el-collapse v-model="activeNames2" @change="handleChange">
                      <el-collapse-item
                        title="公共常用语分类一"
                        name="1"
                        class="t"
                      >
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                        <div>你好，请问有什么可以帮您？</div>
                      </el-collapse-item>
                      <el-collapse-item
                        title="公共常用语分类二"
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
            </el-tab-pane>
            <el-tab-pane label="历史工单" name="third">
              <div class="ds1">
                <p>工单信息</p>
                <p>
                  <span class="z1">工单标题</span>
                  <span class="z2">分类一</span>
                </p>
                <p>
                  <span class="z1">工单描述</span>
                  <span class="z2">客户需要型号SU-CC8990的产品的详细报价，请速联系。</span>
                </p>
                <p>
                  <span class="z1">工单分类</span>
                  <span class="z2">分类一</span>
                </p>
                <p>
                  <span class="z1">抄送人</span>
                  <span class="z2">王涛，吴敏儿</span>
                </p>
                <p>
                  <span class="z1">优先级</span>
                  <span class="z2">低</span>
                </p>
                <p>
                  <span class="z1">工单状态</span>
                  <span class="z2">处理中</span>
                </p>
                <p>
                  <span class="z1">受理客服组</span>
                  <span class="z2">客服组一</span>
                </p>
                <p>
                  <span class="z1">受理客户</span>
                  <span class="z2">王先生</span>
                </p>
                <p>
                  <span class="z1">创建时间</span>
                  <span class="z2">2020/06/09 20:09</span>
                </p>
                <p>
                  <span class="z1">更新时间</span>
                  <span class="z2">2020/06/09 20:09</span>
                </p>
                
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu2",
  components: {
    Tou,
  },
  data() {
    return {
      activeName: "first",
      activeNames2: ["1"],
      activeName2: "first",
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
      this.$confirm("确定要结束当前会话吗?", "结束会话确认", {
        confirmButtonText: "确定",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "结束会话成功!",
        });
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped>
.cont {
  width: 1295px;
  margin-left: 70px;
  background: #e6f1ff;
  margin-top: 60px;
  float: right;
}
.div1 {
  float: left;
  background: #ffffff;
  width: 300px;
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 5px;
}
.p1 {
  padding: 20px;
}
.a {
  width: 115px;
  line-height: 25px;
  padding-left: 0px;
  float: left;
}
.tab .el-button {
  width: 300px;
  border: none;
  height: 70px;
}
.b {
  width: 165px;
  font-size: 10px;
  line-height: 25px;
  float: left;
}
.div2 {
  float: left;
  width: 955px;
  margin-top: 10px;
  margin-left: 10px;
  background: #ffffff;
}
.tou {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.left1 {
  float: left;
  padding-left: 10px;
}
.left1 span:nth-of-type(2) {
  font-size: 10px;
  color: #cccccc;
}
.right1 {
  float: right;
}
.right1 p {
  float: left;
  padding: 0px 20px;
}
.nr {
  clear: both;
  float: left;
  width: 600px;
  height: 570px;
  background: #ffffff;
}
.nr1-1 {
  background: #f9f9f9;
  height: 450px;
}
.nr1-1 p:nth-of-type(1) {
  text-align: center;
  font-size: 10px;
  padding-top: 5px;
}
.nr1-1 p:nth-of-type(2) {
  margin-left: 10px;
}
.nr1-1 p:nth-of-type(3) {
  float: right;
  margin-right: 10px;
}
.nr2 {
  float: left;
  width: 355px;
  height: 570px;
  background: #ffffff;
}
.nr2-2 span {
  margin: 0px 10px;
  line-height: 50px;
}
.span1 {
  font-size: 10px;
  color: #d1d1d1;
  margin: 0px 5px;
}
.span2 {
  width: 120px;
  background: #ffffff;
  padding: 10px;
  margin: 0px 5px;
  line-height: 50px;
  border-radius: 5px;
  font-size: 13px;
}
.in {
  width: 250px;
  height: 30px;
  border: none;
  margin-left: 10px;
}
.ni {
  float: right;
  margin-right: 20px;
  background: #1a7dff;
  color: #ffffff;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.ds1 {
  margin-left: 20px;
}
.ds2 {
  margin-left: 20px;
}
.ds1 p:nth-of-type(1) {
  padding: 10px;
}
.ds2 p:nth-of-type(1) {
  padding: 10px;
}
.ds1 span {
  padding: 0px 10px;
  line-height: 30px;
}
.ds2 span {
  padding: 0px 10px;
  line-height: 23px;
}
.z1 {
  color: #dadada;
  font-size: 10px;
}
.z2 {
  font-size: 13px;
}
.s {
  color: #ffffff;
  background: #2ed477;
  margin: 0px 5px;
  font-size: 13px;
}
.h {
  margin-left: 10px;
}
.t div {
  padding-left: 10px;
  line-height: 30px;
}
.t div:hover {
  background: rgb(0, 153, 255);
  color: #ffffff;
  cursor: pointer;
}
</style>
<template>
  <div id="app">
    <Tou title="个人信息"></Tou>
    <div class="cont">
      <div class="left">
        <p class="xbt">通用设置</p>
        <router-link to="" tag="div">
            <p class="tab">
                <el-button slot="reference">个人信息</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">通知公告</el-button>
          </p>
        </router-link>
        <p class="xbt">团队设置</p>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">企业信息</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">客服管理</el-button>
          </p>
        </router-link>

        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">分组管理</el-button>
          </p>
        </router-link>

        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">角色管理</el-button>
          </p>
        </router-link>

        <p class="xbt">客服设置</p>

        <router-link to="" tag="div">
            <p class="tab">
 <el-button slot="reference">常用语</el-button>
            </p>
         
        </router-link>

        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">自动回复</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">对话规则</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">分配规则</el-button>
            </p>
        </router-link>

        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">会话评价</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">客户信息</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">客户标签</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">黑名单</el-button>
            </p>
        </router-link>
        <p class="xbt">机器人设置</p>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">基础设置</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">会话超时设置</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">转人工设置</el-button>
            </p>
        </router-link>

        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">知识库</el-button>
            </p>
        </router-link>
        <p class="xbt">工单设置</p>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">基础设置</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">工单分类</el-button>
            </p>
        </router-link>
        <p class="xbt">全局设置</p>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">操作日志</el-button>
            </p>
        </router-link>
        <router-link to="" tag="div">
            <p class="tab">
          <el-button slot="reference">消息通知</el-button>
            </p>
        </router-link>
      </div>
      <div class="right">
        <div class="p">
          <p>个人信息</p>
          <hr style="width: 990px; border: 1px solid #dedede" />
          <p>
            <span>上传头像：</span
            ><img src="../assets/img/9.png" align="center" /><img
              src="../assets/img/10.png"
              align="center"
            />
          </p>
          <p>
            <span>*邮箱地址</span>
            <input type="text" placeholder="11938898@163.com" />
          </p>
          <p>
            <span>*客服昵称</span> <input type="text" placeholder="客服小美" />
          </p>
          <p><span>*真实姓名</span> <input type="text" placeholder="杜宇" /></p>
          <p>
            <span>客服工号 </span> <input type="text" placeholder="请输入" />
          </p>
          <p>
            <span>客服手机号码</span> <input type="text" placeholder="请输入" />
          </p>
          <hr style="width: 990px; border: 1px solid #dedede" />
          <p>密码设置</p>
          <p>
            <span>原密码</span> <input type="text" placeholder="请输入原密码" />
          </p>
          <p>
            <span>新密码</span> <input type="text" placeholder="请输入新密码" />
          </p>
          <p>
            <span>确认新密码</span>
            <input type="text" placeholder="请再次输入密码" />
          </p>
          <p>
            <el-button type="primary" @click="open()">保存</el-button>
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
  methods: {
    open() {
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
.left {
  width: 250px;
  background: #ffffff;
  margin-left: 20px;
  margin-top: 10px;
  height: 580px;
  overflow-y: scroll;
  position: fixed;
}
.xbt {
  margin-left: 20px;
  line-height: 50px;
  font-size: 13px;
  color: #999999;
}
.tab .el-button {
  width: 100%;
  border: none;
  height: 50px;
  text-align: left;
  font-weight: 900;
}
.right {
  background: #ffffff;
  width: 1020px;
  float: right;
  margin-top: 10px;
  margin-left: 10px;
}
.p p {
  text-align: left;
  padding: 20px;
  line-height: 40px;
}
.p span {
  color: #999999;
}
.p {
  width: 500px;
  float: left;
  padding-left: 20px;
}
.p img {
  padding: 0px 30px;
}
.p img:nth-of-type(1) {
  padding-left: 80px;
}
.right input {
  float: right;
  height: 40px;
  border: none;
  background: #dedede;
  width: 300px;
  text-indent: 10px;
}
</style>
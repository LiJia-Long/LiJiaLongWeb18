<template>
    <div id="app">
        <div class="left">
        <p class="xbt">通用设置</p>
        <router-link to="/Zu8" tag="div">
            <p class="tab">
                <el-button slot="reference">个人信息</el-button>
            </p>
        </router-link>
        <router-link to="/Zu81" tag="div">
            <p class="tab">
          <el-button slot="reference">通知公告</el-button>
          </p>
        </router-link>
        <p class="xbt">团队设置</p>
        <router-link to="/Zu82" tag="div">
            <p class="tab">
          <el-button slot="reference">企业信息</el-button>
            </p>
        </router-link>
        <router-link to="/Zu83" tag="div">
            <p class="tab">
          <el-button slot="reference">客服管理</el-button>
          </p>
        </router-link>

        <router-link to="/Zu84" tag="div">
            <p class="tab">
          <el-button slot="reference">分组管理</el-button>
          </p>
        </router-link>

        <router-link to="/Zu85" tag="div">
            <p class="tab">
          <el-button slot="reference">角色管理</el-button>
          </p>
        </router-link>

        <p class="xbt">客服设置</p>

        <router-link to="/Zu86" tag="div">
            <p class="tab">
 <el-button slot="reference">常用语</el-button>
            </p>
         
        </router-link>

        <router-link to="/Zu87" tag="div">
            <p class="tab">
          <el-button slot="reference">自动回复</el-button>
            </p>
        </router-link>
        <router-link to="/Zu88" tag="div">
            <p class="tab">
          <el-button slot="reference">对话规则</el-button>
            </p>
        </router-link>
        <router-link to="/Zu89" tag="div">
            <p class="tab">
          <el-button slot="reference">分配规则</el-button>
            </p>
        </router-link>

        <router-link to="/Zu810" tag="div">
            <p class="tab">
          <el-button slot="reference">会话评价</el-button>
            </p>
        </router-link>
        <router-link to="/Zu811" tag="div">
            <p class="tab">
          <el-button slot="reference">客户信息</el-button>
            </p>
        </router-link>
        <router-link to="/Zu812" tag="div">
            <p class="tab">
          <el-button slot="reference">客户标签</el-button>
            </p>
        </router-link>
        <router-link to="/Zu813" tag="div">
            <p class="tab">
          <el-button slot="reference">黑名单</el-button>
            </p>
        </router-link>
        <p class="xbt">机器人设置</p>
        <router-link to="/Zu814" tag="div">
            <p class="tab">
          <el-button slot="reference">基础设置</el-button>
            </p>
        </router-link>
        <router-link to="/Zu815" tag="div">
            <p class="tab">
          <el-button slot="reference">会话超时设置</el-button>
            </p>
        </router-link>
        <router-link to="/Zu816" tag="div">
            <p class="tab">
          <el-button slot="reference">转人工设置</el-button>
            </p>
        </router-link>

        <router-link to="/Zu817" tag="div">
            <p class="tab">
          <el-button slot="reference">知识库</el-button>
            </p>
        </router-link>
        <p class="xbt">工单设置</p>
        <router-link to="/Zu818" tag="div">
            <p class="tab">
          <el-button slot="reference">基础设置</el-button>
            </p>
        </router-link>
        <router-link to="/Zu819" tag="div">
            <p class="tab">
          <el-button slot="reference">工单分类</el-button>
            </p>
        </router-link>
        <p class="xbt">全局设置</p>
        <router-link to="/Zu820" tag="div">
            <p class="tab">
          <el-button slot="reference">操作日志</el-button>
            </p>
        </router-link>
        <router-link to="/Zu821" tag="div">
            <p class="tab">
          <el-button slot="reference">消息通知</el-button>
            </p>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
    name:"Dao2"
}
</script>
<style scoped>
.left {
  width: 250px;
  background: #ffffff;
  margin-left: 75px;
  margin-top: 70px;
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
</style>
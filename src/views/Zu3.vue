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
          <div>
            <el-select v-model="value" placeholder="全部终端">
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

        <div class="dao">导出数据</div>

        <div class="div2">
          <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="date" label="访客名称" align="center" >
            </el-table-column>
            <el-table-column prop="name" label="来源" align="center">
            </el-table-column>
            <el-table-column prop="address" label="终端" align="center">
            </el-table-column>
            <el-table-column prop="address2" label="访问时间" align="center">
            </el-table-column>
            <el-table-column prop="address3" label="访问时长" align="center">
            </el-table-column>
            <el-table-column prop="address4" label="IP地址" align="center">
            </el-table-column>
            <el-table-column prop="address5" label="访客状态" align="center">
            </el-table-column>
            <el-table-column prop="address6" label="操作" align="center">
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
  name: "Zu3",
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
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
        {
          date: "河北省秦皇岛市区",
          name: "电脑",
          address: "微信",
          address2: "2020/03/09 10:55",
          address3: "8分45秒",
          address4: "132.131.22.1",
          address5: "在线",
          address6: "发起会话",
        },
      ],
      value: "",
    };
  },
};
</script>
<style  scoped>
.cont{
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
  width: 490px;
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
  width: 100px;
  margin: 10px 10px;
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
.div2{
  clear: both;
  height: 500px;
}
.div3{
  float: right;
  clear: both;
  margin-right: 50px;
  margin-top: 20px;
}
</style>
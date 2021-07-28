<template>
  <div class="tab-container">
    <el-button plain @click="dbyb($event)">代办</el-button>
    <el-button plain @click="dbyb($event)">已办</el-button>
    <el-button style="align-self: center; float: right" @click.stop="search"
      >搜索</el-button
    >
    <el-input
      v-model="sxsearchInpt"
      class="search"
      width="30%"
      style="align-self: center; float: right"
      placeholder="事项搜索"
    />

    <el-table :data="tableData" height="250" style="width: 100%">
      <el-table-column prop="xh" label="序号" width="180"> </el-table-column>
      <el-table-column prop="fm" label="来自" width="180"> </el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="tp" label="类型" width="180"> </el-table-column>
      <el-table-column prop="receivtime" label="接收时间" width="180">
      </el-table-column>
    </el-table>
    <div style="display: flex">
      <label for="" style="flex: 8"><h2>流程</h2></label>
      <el-input
        v-model="lcsearchInpt"
        class="search"
        width="30%"
        style="flex: 1.5; align-self: center"
        placeholder="流程搜索"
      /><el-button style="flex: 0.3; align-self: center" @click.stop="search"
        >搜索</el-button
      >
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><strong>介质管理</strong></span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">
              按钮
            </el-button> -->
          </div>
          <div class="text item" style="overflow: auto; height: 300px">
            <div v-for="o in 16" :key="o" class="text item">
              <a target="_blank" href="https://www.baidu.com/">{{
                '列表内容 ' + o
              }}</a>
            </div>
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><strong>基础管理</strong></span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >按钮</el-button
            >
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><strong>计算机管理</strong></span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >按钮</el-button
            >
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><strong>台账管理</strong></span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >按钮</el-button
            >
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><strong>报表</strong></span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >按钮</el-button
            >
          </div>
          <div v-for="o in 10" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TabPane from './components/TabPane'
import $ from 'jquery';
export default {
  name: 'Tab',
  components: { TabPane },
  data () {
    return {
      listQuery: {
        page: 1,
        limit: 20,
        dbyb: undefined 
      },
      tableData: [{
        receivtime: '2016-05-02',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        receivtime: '2016-05-04',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1517 弄'

      }, {
        receivtime: '2016-12-03',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1516 弄'
      }, {
        receivtime: '2016-03-02',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        receivtime: '2016-04-04',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1517 弄'

      }, {
        receivtime: '2016-01-03',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1516 弄'
      }, {
        receivtime: '2016-05-02',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        receivtime: '2016-05-04',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1517 弄'

      }, {
        receivtime: '2016-12-03',
        fm: '王大海',
        title: '上海市普陀区金沙江路 1516 弄'
      }, {
        receivtime: '2016-03-02',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        receivtime: '2016-04-04',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1517 弄'

      }, {
        receivtime: '2016-01-03',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1516 弄'
      }],
      activeName: 'db',
      createdTimes: 0,
      sxsearchInpt: '',
      lcsearchInpt: '11'
    }
  },
  watch: {
    activeName (val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created () {
    // 初始化默认选中的选项卡
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  mounted () {

  },
  methods: {
    showCreatedTimes () {
      this.createdTimes = this.createdTimes + 1
    },
    search () {
      alert(this.searchInpt)

    },
    jump () {
      window.open("https://juejin.im/post/59097cd7a22b9d0065fb61d2")
    },
    dbyb (e) {
      console.log(e.target.innerHTML)

    }
  }
}
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
.document-btn {
  flex-shrink: 0;
  display: block;
  cursor: pointer;
  background: black;
  color: white;
  height: 60px;
  padding: 0 16px;
  margin: 16px;
  line-height: 60px;
  font-size: 20px;
  text-align: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.el-input {
  width: 14% !important;
}

.app-main {
  background-color: bisque;
  z-index: -1;
}
</style>

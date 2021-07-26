<template>
  <div class="tab-container">
    <!-- <el-tag>mounted times ：{{ createdTimes }}</el-tag> -->
    <!-- <el-alert :closable="false" style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="带keep alive的选项卡" type="success" /> -->
    <el-tabs v-model="activeName" style="margin-top: 15px" type="border-card">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="xh" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="fm" label="来自" width="180">
          </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="tp" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="receivtime" label="接收时间" width="180">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <div>
      <el-input v-model="searchInpt" />
      <svg-icon
        class-name="search-icon"
        icon-class="search"
        @click.stop="search"
      />
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" style="height:300px;" >
          <div slot="header" class="clearfix">
            <span><strong>介质管理</strong></span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >按钮</el-button
            >
          </div>
          <div v-for="o in 6" :key="o" class="text item" style="overflow:auto;" >
            {{ '列表内容 ' + o }}
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

export default {
  name: 'Tab',
  components: { TabPane },
  data () {
    return {
      tabMapOptions: [
        // { label: 'China', key: 'CN' },
        // { label: 'USA', key: 'US' },
        { label: '待办', key: 'db' },
        { label: '已办', key: 'yb' }
      ],
      tableData: [{
        receivtime: '2016-05-02',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        receivtime: '2016-05-04',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1517 弄'

      }, {
        receivtime: '2016-05-03',
        fm: '王小虎',
        title: '上海市普陀区金沙江路 1516 弄'
      }],

      activeName: 'db',
      createdTimes: 0,
      searchInpt: ''
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
  methods: {
    showCreatedTimes () {
      this.createdTimes = this.createdTimes + 1
    },
    search () {
      alert(this.searchInpt)

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
</style>

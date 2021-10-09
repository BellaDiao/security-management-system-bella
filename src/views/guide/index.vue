<template>
  <div class="app-container">
    <aside>
      The guide page is useful for some people who entered the project for the
      first time. You can briefly introduce the features of the project. Demo is
      based on
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank"
        >driver.js.</a
      >
    </aside>
    <el-button
      icon="el-icon-question"
      type="primary"
      @click.prevent.stop="guide"
    >
      Show Guide
    </el-button>
    <el-button type="text" @click="dialogTableVisible = true"
      >打开 Dialog</el-button
    >
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible" v-dialogDrag>
      基本可拖动弹框 </el-dialog
    ><br />
    <!-- 路由跳转 -->
    <router-link to="/addCharts/index/params">路由跳转1</router-link><br />
    <router-link to="{name:'Icons1'}">路由跳转2不成功</router-link><br />
    <router-link to="{name:'addCharts'，path='//addCharts/index'}"
      >路由跳转3不成功</router-link
    >
    <el-button @click="routerPush1">路由push跳转1</el-button>
    <el-button @click="routerPush2">路由push跳转2</el-button>
    <el-button @click="routerPush3">路由push跳转3</el-button>
    <el-button @click="routerPushCanshu">路由带参数push跳转1</el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data () {
    return {
      driver: null,
      dialogTableVisible: false,
      params: 1,
    }
  },
  mounted () {
    this.driver = new Driver()
  },
  methods: {
    guide () {
      this.driver.defineSteps(steps)
      this.driver.start()
    },
    dialogShow () {

    },
    routerPush1 () {
      this.$router.push(`/addCharts/index/${this.params}`)
    },

    routerPush2 () {
      this.$router.push({ name: 'addCharts' })
    },
    routerPush3 () {
      this.$router.push({ name: 'addCharts', path: '/addCharts/index' })
    },
    routerPushCanshu () {
      this.$router.push({ name: 'addCharts', query: { params: this.params } })
    },
  } 
}
</script>

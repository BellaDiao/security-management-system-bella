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
      基本可拖动弹框
    </el-dialog>
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

    }
  }
}
</script>

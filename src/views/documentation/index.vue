<template>
  <div class="dashboard-container">
    <div style="display: flex">
      <div style="flex: 1">
        <el-card shadow="always" class="bkgrd">
          <CommonSystem />
        </el-card>
      </div>
      <div style="flex: 1">
        <el-card shadow="always" class="bkgrd">
          <BpmExpressLane />
        </el-card>
      </div>
    </div>

    <div>
      <el-row :gutter="2">
        <el-col :span="18">
          <el-card shadow="always" class="bkgrd"><TodoList /> </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always" class="bkgrd"> <CommonLinks /> </el-card>
          <el-card shadow="always" class="bkgrd"><MySchedule /> </el-card>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-card shadow="always" class="bkgrd"> <Notification /></el-card>
    </div>
  </div>
</template>

<script>
import BpmExpressLane from './components/BpmExpressLane'
import CommonLinks from './components/CommonLinks'
import CommonSystem from './components/CommonSystem'
import MySchedule from './components/MySchedule'
import Notification from './components/Notification'
import TodoList from './components/TodoList'
export default {
  name: 'Documentation',
  components: { BpmExpressLane, CommonLinks, CommonSystem, MySchedule, Notification, TodoList },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="todoList">
    待办
    <el-tabs type="border-card">
      <el-tab-pane label="待办中心">待办中心</el-tab-pane>
      <el-tab-pane label="待阅任务">待阅任务</el-tab-pane>
      <el-tab-pane label="已办任务">已办任务</el-tab-pane>
      <el-tab-pane label="发起跟踪">发起跟踪</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Chart from '@/components/Charts/LineMarker'

export default {
  name: 'LineChart',
  // components: { Chart }
}
</script>

<style scoped>
/* .todoList{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
} */
</style>

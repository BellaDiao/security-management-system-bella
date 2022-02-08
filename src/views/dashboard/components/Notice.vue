<template>
  <div class="notice-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="公告通知" name="first">公告通知</el-tab-pane>
      <el-tab-pane label="值班安排" name="second">值班安排</el-tab-pane>
    </el-tabs>
  </div>
</template>
   
<script>

export default {
  name: 'Notice',
  data () {
    return {
      activeName: 'second'
    };
  },
  handleClick (tab, event) {
    console.log(tab, event);
  }
}
</script>

<style scoped>
.notice-container{
 margin-left: 5px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

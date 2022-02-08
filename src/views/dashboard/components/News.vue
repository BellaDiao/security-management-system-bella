<template>
  <div class="carousel-container">
    <span class="demonstration">新闻资讯</span>

    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

 

<script>
import Chart from '@/components/Charts/LineMarker'

export default {
  name: 'Carousel',
  // components: { Chart }
}
</script>

<style scoped>
/* .carousel-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
} */
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

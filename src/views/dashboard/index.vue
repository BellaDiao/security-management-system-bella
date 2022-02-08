<template>
  <div class="dashboard-container">
    <Carousel />
    <div style="display: flex">
      <div style="flex: 1"><CarouselPic /></div>
       <div style="flex: 1"><Notice /></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from './components/Carousel'
import CarouselPic from './components/CarouselPic'
import Notice from './components/Notice'

export default {
  name: 'Dashboard',
  components: { Carousel, CarouselPic, Notice },
  data () {
    return {
      // currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created () {
    // if (!this.roles.includes('admin')) {
    //   this.currentRole = 'editorDashboard'
    // }
  }
}
</script>
<style>
.bkgrd {
  background-color: royalblue;
}
</style>

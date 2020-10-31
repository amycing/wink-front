<template>
  <!--
   页面加载的样式(待完成)
   -->
  <div class="container" v-loading="false">
    <!-- 侧边栏 -->
    <Aside :foldAside="foldAside" />
      <!-- 头部导航栏 -->
    <div class="content">
      <TopBar @foldOrOpenAside="foldOrOpen" />
      <!-- 内容 -->
      <Area />
    </div>


  </div>
</template>

<script>
import TopBar from '@/views/home/Header.vue'
import Aside from '@/views/home/Aside.vue'
import Area from '@/views/home/Area.vue'

export default {
  name: 'Home',
  components: {
    TopBar,
    Aside,
    Area
  },
  data() {
    return {
      foldAside: true
    }
  },
  methods: {
    foldOrOpen(data) {
      this.foldAside = data
    }
  }
}
</script>
<style>
.container {
  display: flex;
  flex:auto auto 1;
  height: 100%;
}

.content{
  display: flex;
  flex-direction: column;
  flex: auto 1 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

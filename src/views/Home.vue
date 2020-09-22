<template>
  <!--
   页面加载的样式(待完成)
   -->
  <div class="container" v-loading="false">
    <!-- 侧边栏 -->
   <!-- <Aside :foldAside="foldAside" />-->
    <div class="vertical">
      <!-- 头部导航栏 -->
      <TopBar @foldOrOpenAside="foldOrOpen" />
      <!-- 内容 -->
     <!-- <Content />-->
    </div>
  </div>
</template>

<script>
import TopBar from '@/views/home/Header.vue'
import Aside from '@/views/home/Aside.vue'
import Content from '@/views/home/Content.vue'

export default {
  name: 'Home',
  components: {
    TopBar,
    Aside,
    Content
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
  height: 100%;
}

.vertical{
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="project-nav">
    <div class="header" :width="asideWidth">
      <div @click="$router.push({name:'Home'})" class="header-title">
        <a v-if="foldAside">后台管理中心</a>
        <a v-else>后台</a>
      </div>
    </div>
    <ul class="content-group" :width="asideWidth" :class='"icon-size-"+iconSize'>
      <li @click="$router.push({name:'Home'})" :class="[$route.name==='Home'?'selected':'']">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </li>
      <li>
        <i class="el-icon-star-off"></i>
        <span>组件</span>
        <ul>
          <li @click="$router.push({name:'Canvas'})" :class="[$route.name==='Canvas'?'selected':'']">
            <i class="el-icon-s-data"></i>
            <span slot="title">canvas</span>
          </li>
          <li>
            <i class="el-icon-document"></i>
            <span slot="title">ueditor</span>
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      //侧边栏宽度
      asideWidth: '200px',
      iconSize: 'true',
      //当前选中的菜单
      menuActiveName: 'home',
    }
  },
  watch: {
    //监视是否折叠菜单栏 折叠则宽度为64px
    foldAside(val) {
      this.asideWidth = val ? '200px' : '64px';
      this.iconSize = val;
    }
  },
  props: [
    'foldAside'
  ]
}
</script>

<style scoped lang="scss">
.project-nav {
  width: 200px;
  box-shadow: 5px -1px 5px 0px #eae7e7
}

.header {
  padding: 10px;
  display: flex;
}

.header-title {
  flex: 1;
  border-radius: 20px;
  padding: 0 14px;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  color: #2c3e50;
  background: #e4f5ef;
  display: inline-block;
  vertical-align: middle;
  border: none;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
}

ul.content-group {
  height: calc(100% - 64px);
  min-height: calc(100% - 64px);
  max-height: calc(100% - 64px);
  li {
    padding: 10px;
    list-style: none;
    text-align: left;
    font-size: 18px;
    i{
      background-size: 50px;
      margin-right: 5px;
    }
    &.selected{
      color: #4CC4B8;
    }
  }

  //flex: auto 1 1;
  //display: flex;
  & > li {
    padding-left: 15px;

    ul {
      & > li {
        padding-left: 30px;
      }
    }
  }

  .content {
    //align-items: stretch;
    //display: flex;
    //justify-content: center;

  }
}


</style>
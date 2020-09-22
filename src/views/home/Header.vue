<template>
<div class="header">
  <div class="header-title">
    <a class="fa fa-dedent" v-if="foldAside" title="折叠侧边栏"/>
    <a class="fa fa-indent" v-else title="展开侧边栏"/>
  </div>
  <div class="header-menu">
    <div class="horizontal header-menu-submenu">
          <span>设置</span>
          <i class="el-icon-setting"/>
          <span>帮助</span>
          <i class="el-icon-info"/>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "TopBar",
  data(){
    return{
      // 是否展开侧边栏
      foldAside: true,
      // 默认用户名
      userName: 'admin',
      // 是否展开密码框
      UpdatePasswordVisible: false
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  padding: 5px 10px;
  height: 50px;
  line-height: 50px;

}
.header-title{
  height:50px;
  width: 50px;
  float: left;
  font-size: 50px;
  cursor:pointer
}
.header-menu{
  height: 50px;
  line-height:50px;
  width: 100%;
  font-size: 30px;
  flex:1
}
.horizontal{
  display: flex;
  flex-direction: row;
}
.header-menu-submenu{
  float: right;
}

</style>
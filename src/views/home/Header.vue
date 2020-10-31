<template>
  <div class="header">
    <div class="header-title" @click="foldOrOpen">
      <a class="fa fa-dedent" v-if="foldAside" title="折叠侧边栏"/>
      <a class="fa fa-indent" v-else title="展开侧边栏"/>
    </div>
    <ul class="header-menu horizontal">
      <li>
        <i class="el-icon-setting"/>
        <span>设置</span>
      </li>
      <li>
        <i class="el-icon-info"/>
        <span>帮助</span>
        <span @click="updateAngle">
          <i class="fa fa-angle-down" v-if="angleUp"></i>
          <i class="fa fa-angle-up" v-else></i>
        </span>

        <div v-if="angleUp" class="foldCard">
          <div>
            <a href="http://www.fontawesome.com.cn/faicons/" target="_blank" class="header-submenu-a">图标地址</a>
          </div>
          <div>
            <a href="https://www.cnblogs.com/l-y-h/archive/2004/01/13/12935300.html" target="_blank"
               class="header-submenu-a">学习地址</a>
          </div>
        </div>
      </li>
      <li class="name_wrap">
        <img src="~@/assets/ying.jpeg" :alt="userName" class="header-img">
        <div>{{ userName }}</div>
        <span @click="setOpenOrFold">
          <i class="fa fa-angle-down" v-if="setOpen"></i>
          <i class="fa fa-angle-up" v-else></i>
        </span>
        <div v-if="setOpen" class="foldCard">
          <div class="header-submenu-a" @click="showPassWordBox">
            <i class="fa fa-pencil set" aria-hidden="true" ></i>修改密码
          </div>
          <div class="header-submenu-a" @click="logout">
            <i class="fa fa-times set" aria-hidden="true"></i>退出
          </div>
        </div>
      </li>
    </ul>
   <!-- 密码修改框-->
    <UpdatePassword v-if="updatePasswordVisible" ref="updatePassword" ></UpdatePassword>
  </div>
</template>

<script>
import UpdatePassword from '@/views/home/UpdatePassword.vue';
export default {
  name: "TopBar",
  data() {
    return {
      setOpen: false,
      angleUp: false,
      // 是否展开侧边栏
      foldAside: true,
      // 默认用户名
      userName: '小影',
      // 是否展开密码框
      updatePasswordVisible: false
    }
  },
  components:{
    UpdatePassword
  },
  methods: {
    showPassWordBox(){
      this.updatePasswordVisible=true;
      this.$nextTick(()=>{
        this.$refs.updatePassword.init();
      })
    },
    logout() {
      alert("退出系统");
      this.$router.push({name:"Login"});
    },
    //帮助折叠或者打开
    updateAngle() {
      this.angleUp = !this.angleUp;
    },
    //菜单栏折叠或者打开
    foldOrOpen() {
      this.foldAside = !this.foldAside;
      //用于触发父组件的方法 ，并传递参数
      this.$emit("foldOrOpenAside",this.foldAside);

    },
    setOpenOrFold() {
      this.setOpen = !this.setOpen;
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  flex-grow: 1;
  display: flex;
  padding: 5px 10px;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  background-color:#bbe6d6;
}

.header-title {
  height: 40px;
  width: 40px;
  font-size: 25px;
  cursor: pointer
}

.header-menu {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  margin: 0;
  span{
    i{
      margin-left: 5px;
    }
  }
}

.header-menu li{
  height: 40px;
  line-height: 40px;
  list-style: none;
  margin-left: 20px;
  position: relative;
}

.horizontal {
  display: flex;
  flex-direction: row;
}

.header-submenu-a {
  text-decoration: none;
  color: #4CC4B8;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
}

.foldCard {
  width: 100px;
  height: 85px;
  background-color: aliceblue;
  position: absolute;
  right: 0;
  top: 40px;
}

.header-img {
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 100%;
}

.name_wrap{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.set{
  padding: 0 5px 0 10px;
}

</style>
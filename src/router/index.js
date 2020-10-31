import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Canvas from "@/components/Canvas";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import( '../components/common/Login')
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    redirect:{
        name:'Canvas'
    },
    children:[
      {
        path:"Home/Components/Canvas",
        name:"Canvas",
        component:Canvas
      }
    ]
  },

]

const router = new VueRouter({
  routes, //用于定于路由跳转规则
   mode:'history', //用于去除路由中的#
   scrollBehavior:()=>({ //页面在组件切换的时候回到顶部
    y:0
  })
})
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return routerPush.call(this, location, onResolve, onReject)
  return routerPush.call(this, location).catch(error => error)
};
export default router

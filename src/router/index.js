import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router

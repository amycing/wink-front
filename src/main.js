import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/style/global.css"

// 引入 element-ui
import ElementUI from 'element-ui'
// 引入 element-ui 的 css 文件
import 'element-ui/lib/theme-chalk/index.css';

import 'font-awesome/css/font-awesome.css'
// 声明使用 element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

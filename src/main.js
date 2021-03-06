import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import "./assets/fonts/iconfont.css"
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:8888/api/private/v1/"
// 通过请求拦截器添加token,保证获取数据的权限
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem("token");
  // 最后必须return config
  return config
})
Vue.prototype.$http=axios;



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

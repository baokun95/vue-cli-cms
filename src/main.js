import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入mint-UI组件 
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

//导入mui 样式表
import './assets/lib/mui/css/mui.css'
import './assets/lib/mui/css/icons-extra.css'

//导入路由 模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入自己的路由 模块
import router from './router.js'

//导入发送请求的 Vue-resource 组件
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置全局 请求 的 根域名
Vue.http.options.root = "http://www.liulongbin.top:3005/"



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

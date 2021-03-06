import VueRouter from 'vue-router'

//导入对应的组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'


let router = new VueRouter({
    routes:[
        { path:'/',redirect:'/home'},
        { path:'/home',component:home},
        { path:'/member',component:member},
        { path:'/shopcar',component:shopcar},
        { path:'/search',component:search},
    ],
    linkActiveClass:'mui-active'
})

export default router
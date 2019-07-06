import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'
import Show from '@/views/show/show.vue'

Vue.use(Router)

/*配置路由*/
export default new Router({
    mode:'history', // mode 设置为history ，去掉地址栏上的 # 号
    routes: [
    {   
        path: '/',
        redirect: '/login'//重定向
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    
    {
        path: '/show',
        name: 'Show',
        component: Show
    },
  ]
})
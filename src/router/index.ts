import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

const routes : Array<RouteRecordRaw> = [
    {
        path : '/',
        name : 'home',
        component: () => import('../layout/index.vue'),
        meta : {icon : '' , title : '首页' , isLogin : true}
    },
    {
        path : '/login',
        name : 'Login',
        component : () => import('../pages/login.vue'),
        meta : {icon : '', title : '登录' , isLogin : false}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
import layout from '../views/index.vue' //布局页面
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
export const constantRouter = [{
    path: '/login',
    component: ()=>import('../views/login.vue'),
    hidden: true,
    meta: {
        title: '登录',
        icon: 'iconqiyetupu'
        },
    name: 'login',
}]
export const asyncRouter = [{
        path: '/', 
        component: layout,
        meta: {
            icon: '',
            title:'人力管理'
        },
        redirect:{
            path: '/manpowerResources'
        },
        children:[{
            path: '/manpowerResources',
            component: ()=>import('../views/manpower/resources.vue'),
            meta: {
                title: "人力资源",
                icon: '' 
            }
        }]
}];
const router = createRouter({
    history: history,
    routes: asyncRouter
  })
  
  
  export default router
import layout from '../views/index.vue' //布局页面
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
export const constantRouter = [{
    path: '/login',
    component: () => import('../views/login.vue'),
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
        title: '人力管理'
    },
    redirect: {
        path: '/manpowerResources'
    },
    hidden: false,
    children: [{
        path: '/manpowerResources',
        component: () => import('../views/manpower/resources.vue'),
        meta: {
            title: "人力资源",
            icon: ''
        },
        hidden: false,
    }]
}, {
    path: '/statistics',
    component: layout,
    meta: {
        icon: '',
        title: '统计分析'
    },
    redirect: {
        path: '/chat'
    },
    hidden: false,
    children: [{
        path: '/chat',
        component: () => import('../views/manpower/resources.vue'),
        meta: {
            title: "图表",
            icon: ''
        },
        hidden: false,
    }]
}, {
    path: '/attendanceAdministration',
    component: layout,
    meta: {
        icon: '',
        title: '考勤管理'
    },
    redirect: {
        path: '/attendance'
    },
    hidden: false,
    children: [{
        path: '/attendance',
        component: () => import('../views/manpower/resources.vue'),
        meta: {
            title: "考勤",
            icon: ''
        },
        hidden: false,
    }]
}, {
    path: '/journal',
    component: layout,
    meta: {
        icon: '',
        title: '日志审计'
    },
    redirect: {
        path: '/loginJournal'
    },
    hidden: false,
    children: [{
        path: '/loginJournal',
        component: () => import('../views/journal/login.vue'),
        meta: {
            title: "登录日志",
            icon: ''
        },
        hidden: false,
    },{
        path: '/operationJournal',
        component: () => import('../views/journal/operation.vue'),
        meta: {
            title: "操作日志",
            icon: ''
        },
        hidden: false,
    }]
},];
const router = createRouter({
    history: history,
    routes: asyncRouter
})


export default router
import Vue from 'vue';

import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
// import BillEntry from "@/components/BillEntry.vue";
// import BillReview from "@/components/BillReview.vue";
// import BillPrint from "@/components/BillPrint.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/main",
        name: "main",
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                // 按需引入
                component: () => import('@/views/Home')
            },
            {
                path: '/wild-entry',
                name: 'wild-entry',
                component: () => import('@/views/AI-Check-Size/wild-entry')
            },
            {
                path: '/wild-entry-after',
                name: 'wild-entry-after',
                component: () => import('@/views/AI-Check-Size/wild-entry-after')
            },
            {
                path: '/wild-print',
                name: 'wild-print',
                component: () => import('@/views/AI-Check-Size/wild-print')
            },
            {
                path: '/wild-review',
                name: 'wild-review',
                component: () => import('@/views/AI-Check-Size/wild-review')
            },
            {
                path: '/wild-modify',
                name: 'wild-modify',
                component: () => import('@/views/AI-Check-Size/wild-modify')
            },
            {
                path: '/wild-add',
                name: 'wild-add',
                component: () => import('@/views/AI-Check-Size/wild-add')
            },
            {
                path: '/photo-review',
                name: 'photo-review',
                component: () => import('@/views/Info-Center/photo-review')
            },
            {
                path: '/user-setting',
                name: 'user-setting',
                component: () => import('@/views/System-Setting/user-setting')
            },
            {
                path: '/modify-user',
                name: 'modify-user',
                component: () => import('@/views/System-Setting/modify-user')
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/views/Login/login'),
        children: [
            {
                path: '/',
                name: 'login-info',
                component: () => import('@/views/Login/login-info')
            },
            {
                path: 'sign-up-info',
                name: 'sign-up-info',
                component: () => import('@/views/Login/sign-up-info')
            }
        ]
    }
]


// 配置路由
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;

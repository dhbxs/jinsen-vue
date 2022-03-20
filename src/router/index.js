import Vue from 'vue';

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    }
]


// 配置路由
const router = new VueRouter({
    model: 'history',
    routes,
})

export default router;
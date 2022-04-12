import Vue from 'vue';

import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
// import BillEntry from "@/components/BillEntry.vue";
// import BillReview from "@/components/BillReview.vue";
// import BillPrint from "@/components/BillPrint.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "首页",
        component: Home
    },
    // {
    //     path: "/IntelligentRuler",
    //     name: "智能检尺",
    //     children: [
    //         {
    //             path: "/BillEntry",
    //             name: "野账录入",
    //             component: BillEntry
    //         },
    //         {
    //             path: "/BillReview",
    //             name: "野账审核",
    //             component: BillReview
    //         },
    //         {
    //             path: "/BillPrint",
    //             name: "野账打印",
    //             component: BillPrint
    //         }
    //     ]
    // },
]


// 配置路由
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
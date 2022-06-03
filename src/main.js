import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import Print from 'vue-print-nb';

// 引入完整的ElementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用完整ElementUI组件
Vue.use(ElementUI);

// 引入打印组件
Vue.use(Print)

// 按需引入ElementUI
// import {
//     Button,
//     Container,
//     Main,
//     Header,
//     Aside,
//     Menu,
//     Submenu,
//     MenuItem,
//     MenuItemGroup,
//     Dropdown,
//     DropdownMenu,
//     DropdownItem,
//     Row,
//     Col,
//     Card,
//     Form,
//     FormItem,
//     Input,
//     Select,
//     Option,
//     Switch,
//     DatePicker,
//     Upload,
//     Message,
// } from 'element-ui';
//
// Vue.use(Button);
// Vue.use(Container);
// Vue.use(Main);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Card);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Input);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(Switch);
// Vue.use(DatePicker);
// Vue.use(Upload);
// Vue.use(Message);

// 绑定在Vue prototype 属性上，供以后调用
// Vue.prototype.$api = api;

import "@/assets/css/global.css";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

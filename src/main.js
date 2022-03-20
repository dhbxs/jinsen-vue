import Vue from 'vue';
import App from './App.vue';

// 引入完整的ElementUI组件库
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 使用完整ElementUI组件
// Vue.use(ElementUI);

// 按需引入ElementUI
import { Button, Container, Main, Header, Aside, Menu, Submenu,MenuItem,MenuItemGroup} from 'element-ui';
Vue.use(Button);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

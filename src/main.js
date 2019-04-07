import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'

Vue.prototype.$axios=axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// 注册全局过滤器
import './filters'

// 注册全局组件
import './components';

// 注册全局指令
import './directives'



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

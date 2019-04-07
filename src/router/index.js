import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

import store from '../store'

// 安装vue-router插件
Vue.use(Router);

// 创建路由实例
const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.required && !store.state.isLogin) {
        next({
            name: 'login', query: {
                redirect: to.name
            }
        })
    } else {
        next();
    }
})

export default router
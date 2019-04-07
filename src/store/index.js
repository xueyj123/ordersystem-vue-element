
import Vue from 'vue'

import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        orderList: [],
        // 是否登录过的标志
        isLogin: false
    },
    mutations
})

export default store
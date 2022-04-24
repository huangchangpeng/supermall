import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
    add: {} // 地址对象
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
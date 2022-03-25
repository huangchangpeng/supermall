import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

import './assets/css/border.css'
import './assets/css/reset.css'

import {get, post } from "../src/utils/request.js";

Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$commonGet = get;
Vue.prototype.$commonPost = post;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
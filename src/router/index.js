import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/home'
import GoodsClass from 'views/Home/goodsClass'

import Live from 'views/Live/live'
import Personal from 'views/Personal/personal'
import Video from 'views/Video/video'
import TabBar1 from 'components/content/TabBar_1.vue'
import CommDetails from 'views/Home/CommDetails'
import Placeorder from 'views/Home/Placeorder'
import Addresslist from 'views/Personal/addresslist'
import SetAddress from 'views/Personal/setAddress'
Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

const routes = [{
        path: '/',
        name: TabBar1,
        component: TabBar1,
        redirect: '/home',
        children: [
            { path: 'home', name: 'Home', component: Home, meta: { keepAlive: true, } }, //此组件需要被缓存
            { path: 'live', name: 'Live', component: Live },
            { path: 'personal', name: 'Personal', component: Personal },
            { path: 'video', name: 'Video', component: Video },
        ]
    },
    { path: '/goodsClass', name: 'GoodsClass', component: GoodsClass },
    { path: '/commDetails', name: 'CommDetails', component: CommDetails },
    { path: '/placeorder', name: 'Placeorder', component: Placeorder },
    { path: '/Addresslist', name: 'Addresslist', component: Addresslist },
    { path: '/SetAddress', name: 'SetAddress', component: SetAddress }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
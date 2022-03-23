import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/home'
import Live from 'views/Live/live'
import Personal from 'views/Personal/personal'
import Video from 'views/Video/video'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home', },
    { path: '/home', name: 'Home', component: Home },
    { path: '/live', name: 'Live', component: Live },
    { path: '/personal', name: 'Personal', component: Personal },
    { path: '/video', name: 'Video', component: Video },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
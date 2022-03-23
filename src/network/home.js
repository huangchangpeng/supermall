import { request } from './request.js'

// TODO:获取首页所有数据
export function getHomeData() {
    return request({
        url: '/home/multidata',
    })
}
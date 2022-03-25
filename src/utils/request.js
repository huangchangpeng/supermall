import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://api.cat-shop.penkuoer.com',
    timeout: 5000
})

// 2、TODO: axios 请求拦截
instance.interceptors.request.use(config => {
    // config => {
    // config.data = JSON.stringify(config.data);
    // config.headers = {
    //     'Content-Type': 'application/json',
    // }
    // return config;
    // }
    return config;
}, err => {
    return Promise.reject(err);
})

// TODO: axios 响应拦截
instance.interceptors.response.use(res => {
    const { code, data, msg } = res;
    if (res.status === 200) {
        return res.data;
    } else if (code === 404) {
        router.push('/login');
        return Promise.reject("失败信息1");
    } else {
        return Promise.reject("失败信息2");
    }
}, err => {
    return Promise.reject(err);
})


export function get(url, params) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
                params
            })
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
    })
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        instance.post(url, {
            data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
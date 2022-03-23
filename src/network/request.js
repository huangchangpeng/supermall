import axios from 'axios'
export function request(config) {
    return new Promise((resolve, reject) => {
        // 1.TODO: 创建 axios 实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })

        // 2、TODO: axios 请求拦截
        instance.interceptors.request.use(config => {
            // config => {
            //         config.data = JSON.stringify(config.data);
            //         config.headers = {
            //             'Content-Type': 'application/json',
            //         }
            //         return config;
            //     }
            return config;
        }, err => {
            console.log(err);
        })

        // TODO: axios 响应拦截
        instance.interceptors.response.use(res => {
            return res.data;
        }, err => {
            console.log(err);
        })

        // 3、TODO: 网络请求
        instance(config).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })

}
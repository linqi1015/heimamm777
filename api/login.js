// 导入axios
import axios from 'axios'
// 创建instance
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
    // 跨域携带cookie
    withCredentials: true
})

// 接口的调用 通过instance调用即可
export function userLogin(data) {
    return instance({
        url: '/login',
        method: 'post',
        // data:data
        data
    })
}

export function getCodeURL() {
    return process.env.VUE_APP_BASEURL + '/captcha?type=login'
}
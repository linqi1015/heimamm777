// 暴露获取验证码的方法即可
export function getRegisterCodeURL() {
    return process.env.VUE_APP_BASEURL + `/captcha?type=sendsms&${Date.now()}`
}
import service from '../components/request'

/**
 * 登录接口
 */

 export function LoginAPI(acc){
     return service.request({
         url: "/login/",
         method:"post",
         data: acc
     })
 }

 /**
 * 忘记密码接口
 */

 export function ForgetPSWAPI(acc){
    return service.request({
        url: "/ForgetPSW/",
        method:"post",
        data: acc
    })
}
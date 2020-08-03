import axios from "axios";
import Qs from "qs";
const baseURL = "/pzjd"
function startLoading() {
    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: "加载中。。。",
        background: "rgba(0, 0, 0, 0.5)"
    });
}
function endLoading() {
    //使用Element loading-close 方法
    loading.close();
}
//请求头为application/x-www-form-urlencoded的配置
const SERVICE = axios.create({
    baseURL:baseURL,
    timeout:60000,
    transformRequest:[
        function(data){
            //将对象 序列化成URL的形式，以&进行拼接
            data=Qs.stringify(data);
            return data;
        }
    ],
    headers:{
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
});

//请求拦截器
SERVICE.interceptors.request.use(function (config) {
// 在发送请求之前做些什么，例如加入token
    startLoading()
    return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});

//响应拦截器
SERVICE.interceptors.response.use(function (response) {
    endLoading()
    // 在接收响应做些什么，例如跳转到登录页
return response.data;
}, function (error) {
// 对响应错误做点什么
return Promise.reject(error);
});
SERVICE.all = axios.all; // all方法没有挂载到 axios 实例对象中

//请求头为application/json的配置
const SERVICEDEFAULT = axios.create({
    baseURL:baseURL,
    timeout:60000,
    headers:{
        "Content-Type": "application/json;charset=UTF-8"
    }
});

//请求拦截器
SERVICEDEFAULT.interceptors.request.use(function (config) {
// 在发送请求之前做些什么，例如加入token
return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});

//响应拦截器
SERVICEDEFAULT.interceptors.response.use(function (response) {
    // 在接收响应做些什么，例如跳转到登录页
return response.data;
}, function (error) {
// 对响应错误做点什么
return Promise.reject(error);
});
SERVICEDEFAULT.all = axios.all; // all方法没有挂载到 axios 实例对象中

export {SERVICE , SERVICEDEFAULT}
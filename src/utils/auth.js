//获取
export function getToken() {
    return sessionStorage.getItem("token");
}
//存储
export function setToken(token) {
    return sessionStorage.setItem("token", token);
}
//销毁
export function clearAll() {
    sessionStorage.removeItem("token");
}
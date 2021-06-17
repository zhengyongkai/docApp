
import http from "../../utils/http";
export const login = (params) => {
  return  http.post('/home/Login/doLogin_wt',params)
}
export const getqrCode = (params) => {
  return  http.get('/home/qrcode/createTempQrcode',params)
}
export const loginApp = (params) => {
  return  http.get('/home/Login/loginApp',params)
}
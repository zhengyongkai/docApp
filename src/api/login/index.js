
import http from "../../utils/http";
export const login = (params) => {
  return  http.post('/home/Login/doLogin_wt',params)
}
export const getqrCode = (params) => {
  return  http.get('/home/group/createTempQrcode',params)
}

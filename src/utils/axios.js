import axios from "axios";
import Store from "../store";
import router from "@router";
import { notification } from "ant-design-vue";
/**
 * 用于对响应数据的处理
 * @param {Object} response 响应数据
 */
function Intercept(response) {
  switch (parseInt(response.code)) {
    case -1:
      notification["error"]({
        message: "失败",
        description: response.msg,
      });
      return Promise.reject(response.data);
    case 200:
      return response.data;
    case 400:
      return Promise.reject(response.data);
    case 401:
      return Promise.reject(response.data);
    case 404:
      return Promise.reject(response.data);
    case 500:
      notification["error"]({
        message: "服务器错误",
        description: "服务器错误，请联系管理员",
      });
      return Promise.reject(response.data);
    case 502:
      return Promise.reject(response.data);
    //登录端token失效
    case 4101:
      notification["error"]({
        message: "登陆失效",
        description: "登录失效，请重新登陆",
      });
      router && router.replace({ name: "login" });
      return Promise.reject(response.data);
    default:
      return Promise.reject(response.data);
  }
}

const $axios = axios.create({
  baseURL: document.location.origin + "/api/", // api的base_url
  timeout: 20000, // 请求超时时间
});
$axios.interceptors.request.use(
  (config) => {
    //调用登录接口时不添加鉴权
    if ((!(/Login/.test(config.url) || /qrcode/.test(config.url)))) {
      try {
        config.headers.token = Store.state.token
          ? JSON.parse(Store.state.token)
          : "";
      } catch {
        config.headers.token = Store.state.token ? Store.state.token : "";
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// response 拦截器
$axios.interceptors.response.use(
  (response) => {
    return Intercept(response.data);
  },
  (res) => {
    return Intercept({
      data:res,
      code: 404,
    });
  }
);
export default $axios;

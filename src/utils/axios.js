import axios from "axios";
import Store from "../store";
import router from '@router';
import {notification} from 'ant-design-vue'
/**
 * 用于对响应数据的处理
 * @param {Object} response 响应数据
 */
function Intercept(response) {
  console.log(response.code);
  switch (response.code) {
    case 200:
      notification['error']({
        message: '登陆失效',
        description:
          '登录失效，请重新登陆',
      });
      return response.data;
    case 400:
      return Promise.reject(response.data);
    case 401:
      return Promise.reject(response.data);
    case 404:
      return Promise.reject(response.data);
    case 500:
      return Promise.reject(response.data);
    case 502:
      return Promise.reject(response.data);
    //登录端token失效
    case 4101:
      router && router.replace({name:'home'})
     
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
    if (!(/home\/Login/.test(config.url) && config.method === "post")) {
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
  () => {
    return Intercept({
      data: "网络请求错误!",
      code: 404,
    });
  }
);
export default $axios;

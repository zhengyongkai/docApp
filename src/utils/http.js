import $axios from './axios';
import qs from 'qs';
/**
 * @param {String} url  请求地址
 * @param {any} data 请求数据
 * @param {Object} option 配置项，支持axios的配置项
 * @param {String} option.original 解除封装功能变为原始的axios方法
 * @param {String} option.qs 使用qs.stringify转换数据
 */

/**
 * 在组件中使用案例：
 * get请求    this.$http.get(url,data)
 * post请求   this.$http.post(url,data,{qs:true}) qs 可以决定是否把你的data转换成 FormData 默认不转换
 * put请求    this.$http.put(url,data,{qs:true}) 封装的put因后台原因发送的是post请求会在地址后面加上_method=put
 * delet请求  this.$http.delet(url,data)
 * 当你因特殊原因不使用封装的方法 this.$http.get(url,data,{original:true}) 即可
 */
export const get = (url, data, option) => {
  //option.original 为true时 使用原始功能
  if (option instanceof Object && option.original) {
    delete option.original;
    return $axios.get(url, data, option);
  } else if (option instanceof Object && option.qs) {
    delete option.qs;
    data = qs.stringify(data);
  }
  return $axios.get(url, {
    params: data,
    ...option
  });
};

export const post = (url, data, option) => {
  if (option instanceof Object && option.original) {
    delete option.original;
  } else if (option instanceof Object && option.qs) {
    data = option.qs ? qs.stringify(data) : data;
    delete option.qs;
  }
  return $axios.post(url, data, option);
};

export const put = (url, data, option) => {
  if (option instanceof Object && option.original) {
    delete option.original;
    return $axios.put(url, data, option);
  } else if (option instanceof Object && option.qs) {
    data = option.qs ? qs.stringify(data) : data;
    delete option.qs;
  }
  // //因后台原因put方法发送post请求添加_method=put后缀
  // if (url.includes('?')) {
  //   url = url + '&_method=put';
  // } else {
  //   url = url + '?_method=put';
  // }
  return $axios.put(url, data, option);
};
export const delet = (url, data, option) => {
  if (option instanceof Object && option.original) {
    delete option.original;
    return $axios.delete(url, data, option);
  } else if (option instanceof Object && option.qs) {
    delete option.qs;
    data = qs.stringify(data);
  }
  return $axios.delete(
    url,
    {
      params: data
    },
    option
  );
};
const $http = {
  get,
  post,
  put,
  delete: delet
};
export default $http;

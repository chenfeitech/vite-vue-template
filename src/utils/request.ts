/*
 * @Author: Lee
 * @Date: 2022-11-25 15:46:20
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-25 17:01:21
 * @Description:
 */

import axios from "axios";
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Tools from "lg-tools";
import Cookie from "lg-cookie";
import { Toast } from "vant";

/********************
 ** 基础类型
 ********************/
export interface BaseResponse<T = any> {
  code: number;
  data: T;
  page: {
    pageNo: number;
    pageSize: number;
    pages: number;
    total: number;
  };
  msg: string;
  success: boolean;
}

/********************
 ** 创建axios实例
 ********************/
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_HOST,
  timeout: 20 * 1000,
});

/********************
 ** 请求拦截器
 ********************/
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // => 如果是GET请求追加时间戳
    if (config.method && /get/i.test(config.method)) {
      config.params = {
        ...config.params,
        timeState: Tools.randomCharacters(1) + Date.now(),
      };
    }
    // => 配置请求头
    const token = Cookie.get<string>("AUTHORIZATION_TOKEN");
    // => 确认平台（如果同时开发支付宝和微信公众号则需要传入来源/和后端配合商议对应平台的source值）(MP)
    let source = "H5";
    switch (Tools.getEnv()) {
      case "alipay":
        source = "MP_WEIXIN";
        break;
      case "weixin":
        source = "MP_ALIPAY";
        break;
      default:
    }
    config.headers = {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      source,
    };
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/********************
 ** 响应拦截器
 ********************/
service.interceptors.response.use(
  (response: AxiosResponse) => {
    Toast.clear();
    const { code, message } = response.data;
    if (code === 0) {
      return response.data;
    } else {
      Toast(message);
      return Promise.reject(new Error(message));
    }
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let message = "";
    // HTTP 状态码
    const status = error.response?.status;
    switch (status) {
      case 401:
        message = "token 失效，请重新登录";
        break;
      case 403:
        message = "拒绝访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器故障";
        break;
      default:
        message = "网络连接故障";
    }
    Toast(message);
    return Promise.reject(error);
  }
);

/********************
 ** 导出请求方法（重点）
 ********************/

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return service.get(url, config);
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return service.post(url, data, config);
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return service.put(url, data, config);
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return service.delete(url, config);
  },
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from "axios";
import { BACK_END_URL } from "@/config";

const request = axios.create({
  baseURL: BACK_END_URL,
  timeout: 5000,
});

// request 拦截器
request.interceptors.request.use(
  (config) => {
    config.headers!["Content-Type"] = "application/json;charset=utf-8";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response 拦截器
request.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.log(response); // DEV模式下打印返回的response
    }
    if (response.config.responseType === "blob") {
      return response;
    }
    let data = response.data;
    if (typeof data === "string") {
      data = data ? JSON.parse(data) : data;
      response.data = data;
    }
    return response;
  },
  (error) => {
    window.$message.error("网络异常，请稍后再试");
    return Promise.reject(error);
  }
);

export default request;

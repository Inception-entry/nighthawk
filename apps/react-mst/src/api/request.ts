import axios from "axios";

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

export const Service = axios.create({
  timeout: 6000, //延迟时间
  baseURL: "http://localhost:12008",
  // method: "POST",
  headers: {
    "content-Type": "application/x-www-form-urlencoded",
  },
});

//请求拦截
Service.interceptors.request.use((config) => config);

//响应拦截
Service.interceptors.response.use(
  (response) => response.data,
  (err) => console.log(err)
);
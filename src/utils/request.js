import axios from "axios";

const baseURL = "https://api.ecarry.cc/api/";

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    // 在这里处理响应数据，比如统一处理错误码等等
    console.log('--res----', response.data);
    return response.data;
  },
  (error) => {
    // 在这里处理错误信息，比如统一弹出错误提示等等
    return Promise.reject(error);
  }
);

export default axiosInstance;

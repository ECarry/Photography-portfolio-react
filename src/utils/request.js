import axios from "axios";

const API_PRIMARY = "https://photography.ecarry.cc:88/api/";
const API_BACKUP = "https://api.ecarry.cc/api/";

const axiosInstance = axios.create({
  baseURL: API_PRIMARY,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isUsingPrimaryAPI = true;

axiosInstance.interceptors.response.use(
  (response) => {
    const data = response.data
    // 在这里处理响应数据，比如统一处理错误码等等
    // console.log('------data-----',data);

    return data;
  },
  (error) => {
    // 在这里处理错误信息，比如统一弹出错误提示等等
    if ((error.response && error.response.status === 404) || (error.code === 'ECONNABORTED')) {
      // 主 API 失败，切换到备用 API
      console.log('Switching to backup API');
      axiosInstance.defaults.baseURL = API_BACKUP;
      isUsingPrimaryAPI = false
      // 重试请求
      return axiosInstance.request(error.config);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;

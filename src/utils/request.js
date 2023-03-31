import axios from "axios";

const baseURL = "https://photography.ecarry.cc:88/api/";

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
    //console.log('--res----', response.data);
    const newData = response.data.map((item) => {
      return {
        ...item,
        image: item.image.replace('https://photography.ecarry.cc', 'https://photography.ecarry.cc:88'),
        thumbnail: item.thumbnail.replace('https://photography.ecarry.cc', 'https://photography.ecarry.cc:88'),
      };
    });
    return newData;
  },
  (error) => {
    // 在这里处理错误信息，比如统一弹出错误提示等等
    return Promise.reject(error);
  }
);

export default axiosInstance;

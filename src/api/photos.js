import axios from "axios";

const BASE_URL = "https://api.ecarry.cc/api/";

// 创建一个 axios 实例
const api = axios.create({
  baseURL: BASE_URL,
});

// 通用的 API 请求函数
export const fetchPhotos = async (path, params) => {
  try {
    const response = await api.get(path, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

import axiosInstance from "../utils/request";

const API_URL = "photos";

const getPhotos = async (params) => {
  try {
    const response = await axiosInstance.get(API_URL, {params});
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getPhotos;

import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://api.ecarry.cc/api/photos/')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return photos;
};

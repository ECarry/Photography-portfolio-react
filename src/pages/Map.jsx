import React, { useEffect, useState } from 'react';
import Mapbox from '../components/Mapbox';
import getPhotos from '../api/photos';

const Map = () => {
  const [ markers, setMarkers ]= useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [photos, setPhotos] = useState([])

  const processPhotos = (photos) => {
    return photos
      .map((item) => {
        const { id, lat, lon, thumbnail, altitude, image, timestamp, aperture, shutter_speed, iso } = item;
        if (lat === null || lon === null) {
          return null;
        }
        return {
          id,
          coordinates: [lon, lat],
          thumbnail,
          altitude,
          timestamp,
          image,
          aperture,
          shutter_speed,
          iso
        };
      })
      .filter(item => item !== null);
  };

  useEffect(() => {
    const fetchMyData = async () => {
      const response = await getPhotos();
      setPhotos(response);
    };
    fetchMyData();
  }, []);

  useEffect(() => {
    if (photos.length > 0) {
      const markers = processPhotos(photos);
      setMarkers(markers);
      setDataLoaded(true);
    }
  }, [photos]);

  return <section className='section fixed'>
    <div className='w-full h-full'>
      {dataLoaded ? (
        <Mapbox markers={markers} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-12 h-12 mb-4 rounded-full border-t-4 border-b-4 text-[#696c6d] animate-spin"></div>
          <p className="text-xl font-medium text-[#696c6d]">Loading...</p>
        </div>
      )}
    </div>
  </section>;
};

export default Map;

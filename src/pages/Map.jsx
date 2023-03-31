import React, { useEffect, useState } from 'react';
import Mapbox from '../components/Mapbox';
import getPhotos from '../api/photos';

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);

  const processPhotos = (photos) => {
    return photos
      .filter((item) => item.lat !== null && item.lon !== null)
      .map((item) => ({
        id: item.id,
        coordinates: [item.lon, item.lat],
        thumbnail: item.thumbnail,
        altitude: item.altitude,
        timestamp: item.timestamp,
        image: item.image,
        aperture: item.aperture,
        shutter_speed: item.shutter_speed,
        iso: item.iso
      }));
  };

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const response = await getPhotos();
        setLoading(false);
        setMarkers(processPhotos(response));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyData();
  }, []);

  return (
    <section className='section fixed'>
      <div className='w-full h-full'>
        {loading ? (
          <div className='flex flex-col items-center justify-center h-screen'>
            <div className='w-12 h-12 mb-4 rounded-full border-t-4 border-b-4 text-[#696c6d] animate-spin'></div>
            <p className='text-xl font-medium text-[#696c6d]'>Loading...</p>
          </div>
        ) : (
          <Mapbox markers={markers} />
        )}
      </div>
    </section>
  );
};

export default Map;

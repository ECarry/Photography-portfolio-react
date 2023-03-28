import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../api/photos';
import Photo from '../components/Photo'

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchMyData = async () => {
      const response = await fetchPhotos('/photos');
      setPhotos(response);
    };
    fetchMyData();
  }, []);

  return (
    <section className='section pt-[100px] md:pt-[140px]'>
      <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
        {/* TEXT */}
        <div className='pb-6 md:pb-10 md:mx-0'>
          <h1 className='h1'>Home</h1>
        </div>
        {/* IMG AND METADATA */}
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default Home;

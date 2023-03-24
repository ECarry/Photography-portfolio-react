import React from 'react';
import { fetchPhotos } from '../api/photos'
import { useEffect, useState } from "react";

import CameraParameters from '../components/CameraParameters';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchMyData = async () => {
      const response = await fetchPhotos("/photos");
      setPhotos(response);
    };
    fetchMyData();
  }, []);

  return <section className='section pt-[100px] md:pt-[140px]'>
  <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
    {/* TEXT */}
    <div className='pb-6 md:pb-10 md:mx-0'>
      <h1 className='h1'>Home</h1>
    </div>
    {/* IMG AND METADATA */}
    {photos.map( photo => (
      <div className='mb-6 md:mb-12' key={photo.id}>
        {/* IMG */}
        <div 
          className='flex justify-center items-center mb-5 shadow-lg md:py-10'>
          <LazyLoadImage
            alt=""
            height={photo.thumbnail_height}
            src={photo.thumbnail} // use normal <img> attributes as props
            width={photo.thumbnail_width}
            className="max-h-[620px] xl:max-h-[820px] object-contain"
          />
        </div>
        {/* METADATA */}
        <div className='flex justify-center items-center font-thin'>
          <CameraParameters photo={photo} />
        </div>
      </div>
    ))}
  </div>
</section>;
};

export default Home;

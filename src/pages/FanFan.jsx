import React from 'react';
import getPhotos from '../api/photos';
import { useEffect, useState } from "react";

import CameraParameters from '../components/CameraParameters';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const FanFan = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchMyData = async () => {
      const response = await getPhotos();
      setPhotos(response);
    };
    fetchMyData();
  }, []);

  return <section className='section pt-[100px] lg:pt-[140px]'>
  <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
    {/* TEXT */}
    <div className='pb-10 lg:mx-0'>
      <h1 className='h1'>FanFan</h1>
      <a href="https://space.bilibili.com/430726" target='_blank' className='text-[#696c6d] hover:text-primary transition'><p>跟着饭饭学摄影</p></a>
    </div>
    {/* IMG AND METADATA */}
    {photos.map( photo => (
      <div className='mb-12' key={photo.id}>
        {/* IMG */}
        <div 
          className='flex justify-center items-center mb-5 shadow-lg'>
          {/* <img 
            src={photo.thumbnail} 
            alt="" 
            className='max-h-[620px] xl:max-h-[820px] object-contain'
          /> */}
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

export default FanFan;

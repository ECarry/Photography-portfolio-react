import React, { useEffect, useState } from 'react';
import getPhotos from '../api/photos';
import Photo from '../components/Photo';

const FanFan = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // 在 useEffect 中使用 try...catch 捕获异常，避免代码运行出错后无法继续执行
    const fetchMyData = async () => {
      try {
        const response = await getPhotos({ category: 2 });
        setPhotos(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMyData();
  }, []);

  return (
    <section className='section pt-[100px] lg:pt-[140px]'>
      <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
        {/* TEXT */}
        <div className='pb-10 lg:mx-0'>
          <h1 className='h1'>FanFan</h1>
          <a
            href='https://space.bilibili.com/430726'
            target='_blank'
            rel='noreferrer'
            className='text-[#696c6d] hover:text-primary transition'
          >
            <p>跟着饭饭学摄影</p>
          </a>
        </div>
        {/* IMG AND METADATA */}
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default FanFan;

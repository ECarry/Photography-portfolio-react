import React, { useEffect, useState } from 'react';
import Photo from '../components/Photo'
import getPhotos from '../api/photos';

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // 在 useEffect 中使用 try...catch 捕获异常，避免代码运行出错后无法继续执行
    const fetchMyData = async () => {
      try {
        const response = await getPhotos({category: 1});
        setPhotos(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMyData();
  }, []);
  return (
    <section className='section pt-[60px] md:pt-[100px]'>
      <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
        {/* TEXT */}
        <div className='pb-4 md:pb-6 md:mx-0'>
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

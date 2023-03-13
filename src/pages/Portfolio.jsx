import { React, useState } from 'react';
import photos from '../components/Gallery';
import PhotoAlbum from "react-photo-album";

const Portfolio = () => {
  return <section className='section mt-[100px] lg:mt-[140px] overflow-y-scroll'>
    <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
      {/* TEXT */}
      <div className='pb-10 lg:mx-0'>
        <h1 className='h1'>Portfolio</h1>
      </div>
      {/* IMAGES */}
      <PhotoAlbum 
        photos={photos} 
        layout="masonry"
      />
    </div>
  </section>;
};

export default Portfolio;

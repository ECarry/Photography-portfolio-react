import { React, useState, useEffect } from 'react';
import PhotoAlbum from "react-photo-album";
import axios from 'axios'

const renderPhoto = ({ imageProps: { alt, ...restImageProps } }) => (
  <div style={{ border: "1px solid black" }}>
    <img alt={alt} style={{ width: "100%", height: "auto" }} {...restImageProps} />
  </div>
);

const Portfolio = () => {
  const [ photos, setPhotos ] = useState([])

  useEffect(() => {
    axios
      .get("https://api.ecarry.cc/api/photos/")
      .then( response => {
        const data = response.data;
        const photos = data.map( photo => {
          const { id, thumbnail, thumbnail_width, thumbnail_height } = photo;
          return { id, src: thumbnail, width: thumbnail_width, height: thumbnail_height };
        });
        setPhotos(photos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <section className='section pt-[100px] lg:pt-[140px]'>
    <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
      {/* TEXT */}
      <div className='pb-10 lg:mx-0'>
        <h1 className='h1'>Portfolio</h1>
      </div>
      {/* IMAGES */}
      <>
        <PhotoAlbum photos={photos} layout="masonry" renderPhoto={renderPhoto}/>
      </>
    </div>
  </section>;
};

export default Portfolio;

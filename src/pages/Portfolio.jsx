import { React, useState, useEffect } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from '../components/Lightbox';
import axios from 'axios'

const renderPhoto = ({ imageProps: { alt, ...restImageProps } }) => (
  <div>
    <img alt={alt} style={{ width: "100%", height: "auto" }} {...restImageProps} />
  </div>
);

const Portfolio = () => {
  const [ photos, setPhotos ] = useState([])
  const [ photo, setPhoto] = useState([])
  const [ showLightbox, setShowLightbox ] = useState(false)

  useEffect(() => {
    axios
      .get("https://api.ecarry.cc/api/photos/")
      .then( response => {
        const data = response.data;
        const photos = data.map( photo => {
          const { id, image, thumbnail, thumbnail_width, thumbnail_height, timestamp, rating, lat, lon, altitude, aperture, iso, shutter_speed, focal_length, camera_brand, camera_model, camera_lens} = photo;
          return { id, image, src: thumbnail, width: thumbnail_width, height: thumbnail_height, exif: {timestamp, rating, lat, lon, altitude, aperture, iso, shutter_speed, focal_length, camera_brand, camera_model, camera_lens} };
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
        <PhotoAlbum 
          photos={photos} 
          layout="masonry" 
          renderPhoto={renderPhoto}
          onClick={(photos) => {
            console.log(photos.photo);
            setPhoto(photos.photo)
            setShowLightbox(true)
          }}
        />
      </>
      {/* LIGHTBOX  */}
      {showLightbox && (
        <Lightbox
          image={photo.image}
          exif={photo.exif}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </div>
  </section>;
};

export default Portfolio;

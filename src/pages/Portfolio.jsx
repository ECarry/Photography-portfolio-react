import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from '../components/Lightbox';
import getPhotos from '../api/photos';

const renderPhoto = ({ imageProps: { alt, style: { borderRadius, overflow, boxShadow, transition, ...restStyle }, ...restImageProps } }) => (
  <img 
    alt={alt} 
    style={{
      ...restStyle,
      borderRadius: "10px",
      overflow: 'hidden',
      boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
      transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    }}
    {...restImageProps}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.03)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
    }}
  />
);

const Portfolio = () => {
  const [ photos, setPhotos ] = useState([]);
  const [ photo, setPhoto ] = useState([]);
  const [ showLightbox, setShowLightbox ] = useState(false);

  const handleOpenLightbox = () => {
    document.body.style.overflowY = "hidden";
    setShowLightbox(true);
  };

  const handleCloseLightbox = () => {
    document.body.style.overflowY = "auto";
    setShowLightbox(false);
  };
  
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getPhotos();
        const photos = data.map(({ id, image, thumbnail, thumbnail_width, thumbnail_height, timestamp, rating, lat, lon, altitude, aperture, iso, shutter_speed, focal_length, camera_brand, camera_model, camera_lens }) => ({
          id,
          image,
          src: thumbnail,
          width: thumbnail_width,
          height: thumbnail_height,
          exif: {
            timestamp,
            rating,
            lat,
            lon,
            altitude,
            aperture,
            iso,
            shutter_speed,
            focal_length,
            camera_brand,
            camera_model,
            camera_lens,
          },
        }));
        setPhotos(photos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPhotos();
  }, []);

  const LAYOUT = "masonry";
  const COLUMNS = 3;
  const PADDING = 10;
  const SPACING = 20;

  return (
    <section className="section pt-[60px] lg:pt-[100px]">
      <div className="w-full max-w-7xl mx-auto p-6 lg:px-8">
        {/* TEXT */}
        <div className="pb-10 lg:mx-0">
          <h1 className="h1">Portfolio</h1>
        </div>
        {/* IMAGES */}
        <PhotoAlbum 
          photos={photos} 
          layout={LAYOUT} 
          columns={COLUMNS}
          padding={PADDING}
          spacing={SPACING}
          renderPhoto={renderPhoto}
          onClick={(photos) => {
            setPhoto(photos.photo);
            handleOpenLightbox();
          }}
        />
        {/* LIGHTBOX */}
        {showLightbox && (
          <Lightbox
            image={photo.image}
            exif={photo.exif}
            onClose={() => {
              handleCloseLightbox();
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;

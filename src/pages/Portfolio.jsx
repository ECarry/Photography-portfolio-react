import { React, useState } from 'react';
import photos from '../components/Gallery';
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
  })),
}));

const Portfolio = () => {
  const [index, setIndex] = useState(-1);

  return <section className='section mt-[100px] lg:mt-[140px] overflow-y-scroll'>
    <div className='w-full max-w-7xl mx-auto p-6 lg:px-8'>
      {/* TEXT */}
      <div className='pb-10 lg:mx-0'>
        <h1 className='h1'>Portfolio</h1>
      </div>
      {/* IMAGES */}
      <>
        <PhotoAlbum photos={photos} layout="masonry" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

        <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </>
    </div>
  </section>;
};

export default Portfolio;

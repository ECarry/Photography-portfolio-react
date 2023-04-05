import { useState } from 'react'
import CameraParameters from '../components/CameraParameters';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from "react-blurhash";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
`;

const StyledBlurhash = styled(Blurhash)`
  z-index: 20;
  position: absolute !important;
  top: 0;
  left: 0;
`;

const Photo = ({ photo }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };

  return (
    <div
      className='mb-6'>
      {/* IMG */}
      <div className='flex flex-col gap-2 justify-center items-center mb-5 shadow-lg md:p-5'>
        <ImageWrapper>
          <LazyLoadImage
            src={photo.image}
            onLoad={handleLoad}
            width={photo.thumbnail_width}
            height={photo.thumbnail_height}
            className='max-h-[820px] object-contain'
            beforeLoad={handleLoadStarted}
          />
          {!isLoaded && isLoadStarted && (
            <StyledBlurhash
              className='max-h-[820px] object-contain'
              hash={photo.hash_code}
              width={photo.thumbnail_width}
              height={photo.thumbnail_height}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
          {/* METADATA */}
          <CameraParameters photo={photo} />
        </ImageWrapper>
      </div>
    </div>
  );
};

export default Photo;

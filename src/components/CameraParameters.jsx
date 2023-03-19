import React from 'react';

import { RiStarFill, RiStarLine } from 'react-icons/ri';

import DJI from '../assets/DJI.svg'
import SONY from '../assets/SONY.png'
import CANON from '../assets/CANON.png'
import APPLE from '../assets/APPLE.png'
import NIKON from '../assets/NIKON.png'
import FUJIFILM from '../assets/FUJIFILM.png'


const CameraParameters = (props) => {
  const photo = props.photo

  const fullStars = Math.floor(photo.rating);
  const halfStar = photo.rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<RiStarFill key={`star-${i}`} />);
  }

  if (halfStar) {
    stars.push(<RiStarFill key="star-half" half />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<RiStarLine key={`empty-star-${i}`} />);
  }


  return <div className='flex w-full justify-between items-center md:px-10 text-[#696c6d]'>
    {/* CAMERA TEXT */}
    <div className='text-center'>
      <span className='md:text-xl font-medium'>{photo.camera_brand} {photo.camera_model}</span>
      <p className='hidden md:block'>{photo.camera_lens}</p>
    </div>

    {/* CAMERA PARAS */}
    {photo.camera_brand && <div className='flex items-center gap-4'>
      {/* CAMERA LOGO */}
      <div className='flex items-center w-5 h-5 md:w-10 xl:h-10'>
        {(() => {
          switch (photo.camera_brand) {
            case 'Sony':
              return <img src={SONY} alt="" />;
            case 'SONY':
              return <img src={SONY} alt="" />;
            case 'DJI':
              return <img src={DJI} alt="" />;
            case 'NIKON':
              return <img src={NIKON} alt="" />;
            case 'Canon':
              return <img src={CANON} alt="" />;
            case 'APPLE':
              return <img src={APPLE} alt="" />;
            case 'FUJIFILM':
              return <img src={FUJIFILM} alt="" />;
            default:
              return null;
          }
        })()}
      </div>

      {/* PARAS */}
      <div className='font-medium flex gap-x-3'>
        {photo.focal_length && <span>{photo.focal_length}mm</span>}
        {photo.aperture && <span>f/{photo.aperture}</span>}
        {photo.shutter_speed && <span>{photo.shutter_speed}s</span>}
        {photo.iso && <span>ISO{photo.iso}</span>}
      </div>
    </div>
    }
  </div>;
};

export default CameraParameters;

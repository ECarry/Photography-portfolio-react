import React from 'react';

import { RiCameraLensLine, RiTimer2Line, RiCameraLensFill, RiCameraLine, RiStarFill, RiStarHalfFill, RiStarLine, RiCompass3Line } from 'react-icons/ri';

import Iso from '../assets/iso.png'

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
    {/* <ul className='flex gap-x-4 text-[#696c6d] cursor-default'>
      <li className='flex items-center'>{stars}</li>
    </ul>
    <ul className='flex gap-x-4 text-[#696c6d] cursor-default'>
      <li className='flex items-center flex-wrap'><RiCameraLine /><p className='ml-2'>{photo.camera_brand} {photo.camera_model}</p></li>
      <li className='flex items-center'><RiCameraLensFill /><p className='ml-2'>{photo.camera_lens}</p></li>
      <li className='flex items-center'><RiCameraLensLine /><p className='ml-2'>{photo.aperture}</p></li>
      <li className='flex items-center'><RiTimer2Line /><p className='ml-2'>{photo.shutter_speed}</p></li>
      <li className='flex items-center'><img src={Iso} alt="My Image" className='max-w-[24px]' /><p className='ml-2'>{photo.iso}</p></li>
    </ul>
    <ul className='flex gap-x-4 text-[#696c6d] cursor-default'>
      <li className='flex items-center cursor-pointer hover:text-[#363a3c] transition'><RiCompass3Line /></li>
    </ul> */}

    {/* CAMERA TEXT */}
    <div className='text-center'>
      <span className='md:text-xl font-medium'>{photo.camera_brand} {photo.camera_model}</span>
      <p className='hidden md:block'>{photo.camera_lens}</p>
    </div>

    {/* CAMERA PARAS */}
    <div className='flex items-center gap-4'>
      {/* LENS LOGO */}
      <div className='flex items-center w-5 h-5 md:w-10 xl:h-10'>
        <img src="https://cdn-icons-png.flaticon.com/512/5969/5969288.png" alt="" />
      </div>

      {/* PARAS */}
      <div className='font-medium flex gap-x-3'>
        <span>{photo.focal_length}mm</span> <span>f/{photo.aperture}</span> <span>{photo.shutter_speed}s</span> <span>ISO{photo.iso}</span>
      </div>
    </div>
  </div>;
};

export default CameraParameters;

import React from 'react';

import { RiCameraLensLine, RiTimer2Line, RiCameraLensFill, RiCameraLine, RiStarFill, RiStarHalfFill, RiStarLine, RiCompass3Line } from 'react-icons/ri';


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


  return <div className='flex gap-x-4'>
    <ul className='flex gap-x-4 text-[#696c6d] cursor-default'>
      <li className='flex items-center'>{stars}</li>
    </ul>
    <ul className='flex gap-x-4 text-[#696c6d] cursor-default'>
      <li className='flex items-center flex-wrap'><RiCameraLine /><p className='ml-2'>{photo.camera_brand} {photo.camera_model}</p></li>
      <li className='flex items-center'><RiCameraLensFill /><p className='ml-2'>{photo.camera_lens}</p></li>
      <li className='flex items-center'><RiCameraLensLine /><p className='ml-2'>{photo.aperture}</p></li>
      <li className='flex items-center'><RiTimer2Line /><p className='ml-2'>{photo.shutter_speed}</p></li>
      <li className='flex items-center'><span className='font-medium'>iso</span><p className='ml-2'>{photo.iso}</p></li>
    </ul>
    <ul className='flex gap-x-4 text-[#696c6d] cursor-default'>
      <li className='flex items-center cursor-pointer hover:text-[#363a3c] transition'><RiCompass3Line /></li>
    </ul>
  </div>;
};

export default CameraParameters;

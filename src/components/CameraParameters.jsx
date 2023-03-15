import React from 'react';

import { RiCameraLensLine, RiTimer2Line, RiCameraLine, RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';

const CameraParameters = (props) => {
  const photo = props.photo

  return <div className='flex gap-x-4'>
    <ul className='flex gap-x-4 text-[#696c6d]'>
      <li className='flex items-center'><p className='mr-2'>评分:</p><RiStarFill /><RiStarFill /><RiStarFill /><RiStarHalfFill /><RiStarLine /></li>
    </ul>
    <ul className='flex gap-x-4 text-[#696c6d]'>
      <li className='flex items-center'><RiCameraLine /><p className='ml-2'>{photo.camera_brand}</p></li>
      <li className='flex items-center'><RiCameraLensLine /><p className='ml-2'>{photo.camera_lens}</p></li>
      <li className='flex items-center'><RiTimer2Line /><p className='ml-2'>{photo.shutter_speed}</p></li>
    </ul>
  </div>;
};

export default CameraParameters;

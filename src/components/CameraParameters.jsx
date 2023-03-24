import React from 'react';
import DJI from '../assets/DJI.svg';
import SONY from '../assets/SONY.png';
import CANON from '../assets/CANON.png';
import APPLE from '../assets/APPLE.png';
import NIKON from '../assets/NIKON.png';
import FUJIFILM from '../assets/FUJIFILM.png';

const brandLogos = {
  Sony: SONY,
  SONY: SONY,
  DJI: DJI,
  NIKON: NIKON,
  Canon: CANON,
  APPLE: APPLE,
  FUJIFILM: FUJIFILM,
};

const CameraParameters = ({ photo }) => {
  const {
    camera_brand,
    camera_model,
    camera_lens,
    focal_length,
    aperture,
    shutter_speed,
    iso,
    altitude,
  } = photo;

  return (
    <div className="flex justify-center w-full md:justify-between items-center md:px-10 text-gray-600">
      {/* CAMERA TEXT */}
      <div className="text-center hidden md:block">
        <span className="md:text-xl font-medium">{camera_brand} {camera_model}</span>
        {camera_lens && <p>{camera_lens}</p>}
      </div>

      {/* CAMERA PARAS */}
      {camera_brand && (
        <div className="flex items-center gap-4">
          {/* CAMERA LOGO */}
          <div className="flex justify-center items-center w-10 h-10">
            {brandLogos[camera_brand] && <img src={brandLogos[camera_brand]} alt="" />}
          </div>

          {/* PARAS */}
          <div className="font-medium flex gap-x-3">
            {focal_length && <span>{focal_length}mm</span>}
            {aperture && <span>f/{aperture}</span>}
            {shutter_speed && <span>{shutter_speed}s</span>}
            {iso && <span>ISO{iso}</span>}
            {altitude && <span>{altitude}m</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraParameters;

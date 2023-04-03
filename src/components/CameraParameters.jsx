import React from 'react';
import DJI from '../assets/DJI.svg';
import Sony from '../assets/Sony.svg';
import Canon from '../assets/Canon.svg';
import APPLE from '../assets/APPLE.svg';
import Nikon from '../assets/Nikon.svg';
import FUJIFILM from '../assets/FUJIFILM.svg';

const brandLogos = {
  Sony: Sony,
  SONY: Sony,
  DJI: DJI,
  NIKON: Nikon,
  Canon: Canon,
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
    lat,
    lon,
  } = photo;

  function formatDegrees(num) {
    const d = parseInt(num);
    const m = Math.abs(parseInt((num - d) * 60));
    const s = Math.abs(parseInt((((num - d) * 60) - m) * 60));
    return `${d}°${m}'${s}"`;
  }
  
  function convertCoordinates(lat, lon) {
    if (lat === null || lat === undefined || lon === null || lon === undefined) {
      return "";
    }  
    const latDirection = lat >= 0 ? "N" : "S";
    const lonDirection = lon >= 0 ? "E" : "W";
    const latDegrees = formatDegrees(lat);
    const lonDegrees = formatDegrees(lon);
    return `${latDegrees} ${latDirection} ${lonDegrees} ${lonDirection}`;
  }
  
  const coordinates = convertCoordinates(lat, lon)

  return (
    <div className="flex w-full justify-between items-center p-2 md:px-10 text-gray-600 font-jura">
      {/* CAMERA TEXT */}
      <div className="text-center">
        <span className="text-sm md:text-xl font-medium">{camera_model}</span>
        {camera_lens && <p className='text-gray-400 text-[8px] md:text-sm'>{camera_lens}</p>}
      </div>

      {/* CAMERA PARAS */}
      {camera_brand && (
        <div className="flex items-center gap-2">
          {/* CAMERA LOGO */}
          <div className="flex justify-center items-center max-w-[20px] md:max-w-[80px]">
            {brandLogos[camera_brand] && <img src={brandLogos[camera_brand]} alt="" />}
          </div>

          <span className="border-r-2 border-gray-200 h-6 md:h-10"></span>

          {/* PARAS */}
          <div className='felx flex-row'>
            <div className="text-xs font-bold flex gap-2 md:text-base font-pacifico">
              {focal_length && <span>{focal_length}mm</span>}
              {aperture && <span>f/{aperture}</span>}
              {shutter_speed && <span>{shutter_speed}s</span>}
              {iso && <span>iso{iso}</span>}
            </div>

            <div className="font-thin flex gap-2 text-gray-400 text-[8px] md:text-sm">
              <span>{coordinates}</span>
              {altitude && <span>{altitude}m</span>}
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraParameters;

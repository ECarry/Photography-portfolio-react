import { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import { RiCameraLensFill } from 'react-icons/ri'
import { IoTimerOutline } from 'react-icons/io5'
import isoImg from '../assets/iso.png'
import focalLengthImg from '../assets/focal-length.png'
import axios from 'axios';


const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="text-xs font-medium mb-1">
      <div className="flex text-sm font-semibold gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <BsStarFill key={`full-star-${index}`} />
        ))}
        {hasHalfStar && <BsStarHalf />}
        {[...Array(emptyStars)].map((_, index) => (
          <BsStar key={`empty-star-${index}`} />
        ))}
      </div>
    </div>
  );
};

const Parameter = ({ icon, text }) => (
  <span className="flex gap-1 items-center">
    {icon}
    {text}
  </span>
);

const Lightbox = ({ image, exif, onClose }) => {
  const [ isClosed, setIsClosed ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ location, setLocation  ] = useState()

  const access_token = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;

  const handleClose = () => {
    setIsClosed(true);
    onClose();
  };

  useEffect(() => {
    if (exif.lon) {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${exif.lon},${exif.lat}.json?language=zh_hans&types=place&access_token=${access_token}`;
      axios.get(url)
      .then(res => {
        const { features } = res.data
        console.log(features[0].place_name);
        setLocation(features[0].place_name)
      })
    }else setLocation('--')
  })

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen bg-white z-50 flex flex-col transition-all ${
        isClosed ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* CLOSE BUTTON  */}
      <div className="h-20 flex justify-end p-2">
        <button className="bg-white rounded-full p-2" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* IMAGE */}
      <div className="flex flex-1 items-center justify-center">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-12 h-12 mb-4 rounded-full border-t-4 border-b-4 text-[#696c6d] animate-spin"></div>
            <p className="text-xl font-medium text-[#696c6d]">Loading...</p>
          </div>
        )}
        <div className="max-w-full">
          <img
            src={image}
            alt="lightbox"
            className="max-h-[80vh] max-w-screen"
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>
      </div>
      {/* EXIF INFO  */}
      <div className="h-20">
        <div className="flex justify-center gap-2 md:gap-10 ">

          <div className="text-center p-2">
            <div className="text-xs font-medium text-gray-400 mb-1">评分</div>
            <Rating rating={exif.rating} />
          </div>

          <div className='text-center p-2'>
            <div className="text-xs font-medium text-gray-400 mb-1">相机</div>
            <div className="text-sm font-thin text-gray-600">{exif.camera_brand ? (exif.camera_brand + ' ' + exif.camera_model) : '--'}</div>
          </div>

          <div className='text-center p-2'>
            <div className="text-xs font-medium text-gray-400 mb-1">镜头</div>
            <div className="text-sm font-thin text-gray-600">{exif.camera_lens ? exif.camera_lens : '--'}</div>
          </div>

          <div className='text-center p-2'>
            <div className="text-xs font-medium text-gray-400 mb-1">参数</div>
            <div className="flex items-center gap-2 text-sm font-thin text-gray-600">
              <Parameter icon={<img src={focalLengthImg} alt="focalLength" className="max-h-[16px]" />} text={exif.focal_length ? `${exif.focal_length}mm` : '--'}/>
              <Parameter icon={<RiCameraLensFill/>} text={exif.aperture ? `f/${exif.aperture}` : '--'} />
              <Parameter icon={<IoTimerOutline/>} text={exif.shutter_speed ? `${exif.shutter_speed}` : '--'} />
              <Parameter icon={<img src={isoImg} alt="ISO" className='max-h-[16px]' />} text={exif.iso ? `${exif.iso}` : '--'} />
            </div>
          </div>

          { exif.altitude && <div className='text-center p-2'>
            <div className="text-xs font-medium text-gray-400 mb-1">高度</div>
            <div className="text-sm font-thin text-gray-600">{exif.altitude ? exif.altitude : '--'}m</div>
          </div> }

          <div className='text-center cursor-pointer hover:shadow-lg duration-300 p-2'>
            <div className="text-xs font-medium text-gray-400 mb-1">地点</div>
            <div className="text-sm font-thin text-gray-600">{location}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Lightbox;

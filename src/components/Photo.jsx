import CameraParameters from '../components/CameraParameters';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Photo = ({ photo }) => {
  return (
    <div className='mb-6'>
      {/* IMG */}
      <div className='flex justify-center items-center mb-5 shadow-lg md:py-10'>
        <LazyLoadImage
          alt=''
          height={photo.thumbnail_height}
          src={photo.thumbnail}
          width={photo.thumbnail_width}
          className='max-h-[620px] xl:max-h-[820px] object-contain'
        />
      </div>
      {/* METADATA */}
      <div className='flex justify-center items-center font-thin'>
        <CameraParameters photo={photo} />
      </div>
    </div>
  );
};

export default Photo;

import CameraParameters from '../components/CameraParameters';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Photo = ({ photo }) => {
  return (
    <div className='mb-6'>
      {/* IMG */}
      <div className='flex justify-center items-center mb-5 shadow-lg md:p-5'>
        <LazyLoadImage
          alt=''
          height={photo.height}
          width={photo.width}
          src={photo.image}
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

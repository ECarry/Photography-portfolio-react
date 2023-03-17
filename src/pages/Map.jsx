import React, { useEffect, useState } from 'react';
import Mapbox from '../components/Mapbox';

import { useFetchPhotos } from '../hooks/usePhotos'

const Map = () => {
  const [ markers, setMarkers ]= useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const photos = useFetchPhotos()

  useEffect(() => {
    if (photos.length > 0) {
      const markers = photos.map((item) => {
        const { id, lat, lon, thumbnail } = item;
        // 如果lat或者lon为null，则跳过此照片对象
        if (lat === null || lon === null) {
          return null;
        }
        return {
          id,
          coordinates: [lon, lat],
          thumbnail,
        };
      }).filter(item => item !== null); // 移除数组中为null的元素
      setMarkers(markers);
      setDataLoaded(true);
    }
  }, [photos]);

  return <section className='section fixed'>
    <div className='w-full h-full'>
      {dataLoaded ? (
        <Mapbox markers={markers} />
      ) : (
        <div className='flex justify-center h-full items-center'><p>Loading data...</p></div>
      )}
    </div>
  </section>;
};

export default Map;

import React from 'react';
import Mapbox from '../components/Mapbox';

const Map = () => {
  const markers = [
    { id: 1, coordinates: [118.0799855, 24.439984166666665], title: 'Marker 1' }
  ];

  return <section className='section fixed'>
    <div className='w-full h-full'>
      <Mapbox markers={markers}/>
    </div>
  </section>;
};

export default Map;

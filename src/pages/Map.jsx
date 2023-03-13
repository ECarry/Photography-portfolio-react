import React from 'react';
import Mapbox from '../components/Mapbox';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions'

const Map = () => {
  const markers = [
    { id: 1, coordinates: [118.0799855, 24.439984166666665], title: 'Marker 1' }
  ];

  return <motion.section 
    initial={{ opacity: 0, y: '100%' }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y:'100%' }} 
    transition={ transition1 }
    className='section'>
    <div className='w-full h-full'>
      <Mapbox markers={markers}/>
    </div>
  </motion.section>;
};

export default Map;

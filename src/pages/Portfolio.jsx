import React from 'react';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions'

import Gallery from '../components/Gallery';

const Portfolio = () => {
  return <motion.section 
    initial={{ opacity: 0, y: '100%' }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y:'100%' }} 
    transition={ transition1 }
    className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='h-full pt-20'>
        <Gallery />
      </div>
    </div>
  </motion.section>;
};

export default Portfolio;

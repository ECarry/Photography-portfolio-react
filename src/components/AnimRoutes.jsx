import React from 'react';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import FanFan from '../pages/Fanfan';
import Map from '../pages/Map';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/fanfan' element={<FanFan />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;

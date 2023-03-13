import React from 'react';
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'

import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;

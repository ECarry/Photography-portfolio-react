import React from 'react';

import Socials from './Socials';
import MobileNav from './MobileNav';

import Logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='fixed top-0 left-0 w-full z-30 h-[100px] md:h-[140px] flex items-center backdrop-blur'>
    <div className='flex w-full items-center justify-between max-w-7xl mx-auto p-6 md:px-8'>
      {/* LOGO */}
      <Link to={'/'} className='max-w-[250px]'>
        <img src={Logo} alt='' />
      </Link>
      {/* NAV */}
      <nav className='hidden md:flex gap-x-12 font-semibold'>
        <Link to={'/'} className="text-[#696c6d] hover:text-primary transition">Home</Link>
        <Link to={'/portfolio'} className="text-[#696c6d] hover:text-primary transition">Portfolio</Link>
        <Link to={'/fanfan'} className="text-[#696c6d] hover:text-primary transition">FanFan</Link>
        <Link to={'/map'} className="text-[#696c6d] hover:text-primary transition">Map</Link>
      </nav>
      {/* SOCIALS */}
      <Socials />
      {/* MOBILE NAV */}
      <MobileNav />
    </div>
  </header>;
};

export default Header;

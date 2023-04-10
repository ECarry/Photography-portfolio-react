import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    }
  }
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null)

  useEffect(() => {
    const handleMouseDown = (e) => {
      // 判断点击事件是否发生在菜单之外的区域
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    // 添加全局鼠标事件监听器
    document.addEventListener("mousedown", handleMouseDown);
    // 在组件销毁时移除全局鼠标事件监听器
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [menuRef]);

  return <nav className='text-primary md:hidden'>
    {/* NAV OPEN BUTTON */}
    <div onClick={() => setOpenMenu(prev => !prev)} className='text-3xl cursor-pointer'>
      <CgMenuRight />
    </div>
    {/* MENU */}
    <motion.div 
      variants={menuVariants} 
      initial='hidden'
      animate={openMenu ? 'show' : ''}
      ref={menuRef}
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      {/* ICON */}
      <div onClick={() => setOpenMenu(false)} className='text-4xl absolute left-4 top-14 text-primary cursor-pointer'>
        <IoMdClose />
      </div>
      {/* MENU LIST */}
      <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-3xl text-primary font-jura font-bold'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/portfolio'}>Portfolio</Link></li>
        <li><Link to={'/fanfan'}>FanFan</Link></li>
        <li><Link to={'/map'}>Map</Link></li>
      </ul>
    </motion.div>
  </nav>;
};

export default MobileNav;

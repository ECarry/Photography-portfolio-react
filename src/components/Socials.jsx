import React from 'react';

import { ImTwitter, ImPinterest, ImInstagram, ImSinaWeibo, ImGithub } from 'react-icons/im';
import { SiBilibili } from 'react-icons/si';

const Socials = () => {
  return <div className='hidden md:flex ml-24'>
    <ul className='flex gap-x-4 text-[#696c6d]'>
      <li><a href='https://www.bilibili.com' target='_blank' className='hover:text-primary transition'><SiBilibili /></a></li>
      <li><a href='https://www.twitter.com' target='_blank' className='hover:text-primary transition'><ImTwitter /></a></li>
      <li><a href='https://www.pinterest.com' target='_blank' className='hover:text-primary transition'><ImPinterest /></a></li>
      <li><a href='https://www.instagram.com' target='_blank' className='hover:text-primary transition'><ImInstagram /></a></li>
      <li><a href='https://www.weibo.com' target='_blank' className='hover:text-primary transition'><ImSinaWeibo /></a></li>
      <li><a href='https://github.com/ecarry' target='_blank' className='hover:text-primary transition'><ImGithub /></a></li>
    </ul>
  </div>;
};

export default Socials;

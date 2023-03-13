import React from 'react';

import { ImTwitter, ImPinterest, ImInstagram, ImSinaWeibo } from 'react-icons/im';
import { SiBilibili } from 'react-icons/si';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href='https://www.bilibili.com' target='_blank'><SiBilibili /></a></li>
      <li><a href='https://www.twitter.com' target='_blank'><ImTwitter /></a></li>
      <li><a href='https://www.pinterest.com' target='_blank'><ImPinterest /></a></li>
      <li><a href='https://www.instagram.com' target='_blank'><ImInstagram /></a></li>
      <li><a href='https://www.weibo.com' target='_blank'><ImSinaWeibo /></a></li>
    </ul>
  </div>;
};

export default Socials;

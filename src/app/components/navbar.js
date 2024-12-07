'use client'
import { useState } from 'react';
import React from 'react';
import { usePathname } from 'next/navigation'
import StreamIcon from '@mui/icons-material/Stream';
import Image from 'next/image';
import NavOption from './nav/navbar-option';
import ApiIcon from '@mui/icons-material/Api';


import PortraitIcon from '@mui/icons-material/Portrait'; //about me 
import BrushIcon from '@mui/icons-material/Brush'; // project
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'; // contact me


import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import GlobalIcon from './wrapper';
const VerticalNavBar = ({ activeSection }) => {

  const [expanded,setExpanded] = useState(false)


  const navItems = [
    {name: 'Intro',path :'#intro', section: 'intro',icon: <PortraitIcon fontSize='medium'/>},
    // { name: 'About', path: '#about', section: 'about',icon: <PortraitIcon fontSize='medium'/> },
    { name: 'Projects', path: '#projects', section: 'projects',icon: <BrushIcon fontSize='medium'/> },
    { name: 'Contact', path: '#contact', section: 'contact',icon: <PhoneEnabledIcon fontSize='medium'/> },
  ];

  return (
    <div className={`hidden lg:flex fixed top-0 left-0 flex-col h-screen ${expanded === true ? ' w-32 ' : 'w-16'}  bg-[#373832] text-white  duration-300 ease-in-out `}>

     

      <div className='flex text-center mx-auto mt-8 mb-4 '>
        <ApiIcon fontSize='large'/>
      </div>

      <div className=' mb-6 border-white/[.3]'>

      </div>

      
      <ul className="flex flex-col justify-center items-start divide-y divide-white/[.1] first:border-t last:border-b border-white/[.1]  ">
        {navItems.map((item) => (
          <NavOption key={item.name} item={item} icon={item.icon} expanded={expanded}/>
        ))}
      </ul>

      <button className={`flex text-end items-end self-end w-min 2xl:mt-16  bg-[#30302d]  rounded-full aspect-square mt-5 translate-x-3 duration-300 transition ease-in-out ${expanded === true ? 'rotate-180' : ''}`} onClick={()=>setExpanded(!expanded)}>
        <GlobalIcon sx={{cursor:'pointer'}}>
          <KeyboardArrowRightIcon />
        </GlobalIcon>
      </button>

    </div>
  );
};

export default VerticalNavBar;






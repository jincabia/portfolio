'use client'
import { useState, useEffect,useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import GlobalIcon from './wrapper';

export default function Intro({introRef,intro})
{
    return(
        <>
        {/* Intro */} 
     <div id='intro' ref={introRef} className="md:flex  md:justify-center md:pb-64 md:pt-16 md:mb-56 snap-start    md:space-x-4 mb-1/4  " >
    
    {/* Intro  */}

    <div   className=' border   w-fit   md:-translate-x-4 md:translate-y-4  mb-10 md:mb-0  md:pt-0
          '>
      <Image
      // src={"/swagcropped.jpg"}
      src={"/profile-pic-crop-bg-color.png"}
      width={300}
      height={300}
      alt='Jins Photo'
      className='  border border-white/5  duration-300 translate-x-4 -translate-y-4 ease-in-out hover:scale-[1.02]' 
      quality={100}
      priority={true}
      />

    </div>


    <div 
    
      className={`  sm:w-full md:w-1/3 pb-4 md:pb-0 md:p-4  md:pt-0`}>

      <p className={` font-semibold text-white/[.75] text-sm }
      `}>
          {intro.map((word, index) => (
            <span
              key={index}
              className="inline-block animate-slide-down opacity-0"
              style={{ animationDelay: `${index * 0.5}s` }} 
            >
              {word}&nbsp; {/* Adding space between words */}
            </span>
          ))}
      </p>


      <div
       style={{ animationDelay: `${.9}s` }}
      className={` opacity-0  translate-x-[-20px] animate-slide-in  `}>
        <h1 className="text-3xl font-bold text-yellow-200  ">Jin Francis Cabia</h1>
        <p className="text-white/[.75] font-semibold text-sm " >Recent Software Graduate</p>
       
        <p className="flex items-center text-[#ECDFCC]/60 text-sm md:pt-4">
          I think codings cool.
        </p>

    
        {/* Links to Email, Github,  Linkedin */}
        <div className={`flex pb-4 pt-4 space-x-2 mt-4 border-t border-white/[0.5] text-white/[.5]
          `}>

          <a href='mailto:jinfcabia@gmail.com' 
          target="_blank" 
          rel="noopener noreferrer" 
          >
            <GlobalIcon>

              <EmailIcon  
              // className='hover:scale-125 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-yellow-200 rounded-md animate-loadIn opacity-0 '
              
              
              // style={{ animationDelay: `${0.9}s` }} 
              />
            </GlobalIcon>
          

          </a>

          <a
          href="https://www.linkedin.com/in/jin-francis-cabia/" 
          target="_blank" 
          rel="noopener noreferrer" 
          >
            <GlobalIcon>

            <LinkedInIcon 
            // className='hover:scale-125 hover:cursor-pointer transition ease-in-out  hover:text-yellow-200 animate-loadIn opacity-0  '
            // style={{ animationDelay: `${1.2}s` }} 
            />
            </GlobalIcon>

          </a>


          <a
          href="https://github.com/jincabia" 
          target="_blank" 
          rel="noopener noreferrer" 
          >

          <GlobalIcon>

          <GitHubIcon 
          // className='hover:scale-125 hover:cursor-pointer transition ease-in-out  hover:text-yellow-200 animate-loadIn opacity-0 '
          // style={{ animationDelay: `${1.5}s` }} 
          />
          </GlobalIcon>

          </a>



        </div>

      </div>

    </div>

</div>
        
        
        </>

    )
    
     
}
"use client";
import { useState, useEffect, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import GlobalIcon from "./wrapper";
import IconCarousel from "./IconCarousel";

export default function Intro({ introRef, intro }) {
  return (
    <div className="mb-16 md:pb-64">
      {/* Intro */}
      <div id="intro" ref={introRef} className="flex flex-col md:flex-row justify-center items-center md:space-x-4 md:pt-16 snap-start">
        {/* Intro  */}

        <div
          className=" border static  w-fit mx-auto md:mx-0 -translate-x-6  -translate-y-6    md:-translate-x-6 md:translate-y-6  mb-10 md:mb-0  md:pt-0
          "
        >
          <Image
            // src={"/swagcropped.jpg"}
            src={"/profile-pic-crop-bg-color.png"}
            width={300}
            height={300}
            alt="Jins Photo"
            className="  border border-white/5 grayscale-[50%] hover:grayscale-0 translate-x-6   -translate-y-6  duration-300 md:translate-x-6 md:-translate-y-6 ease-in-out hover:scale-[1.02]"
            quality={100}
            priority={true}
          />
        </div>

        <div className={`  sm:w-full md:w-1/3  md:px-4    md:py-2  md:rounded-md  `}>
          <p
            className={` font-semibold text-white/[.75] text-sm }
      `}
          >
            {intro.map((word, index) => (
              <span
                key={index}
                className="inline-block animate-slide-down opacity-0 "
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {word}&nbsp; {/* Adding space between words */}
              </span>
            ))}
          </p>

          <div
            style={{ animationDelay: `${0.9}s` }}
            className={` opacity-0  translate-x-[-20px] animate-slide-in  `}
          >
            <h1 className="text-3xl font-bold text-yellow-200  ">
              Jin Francis Cabia
            </h1>
            {/* <p className="text-white/[.75] font-semibold text-sm " >Recent Software Graduate</p> */}

            <div
              className={`opacity-0 md:flex  animate-loadIn  `}
              style={{ animationDelay: `${0.5}s` }}
            >
              {/* Educations  */}
              <div className="   pb-1  md:pl-0  w-full   ">
                {/* Education  */}
                <div className="hover:scale-[1.02]  duration-300 ease-in-out mt-2  ">
                  <h1 className="font-semibold text-white/[.75] ">About Me</h1>
                  <p className=" text-[#ECDFCC]/[.8] text-xs bg-gray-500/[0.2] p-4 rounded-md ">
                    I began coding at 15&#x2c; and found it enjoyable&#x2c; 
                    this ignited my passion for development. 
                    I now hold a Diploma in Software Development
                     and I aim to improve my skills as a developer
                   

                  </p>

                  {/* <div className="  text-sm text-[#ECDFCC]/[.8] bg-gray-500/[0.2] p-4 rounded-md">
                    <h2 className="text-[#ECDFCC] font-semibold">
                      SAIT | Calgary AB
                    </h2>

                    <div className="flex text-xs ">
                      <p>Diploma in Software Development&#x2c;</p>
                      <p className=" "> &nbsp; 2024</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div
              className={`opacity-0 md:flex  animate-loadIn  `}
              style={{ animationDelay: `${0.5}s` }}
            >
              {/* Technology  */}
              <div className="     md:pl-0  w-full pb-2  ">
                {/* Technology  */}
                <div className="hover:scale-[1.02]  duration-300 ease-in-out   ">
                  <h1 className="font-semibold text-white/[.75] ">Technologies</h1>

                  <div className="text-sm text-[#ECDFCC]/[.8] bg-gray-500/[0.2] p-4 rounded-md min-h-[50px]">
                    <IconCarousel/>
                  </div>
                </div>
              </div>
            </div>

          

            {/* Links to Email, Github,  Linkedin */}
            <div
              className={`flex  pt-1 space-x-2  border-t border-white/[0.5] text-white/[.5]
                
          `}
            >
              <a
                href="mailto:jinfcabia@gmail.com"
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

      
    </div>
  );
}


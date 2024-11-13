'use client'
import { useState, useEffect,useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';

import { LineChart } from '@mui/x-charts/LineChart';


import { useInView } from 'react-intersection-observer';

import CircleIcon from '@mui/icons-material/Circle';

import Timeline from './components/timeline';

import Project from './components/project';


import VerticalNavBar from "./components/navbar";


// TODO 
// Work on about me
// ex Technologies n Journey showing

// Work on Projects figure out how to style it so it lines up with everything else, look at examples too



export default function Home() {

  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true,

    rootMargin: "-20% 0px", // Adjust this margin to control trigger distance
   });

  
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true,

    rootMargin: "-20% 0px", // Adjust this margin to control trigger distance
   });
  
  const {ref:projectsRef, inView : projectIsVisable} = useInView({ triggerOnce: true,

    rootMargin: "-20% 0px", // Adjust this margin to control trigger distance
   });
  
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true,

    rootMargin: "-20% 0px", // Adjust this margin to control trigger distance
   });


  // These are ones that dont have an animation
  const { ref: aboutRefNO, inView: aboutInViewNO } = useInView();
  const { ref: introRefNO, inView: introInViewNO } = useInView();

  const {ref:projectsRefNO, inView : projectIsVisableNO} = useInView();
  const { ref: contactRefNO, inView: contactInViewNO } = useInView();


  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    if(introInView) setActiveSection('intro')
    // console.log('prior active', {activeSection})
    if (aboutInViewNO) setActiveSection('about');
    // if (aboutInView) setActiveSection('about');
    if (contactInViewNO) setActiveSection('contact');
    // if (contactInView) setActiveSection('contact');
     if (projectIsVisableNO) setActiveSection('projects');
    // else if (projectIsVisableNO) setActiveSection('projects');
  }, [introInViewNO, aboutInViewNO, projectIsVisableNO, contactInViewNO]);

  const intro = ['Hello,','Im']


  

  
    useEffect(() => {
      scrollToTop();
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth',
      });
    };


  const projects = [{
    name: "Gong Cha Shawnessy Web App",
    date: "2023-2024",
    description: "A Progressive Web Application that virtualizes the menu as well allowing customers to customize their drinks, this project focused on scalability. Made using Next.js, Firebase and hosted onto Vercel.",
    path: "gongcha.png",
    link: "https://gongcha-shawnessy.vercel.app/",
    github:"https://github.com/jincabia/gong-cha-shawnessy"
  },
  {
    name: "AI Web Scraper",
    date: "2024",
    description: "An AI Web Scraper using Selenium, Streamlit, BeautifulSoup, LangChain and Ollama3.1. Where we scrape data using Beautiful Soup from a URL then pass it into Ollama3.1 to parse the data then return it. ",
    path: "aiwebscraper.png",
    link: "",
    github:"https://github.com/jincabia/AI-Web-Scraper"
  }



]

  return (
    <main id='' className=" pt-14 snap-mandatory snap-y h-screen   ">

    <VerticalNavBar activeSection={activeSection}/>

    
     {/* Intro */} 
    <div id='intro' ref={introRef} className="md:flex md:justify-center md:pb-32 md:pt-16 snap-start  h-fit mb-64 md:space-x-4 " >

        {/* Intro  */}

        <div   className=' border   w-fit   md:-translate-x-4 md:translate-y-4  mb-10 md:mb-0  md:pt-0
              '>
          <Image
          src={"/swagcropped.jpg"}
          width={300}
          height={300}
          alt='Jins Photo'
          className=' grayscale-[60%] hover:grayscale-0  duration-300 translate-x-4 -translate-y-4 ease-in-out hover:scale-[1.02]' 
          quality={100}
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
                  style={{ animationDelay: `${index * 0.4}s` }} 
                >
                  {word}&nbsp; {/* Adding space between words */}
                </span>
              ))}
          </p>


          <div
           style={{ animationDelay: `${.6}s` }}
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
                <EmailIcon  className='hover:scale-125 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-yellow-200 rounded-md animate-loadIn opacity-0 '
                
                                style={{ animationDelay: `${0.9}s` }} 
                />
              

              </a>

              <a
              href="https://www.linkedin.com/in/jin-francis-cabia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <LinkedInIcon className='hover:scale-125 hover:cursor-pointer transition ease-in-out  hover:text-yellow-200 animate-loadIn opacity-0  '
                
                                style={{ animationDelay: `${1.2}s` }} 
                />

              </a>


              <a
              href="https://github.com/jincabia" 
              target="_blank" 
              rel="noopener noreferrer" 
              >

              <GitHubIcon className='hover:scale-125 hover:cursor-pointer transition ease-in-out  hover:text-yellow-200 animate-loadIn opacity-0 '
              
                                style={{ animationDelay: `${1.5}s` }} 
              />

              </a>



            </div>

          </div>

        </div>

    </div>





      {/* About me Section */}

    <div className={` md:mb-64 min-h-[80vh]    `} ref={aboutRefNO}>
      {/*  */}
      <div id='about' className=" md:flex md:justify-evenly snap-start   " ref={aboutRefNO}>

            {/* About me Title */}
        <div
          ref={aboutRef}
          className={`    md:w-1/3    pb-4 md:pb-0 md:p-4  md:pt-0 md:pl-0 `}
        >
              <h1 
                className={`text-3xl font-bold opacity-0 md:pl-4 ${aboutInView ? ' translate-x-[-20px] animate-slide-in ' : ''}   `}>
                About me
              </h1>
            
        </div>

        <div className=' w-1/2 md:border-b border-white/35  md:-translate-y-4 '>
                  
        </div>

        

       
      </div>

     
     

      <div className={`md:ml-4 opacity-0 md:flex md:justify-evenly ${aboutInView ? '  animate-loadIn ' : ''}  `}
      style={{ animationDelay: `${ 0.5}s` }} 
      >


       

            {/* Educations / Left section */}
        <div className=' md:w-1/3 md:border-b border-white/35 py-4 md:p-4    '>

        {/* Education  */}
          <div className='hover:scale-[1.02] duration-300 ease-in-out '>
            
            <h1 className='font-semibold text-yellow-200 '>
              Education
            </h1>

            <div className='md:indent-2 text-sm text-[#ECDFCC]/[.8]'>
              <h2 className='text-[#ECDFCC]'>
                SAIT | Calgary AB
              </h2>

              <div className='flex '>

                <p>
                  Diploma in Software Development 
                </p>
                <p className=' mx-auto flex justify-end text-end'>2023-2024</p>

              </div>
            </div>
          </div>

         
        </div>

          {/* Right Div under About me / Technologies */}
        <div className={` md:w-1/2  md:p-4 hover:scale-105 duration-300 ease-in-out `}>
          <h1 className='font-semibold text-yellow-200  '>
                Technologies
              </h1>

             
              <div className='md:indent-2 text-sm text-[#ECDFCC]/[.8] pl-4   bg-[#1E201E]/[.4] rounded-md pb-4'>

                

                <div className='   grid w-auto  '>

                  <div className=' pt-4'>

                  <h1 className='text-[#ECDFCC] font-semibold '>
                      Languages
                    </h1>
                    {/* Front End List */}
                    <ul className='list-inside grid grid-cols-3  list-disc  mb-4  '>
                      <li className=''>
                        JavaScript
                      </li>

                      <li className=''>
                        Python
                      </li>

                      <li className=''>
                        SQL
                      </li>
                    </ul>
                  </div>


                  <h1 className='text-[#ECDFCC] font-semibold'>
                    Front-end
                  </h1>
                  {/* Front End List */}
                  <ul className='list-inside grid grid-cols-3  list-disc text-sm mb-4 '>
                    <li className=''>
                      React.js
                    </li>

                    <li className=''>
                      Tailwind
                    </li>

                    <li className=''>
                      HTML / CSS
                    </li>
                  </ul>

                  <h1 className='text-[#ECDFCC] font-semibold'>
                    Back-end
                  </h1>
                  {/* Back end List */}
                  <ul className='list-inside grid grid-cols-3  list-disc text-sm '>
                    <li className=''>
                      Node.js
                    </li>

                    <li className=''>
                      Django & DRF
                    </li>

                    <li className=''>
                      Firebase
                    </li>
                  </ul>

                 
                </div >

               
              </div>

        

            


        </div>
       
      </div>
      
    </div>




   
    
   

      {/* Projects */}
      <div id='projects' ref={projectsRefNO} className={`border md:justify-evenly md:mb-96  mt-16 md:mt-48  md:pt-16 snap-start h-fit mb-20 min-h-[80vh]`}>

        <div className='flex justify-evenly'>

          <div 
          ref={projectsRef}
          // style={{ animationDelay: `${0.2}s` }}
          className={`md:pl-4  pt-4  md:w-1/3 opacity-0 border ${projectIsVisable ? ' translate-x-[-20px] animate-slide-in ' : ''} `}>
            <h1 className={`text-3xl font-bold  `}>Projects</h1>

            <p className="flex items-center text-[#ECDFCC]/60 text-sm ">
                Any feedback is always appreciated!
            </p>


            <div className=' rounded-md  w-max pb-4 '>
            <a href='mailto:jinfcabia@gmail.com' 
                target="_blank" 
                rel="noopener noreferrer" 
                >
                  <EmailIcon  className={`hover:scale-125 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-yellow-200 rounded-md ${projectIsVisable ? 'animate-loadIn' : ''} opacity-0`}
                  
                  style={{ animationDelay: `${0.3}s` }} 
  />
                
                </a>

            </div>

          </div>

          <div className='w-1/2'>

          </div>

        </div>


        <div className={`  md:justify-between space-y-4 md:space-y-0 md:space-x-8 md:flex`} >


      

        {projects.map((project,index)=>
            (
              <li className={`list-none w-1/3 opacity-0  ${projectIsVisable  ? '  animate-loadIn ' : ''  }`} key={index}
              style={{ animationDelay: `${index + .5}s` }} 

              >
                <Project
                {...project}
                />
              </li>
            ))}
         
        
        </div>
          
      </div>


            {/* TODO CENTER THIS CONTACT AND C IF IT LOOKS GOOD */}
      {/* Contact */}
      
      <div id='contact' ref={contactRefNO} className="md:flex md:justify-evenly my-16  md:mt-44 snap-start  min-h-[40vh]  ">

        <div ref={contactRef} className={`md:pl-4 opacity-0   md:w-1/3   ${contactInView ? ' translate-x-[-20px] animate-slide-in ' : ''} `}>
          <h1 className="text-3xl font-bold">Contact</h1>
        </div>


        <div className="md:w-fit md:px-4 
        rounded-md
         hover:bg-gray-500/[0.1] 
           ease-in-out 
           duration-300  
           group
           h-fit

           hover:py-4
           ">

              <a href='mailto:jinfcabia@gmail.com' 
                target="_blank" 
                rel="noopener noreferrer" 
              >

          <div className={` opacity-0${contactInView  ? '  animate-breath ' : 'opacity-100'  }`}>
            <h1 className='font-semibold text-white/[.8] text-lg w-fit '>


              Get in touch, and drop a message.
              <KeyboardArrowRightIcon fontSize="small" className="group-hover:translate-x-4 transition ease-in-out duration-300"/>


            </h1>

            <p className='text-[#ECDFCC]/[.6] text-sm border-b pb-4 border-white/[0.5] w-fit'>I am currently open for any new opportunities! </p>

             {/* Links to Email, Github,  Linkedin */}

         

          </div>
             </a>

             <div className={`flex   space-x-2 mt-4  text-white/[.5] 
              ${aboutInView ? '' : ''}
              `}>

              <a href='mailto:jinfcabia@gmail.com' 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <EmailIcon  className={`hover:scale-125  opacity-0 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-yellow-200 rounded-md  ${contactInView ? 'animate-loadIn' : ''} `}
                
                style={{ animationDelay: `${1.2}s` }} 
                />
              

              </a>

              <a
              href="https://www.linkedin.com/in/jin-francis-cabia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <LinkedInIcon  className={`hover:scale-125  opacity-0 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-yellow-200 rounded-md  ${contactInView ? 'animate-loadIn' : ''} `}
                
                                style={{ animationDelay: `${1.5}s` }} 
                />

              </a>


              <a
              href="https://github.com/jincabia" 
              target="_blank" 
              rel="noopener noreferrer" 
              >

              <GitHubIcon  className={`hover:scale-125  opacity-0 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-yellow-200 rounded-md  ${contactInView ? 'animate-loadIn' : ''} `}
                
                                style={{ animationDelay: `${1.8}s` }}  
              />

              </a>



            </div>
          
          
        
        </div>
          
      </div>


      {/* Footer  */}
      <footer className='w-1/2 mx-auto mb-16 text-sm text-white/[.4]'> 

       
        <p>Made by Jin, built with Next.js, Tailwind CSS and deployed using Vercel</p>

      </footer>

      
    </main>
  );
}


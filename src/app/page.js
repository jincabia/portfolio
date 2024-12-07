'use client'
import { useState, useEffect,useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import GlobalIcon from './components/wrapper';
import GlobalArrow from './components/arrow-wrapper';

import Intro from './components/intro';

// TODO
/**
 * Replace the plain text with icons, maybe add some interactivity?
 * 
 */


import { useInView } from 'react-intersection-observer';

import Project from './components/project';


import VerticalNavBar from "./components/navbar";



const Home = () => {

  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true,

    rootMargin: "-50% 0px", // Adjust this margin to control trigger distance
   });

  
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true,

    rootMargin: "-40% 0px", // Adjust this margin to control trigger distance
   });
  
  const {ref:projectsRef, inView : projectIsVisable} = useInView({ triggerOnce: true,

    rootMargin: "-50% 0px", // Adjust this margin to control trigger distance
   });
  
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true,

    // rootMargin: "-20% 0px", // Adjust this margin to control trigger distance
   });


  // These are ones that dont have an animation
  const { ref: aboutRefNO, inView: aboutInViewNO } = useInView();
  const { ref: introRefNO, inView: introInViewNO } = useInView();

  const {ref:projectsRefNO, inView : projectIsVisableNO} = useInView();
  const { ref: contactRefNO, inView: contactInViewNO } = useInView();


  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if(introInViewNO) setActiveSection('intro')
    // console.log('prior active', {activeSection})
    if (aboutInViewNO) setActiveSection('about');
    // if (aboutInView) setActiveSection('about');
    if (contactInViewNO) setActiveSection('contact');
    // if (contactInView) setActiveSection('contact');
     if (projectIsVisableNO) setActiveSection('projects');
    // else if (projectIsVisableNO) setActiveSection('projects');
  }, []);

  const intro = ['Hello,','Im']


  

  
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToTop();
    }, 100); // Adjust the delay if needed
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Uncomment this to enable smooth scrolling
    });
  };


  const projects = [{
    name: "Gong Cha Shawnessy Web App",
    date: "2023-2024",
    description: "A Web Application that virtualizes the menu as well allowing customers to customize their drinks, this project focused on scalability. Made using Next.js, Firebase and hosted onto Vercel.",
    path: "gongcha.png",
    link: "https://gongcha-shawnessy.vercel.app/",
    github:"https://github.com/jincabia/gong-cha-shawnessy"
  },
  {
    name: "AI Web Scraper",
    date: "2024",
    description: "An AI Web Scraper using Selenium, Streamlit, BeautifulSoup, LangChain and Ollama3.1. Where we scrape data from a URL then pass it into Ollama3.1 to parse the data then return it. ",
    path: "aiwebscraper.png",
    link: "",
    github:"https://github.com/jincabia/AI-Web-Scraper"
  },
  {
    name: "AI Web Scraper",
    date: "2024",
    description: "An AI Web Scraper using Selenium, Streamlit, BeautifulSoup, LangChain and Ollama3.1. Where we scrape data from a URL then pass it into Ollama3.1 to parse the data then return it. ",
    path: "aiwebscraper.png",
    link: "",
    github:"https://github.com/jincabia/AI-Web-Scraper"
  },
  {
    name: "AI Web Scraper",
    date: "2024",
    description: "An AI Web Scraper using Selenium, Streamlit, BeautifulSoup, LangChain and Ollama3.1. Where we scrape data from a URL then pass it into Ollama3.1 to parse the data then return it. ",
    path: "aiwebscraper.png",
    link: "",
    github:"https://github.com/jincabia/AI-Web-Scraper"
  },
  {
    name: "AI Web Scraper",
    date: "2024",
    description: "An AI Web Scraper using Selenium, Streamlit, BeautifulSoup, LangChain and Ollama3.1. Where we scrape data from a URL then pass it into Ollama3.1 to parse the data then return it. ",
    path: "aiwebscraper.png",
    link: "",
    github:"https://github.com/jincabia/AI-Web-Scraper"
  },
  




]

  return (
    <main id='' className=" pt-14 md:justify-center     ">

    <VerticalNavBar activeSection={activeSection}/>

    
     {/* Intro  */}
     
     <Intro intro={intro} />





   
    
   

      {/* Projects */}
      <div id='projects' ref={projectsRefNO} className={` md:justify-evenly  border-b pb-4 md:pb-0 border-white/35 md:mb-32  min-h-[80vh] `}>

              {/* Project Title */}
        <div className='md:flex md:justify-start'>

          <div 
          ref={projectsRef}
          // style={{ animationDelay: `${0.2}s` }}
          className={`  pt-4  md:w-1/4 opacity-0  ${projectIsVisable ? ' translate-x-[-20px] animate-slide-in ' : ''} `}>
            <h1 className={`text-3xl font-bold  `}>Projects</h1>

            <p className="flex items-center text-[#ECDFCC]/60 text-sm ">
                Any feedback is always appreciated!
            </p>


            <div className=' rounded-md  w-max  '>
            <a href='mailto:jinfcabia@gmail.com' 
                target="_blank" 
                rel="noopener noreferrer" 
                >
{/*                   
                  <EmailIcon  className={` hover:cursor-pointer transition ease-in-out text-white/[.5]  rounded-md ${projectIsVisable ? 'animate-loadIn' : ''} opacity-0`}
                  
                  style={{ animationDelay: `${0.3}s` }} 
                  sx={{ "&:hover": { color: "blue",scale:"1.25" }, }}/>
                 */}
                <GlobalIcon>

                <EmailIcon
                  className={`opacity-0 ${projectIsVisable ? 'animate-loadIn' : ''} `}
                  style={{ animationDelay: `${0.3}s` }}
                
                      />

                      </GlobalIcon>
                </a>

            </div>

          </div>

          <div className=' w-1/2 md:border-b h-1 border-white/35  md:translate-y-8 '>
                  
          </div>

        

        </div>


        <div className={` w-full md:grid space-y-4 pt-0 md:pt-4 md:space-y-0  md:grid-cols-3 2xl:grid-cols-5  gap-8 `} >


      

        {projects.map((project,index)=>
            (
              <li className={`list-none  opacity-0   ${projectIsVisable  ? '  animate-loadIn ' : ''  }`} key={index}
              style={{ animationDelay: `${index/2 + .2}s` }} 

              >
                <Project
                {...project}
                />
              </li>
            ))}
         
        
        </div>
          
      </div>


      {/* Contact */}
      
      <div id='contact' ref={contactRefNO} className="w-full md:w-fit mx-auto md:justify-center my-16  md:mt-32  snap-start  min-h-[40vh]  ">

        <div ref={contactRef} className={`pl-4    md:w-1/3  opacity-0 ${contactInView ? ' animate-slide-in ' : ''} `}>
          <h1 className="text-5xl font-bold mb-2">Contact </h1>
        </div>


        <div className="md:w-fit md:px-4 
        rounded-md
       bg-gray-500/[0.2] md:bg-gray-600/[.1]
         hover:bg-gray-400/[0.1] 
           ease-in-out 
           duration-300  
           group
           h-fit
           hover:scale-105

          

           py-4
           ">

              <a href='mailto:jinfcabia@gmail.com' 
                target="_blank" 
                rel="noopener noreferrer" 
              >

          <div className={`ml-4 md:ml-0 opacity-0 ${contactInView  ? '  animate-loadIn ' : ''  }`}>
            <h1 className='font-semibold text-white/[.8] flex text-md  w-fit text-yellow-200 '>


              Get in touch, and drop a message.
              <GlobalArrow>

                <KeyboardArrowRightIcon fontSize="small"
                 />
              </GlobalArrow>


            </h1>

            <p className='text-[#ECDFCC]/[.6] text-sm border-b pb-4 border-white/[0.5] w-fit'>I am currently open for any new opportunities! </p>

             {/* Links to Email, Github,  Linkedin */}

         

          </div>
             </a>

             <div className={`flex pb-4  space-x-2 mt-4 ml-4 md:ml-0  border-white/[0.5] text-white/[.5]
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


      {/* Footer  */}
      <footer className=' w-full md:w-1/2 mx-auto   mb-16 text-sm text-white/[.4]'> 
       

       
        <p>Made by Jin, built with Next.js, Tailwind CSS and deployed using Vercel</p>

      </footer>

      
    </main>
  );
}

export default Home


// 


      {/* About me Section */}

    // <div className={` md:mb-52      `} >
    //   <div id='about' className=" md:flex md:justify-evenly snap-start   " >

    //         {/* About me Title */}
    //     <div
    //       ref={aboutRef}
    //       className={`    md:w-1/3    pb-4 md:pb-0 md:p-4  md:pt-0 md:pl-0 `}
    //     >
    //           <h1 
    //             className={`text-3xl font-bold opacity-0 md:pl-4 ${aboutInView ? ' translate-x-[-20px] animate-slide-in ' : ''}   `}>
    //             About me
    //           </h1>
            
    //     </div>

    //     <div className=' w-1/2 md:border-b border-white/35  md:-translate-y-4 '>
                  
    //     </div>

        

       
    //   </div>

     
     

    //   <div className={`md:ml-4 opacity-0 md:flex md:justify-evenly ${aboutInView ? '  animate-loadIn ' : ''}  `}
    //   style={{ animationDelay: `${ 0.5}s` }} 
    //   >


       

    //         {/* Educations / Left section */}
    //     <div className=' md:w-1/3 md:border-b border-white/35 py-4 md:p-4 md:pl-0    '>

    //     {/* Education  */}
    //       <div className='hover:scale-105 w-full duration-300 ease-in-out  '>
            
    //         <h1 className='font-semibold text-yellow-200 '>
    //           Education
    //         </h1>

    //         <div className='  text-sm text-[#ECDFCC]/[.8] bg-gray-500/[0.2] p-4 rounded-md'>
    //           <h2 className='text-[#ECDFCC] font-semibold'>
    //             SAIT | Calgary AB
    //           </h2>

    //           <div className='flex text-xs '>

    //             <p >
    //               Diploma in Software Development 
    //             </p>
    //             <p className=' mx-auto flex justify-end text-end'>2023-2024</p>

    //           </div>
    //         </div>
    //       </div>

         
    //     </div>

    //       {/* Right Div under About me / Technologies */}
    //     <div className={` md:w-1/2  md:p-4 hover:scale-105 duration-300 ease-in-out `}>
    //       <h1 className='font-semibold text-yellow-200  '>
    //             Technologies
    //           </h1>

             
    //           <div className='md:indent-2 text-sm text-[#ECDFCC]/[.8] pl-4   bg-gray-500/[0.2] rounded-md pb-4'>

                

    //             <div className='   grid w-auto  '>

    //               <div className=' pt-4'>

    //               <h1 className='text-[#ECDFCC] font-semibold '>
    //                   Languages
    //                 </h1>
    //                 {/* Front End List */}
    //                 <ul className='list-inside grid grid-cols-3  list-disc  mb-4  '>
    //                   <li className=''>
    //                     JavaScript
    //                   </li>

    //                   <li className=''>
    //                     Python
    //                   </li>

    //                   <li className=''>
    //                     SQL
    //                   </li>
    //                 </ul>
    //               </div>


    //               <h1 className='text-[#ECDFCC] font-semibold'>
    //                 Front-end
    //               </h1>
    //               {/* Front End List */}
    //               <ul className='list-inside grid grid-cols-3  list-disc text-sm mb-4 '>
    //                 <li className=''>
    //                   React.js
    //                 </li>

    //                 <li className=''>
    //                   Tailwind
    //                 </li>


    //                 <div className='flex'>

    //               {/* HTML LOGO */}
    //                 <svg className='' xmlns="http://www.w3.org/2000/svg"
    //                     width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  stroke-linecap="round"  stroke-linejoin="round"  
    //                     class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-html">
    //                   <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
    //                   <path d="M2 21v-6" /><path d="M5 15v6" /><path d="M2 18h3" /><path d="M20 15v6h2" /><path d="M13 21v-6l2 3l2 -3v6" /><path d="M7.5 15h3" /><path d="M9 15v6" />
    //                 </svg>
    //                 {/* CSS LOGO*/}
    //                 <svg  xmlns="http://www.w3.org/2000/svg" 
    //                   width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
    //                   class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-css"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
    //                   <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M8 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
    //                   <path d="M11 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
    //                   <path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
    //                 </svg>
    //                 </div>
                    
    //               </ul>

    //               <h1 className='text-[#ECDFCC] font-semibold'>
    //                 Back-end
    //               </h1>
    //               {/* Back end List */}
    //               <ul className='list-inside grid grid-cols-3  list-disc text-sm '>
    //                 <li className=''>
    //                   Node.js
    //                 </li>

    //                 <li className=''>
    //                   Django & DRF
    //                 </li>

    //                 <li className=''>
    //                   Firebase
    //                 </li>
    //               </ul>

                 
    //             </div >

               
    //           </div>

        

            


    //     </div>
       
    //   </div>
      
    // </div>










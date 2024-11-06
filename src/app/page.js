'use client'
import { useState, useEffect,useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useInView } from 'react-intersection-observer';

import Project from './components/project';


import VerticalNavBar from "./components/navbar";


export default function Home() {

  
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  
  const {ref:projectsRef, inView : projectIsVisable} = useInView({ triggerOnce: true });
  
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });


  // These are ones that dont have an animation
  const { ref: aboutRefNO, inView: aboutInViewNO } = useInView();
  const {ref:projectsRefNO, inView : projectIsVisableNO} = useInView();
  const { ref: contactRefNO, inView: contactInViewNO } = useInView();


  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    console.log('prior active', {activeSection})
    if (aboutInViewNO) setActiveSection('about');
    // if (aboutInView) setActiveSection('about');
    if (contactInViewNO) setActiveSection('contact');
    // if (contactInView) setActiveSection('contact');
     if (projectIsVisableNO) setActiveSection('projects');
    // else if (projectIsVisableNO) setActiveSection('projects');
  }, [aboutInViewNO, projectIsVisableNO, contactInViewNO]);

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
    <main id='about' className=" pt-14 snap-mandatory snap-y h-screen  ">

    <VerticalNavBar activeSection={activeSection}/>

    
    {/* About me + Intro */}
    <div  className="md:flex md:justify-evenly pb-16 md:pt-16  " ref={aboutRefNO}>

        {/* Intro  */}

        <div 
        ref={aboutRef}
        
          className={`  sm:w-full md:w-1/3 p-4 pt-0`}>

          <p className={` font-bold text-yellow-200 text-sm  ${aboutInView ? '' : ''}
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
          className={` opacity-0 ${aboutInView ? 'translate-x-[-20px] animate-slide-in' : ''} `}>
            <h1 className="text-3xl font-bold   ">Jin Francis Cabia</h1>
            <p className="text-white/[.75] font-semibold text-sm " >Recent Software Graduate</p>
           
            <p className="flex items-center text-[#ECDFCC]/60 text-sm md:pt-4">
              I think codings cool.
            </p>

        
            {/* Links to Email, Github,  Linkedin */}
            <div className={`flex  pt-4 space-x-2 mt-4 border-t border-white/[0.5] text-white/[.5]
              ${aboutInView ? '' : ''}
              `}>

              <a href='mailto:jinfcabia@gmail.com' 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <EmailIcon  className='hover:scale-125 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-white rounded-md animate-slide-down opacity-0'
                
                                style={{ animationDelay: `${0.9}s` }} 
                />
              

              </a>

              <a
              href="https://www.linkedin.com/in/jin-francis-cabia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <LinkedInIcon className='hover:scale-125 hover:cursor-pointer transition ease-in-out  hover:text-white animate-slide-down opacity-0  '
                
                                style={{ animationDelay: `${1.2}s` }} 
                />

              </a>


              <a
              href="https://github.com/jincabia" 
              target="_blank" 
              rel="noopener noreferrer" 
              >

              <GitHubIcon className='hover:scale-125 hover:cursor-pointer transition ease-in-out  hover:text-white animate-slide-down opacity-0 '
              
                                style={{ animationDelay: `${1.5}s` }} 
              />

              </a>



            </div>

          </div>

        </div>

        {/* About me */}
          <div className="
          w-full md:w-1/2  text-[#ECDFCC]/[.6] text-sm hover:scale-105 hover:bg-gray-500/[0.1]  pt-0 p-4 rounded-md 
          ease-in-out duration-300 hover:pt-4

          ">
            <div 
            style={{ animationDelay: `${1.3}s` }}
            className={`  opacity-0 ${aboutInView ? ' animate-breath' : ''}`}>

              <p>
              Growing up, I developed a passion for technology and programming through gaming with my brother.&nbsp; 
              <strong className='text-yellow-200/[.8]'>
              
              When I was 13  , I began exploring Scratch
              </strong>
              
                , a block-based programming language, 
              which ignited my interest in software development.
              </p>

              <p>
              To deepen my skills, <strong className="text-yellow-200/[.8]"> I pursued a computer science course in Grades 10, 11, and 12</strong>  where it taught me the 
              fundamentals of programming in <strong  className="text-yellow-200/[.8]"> 
              C#, Python HTML, CSS and JavaScript 
              </strong> 
              , I then joined the <strong className="text-yellow-200/[.8]"> Schulich Ignite </strong> 
              extracurricular program, where I gained hands-on experience with game development in Python using Pygame.
              </p>

              <p>
              Currently, I have just finished my studies in <strong className='text-yellow-200/[.8]'>Software Development at SAIT, </strong>
              there I developed my capstone project being a progressive web app for
              Gong Cha Shawnessy  where we virtualized the menu.
              After completing the two year Diploma I am eager to apply my knowledge in a real-world setting and&nbsp;
              <strong className="text-yellow-200"> I am actively seeking internships or software development roles </strong>
              to 
              jumpstart my career. Im passionate about learning, driven to expand my skills and open to any developer roles.
              </p>
            </div>
          </div>

    </div>


   

      {/* Projects */}
      <div id='projects' ref={projectsRefNO} className={`md:flex md:justify-evenly mb-96  mt-48  md:pt-16`}>

        <div 
        ref={projectsRef}
        // style={{ animationDelay: `${0.2}s` }}
        className={`pl-4  pt-4  md:w-1/3 opacity-0  ${projectIsVisable ? ' translate-x-[-20px] animate-slide-in ' : ''} `}>
          <h1 className={`text-3xl font-bold  `}>Projects</h1>

          <p className="flex items-center text-[#ECDFCC]/60 text-sm ">
              Any feedback is appreciated!
          </p>


          <div className=' rounded-md  w-max '>
          <a href='mailto:jinfcabia@gmail.com' 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <EmailIcon  className={`hover:scale-125 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-white rounded-md ${projectIsVisable ? 'animate-slide-down' : ''} opacity-0`}
                
                style={{ animationDelay: `${0.3}s` }} 
/>
              
              </a>

          </div>

        </div>

        <div className={`md:w-1/2 `} >
          <ul className='space-y-4'>
            {projects.map((project,index)=>
            (
              <li className={`list-none  opacity-0 ${projectIsVisable  ? '  animate-breath ' : ''  }`} key={index}
              style={{ animationDelay: `${index + .5}s` }} 

              >
                <Project
                {...project}
                />
              </li>
            ))}
          </ul>
        </div>
          
      </div>

      {/* Contact */}
      
      <div id='contact' ref={contactRefNO} className="md:flex md:justify-evenly my-44  ">

        <div ref={contactRef} className={`pl-4 opacity-0   md:w-1/3   ${contactInView ? ' translate-x-[-20px] animate-slide-in ' : ''} `}>
          <h1 className="text-3xl font-bold">Contact</h1>
        </div>


        <div className="md:w-1/2 pl-4 
        rounded-md
         hover:bg-gray-500/[0.1] 
           ease-in-out 
           duration-300  
           group

           hover:py-4
           ">

          <div className={` opacity-0${contactInView  ? '  animate-breath ' : 'opacity-100'  }`}>
            <h1 className='font-semibold text-white/[.8] text-lg w-fit '>

              <a href='mailto:jinfcabia@gmail.com' 
                target="_blank" 
                rel="noopener noreferrer" 
              >

              Get in touch, and drop a message.
              <KeyboardArrowRightIcon fontSize="small" className="group-hover:translate-x-8 transition ease-in-out duration-300"/>

              </a>

            </h1>

            <p className='text-[#ECDFCC]/[.6] text-sm'>I am currently open for any new opportunities! </p>

             {/* Links to Email, Github,  Linkedin */}
             <div className={`flex  pt-4 space-x-2 mt-4 border-t border-white/[0.5] text-white/[.5]
              ${aboutInView ? '' : ''}
              `}>

              <a href='mailto:jinfcabia@gmail.com' 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <EmailIcon  className={`hover:scale-125  opacity-0 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-white rounded-md  ${contactInView ? 'animate-slide-down' : ''} `}
                
                                style={{ animationDelay: `${1.2}s` }} 
                />
              

              </a>

              <a
              href="https://www.linkedin.com/in/jin-francis-cabia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <LinkedInIcon  className={`hover:scale-125  opacity-0 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-white rounded-md  ${contactInView ? 'animate-slide-down' : ''} `}
                
                                style={{ animationDelay: `${1.5}s` }} 
                />

              </a>


              <a
              href="https://github.com/jincabia" 
              target="_blank" 
              rel="noopener noreferrer" 
              >

              <GitHubIcon  className={`hover:scale-125  opacity-0 hover:cursor-pointer transition ease-in-out text-white/[.5] hover:text-white rounded-md  ${contactInView ? 'animate-slide-down' : ''} `}
                
                                style={{ animationDelay: `${1.8}s` }}  
              />

              </a>



            </div>

         

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


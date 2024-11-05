import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Project from './components/project';


export default function Home() {

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
    <main id='about' className=" pt-14 ">

    
    {/* About me + Intro */}
    <div  className="md:flex md:justify-evenly pb-16 ">

        {/* Intro  */}
          <div className="sm:w-full md:w-1/3 p-4 opacity-0 translate-x-[-20px] animate-slide-in ">
            <h1 className="text-3xl font-bold   ">Jin Francis Cabia</h1>
            <p className="text-white/[.75] font-semibold text-sm " >Recent Software Graduate</p>
           
            <p className="flex items-center text-[#ECDFCC]/60 text-sm md:pt-4">
              I think coding's cool.
            </p>

        
            {/* Links to Github,  Linkedin */}
            <div className='flex  pt-4 space-x-2 mt-4 border-t border-white/[0.5]'>

              <a
              href="https://www.linkedin.com/in/jin-francis-cabia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              >
              <LinkedInIcon className='hover:scale-125 hover:cursor-pointer transition ease-in-out '/>
              </a>


              <a
              href="https://github.com/jincabia" 
              target="_blank" 
              rel="noopener noreferrer" 
              >

              <GitHubIcon className='hover:scale-125 hover:cursor-pointer transition ease-in-out'/>
              </a>

            
            </div>

          </div>

        {/* About me */}
          <div className="
          sm:w-full md:w-1/2 space-y-4 text-[#ECDFCC]/[.6] text-sm hover:bg-gray-500/[0.1] 
          hover:scale-105 p-4 rounded-md transition 
          ease-in-out duration-300
          opacity-0 animate-breath  
          ">
            <p>
            Growing up, I developed a passion for technology and programming through gaming with my brother. When I was 13  
            <strong className='text-white/[.75]'>
            
            , I began exploring Scratch
            </strong>
            
              , a block-based programming language, 
            which ignited my interest in software development.
            </p>

            <p>
            To deepen my skills, <strong className="text-white/[0.75]"> I pursued a computer science course in Grades 10, 11, and 12</strong>  where it taught me the 
            fundamentals of programming in <strong  className="text-white/[0.75]"> 
            C#, Python HTML, CSS and JavaScript 
            </strong> 
            , I then joined the <strong className="text-white/[0.75]"> Schulich Ignite </strong> 
            extracurricular program, where I gained hands-on experience with game development in Python using Pygame.
            </p>

            <p>
            Currently, I have just finished my studies in Software Development at SAIT,
            there I developed my capstone project being a progressive web app for
             <strong className="text-white/[0.75] underline transition duration-300 ease-in-out hover:text-yellow-200 ">
              <a className='cursor-pointer' href='https://gongcha-shawnessy.vercel.app/' target="_blank" 
              rel="noopener noreferrer" > Gong Cha Shawnessy</a> </strong>  where we virtualized the menu.
            After completing the two year Diploma Im eager to apply my knowledge in a real-world setting and am 
            <strong className="text-white/[0.75]"> actively seeking internships or software development roles </strong>
            to 
            jumpstart my career. Im passionate about learning, driven to expand my skills and open to any developer roles.
            </p>
          </div>

    </div>


   

      {/* Projects */}
      <div id='projects' className="md:flex md:justify-evenly py-16 ">

        <div className="pl-4   md:w-1/3 ">
          <h1 className="text-3xl font-bold">Projects</h1>
        </div>

        <div className="md:w-1/2">
          <ul className='space-y-4'>
            {projects.map((project,index)=>
            (
              <li className='list-none ' key={index}>
                <Project
                {...project}
                />
              </li>
            ))}
          </ul>
        </div>
          
      </div>

      {/* Contact */}
      
      <div id='contact' className="md:flex md:justify-evenly pb-16 ">

        <div className="pl-4   md:w-1/3 ">
          <h1 className="text-3xl font-bold">Contact</h1>
        </div>

        <div className="md:w-1/2 pl-4">
         <h2>Send me a message b(utton for email)</h2>
         <p>Resume</p>
        </div>
          
      </div>

      
    </main>
  );
}

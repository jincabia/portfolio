'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import StreamIcon from '@mui/icons-material/Stream';


const VerticalNavBar = ({ activeSection }) => {

  // const [path,setPath] = useState(usePathname())


  const navItems = [
    { name: 'About', path: '#about', section: 'about' },
    { name: 'Projects', path: '#projects', section: 'projects' },
    { name: 'Contact', path: '#contact', section: 'contact' },
  ];

  return (
    <div className="hidden lg:flex fixed top-0 left-0 flex-col h-screen  w-44 bg-[#373832] text-white   ">
      <div className='flex justify-center pt-16'>

      <StreamIcon/>
      </div>
      {/* <h2 className="text-xl font-semibold mb-4 pl-2">My Portfolio</h2> */}
      <ul className="flex flex-col justify-center items-start  h-full translate-y-[-64px]">
        {navItems.map((item) => (
          <li key={item.name} className="w-full font-semibold">
            <a href={item.path}>
              <p className={`w-full pb-2 pl-6 transition ease-in ${
                activeSection === item.section
                  ? 'text-yellow-200 translate-x-4 list-disc '
                  : 'text-white/[0.5] hover:translate-x-4 hover:underline hover:text-yellow-200'
              }`
      }>
                {item.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNavBar;






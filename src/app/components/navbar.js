'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
 
const VerticalNavBar = () => {

  const [path,setPath] = useState(usePathname())


    const navItems = [
        { name: 'About', path: '#about' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
      ];


    

   

  return (
    <div className="hidden  lg:flex fixed top-0 left-0  flex-col h-screen w-44 bg-[#373832]  text-white pt-5  ">
      <h2 className="text-xl font-semibold mb-4 pl-2">My Portfolio</h2>
      <ul className="">
        
        {navItems.map((item) => (
          <li key={item.name} className="w-full font-semibold">
            <a href={item.path} >
              <p onClick={()=>setPath(item.path)} className={`hover:translate-x-4 hover:underline hover:text-white text-white/[.5] w-full py-2  pl-6 transition ease-in ${
                path === item.path ? ('text-white/[1] translate-x-4 ') : 'translate-x-0'
              }`}>
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

import Link from 'next/link';

const VerticalNavBar = () => {

    const navItems = [
        { name: 'About', path: '#about' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
      ];

   

  return (
    <div className=" fixed top-0 left-0 flex flex-col h-screen w-44 bg-[#1E201E]  text-white pt-5">
      <h2 className="text-xl font-semibold mb-4 pl-2">My Portfolio</h2>
      <ul className="">
        
        {navItems.map((item) => (
          <li key={item.name} className="w-full">
            <a href={item.path} >
              <p className="hover:bg-white/[0.5] w-full py-2 pl-6 transition ease-in">
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

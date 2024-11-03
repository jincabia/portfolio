import Link from 'next/link';

const VerticalNavBar = () => {

  const navItems = [
    { name: 'Home'},
    { name: 'About' },
    { name: 'Projects' },
    { name: 'Contact' },
  ];

  return (
    <div className="flex flex-col h-screen w-44 bg-[#1E201E]  text-white p-5">
      <h2 className="text-xl font-semibold mb-10">My Portfolio</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
              <p
              >
                {item.name}
              </p>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNavBar;

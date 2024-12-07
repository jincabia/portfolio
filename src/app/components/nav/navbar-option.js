
export default function NavOption({ item, active, icon, expanded }) {
  return (
    <li key={item.name} className="w-full  font-semibold group">
      <a href={item.path}>

      <span className={`flex items-center ${expanded === true ? "group ml-2 " : ""}`}>
            <p
              className={`
                
                w-min  py-6 transition ease-in text-center  text-white/[0.5] group-hover:text-yellow-200
                ${ expanded === true ? "  ml-2 " : " mx-auto duration-150  scale-90"} `
            }
            >
              {icon}
            </p>

            {expanded && (
              <>
              <p className={` text-white/[0.5] opacity-0 ml-1 transition  ${ expanded === true ? "group-hover:text-yellow-200 opacity-100 " : " duration-150 opacity-0 scale-90"} animate-slide-in ease-in-out duration-300`}>

                {item.name}
              </p>
              </>
            )}

      </span>


      </a>
    </li>
  );
}


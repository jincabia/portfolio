
export default function NavOption({ item, active, icon, expanded }) {
  return (
    <li key={item.name} className="w-full font-semibold">
      <a href={item.path}>

      <span className={`flex items-center ${expanded === true ? "group ml-2 " : ""}`}>
            <p
              className={`
                
                w-min  py-6 transition ease-in text-center  text-white/[0.5] 
                ${ expanded === true ? " group-hover:text-yellow-200 ml-2 " : "hover:text-yellow-200 ml-5 "} `
            }
            >
              {icon}
            </p>

            {expanded && (
              <>
              <p className={` text-white/[0.5] opacity-0 ml-1  ${ expanded === true ? "group-hover:text-yellow-200 opacity-100" : " duration-300 opacity-0 "} animate-slide-in ease-in-out duration-300`}>

                {item.name}
              </p>
              </>
            )}

      </span>


      </a>
    </li>
  );
}


        // {expanded && (
        //   <>
        //     <p
        //       className={`w-full py-2 duration-300 transition ease-in text-start ml-2 text-white/[0.5]  hover:text-yellow-200 ${
        //         active === true ? "text-yellow-200" : ""
        //       }} `}
        //     >
        //       {/* {icon} {item.name} */}
        //     </p>
        //   </>
        // )}

        // {!expanded && (
        //   <>
        //     <p
        //       className={`w-full py-2 transition ease-in text-center  text-white/[0.5] hover:text-yellow-200 ${
        //         active === true ? "text-yellow-200" : ""
        //       }} `}
        //     >
        //       {/* {icon} */}
        //     </p>
        //   </>
        // )}
import Image from "next/image";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import GlobalIcon from "./wrapper";
import GlobalArrow from "./arrow-wrapper";


export default function Project({ name, date, description, path, link, github }) {
    return (
        <div className="group  sm:w-1/2 md:w-[19.5rem] bg-gray-500/[0.2] md:bg-gray-600/[.1]  text-[#ECDFCC]/[.6] text-sm p-4 sm:mb-4 md:mb-0 hover:scale-105 cursor-pointer hover:bg-gray-400/[.1] transition ease-in-out duration-300 rounded-md ">

          
            <a href={link || github} target="_blank" rel="noopener noreferrer">
                <div className="md:grid grid-rows-3 grid-flow-col space">
                    {/* Name */}
                    {/* Need to implement a hover using MUI to make group hover work here */}
                    <div className="col-span-2 flex font-semibold text-yellow-200 text-lg">
                        {name}
                        <GlobalArrow>
                            <KeyboardArrowRightIcon fontSize="small" 
                        // className="group-hover:translate-x-8 transition ease-in-out duration-300" 
                        />
                        </GlobalArrow>
                        
                    </div>  

                    <div className=" col-span-2 row-span-2  text-clip    ">
                        <p>
                        {description}
                        </p>
                    </div>
                </div>

                <div className="col-span-2 row-span-3 mr-4 py-4 flex  space-x-1 ">
                    <Image
                        src={`/${path}`}
                        width={400}
                        height={200}
                        alt={`${name} Image`}
                        className=""
/>
                </div>
            </a>

            <div className="flex space-x-4 text-white/[.5] pt-4">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        
                        <GlobalIcon>

                            <LinkIcon/>
                        </GlobalIcon>
                    </a>
                )}

                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GlobalIcon>

                            <GitHubIcon />
                        </GlobalIcon>
                    </a>
                )}
            </div>
        </div>
    );
}

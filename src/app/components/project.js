import Image from "next/image";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Project({ name, date, description, path, link, github }) {
    return (
        <div className="bg-gray-500/[0.2] md:bg-gray-600/[.1] text-[#ECDFCC]/[.6] text-sm p-4 hover:scale-105 cursor-pointer hover:bg-gray-500/[.1] transition ease-in-out duration-300 rounded-md group">

          
            <a href={link || github} target="_blank" rel="noopener noreferrer">
                <div className="md:grid grid-rows-3 grid-flow-col space">
                    {/* Name */}
                    <div className="col-span-2 font-semibold text-yellow-200 text-lg">
                        {name}
                        <KeyboardArrowRightIcon fontSize="small" className="group-hover:translate-x-8 transition ease-in-out duration-300" />
                        
                    </div>

                    <div className=" col-span-2 row-span-2 flex text-ellipsis">
                        {description}
                    </div>
                </div>

                <div className="row-span-3 mr-4 py-4 flex space-x-1">
                    <Image
                        src={`/${path}`}
                        width={400}
                        height={200}
                        alt={`${name} Image`}
                        className=""
                        objectFit="contain"
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
                        <LinkIcon className="hover:scale-125 hover:text-yellow-200 transition-transform ease-in-out duration-300" />
                    </a>
                )}

                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon className="hover:scale-125 hover:text-yellow-200 transition-transform ease-in-out duration-300" />
                    </a>
                )}
            </div>
        </div>
    );
}

import Image from "next/image"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Project({name,date,description,path,link,github})

{
    return(
        <div className="text-[#ECDFCC]/[.6] text-sm p-4 hover:scale-105 cursor-pointer hover:bg-gray-500/[.1] transition ease-in-out duration-300 rounded-md group  ">


        

            <a href={link || github} target="_blank" 
                 rel="noopener noreferrer" >
                {/* if link href = link else github */}
            
                  
                <div className="md:grid grid-rows-3 grid-flow-col space   ">




                

                    {/* Name */}
                    <div className="col-span-2 font-semibold text-white/[.8] text-lg  ">
                        {name}

                        <KeyboardArrowRightIcon fontSize="small" className="group-hover:translate-x-8 transition ease-in-out duration-300"/>

                    </div>
                    
                    <div className=" w-3/4 col-span-2 row-span-2 ">
                    {description}

                    </div>


                </div>

                <div className="row-span-3  mr-4 py-4 "
                        >
                            <Image
                            src={`/${path}`}
                            width={200}
                            height={200}
                            alt={`${name} Image`}
                            className=""      
                            />
                        </div>
            
            </a>

              


            {/* TODO Conditional Renderings onto if there is a link or not  */}
            {/* add Onclicks  */}

           
            <div className="flex space-x-4 text-white/[.5] pt-4 ">

            {link && <>

                <div className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out  w-min">

                <a href={`${link}`}
                 target="_blank" 
                 rel="noopener noreferrer" 
                >

                    <LinkIcon/>
                </a>
                
                </div>
                
            
            </>}


                <div className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out  w-min">

                    <a
                     href={`${github}`
                }
                target="_blank" 
                rel="noopener noreferrer" >
                        <GitHubIcon/>
                    </a>
                
                </div>
            </div>


        </div>
    )
}
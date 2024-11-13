import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle'; // Adjust if using a different circle icon

const Timeline = () => {
  const stages = [
    "In Junior High I started learning Scratch",
    "In High School I continued with C# and JavaScript",
    "Joined Schulich Ignite and learned game development with Python",
    "Started college and focused on web development and software engineering",
    "Looking for internship opportunities to gain experience",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
        <div className='grid grid-cols-5 space-x-0 gap-0  w-1/2 mx-auto  '>
            <div className='text-center  '>
                <CircleIcon/>
            </div>
            <div className='border-b h-3   '></div>
            <div className=' text-center '><CircleIcon/></div>
            <div className=' text-start border-b h-3   '></div>
            <div className='text-center'><CircleIcon/></div>
        </div>

        <div className='w-1/3 mx-auto '>

            <ul className='list-disc text-sm'>
            <li>
                In Junior High I started learning Scratch
            </li>
            <li>
                hi
            </li>
            <li>
                hi
            </li>
            </ul>
        </div>

    </main>
    

  );
};

export default Timeline;

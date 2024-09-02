import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Skills() {
  return (
    <div className="flex flex-col mt-28 " id="skills">
        <div className=' text-white text-4xl font-bold  flex justify-center items-center '>My Skills</div>
        <div className="flex flex-col pl-32 space-y-14">
        
        <div className="flex flex-row space-x-52 w-[65%] mx-auto  ">

        <div className="flex flex-col mt-16 ">
         
         <div className='bg-[#00ABF0] rounded-sm h-36 w-40 flex justify-center items-center ' > 

              <div className="flex flex-col">
                <div><FaPython  className='text-black  h-16 w-24'/></div>
                <div className="text-black pl-4 pt-2 text-xl font-medium">Python</div>
              
              </div>

          </div>
       
      </div>

      <div className="flex flex-col mt-16 ">
         
         <div className='bg-[#00ABF0] rounded-sm h-36 w-40 flex justify-center items-center ' > 

              <div className="flex flex-col">
                <div><FaHtml5  className='text-black  h-16 w-24'/></div>
                <div className="text-black pl-5 pt-2 text-xl font-medium">HTML</div>
              
              </div>

          </div>
       
      </div>

      <div className="flex flex-col mt-16 ">
         
         <div className='bg-[#00ABF0] rounded-sm h-36 w-40 flex justify-center items-center ' > 

              <div className="flex flex-col">
                <div><IoLogoCss3  className='text-black  h-16 w-24'/></div>
                <div className="text-black pl-8 pt-2 text-xl font-medium">CSS</div>
              
              </div>

          </div>
       
      </div>

        </div>
        <div className="flex flex-row space-x-52 w-[65%] mx-auto mt-6">

<div className="flex flex-col mt-16 ">
 
 <div className='bg-[#00ABF0] rounded-sm h-36 w-40 flex justify-center items-center ' > 

      <div className="flex flex-col">
        <div><TbBrandJavascript  className='text-black  h-16 w-24'/></div>
        <div className="text-black pl-1 pt-2 text-xl font-medium">JavaScript</div>
      
      </div>

  </div>

</div>

<div className="flex flex-col mt-16 ">
 
 <div className='bg-[#00ABF0] rounded-sm h-36 w-40 flex justify-center items-center ' > 

      <div className="flex flex-col">
        <div><SiMongodb  className='text-black  h-16 w-24'/></div>
        <div className="text-black pl-1 pt-2 text-xl font-medium">MongoDB</div>
      
      </div>

  </div>

</div>

<div className="flex flex-col mt-16 ">
 
 <div className='bg-[#00ABF0] rounded-sm h-36 w-40 flex justify-center items-center ' > 

      <div className="flex flex-col">
        <div><FaReact  className='text-black  h-16 w-24'/></div>
        <div className="text-black pl-6 pt-2 text-xl font-medium">React</div>
      
      </div>

  </div>

</div>

</div>

        
        </div>
    </div>

  )
}

export default Skills

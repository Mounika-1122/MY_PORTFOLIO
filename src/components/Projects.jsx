import React from 'react';

import myImage1 from './to_do1.jpg';
import myImage2 from './cat.jpg';


function Projects() {
  return (
    <div className="w-[95%] mx-auto flex flex-col justify-center items-center mt-32" id="projects">
    <h2 className="text-white text-4xl font-bold mb-24 ">My Projects</h2>
        <div className="flex flex-row space-x-64">

        <a href=" https://github.com/Mounika-1122/To-do-list" target="_blank" className="flex flex-col">
            <div>
               <img src={myImage1} alt="My Image" style={{width: '370px', height: '400px', borderRadius:'3px'}}/> 
            </div>
            <div>
                <h3 className="text-[white] text-xl font-medium pt-3 pl-32" >To do List</h3>

            </div>
       
        </a>

        <a href="https://github.com/Mounika-1122/CatApi" target="_blank"className="flex flex-col">
            <div>
               <img src={myImage2} alt="My Image " style={{height: '400px', width:'350px',borderRadius:'3px'}}/> 
            </div>
            <div>
                <h3 className="text-[white] text-xl font-medium pl-28 pt-3" >Fetch CatPics</h3>

            </div>
       
        </a>

      

        </div>
      
    </div>
  )
}

export default Projects

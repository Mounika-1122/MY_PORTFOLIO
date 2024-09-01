import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <div className="flex items-center w-full justify-between h-20 pt-8 text-white ">
      <div>
        <h1 className="text-4xl font-bold ">MOUNIKA</h1>
      </div> 
      <ul className="flex space-x-14 ml-96 text-2xl font-normal">
        <Link 
          className="cursor-pointer text-[#00ABF0]" 
          to="home" 
          smooth={true} 
          duration={500}
        >
          Home
        </Link>
        <Link 
          className="cursor-pointer text-[#00ABF0]" 
          to="about" 
          smooth={true} 
          duration={500}
        >
          About
        </Link>
        <Link 
          className="cursor-pointer text-[#00ABF0]" 
          to="skills" 
          smooth={true} 
          duration={500}
        >
          Skills
        </Link>
        <Link 
          className="cursor-pointer text-[#00ABF0]" 
          to="projects" 
          smooth={true} 
          duration={500}
        >
          Projects
        </Link>
        <Link 
          className="cursor-pointer text-[#00ABF0]" 
          to="contact" 
          smooth={true} 
          duration={500}
        >
          Contact Me
        </Link>
      </ul>
    </div>
  )
}

export default NavBar;

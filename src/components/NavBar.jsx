import React from 'react';
import { Link } from 'react-router-dom';

function  NavBar() {
  return (
    <div className="flex items-center w-[full] justify-between h-20 pt-8 text-white top-fixed">
     <div>
        <h1 className="text-4xl font-bold ">MOUNIKA</h1>
        </div> 
        {/* <ul className="flex space-x-14 ml-96 text-2xl font-normal">
            <Link className="cursor-pointer text-[#00ABF0]" to="/Home">Home</Link>
            <Link className="cursor-pointer text-[#00ABF0]" to='/about'>About</Link>
            <Link className="cursor-pointer text-[#00ABF0]" to='/skills'>Skills</Link>
            <Link className="cursor-pointe text-[#00ABF0]" to='/projects'>Projects</Link>
            <Link className="cursor-pointer text-[#00ABF0]" to='contact'>Contact Me</Link>
        </ul> */}
        <ul className="flex space-x-14 ml-96 text-2xl font-normal">
            <li className="cursor-pointer text-[#00ABF0]" to="/Home">Home</li>
            <li className="cursor-pointer text-[#00ABF0]" to='/about'>About</li>
            <li className="cursor-pointer text-[#00ABF0]" to='/skills'>Skills</li>
            <li className="cursor-pointe text-[#00ABF0]" to='/projects'>Projects</li>
            <li className="cursor-pointer text-[#00ABF0]" to='contact'>Contact Me</li>
        </ul>
    </div>
  )
}

export default NavBar;

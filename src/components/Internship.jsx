import React from 'react'

function Internship() {
  return (
    <div>
        <div className=" w-[75%] mx-auto flex flex-col justify-center items-center mt-28">
      <h2 className="text-white text-5xl font-bold">I'm <span className="text-[#00ABF0]">open</span> for internship</h2>
      <h2 className="text-white text-5xl font-bold pt-2">opportunity</h2>
 
      <div className="mt-5">
      <p className=" text-gray-500 text-3xl">Lets collaborate on projects and bring your ideas to life. Contact me to discuss</p>
      <center className=" text-gray-500 text-3xl">how we can work together and achieve remarkable results.</center>
      </div>

      <div className="mt-9">

        <a  href="mailto:mounikarankireddy096@gmail.com">

        <button className="bg-[#00ABF0] text-black px-6 py-4 rounded-md cursor-pointer">LETS HAVE A TALK</button>

        </a>
     
      </div>
      </div>
    </div>
  )
}

export default Internship

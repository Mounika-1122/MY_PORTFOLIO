import React from "react";

function About() {
  return (
    <div className=" flex flex-col w-[90%] mx-auto mt-28" id="about">
      <div className="flex justify-start flex-col ">
        <p className="text-white text-4xl font-bold flex justify-center items-center ">About Me</p>
        <p className=" text-gray-500 pt-7 text-3xl ">
          I'm a passionate student, Pursuing my bachelors in computer science and engineering from
          Kakinada Institute Of Engineering And Technologies For Womens.I have started Web Development with a love for creating intuitive and engaging digital experiences.
          I've honed my skills in front-end development, 
          crafting solutions that are both aesthetically pleasing and highly functional.
          I thrive on solving complex problems and am driven by a commitment to continuous learning.
           Whether I'm coding a new feature, designing a user interface, or collaborating with a team, 
           I always aim to deliver work that makes an impact.
           and I’m excited to continue growing and contributing to the ever-evolving digital landscape.
        </p>
    
          <div className="mt-11 flex justify-center items-center">
            <a
              target="_blank"
              className="bg-[#00ABF0] text-black px-5 py-4 rounded-md cursor-pointer"
              rel="ro referrer no-opener"
              href="https://drive.google.com/file/d/1Dx2L66g8q4Rq2CZtorQf9FD4FpVYY_GW/view?usp=drivesdk"
            >DOWNLOAD CV</a>
          </div>
        
      </div>
    </div>
  );
}

export default About;

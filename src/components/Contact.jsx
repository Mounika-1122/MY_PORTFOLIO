import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className=" w-[95%] mx-auto flex flex-col justify-center items-center mt-24 " id="contact">
      <h2 className="text-white text-4xl font-bold pt-2">Contact Me</h2>

      <div className="w-[70%] mx-auto flex flex-row justify-between">
        <a href="mailto:mounikarankireddy096@gmail.com" className="flex flex-col mt-16 ">
          <div className="bg-[#00ABF0] rounded-full h-32 w-32 flex justify-center items-center ">
            <div>
              <MdEmail className="text-black  h-12 w-14" />
            </div>
          </div>
          <div>
            <p className="text-white pl-10 pt-4 text-xl font-normal">Email</p>
            {/* <p className="text-gray-500 text-lg pl-4">Kothapeta, AP</p> */}
          </div>
        </a>

        <a href="https://www.linkedin.com/in/mounika-rankireddy-23786b269/" target="_blank" className="flex flex-col mt-16 ">
          <div className="bg-[#00ABF0] rounded-full h-32 w-32  flex justify-center items-center ">
            <div>
              <FaLinkedin className="text-black  h-12 w-14" />
            </div>
          </div>
          <div>
            <p className="text-white pl-7 pt-4 text-xl font-normal">LinkedIn</p>
            {/* <p className="text-gray-500 text-lg pl-4">+91 7842929762</p> */}
          </div>
        </a >

        <a href="https://github.com/Mounika-1122" target="_blank" className="flex flex-col mt-16 ">
          <div className="bg-[#00ABF0] rounded-full h-32 w-32 flex justify-center items-center ">
            <div>
              <FaGithub className="text-black  h-12 w-14" />
            </div>
          </div>

          <div>
            <p className="text-white pl-9 pt-4 text-xl font-normal">Github</p>
            {/* <p className="text-gray-500 text-lg ">mounikarankireddy096@gmail.com</p> */}
          </div>
        </a>

        <a href="https://www.instagram.com/mouni.zx_/?next=%2F" target="_blank" className="flex flex-col mt-16 ">
          <div className="bg-[#00ABF0] rounded-full h-32 w-32 flex justify-center items-center ">
            <div>
              <FaSquareInstagram className="text-black  h-12 w-14" />
            </div>
          </div>
          <div>
            <p className="text-white pl-6 pt-4 text-xl font-normal">
              {" "}
              Instagram
            </p>

            {/* <p className="text-gray-500 text-lg">Mounika Rankireddy</p> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;

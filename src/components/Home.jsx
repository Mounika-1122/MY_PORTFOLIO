import React from "react";
import myProfile from './profile1.jpg';
const Home =() =>{
    return (
        <div className="flex flex-row justify-between">
         <div className=" space-y-3  flex flex-col mt-48 h-full ">
         <p className="text-[#00ABF0]">HELLO !!</p>
         <div className="flex space-x-3">

         <p className="text-white text-6xl font-extrabold">I'M </p>
         <p className="text-[#00ABF0] text-6xl font-extrabold">RANKIREDDY </p>
         
         </div>
         <p className="text-[#00ABF0] text-6xl font-extrabold">MOUNIKA </p>

         <p className=" text-white text-3xl pt-7 ">An undergraduate of KIETW</p>

         <div className="space-x-6 font-small pt-5 ">

         <a href="https://www.linkedin.com/in/mounika-rankireddy-23786b269/" target='_blank'> <button className=" text-black bg-[#00ABF0] rounded-3xl p-5 py-3">CONNECT WITH ME</button></a>

            <button  className=" text-[#00ABF0] bg-black rounded-3xl px-7 py-3 border border-[#00ABF0]">MY WORKS</button>
         </div>
         </div>
         <div className="mt-6 mr-5">
         <img src={myProfile} alt="My Image" style={{width: '600px', height: '700px', borderRadius:'50%'}}/> 

         </div>
 

        </div>
    )
}
export default Home;

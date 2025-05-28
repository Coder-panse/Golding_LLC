import React from "react";
import { IoCall } from "react-icons/io5";
import "../font.css"

const Hero = () => {
  return (
    //  <div className='flex flex-col items-center py-10  bg-[#193451] text-white'>
    //     <div className='w-[320px] sm:w-[450px] '>
    //         <img src="Golding.jpg" alt="" className='w-full object-cover'/>
    //     </div>
    //     <div className='text-center mx-2.5'>
    //         <h1 className='font-bold text-xl md:text-4xl'>Welcome To Golding LLC</h1>
    //         <p className='text-lg'>Your Trusted Legal Services Partner! ⚖️</p>
    //     </div>
    // </div>
    <div
      className="flex flex-col items-center py-10 text-white bg-cover bg-no-repeat bg-center h-[90vh]"
      style={{ backgroundImage: `url("/gold-back.JPG")` }} // replace with actual image path
    >
      {/* Navbar */}
      <div className=" w-full px-8 py-2 sm:px-20 sm:py-3 flex items-center justify-between">
        <div>
          <img src="gold.png" alt="" className="w-[80px] sm:w-[100px]" />
        </div>

        <div
          className="bg-white text-black p-4 rounded-full cursor-pointer"
          onClick={() => (window.location.href = "tel:+1(917)582-6971")}
        >
          <i>
            <IoCall />
          </i>
        </div>
      </div>

      {/* hero */}

      <div className="  lg:w-[550px] sm:w-[450px]">
        {/* <img src="gold.png" alt="" className="w-full object-cover" /> */}
        <h1 className="text-6xl font-bold text-center mt-[20%] mb-10 font-times ">GOLDING L.L.C</h1>
      </div>
      <div className="text-center mx-2.5">
        <h1 className="font-bold text-xl md:text-4xl">
          Welcome To Golding LLC
        </h1>
        {/* <p className="text-lg">Your Trusted Legal Services Partner! ⚖️</p> */}
        <p className="text-lg">Your Trusted Legal Services Partner</p>
      </div>
    </div>

    // bg-[#111C4E]
  );
};

export default Hero;

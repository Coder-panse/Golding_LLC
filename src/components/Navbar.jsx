import React from "react";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-[#193451] w-full px-8 py-2 sm:px-20 sm:py-3 flex items-center justify-between">
      <div>
        <img src="Golding.jpg" alt="" className="w-[80px] sm:w-[100px]" />
      </div>

      <div className="bg-white p-4 flex justify-center rounded-full cursor-pointer" onClick={()=>window.location.href='tel:+1(917)582-6971'}>
          <i >
            <IoCall />Call Me
          </i>

        </div>
    </div>
  );
};

export default Navbar;

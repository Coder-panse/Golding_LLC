import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = () => {
  const Cardinfo = [
    {
      img: "img1.png",
      name: "Notarization",
      des: "Fast, reliable, and certified document notarization.",
    },
    {
      img: "img3.png",
      name: "Legal Document Drafting",
      des: "Professionally crafted Discovery Demands and Responses, Predicate Notices, Affidavits, Summons and Complaints, and more.",
    },
    {
      img: "img2.png",
      name: "1 on 1 LSAT tutoring",
      des: "Expert guidance to help you ace the LSAT and get into law school!",
    },
  ];
  return (
    <div className="my-18 px-5 xl:my-28">
      <div>
        <div className="text-center my-8">
          <h1 className="font-bold text-3xl md:text-5xl relative inline-block">
            Service We Offer
            <span className="block h-1 w-32 bg-[#2a5787] mx-auto mt-2 rounded"></span>
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-16 justify-center mt-18 ">
        {Cardinfo.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-72 bg-[#193451] text-white rounded-md p-3 pb-5 flex flex-col 
                 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Image Section (Fixed Size) */}
            <div className="w-full h-48 md:h-[55%] rounded-md bg-white overflow-hidden flex justify-center">
              <img src={card.img} alt="" className="h-full object-cover" />
            </div>

            {/* Content Section (Expands Naturally) */}
            <div className="flex-grow">
              <h1 className="pt-2 font-medium text-lg">{card.name}</h1>
              <p className="text-sm text-gray-300 py-2">{card.des}</p>
            </div>

            {/* Button (Always at Bottom) */}
            <div className="mt-auto">
              <button className="w-full py-2 bg-[#C5A658] rounded-md font-medium cursor-pointer">
                Book Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

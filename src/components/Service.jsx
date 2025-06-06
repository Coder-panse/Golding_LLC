import React from "react";
import "../font.css"

const Service = () => {
  const Cardinfo = [
    {
      img: "img4.png",
      name: "Accuracy & Confidentiality Guaranteed",
      des: " As a Veteran that has worked in secure sectors, I know how to keep information safe and secure. Your information and documents are safe with us.",
    },
    {
      img: "img5.png",
      name: "Affordable & Convenient Services",
      des: " Whether it’s getting your deed notarized, or drafting a discovery request, you can rest assured that you are getting expedient services at a competitive price.",
    },
    {
      img: "img6.png",
      name: "Serving Individuals & Businesses",
      des: "From large corporate law firms to solo practitioners managing demanding caseloads, we support legal professionals at every level.",
    },
  ];
  return (
    <div className="px-5 py-10 bg-[#193451] text-white font-oregano ">
      <h1 className="font-bold text-3xl md:text-5xl text-center pt-7 md:pt-10 relative font-times ">
        Why Choose Golding ?
        <span className="block h-1 w-32 bg-white mx-auto mt-2 rounded"></span>
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-20 xl:mx-40">
        {Cardinfo.map((card, index) => (
          <div
            key={index}
            className="border-2 border-yellow-600 w-full sm:w-[350px] md:w-[400px] px-5 py-4 rounded-lg shadow-lg flex flex-col min-h-[200px]transition-transform duration-300 hover:scale-103 hover:shadow-lg"
          >
            {/* Top Section (Icon + Name) */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border p-2 flex items-center justify-center">
                <img src={card.img} alt="" className="object-cover" />
              </div>
              <p className="text-lg md:text-xl font-semibold font-times">{card.name}</p>
            </div>

            {/* Description (Expands Dynamically) */}
            <p className="mt-2 text-sm md:text-base font-medium text-gray-400 flex-grow">
              {card.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

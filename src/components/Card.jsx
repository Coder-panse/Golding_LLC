import React from "react";

const Card = () => {
  const Cardinfo = [
    {
      img: "img1.png",
      name: "Notarization (Virginia)",
      des: "Fast, reliable, and certified document notarization.",
    },
    {
      img: "img2.png",
      name: "1-1 LSAT tutoring",
      des: "Expert guidance to help you ace the LSAT and get into law school!",
    },
    {
      img: "img3.png",
      name: "Legal Document Drafting",
      des: "Professionally crafted contracts, agreements, and legal paperwork.",
    },
  ];
  return (
    <div className="my-18 px-5 xl:my-28">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl text-center relative">
          Service We Offer
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-16 justify-center mt-18">
        {Cardinfo.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-72 h-auto md:h-96 bg-black text-white rounded-md p-3 pb-5"
          >
            <div className="w-full h-48 md:h-[55%] rounded-md bg-white overflow-hidden flex justify-center">
              <img src={card.img} alt="" className="h-full object-cover" />
            </div>
            <h1 className="pt-2 font-medium text-lg">{card.name}</h1>
            <p className="text-sm text-gray-300 py-2">{card.des}</p>
            <button className="w-full py-2 bg-[#C5A658] rounded-md mt-4 font-medium">
              Book Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

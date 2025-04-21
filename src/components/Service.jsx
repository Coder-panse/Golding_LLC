import React from "react";

const Service = () => {
  const Cardinfo = [
    {
      img: "img4.png",
      name: "Accuracy & Confidentiality Guaranteed",
      des: "As a veteran that has worked in security sectors, holding security clearances secret security clearances, I know how to keep your information safe and secure. Your information and documents are safe with us.",
    },
    {
      img: "img5.png",
      name: "Affordable & Convenient Services",
      des: "Whether its getting your document notarized or drafting it in the first place, You can rest assured that you are getting expedient service and a competitive price.",
    },
    {
      img: "img6.png",
      name: "Serving Individuals & Businesses",
      des: "From law firms and attorneys to students going to law school we help all who are in need.",
    },
  ];
  return (
    <div className="px-5 py-10 bg-[#193451] text-white font-oregano ">
      <h1 className="font-bold text-3xl md:text-5xl text-center pt-10 underline">
        Why Choose Golding
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
              <p className="text-lg md:text-xl font-semibold">{card.name}</p>
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

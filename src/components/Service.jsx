import React from "react";

const Service = () => {
  const Cardinfo = [
    {
      img: "img4.png",
      name: "Accuracy & Confidentiality Guaranteed",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "img5.png",
      name: "Affordable & Convenient Services",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "img6.png",
      name: "Serving Individuals & Businesses",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <div className="px-5 py-10">
      <h1 className="font-bold text-3xl md:text-5xl text-center pt-10">
        Why Choose Golding
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-20 xl:mx-40">
        {Cardinfo.map((card, index) => (
          <div
            key={index}
            className="border w-full sm:w-[350px] md:w-[400px] px-5 py-4 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border p-2 flex items-center justify-center">
                <img src={card.img} alt="" className="object-cover" />
              </div>
              <p className="text-lg md:text-xl font-semibold">{card.name}</p>
            </div>
            <p className="mt-2 text-sm md:text-base font-medium text-gray-600">
              {card.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
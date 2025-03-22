import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Savannah Nguyen",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 2,
    name: "Floyd Miles",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    review:
      "Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt augue et libero dictum, id gravida metus cursus.",
  },
  {
    id: 4,
    name: "Cody Fisher",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 3.5,
    review:
      "Curabitur vel bibendum metus, at consequat metus. Integer ac nulla suscipit, scelerisque metus sit amet, condimentum est.",
  },
];

const getStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }
  return stars;
};

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-[100px] lg:mt-[130px]">
      <h2 className="text-5xl font-bold text-center mb-20">Our Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="pb-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-3"
              />
              <div className="flex mb-2">{getStars(testimonial.rating)}</div>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

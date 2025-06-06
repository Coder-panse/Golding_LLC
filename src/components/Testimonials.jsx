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
    name: "Jasmine R., Richmond, VA",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    review:
      "I needed a power of attorney notarized urgently for my father, and they were able to come the same day. Professional, punctual, and made the entire process stress-free. Highly recommend their mobile notary service!",
  },
  {
    id: 2,
    name: " Michael B., Henrico, VA",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    review:
      "As a small business owner, I often need documents notarized on short notice. I’ve used Golding multiple times, and he’s never let me down. Quick, reliable, and always courteous.",
  },
  {
    id: 3,
    name: "Tasha L., Midlothian, VA",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4.5,
    review:
      "I’m a small PI attorney and my paperwork was getting severely backed up. I contacted Golding and he had the discovery documents I needed the very next day. He was clear, professional, and very affordable. I’ll definitely use him again.",
  },
  {
    id: 4,
    name: " S. Patel, Litigation Associate, Morgan & Phillips LLP",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 4.5,
    review:
      "Our firm handles a steady stream of personal injury cases, and having access to dependable drafting support is invaluable. We requested assistance with a summons and complaint for a motor vehicle accident claim, and the turnaround was fast, accurate, and court-ready. The formatting and attention to detail matched our firm’s standards. Highly recommended for litigation support in high-volume environments.",
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
    <div className="max-w-6xl mx-auto px-4 py-10 mt-[70px] md:mt-[100px] lg:mt-[130px]">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-20 relative">Our Testimonials
      <span className="block h-1 w-32 bg-[#2a5787] mx-auto mt-2 rounded"></span>
      </h2>
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

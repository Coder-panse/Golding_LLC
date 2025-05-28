import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Service from "./components/Service";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { IoCall } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";
import { Link } from "react-router-dom";

const App = () => {

  const [showCallIcon, setShowCallIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show icon after scrolling down at least 100px
      if (window.scrollY > 100) {
        setShowCallIcon(true);
      } else {
        setShowCallIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      {
        showCallIcon && (
          <div className="flex gap-5">
            <i className="fixed top-[85%] right-[15%] p-5 bg-white rounded-full shadow-xl border justify-center flex gap-1 cursor-pointer z-50" onClick={()=>window.location.href='tel:+1(917)582-6971'}>
            <IoCall size={24} /> Call Now
          </i>

         <Link to="https://wa.me/19175826971">
          <i className="fixed top-[85%] right-[5%] p-5 bg-white rounded-full shadow-xl border justify-center flex gap-1 cursor-pointer z-50" onClick={()=>window.location.href='tel:+1(917)582-6971'}>
            <MdTextsms size={24} /> Text Now
          </i>
         </Link>
          </div>
        )
      }
      {/* <Navbar /> */}
      <Hero />
      <Card />
      <Service />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#193451] font-poppins text-white py-8 px-4 mt-[150px] lg:mt-[220px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center md:text-left">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src="Golding.jpg" alt="Golding LLC" className="w-24 mb-4" />
          <p className="font-semibold">
            Golding LLC – Where Legal Excellence Meets Convenience!
          </p>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link className="hover:underline">Home</Link>
            </li>
            <li>
              <Link className="hover:underline">Services</Link>
            </li>
            <li>
              <Link className="hover:underline">Why Choose Us</Link>
            </li>
            <li>
              <Link className="hover:underline">Testimonials</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="font-bold text-lg mb-2">Get In Touch</h3>
          <ul className="space-y-1">
            <li className="flex gap-1 ">
              <Link className="hover:underline flex gap-1 items-center">
                <FaPhone className="mr-2" />
                <span>+1 (917) 582-6971</span>
              </Link>
            </li>
            <li className="flex gap-1">
              <Link className="hover:underline flex gap-1 items-center">
                <MdEmail className="mr-2" />
                <span>info@golding.com</span>
              </Link>
            </li>
            <li>
              
                <Link to={"https://www.instagram.com/nemsa_g/"} className="hover:underline flex gap-1">
                  <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
                  <span>Instagram</span>
                </Link>
              
            </li>
            <li>
              {" "}
              <Link to={"https://www.linkedin.com/in/nernemsaa/"} className="hover:underline flex gap-1">
                <FaLinkedin className="text-blue-600 text-2xl cursor-pointer" />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
             
                <Link to={"https://www.facebook.com/Nemsagg"} className="hover:underline flex gap-1">
                  <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
                  <span>Facebook</span>
                </Link>
             
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Golding LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

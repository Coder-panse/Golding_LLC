import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Form = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-auto mt-32 md:mt-40">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 p-6 text-white flex flex-col justify-center relative min-h-[300px] md:min-h-full"
        style={{
          backgroundImage: "url('form_image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4">Get in touch with me on social media or send me a message</p>

          <div className="mb-4 flex items-center justify-center md:justify-start">
            <FaPhone className="mr-2" />
            <span>+1 (917) 582-6971</span>
          </div>

          <div className="mb-4 flex items-center justify-center md:justify-start">
            <MdEmail className="mr-2" />
            <span>info@golding.com</span>
          </div>

          <div className="mb-4 flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2" />
            <span>123 AB road, Indore, MP, India</span>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
            <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
            <FaLinkedin className="text-blue-600 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6">
        <form className="space-y-4">
          <div>
            <label className="block font-semibold">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>

          <div>
            <label className="block font-semibold">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>

          <div>
            <label className="block font-semibold">
              Subject <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>

          <div>
            <label className="block font-semibold">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea className="w-full p-2 border rounded h-24" required></textarea>
          </div>

          <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

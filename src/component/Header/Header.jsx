import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-end items-center h-12 bg-[#2E3A59] text-white px-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-1">
          <FaEnvelope />
          <span>www.registerkaro.in</span>
        </div>

        <div className="flex items-center gap-1">
          <FaPhoneAlt />
          <span>+91 8447746183</span>
        </div>

        <div className="flex gap-2">
          <FaFacebook className="cursor-pointer hover:text-blue-500" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Header;

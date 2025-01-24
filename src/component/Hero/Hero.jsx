import React from "react";
import "./Hero.css";
import star from "../../assets/starts.png";
import hero from "../../assets/herologo.png";
import single from "../../assets/singleStar.png";
import customers from "../../assets/customers.png";
import handshake from "../../assets/handshake.png";
import PlayIcon from "../../assets/playIcon.png";
import CompanyReview from "../CompanyReview/CompanyReview";
import OurServices from "../../Pages/OurServices/OurServices";
import About from "../../Pages/About/About";
import OurVideoIntroduction from "../OurVideoIntroduction/OurVideoIntroduction";
import OurHappyClient from "../OurHappyClient/OurHappyClient";
import Blog from "../../Pages/Blog/Blog"
import FreqentlyQuestion from "../FrequentlyQuestion/FrequentlyQuestion";
import Download from "../Download/Download";
import Somenumber from "../Somenumber/Somenumber";
import { Link } from "react-router-dom";
import WhatPeopleSay from "../WhatPeopleSay/WhatPeopleSay";

const Hero = () => {
  const buttons = [
    "Annual Compliance",
    "Company Formation",
    "Payroll Services",
    "Annual Compliance",
  ];

  return (
    <>
      <div className="h-[100vh] flex flex-col lg:flex-row justify-between items-center hero w-full">
        <div className="ml-10 flex-1 px-5 md:px-10">
          <p className="text-xl flex mt-16 text-gray-800 items-start">
            <span>
              <img src={single} className="mt-2 px-2" alt="Single Star" />
            </span>
            Google Rating{" "}
            <span>
              <img src={star} className="mt-2 px-2" alt="Star" />
            </span>
          </p>
          <h1 className="text-5xl font-bold text-gray-800 flex items-center mt-7">
            Your trusted partner for compliance business needs
          </h1>
          <p className="text-gray-600 mt-10 text-xl">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various registrations, tax filings, and other
            legal <span className="font-bold">matters.</span>
          </p>

          <div className="flex justify-between items-center my-9">
            <div className="flex flex-col items-center space-y-2">
              <img src={customers} alt="customer" className="w-8 h-8" />
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-yellow-500">
                4.5 +
              </span>
              <p className="text-gray-800">Customer Rating</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <img src={customers} alt="customer" className="w-8 h-8" />
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-yellow-500">
                20,000+
              </span>
              <p className="text-gray-800">Clients</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <img src={handshake} alt="customer" className="w-8 h-8" />
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-yellow-500">
                99.8%
              </span>
              <p className="text-gray-800" >Financial Stability</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
           <Link to="/contact">
           <button className="hidden lg:block bg-blue-900 text-white py-2 px-6 rounded-md border-none text-xl font-bold hover:bg-blue-600 transition duration-300 w-full lg:w-auto">
              Talk An Expert
            </button>
           </Link>
            <button className=" bg-transparent flex text-black py-2 px-6 rounded-md border-none text-xl transition duration-300 w-full lg:w-auto">
              <span>
                <img src={PlayIcon} className="w-6 h-6 hidden lg:block" />
              </span>
              <p className="px-2 hidden lg:block">See how it works</p>
            </button>
          </div>
        </div>

        <div className="hidden lg:block flex-1 flex justify-center items-center mt-10 lg:mt-0">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
          />
        </div>

        <div className="flex flex-col space-y-4 mt-10 px-3 lg:px-10">
          {buttons.map((label, index) => (
            <button
              key={index}
              className="hidden lg:block bg-white text-black border-none rounded-md py-2 px-8 hover:bg-gray-100 transition duration-300 w-full sm:w-auto"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <CompanyReview />
      <OurServices />
      <About />
      <OurVideoIntroduction/>
      <OurHappyClient/>
      <Blog/>
      <WhatPeopleSay/>
      <FreqentlyQuestion/>
      <Download/>
      <Somenumber/>
      
    </>
  );
};

export default Hero;

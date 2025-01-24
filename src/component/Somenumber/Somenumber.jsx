import React from "react";
import { FaCheckCircle } from "react-icons/fa"; 
import Company from "../../assets/Companylogo.png";
import Company2 from "../../assets/Company2.png";
import Company3 from "../../assets/Company3.png";
import Company4 from "../../assets/Company4.png";
import Company5 from "../../assets/Company5.png";

const Somenumber = () => {
  return (
    <div className="font-sans mt-10 py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center px-4">
        <p className="text-yellow-600 font-medium uppercase">Why Register Karo</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-7 text-brown-600">
          Some Numbers Are Important
        </h1>
      </div>

    

 

<div className="flex flex-wrap justify-center md:justify-between mt-16 px-5">
  {[
    { value: "1M", label: "CUSTOMERS", color: "text-green-500", supColor: "text-green-700" },
    { value: "12", label: "YEAR OF EXCELLENCE", color: "text-red-500", supColor: "text-red-700" },
    { value: "41", label: "R&D ENGINEERS", color: "text-purple-500", supColor: "text-purple-700" },
    { value: "78", label: "COUNTRIES", color: "text-blue-500", supColor: "text-blue-700" },
    { value: "3287", label: "PARTNERS", color: "text-yellow-500", supColor: "text-yellow-700" },
    { value: "41", label: "AWARDS RECEIVED", color: "text-indigo-500", supColor: "text-indigo-700" },
  ].map((item, index) => (
    <div
      key={index}
      className="text-center px-6 py-4 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/6"
    >
      <h1 className={`text-3xl md:text-4xl font-bold ${item.color}`}>
        {item.value} <sup className={`${item.supColor}`}>+</sup>
      </h1>
      <p className="text-gray-800 text-sm mt-2">{item.label}</p>
    </div>
  ))}
</div>



   
    
      {/* Three-color gradient background and email input section */}
<div className="bg-gradient-to-r from-yellow-400 to-blue-800 py-16">
  <div className="text-center flex flex-col justify-center items-center px-4">
    <p className="text-center text-white">1% OF THE INDUSTRY</p>
    <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
      Welcome to your new digital reality. Now.
    </h1>

    {/* Input Section */}
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
      <div className="relative flex items-center mt-10">
    
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 pl-10 rounded-lg w-full sm:w-80 text-black focus:outline-none"
        />
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
        Submit
      </button>
      </div>
    
    </div>

    {/* Features Section */}
    <div className="flex flex-col sm:flex-row justify-around items-start sm:items-center mt-16 gap-6 px-4">
      {[
        { text: "Instant Results", color: "white" },
        { text: "User-Friendly", color: "white" },
        { text: "Personalized & Customized", color: "white" },
      ].map((feature, index) => (
        <div key={index} className="flex items-center text-gray-800">
          <FaCheckCircle className={`text-${feature.color} mr-3 text-xl`} />
          <p className="text-base sm:text-lg">{feature.text}</p>
        </div>
      ))}
    </div>
   
  </div>
  
</div>
<div className="flex flex-wrap justify-between gap-6 items-center mt-10 px-10 py-10">
  <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-auto">
    <img src={Company} alt="company" className="max-w-full h-auto" />
  </div>
  <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-auto">
    <img src={Company2} alt="company" className="max-w-full h-auto" />
  </div>
  <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-auto">
    <img src={Company3} alt="company" className="max-w-full h-auto" />
  </div>
  <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-auto">
    <img src={Company4} alt="company" className="max-w-full h-auto" />
  </div>
  <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-auto">
    <img src={Company5} alt="company" className="max-w-full h-auto" />
  </div>
</div>



 
     
    </div>
  );
};

export default Somenumber;


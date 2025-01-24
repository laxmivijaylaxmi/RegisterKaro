import React from "react";
import { BsArrowRightCircle } from "react-icons/bs"; 
import square from "../../assets/square.png";
import cart from "../../assets/cart.png";
import sound from "../../assets/sound.png";
import people from "../../assets/people.png";
import microglass from "../../assets/microglass.png";
import setting from "../../assets/setting.png";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="font-sans bg-gray-100 py-16">
      {/* Heading Section */}
      <div className="text-center">
        <p className="text-yellow-600 font-medium">WELCOME TO REGISTERKARO.IN</p>
        <h1 className="text-3xl font-bold mt-7">Explore Our Services</h1>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6">
      
        <div className="bg-transparent border-r-4 border-gray-200 p-6 flex flex-col items-center">
          <img src={setting} alt="Service 1" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Company Formation</h2>
          <p className="text-gray-600 mt-2 text-center">
            We provide expert advice and strategies to help your business grow and succeed.
          </p>
          <button className="mt-8 flex items-center text-yellow-600 font-medium text-sm ">
            Learn More 
            <BsArrowRightCircle className="ml-2 text-lg" />
          </button>
        </div>

    
        <div className="bg-transparent border-r-4 border-gray-200 p-6 flex flex-col items-center">
          <img src={microglass} alt="Service 2" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Company Secretarial Services</h2>
          <p className="text-gray-600 mt-2 text-center">
            Stay compliant with all legal and tax regulations for smooth operations.
          </p>
          <button className="mt-8 flex items-center text-yellow-600 font-medium text-sm ">
            Learn More 
            <BsArrowRightCircle className="ml-2 text-lg" /> 
          </button>
        </div>

     
        <div className="bg-transparent border-r-4 border-gray-200 p-6 flex flex-col items-center">
          <img src={people} alt="Service 3" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Virtual Office Address</h2>
          <p className="text-gray-600 mt-2 text-center">
            Tailored solutions to meet your unique business requirements effectively.
          </p>
          <button className="mt-8 flex items-center text-yellow-600 font-medium text-sm ">
            Learn More 
            <BsArrowRightCircle className="ml-2 text-lg" /> 
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6">
      
      <div className="bg-transparent border-r-4 border-gray-200 p-6 flex flex-col items-center">
        <img src={square} alt="Service 1" className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Annual Compliance Services</h2>
        <p className="text-gray-600 mt-2 text-center">
          We provide expert advice and strategies to help your business grow and succeed.
        </p>
        <button className="mt-8 flex items-center text-yellow-600 font-medium text-sm ">
          Learn More 
          <BsArrowRightCircle className="ml-2 text-lg" />
        </button>
      </div>

  
      <div className="bg-transparent border-r-4 border-gray-200 p-6 flex flex-col items-center">
        <img src={cart} alt="Service 2" className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Payroll Services</h2>
        <p className="text-gray-600 mt-2 text-center">
          Stay compliant with all legal and tax regulations for smooth operations.
        </p>
        <button className="mt-8 flex items-center text-yellow-600 font-medium text-sm ">
          Learn More 
          <BsArrowRightCircle className="ml-2 text-lg" /> 
        </button>
      </div>

   
      <div className="bg-transparent border-r-4 border-gray-200 p-6 flex flex-col items-center">
        <img src={sound} alt="Service 3" className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Bookkeeping Services</h2>
        <p className="text-gray-600 mt-2 text-center">
          Tailored solutions to meet your unique business requirements effectively.
        </p>
        <button className="mt-8 flex items-center text-yellow-600 font-medium text-sm ">
          Learn More 
          <BsArrowRightCircle className="ml-2 text-lg" /> 
        </button>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-center mt-16 space-y-4 lg:space-y-0 lg:space-x-4">
         <Link to="/ourservices">
         <button className="hidden lg:block bg-blue-900 text-white py-2 px-6 rounded-md border-none text-xl font-bold hover:bg-blue-600 transition duration-300 w-full lg:w-auto">
         See All Services
            </button>
         </Link>
           
            </div>
    </div>
  );
};

export default OurServices;

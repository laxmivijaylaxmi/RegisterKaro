import React from "react";
import AboutImage from "../../assets/AboutImage.png";
import Symbol from "../../assets/Symbol.png";
import Symbol2 from "../../assets/Symbol2.png"
import Symbol3 from "../../assets/Symbol3.png"
import Symbol4 from "../../assets/Symbol4.png"
import { Link } from "react-router-dom";



const About = () => {
  return (
    <div className="px-10 py-10">
    
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
       
        <div>
          <p className="text-yellow-400">WELCOME TO REGISTERKARO.IN</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-10">
            About Us <span className="text-yellow-600">Register Karo</span>
          </h1>
          <p className="text-gray-600 mb-6">
            We are dedicated to providing exceptional services tailored to your
            needs. Our mission is to make your journey simple and efficient
            through innovative solutions and unwavering support.
          </p>
          <p className="text-gray-600 mb-6">
            With a team of experts, we ensure quality and reliability in
            everything we do. Join us as we pave the way for a better tomorrow!
          </p>
         <Link to="/aboutus">
         <button className="px-6 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-yellow-600">
            Learn More
          </button>
         </Link>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={AboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
     
        <div className="md:col-span-1">
          <p className="text-yellow-400">WHY REGISTERKARO.IN</p>
          <h1 className="text-2xl font-bold mt-10">Why Choose Register Karo</h1>
          <p className="text-gray-600">
            It is with consistent services and results that build trust with
            the people, and that in turn helps us serve the business better.
          </p>
        </div>

      
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 px-10 ">
         
          <div className="bg-pink-100 p-6 flex flex-col items-center w-80 h-40 rounded-md ">
          <div><img src={Symbol} alt="image"/></div>
            <h2 className="text-2xl font-bold text-gray-800">Confidential & Safe</h2>
            <p className="text-gray-600 mt-2 text-center">
            All your private information is safe
            with us
            </p>
          </div>

       
          <div className="bg-blue-100 p-6 flex flex-col items-center w-80 h-40 rounded-md">
          <div><img src={Symbol2} alt="image"/></div>
            <h2 className="text-2xl font-bold text-gray-800">No Hidden Fee</h2>
            <p className="text-gray-600 mt-2 text-center">
            Everything is put before you with
            no hidden charges or condition
            </p>
          </div>
          <div className="bg-green-100 p-6 flex flex-col items-center w-80 h-40 rounded-md ">
          <div><img src={Symbol3} alt="image"/></div>
            <h2 className="text-2xl font-bold text-gray-800">Guaranteed Satisfaction</h2>
            <p className="text-gray-600 mt-2 text-center">
            We ensure that you stay 100%
            satisfied with our offered services
            </p>
          </div>

          {/* Service Box 2 */}
          <div className="bg-red-100 p-6 flex flex-col items-center w-80 h-40 rounded-md">
          <div><img src={Symbol4} alt="image"/></div>
            <h2 className="text-2xl font-bold text-gray-800">Expert CA/CS Assistance</h2>
            <p className="text-gray-600 mt-2 text-center">
            Prompt support from our in-house
            expert professionals
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default About;



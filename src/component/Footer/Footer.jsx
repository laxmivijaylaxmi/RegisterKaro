import React from 'react';
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className="bg-[#2E3A59] py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          
        
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">registerkaro.com</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo et orci tempor, et dignissim velit tincidunt.
            </p>
            <p className="text-sm">© 2025 Company. All Rights Reserved.</p>
            
        
            <div className="flex justify-center sm:justify-start space-x-6 mt-10">
              <a href="#" className="text-white text-3xl hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-white text-3xl hover:text-red-500">
                <FaGoogle />
              </a>
              <a href="#" className="text-white text-3xl hover:text-black">
                <FaApple />
              </a>
              <a href="#" className="text-white text-3xl hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>

       
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4 text-yellow-500">START A BUSINESS</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Solution</a></li>
              <li><a href="#" className="hover:text-blue-500">Integration</a></li>
              <li><a href="#" className="hover:text-blue-500">Enterprise</a></li>
              <li><a href="#" className="hover:text-blue-500">Solutions</a></li>
            </ul>
          </div>

        
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4  text-yellow-500">GOVERNMENT REGISTRATION</h2>
            <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Solution</a></li>
              <li><a href="#" className="hover:text-blue-500">Integration</a></li>
              <li><a href="#" className="hover:text-blue-500">Enterprise</a></li>
              <li><a href="#" className="hover:text-blue-500">Solutions</a></li>
            </ul>
          </div>

        
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4 text-yellow-500">COMPLIANCE & TAX</h2>
            <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Solution</a></li>
              <li><a href="#" className="hover:text-blue-500">Integration</a></li>
              <li><a href="#" className="hover:text-blue-500">Enterprise</a></li>
              <li><a href="#" className="hover:text-blue-500">Solutions</a></li>
            </ul>
          </div>

     
       
        </div>
      </div>
    </div>
  );
};

export default Footer;

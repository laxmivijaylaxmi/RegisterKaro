import React from 'react';


const Contact = () => {
  return (
    <>
   
    
      <div className="border border-gray-200 mt-10 flex justify-between items-center px-4 py-4 max-w-8xl mx-4 sm:mx-10 md:mx-28">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-left">
            <h1 className="text-2xl">Get all the queries instantly on WhatsApp</h1>
            <p className="text-gray-600">Connect with our Support team</p>
          </div>
          <a
            href="https://wa.me/918447746183"  
            target="_blank"  
            rel="noopener noreferrer"  
          >
            <button className="mt-4 md:mt-0 md:ml-4 rounded-md bg-green-500 text-white py-2 px-4">
              WHATSAPP
            </button>
          </a>
        </div>
      </div>

   
      <div className="border border-gray-200 mt-10 flex flex-col sm:flex-row justify-between items-center px-4 py-4 max-w-4xl mx-auto">
    
        <div className="flex-1 text-left mb-4 sm:mb-0">
          <h2 className="text-xl">Sales</h2>
          <p className="text-gray-600">+91 84477 46183</p>
        </div>

        {/* Center Border */}
        <div className="border-l border-gray-300 h-20 sm:h-full mx-4 my-4 sm:my-0 hidden lg:block"></div>

        {/* Right Content */}
        <div className="flex-1 text-right mb-4 sm:mb-0">
          <h2 className="text-xl">Incorporation & Registrations</h2>
          <p className="text-gray-600">+91 84487 89562</p>
        </div>
      </div>

      {/* Third Section with left content, center border, and right content */}
      <div className="border border-gray-200  flex flex-col sm:flex-row justify-between items-center px-4 py-4 max-w-4xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 text-left mb-4 sm:mb-0">
          <h2 className="text-xl">Trademark & Copyright</h2>
          <p className="text-gray-600">+91 92050 96817</p>
        </div>

        {/* Center Border */}
        <div className="border-l border-gray-300 h-20 sm:h-full mx-4 my-4 sm:my-0 hidden lg:block"></div>

        {/* Right Content */}
        <div className="flex-1 text-right mb-4 sm:mb-0">
          <h2 className="text-xl">GST & Income Tax</h2>
          <p className="text-gray-600">+91 84487 89562</p>
        </div>
      </div>

      {/* Fourth Section with left content, center border, and right content */}
      <div className="border border-gray-200  flex flex-col sm:flex-row justify-between items-center px-4 py-4 max-w-4xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 text-center mb-4 sm:mb-0">
          <h2 className="text-xl">For Urgent Escalations</h2>
          <h2 className="text-xl">(10 AM to 5PM)</h2>
          <p className="text-gray-600">+91 84477 46183</p>
        </div>
      </div>

      {/* Note Section */}
      <div className="flex justify-center items-center mt-16 mb-20 px-4 sm:px-10 py-10">
        <p className="text-gray-600 text-center">
          <b>Note</b> : RegisterKaro is a renowned group of individual professionals that has established itself as a market leader in guiding corporate houses and entrepreneurs. We specialize in Company Incorporation, Tax, and all other services rendered by professionals independently. Our registered office is located at #101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
        </p>
      </div>
    </>
  );
};

export default Contact;


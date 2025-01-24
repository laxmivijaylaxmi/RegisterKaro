import React from "react";

const FreqentlyQuestion = () => {
  return (
    <div className="font-sans mt-10 py-16 bg-gray-50">
     
      <div className="text-center">
        <p className="text-yellow-600 font-medium">FAQ</p>
        <h1 className="text-3xl font-bold mt-7">Frequent Ask Questions</h1>
      </div>

      {/* FAQ Question Section */}
      <div className="mt-10 px-4 sm:px-10 space-y-6">
        {/* Question 1 */}
        <div className="relative flex items-center py-4 px-6 rounded-md shadow-md bg-white">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-md"></div>
          <div className="flex-1 pl-4">
            <h1 className="text-lg font-bold flex justify-between items-center">
              <span>Can I recover deleted files from my desktop using this software?</span>
              <span className="text-xl font-bold text-gray-500">→</span>
            </h1>
          </div>
        </div>

        {/* Question 2 */}
        <div className="relative flex items-center py-4 px-6 rounded-md shadow-md bg-white">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-green-500 to-teal-500 rounded-l-md"></div>
          <div className="flex-1 pl-4">
            <h1 className="text-lg font-bold flex justify-between items-center">
              <span>Is this software compatible with macOS and Windows?</span>
              <span className="text-xl font-bold text-gray-500">→</span>
            </h1>
          </div>
        </div>

        {/* Question 3 */}
        <div className="relative flex items-center py-4 px-6 rounded-md shadow-md bg-white">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-l-md"></div>
          <div className="flex-1 pl-4">
            <h1 className="text-lg font-bold flex justify-between items-center">
              <span>How secure is my data when using this application?</span>
              <span className="text-xl font-bold text-gray-500">→</span>
            </h1>
          </div>
        </div>

        {/* Question 4 */}
        <div className="relative flex items-center py-4 px-6 rounded-md shadow-md bg-white">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-red-500 to-pink-500 rounded-l-md"></div>
          <div className="flex-1 pl-4">
            <h1 className="text-lg font-bold flex justify-between items-center">
              <span>Can I upgrade my plan after subscribing to the basic version?</span>
              <span className="text-xl font-bold text-gray-500">→</span>
            </h1>
          </div>
        </div>

        {/* Question 5 */}
        <div className="relative flex items-center py-4 px-6 rounded-md shadow-md bg-white">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-l-md"></div>
          <div className="flex-1 pl-4">
            <h1 className="text-lg font-bold flex justify-between items-center">
              <span>Does the software support real-time collaboration for teams?</span>
              <span className="text-xl font-bold text-gray-500">→</span>
            </h1>
          </div>
        </div>

        {/* Question 6 */}
        <div className="relative flex items-center py-4 px-6 rounded-md shadow-md bg-white">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-teal-500 to-green-500 rounded-l-md"></div>
          <div className="flex-1 pl-4">
            <h1 className="text-lg font-bold flex justify-between items-center">
              <span>What are the minimum system requirements to install the software?</span>
              <span className="text-xl font-bold text-gray-500">→</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-16 space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="hidden lg:block bg-blue-900 text-white py-2 px-6 rounded-md border-none text-xl font-bold hover:bg-blue-600 transition duration-300 w-full lg:w-auto">
      Show more 
            </button>
            </div>
    </div>
  );
};

export default FreqentlyQuestion;

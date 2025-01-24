import React from "react";
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="font-sans mt-10 py-16">
      {/* Heading Section */}
      <div className="text-center">
        <p className="text-yellow-600 font-medium">EXPLORE OUR BLOGS</p>
        <h1 className="text-3xl font-bold mt-7">
          Accelerate Digital Transformation
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-10 py-10">
        <div className="shadow-lg overflow-hidden">
          <img
            src={Image}
            alt="Blog Image"
            className="w-full h-[241px] object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600">
              Prabhash Mishra • 1 Jan 2023 • Today
            </p>
            <h1 className="text-2xl font-bold mb-3">
              Small business & Startup
            </h1>
            <p className="text-gray-600 mb-6">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-md">
                Tax & Audit
              </button>
              <button className=" text-black px-4 py-2 rounded-md">
                Management
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-lg  overflow-hidden">
          <img
            src={Image1}
            alt="Blog Image"
            className="w-full h-[241px] object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600">Mahesh Kumar • 1 Jan 2023 </p>
            <h1 className="text-2xl font-bold mb-3">Scale-Up Company Offer</h1>
            <p className="text-gray-600 mb-6">
              Mental models are simple expressions of complex processes or
              relationships.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">
                Tax
              </button>
              <button className="bg-purple-100 text-purple-600 px-1 py-1 rounded-md">
                Research
              </button>
              <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded-md">
                Research
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-lg  overflow-hidden">
          <img
            src={Image3}
            alt="Blog Image"
            className="w-full h-[241px] object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600">Rakhi Verma • 1 Jan 2023</p>
            <h1 className="text-2xl font-bold mb-3">
              Growing Business Package
            </h1>
            <p className="text-gray-600 mb-6">
              Introduction to Wireframing and its Principles. Learn from the
              best in the industry.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-md">
                Audit
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">
                Money Back
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-lg  overflow-hidden">
          <img
            src={Image4}
            alt="Blog Image"
            className="w-full h-[241px] object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600">Karan Kumar • 1 Jan 2023</p>
            <h1 className="text-2xl font-bold mb-3">Scale-Up Company Offer</h1>
            <p className="text-gray-600 mb-6">
              Collaboration can make our teams stronger, and our individual
              designs better.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-md">
                Money
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">
                Management
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-lg  overflow-hidden">
          <img
            src={Image5}
            alt="Blog Image"
            className="w-full h-[241px] object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600">Richa Singh • 1 Jan 2023</p>
            <h1 className="text-2xl font-bold mb-3">Scale-Up Company Offer</h1>
            <p className="text-gray-600 mb-6">
              JavaScript frameworks make development easy with extensive
              features and functionalities.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md">
                Tax Return
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">
                News
              </button>
              <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded-md">
                Audit
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-lg  overflow-hidden">
          <img
            src={Image3}
            alt="Blog Image"
            className="w-full h-[241px] object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600">Miss Nora• 1 Jan 2023</p>
            <h1 className="text-2xl font-bold mb-3">Scale-Up Company Offer</h1>
            <p className="text-gray-600 mb-6">
            Starting a community doesn’t need to be complicated, but how do you get started?
            </p>
            <div className="flex gap-4">
              <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md">
             Private Limited Company
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">
              Customer Success
              </button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mt-16 space-y-4 lg:space-y-0 lg:space-x-4">
            <Link to="/blogs">
            <button className="hidden lg:block bg-blue-900 text-white py-2 px-6 rounded-md border-none text-xl font-bold hover:bg-blue-600 transition duration-300 w-full lg:w-auto">
      Show more blogs
            </button>
            </Link>
            </div>
    </div>
  );
};

export default Blog;

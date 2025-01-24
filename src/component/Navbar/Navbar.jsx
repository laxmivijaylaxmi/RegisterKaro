


import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { NavLink,Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between h-20 mt-10 bg-white shadow-lg shadow-gray-400 p-4 w-full">
      <div className="flex items-center space-x-3">
 
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

   
        <Link to='/' className=' cursor-pointer'>
          <img src={logo} className="h-8 w-auto mt-3" alt="logo" />
        </Link>
      </div>

   
      <div className="hidden md:flex justify-between space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${
              isActive ? "text-black font-bold" : "text-gray-600"
            } text-lg`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/ourservices"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${
              isActive ? "text-black font-bold" : "text-gray-600"
            } text-lg`
          }
        >
          Our Services
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${
              isActive ? "text-black font-bold" : "text-gray-600"
            } text-lg`
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${
              isActive ? "text-black font-bold" : "text-gray-600"
            } text-lg`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${
              isActive ? "text-black font-bold" : "text-gray-600"
            } text-lg`
          }
        >
          Contact
        </NavLink>
      </div>

 
      <div className="flex justify-end items-start space-x-4">
    
        <button className="hidden lg:block text-gray-600 hover:text-black">
          <FaSearch size={20} />
        </button>

        <button className="hidden lg:block bg-orange-500 text-white py-2 px-6 rounded-md border-none hover:bg-orange-600 transition duration-300">
          Talk to Expert
        </button>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white shadow-lg shadow-gray-400 p-4`}>
        <div className="flex flex-col space-y-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg ${
                isActive ? "text-black font-bold" : "text-gray-600"
              } text-lg`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/ourservices"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg ${
                isActive ? "text-black font-bold" : "text-gray-600"
              } text-lg`
            }
          >
            Our Services
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg ${
                isActive ? "text-black font-bold" : "text-gray-600"
              } text-lg`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg ${
                isActive ? "text-black font-bold" : "text-gray-600"
              } text-lg`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg ${
                isActive ? "text-black font-bold" : "text-gray-600"
              } text-lg`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

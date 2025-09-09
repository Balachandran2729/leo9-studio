"use client";
import { useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { FaChevronDown, FaMoon } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);


const handleContactHover = (isHovered) => {
  setIsContactHovered(isHovered);
};
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  const handleServicesHover = (isOpen) => {
    setIsServicesOpen(isOpen);
    if (isOpen) setIsAboutOpen(false);
  };
  const handleAboutHover = (isOpen) => {
    setIsAboutOpen(isOpen);
    if (isOpen) setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex justify-between h-auto items-center py-3">
          {/* Logo */}
          <div className="flex items-center gap-3 ms-10">
            {/* Replace with your actual logo path */}
            <Image
              src="/Leo9Logo.svg"
              alt="Leo9 Studio Logo"
              width={60}
              height={50}
            />
            <span className="text-2xl font-bold text-black font-sans">LEO9</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10 me-10">
            <a href="#" className="text-black hover:text-red-500 transition-colors duration-200 font-medium"
                onMouseEnter={() => {handleServicesHover(false)
                    handleAboutHover(false)
                }}
            >Work</a>

            {/* Services Link with Hover */}
            <div
              className="relative"
              onMouseEnter={() => handleServicesHover(true)}
            >
              <button
                className="text-black hover:text-red-500 transition-colors duration-200 font-medium flex items-center"
              >
                Services
                {/* Smooth icon transition */}
                <span className="relative inline-block w-3.5 h-3.5 ms-1">
                  <GoDotFill className={`absolute inset-0 w-full h-full transition-all duration-200 ease-in-out ${isServicesOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100'}`} />
                  <FaChevronDown className={`absolute inset-0 w-full h-full transition-all duration-200 ease-in-out text-red-500 ${isServicesOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-75'}`} />
                </span>
              </button>
            </div>

            <a href="#" className="text-black hover:text-red-500 transition-colors duration-200 font-medium"
                onMouseEnter={() => {handleServicesHover(false)
                    handleAboutHover(false)
                }}


            >Clients</a>

            {/* About Link with Hover */}
            <div
              className="relative"
              onMouseEnter={() => handleAboutHover(true)}
            >
              <button
                className="text-black hover:text-red-500 transition-colors duration-200 font-medium flex items-center"
              >
                About
                 {/* Smooth icon transition */}
                 <span className="relative inline-block w-3.5 h-3.5 ms-1">
                  <GoDotFill className={`absolute inset-0 w-full h-full transition-all duration-200 ease-in-out ${isAboutOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100'}`} />
                  <FaChevronDown className={`absolute inset-0 w-full h-full transition-all duration-200 ease-in-out text-red-500 ${isAboutOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-75'}`} />
                </span>
              </button>
            </div>

            <a href="#" className="text-black hover:text-red-500 transition-colors duration-200 font-medium"
                onMouseEnter={() => {handleServicesHover(false)
                    handleAboutHover(false)
                }}
            >Knowledge</a>

            {/* Theme Toggle Button with Smooth Icon Transition */}
            <button
              onClick={toggleTheme}
              className="p-2 text-4xl rounded-full text-gray-800 focus:outline-none transition-colors duration-300"
              aria-label="Toggle dark mode"
              style={{ position: 'relative', overflow: 'hidden', width: '48px', height: '48px' }}
            >
              <motion.span
                key={isDarkMode ? 'light' : 'dark'}
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
              >
                {isDarkMode ? <MdOutlineLightMode /> : <FaMoon />}
              </motion.span>
            </button>

            {/* Contact Button */}
            <div className="relative group">
            <a
                href="#"
                className="block bg-black text-white font-bold px-9 py-3 rounded-md transition-colors duration-200 text-[16px] overflow-hidden"
                onMouseEnter={() => handleContactHover(true)}
                onMouseLeave={() => handleContactHover(false)}
            >
                <div className="relative w-full h-full flex items-center justify-center px-9 py-3">
                <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 0, opacity: 1 }} // Initial state
                    animate={{
                    y: isContactHovered ? -30 : 0, // Move up when hovered
                    opacity: isContactHovered ? 0 : 1, // Fade out when hovered
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Animation settings
                >
                    Contact
                </motion.span>
                <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 30, opacity: 0 }} // Starts below and hidden
                    animate={{
                    y: isContactHovered ? 0 : 30, // Move up to center when hovered
                    opacity: isContactHovered ? 1 : 0, // Fade in when hovered
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Animation settings
                >
                    <span className="flex items-center gap-2">
                    Contact
                    </span>
                </motion.span>
                </div>
            </a>
            </div>
          </div>
        </div>

        {/* Mega Menu Content Area - Appears below the main links with smooth transition */}
        {/* Services Mega Menu */}
 {/* Services Mega Menu */}
<div
  className={`overflow-hidden transition-all duration-500 ease-in-out ${
    isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
  }`}
  onMouseLeave={() => handleServicesHover(false)}
>
  {isServicesOpen && (
    <div className="py-6 border-t border-gray-100 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Design Card */}
        <motion.div
          className="p-5 bg-pink-100 rounded-md transition-shadow duration-300" // Keep existing classes
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation
        >
          <div>
            <h3 className="font-extrabold text-black text-3xl mb-4">{"Design."}</h3>
          </div>
          <div className='flex flex-row justify-start items-start gap-6'>
            <p className="mt-1.5 text-sm text-gray-900 mb-3">{"Handcraft the user experience"}</p>
            <HiOutlineArrowLongRight className='text-black w-13 h-10' />
          </div>
        </motion.div>

        {/* Technology Card */}
        <motion.div
          className="p-5 bg-blue-100 flex flex-col rounded-md transition-shadow duration-300"
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div>
            <h3 className="font-extrabold text-black text-3xl mb-4">{"Technology."}</h3>
          </div>
          <div className='flex flex-row justify-start items-start gap-6'>
            <p className="mt-1.5 text-sm text-gray-900 mb-3">{"Leverage the power of code."}</p>
            <HiOutlineArrowLongRight className='text-black w-13 h-10' />
          </div>
        </motion.div>

        {/* Marketing Card */}
        <motion.div
          className="p-5 bg-purple-100 rounded-md transition-shadow duration-300"
          whileHover={{
            y: -5, 
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div>
            <h3 className="font-extrabold text-black text-3xl mb-4">{"Marketing."}</h3>
          </div>
          <div className='flex flex-row justify-start items-start gap-6'>
            <p className="mt-1.5 text-sm text-gray-900 mb-3">{"Creative strategies for brands."}</p>
            <HiOutlineArrowLongRight className='text-black w-13 h-10' />
          </div>
        </motion.div>
      </div>
    </div>
  )}
</div>

         {/* About Mega Menu */}
            <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isAboutOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            onMouseLeave={() => handleAboutHover(false)}
            >
            {isAboutOpen && (
                <div className="py-6 border-t border-gray-100 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <motion.div
                    className="p-5 bg-pink-100 rounded-md transition-shadow duration-300"
                    whileHover={{
                        y: -5,
                         boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                    <div>
                        <h3 className="font-extrabold text-black text-3xl mb-4">{"About Us."}</h3>
                    </div>
                    <div className='flex flex-row justify-start items-start gap-6'>
                        <p className="mt-1.5 text-sm text-gray-900 mb-3">{"We are super-efficient yet humble to serve you!"}</p>
                        <HiOutlineArrowLongRight className='text-black w-13 h-10' />
                    </div>
                    </motion.div>
                    <motion.div
                    className="p-5 bg-blue-100 rounded-md transition-shadow duration-300"
                    whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                    <div>
                        <h3 className="font-extrabold text-black text-3xl mb-4">{"Team."}</h3>
                    </div>
                    <div className='flex flex-row justify-start items-start gap-6'>
                        <p className="mt-1.5 text-sm text-gray-900 mb-3">{"We are proud of our experienced and accomplished team!"}</p>
                        <HiOutlineArrowLongRight className='text-black w-13 h-10' />
                    </div>
                    </motion.div>

                    {/* Career Card */}
                    <motion.div
                    className="p-5 bg-purple-100 rounded-md transition-shadow duration-300"
                    whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                    <div>
                        <h3 className="font-extrabold text-black text-3xl mb-4">{"Career."}</h3>
                    </div>
                    <div className='flex flex-row justify-start items-start gap-6'>
                        <p className="mt-1.5 text-sm text-gray-900 mb-3">{"Can you offer such experience?"}</p>
                        <HiOutlineArrowLongRight className='text-black w-13 h-10' />
                    </div>
                    </motion.div>
                </div>
                </div>
            )}
            </div>
      </div>
    </nav>
  );
}
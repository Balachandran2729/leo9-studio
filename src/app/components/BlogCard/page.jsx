"use client";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animation1 from '../../animation/Realistic location pin pointer on global earth.json';

export default function BlogCard({ isDarkMode }) {
  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Text Content */}
        <motion.div
          className={`text-center max-w-4xl mx-auto`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className={`text-2xl md:text-5xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            We are a global creative agency that combines design expertise with technology and intelligence.
          </h2>
        </motion.div>
        {/* Lottie Animation */}
        <div className="w-full flex justify-center ">
          <Lottie 
            animationData={animation1} 
            loop={true} 
            style={{ width: '100%', maxWidth: 400, height: 'auto' }} 
          />
        </div>
      </div>
    </div>
  );
}
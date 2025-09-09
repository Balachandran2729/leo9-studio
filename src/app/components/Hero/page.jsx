"use client";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import heroAnimation from '../../animation/Man and robot with computers sitting together in workplace.json';
import LionAnimation from '../../animation/fs_lion.json';
import CircularText from '../../motion/CircularText';
import { SiBmw, SiTata, SiSony, SiAmazonfiretv } from "react-icons/si";
import { DiAndroid, DiApple } from "react-icons/di";
import { FaAmazon, FaCcAmazonPay } from "react-icons/fa";

// Accept the isDarkMode prop
export default function Hero({ isDarkMode = false }) {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Variants for the client logos animation
  const logoAnimationVariants = {
    hidden: { x: 0 },
    visible: {
      x: "-50%",
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
        repeatType: "loop"
      }
    }
  };

  // Determine text and icon colors based on theme
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const subTextColor = isDarkMode ? 'text-gray-300' : 'text-black';
  const iconColorClass = isDarkMode ? 'text-gray-300' : 'text-black';

  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Lottie Animation */}
        <div className="flex-1 flex justify-center mb-10 ms-10 md:mb-0">
          <Lottie
            animationData={heroAnimation}
            loop={true}
            style={{ width: 500, height: 500 }}
          />
        </div>

        {/* Right Side - Text Content and Client Logos */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          
          {/* Grouped Text Content */}
          <div className="w-full flex flex-col justify-end items-center">
            {/* Main Headline */}
            <motion.h1
              className={`text-5xl md:text-7xl font-extrabold ${textColor} leading-tight mb-6 pt-20`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="block">Design</span>
              <span className="block">Transform</span>
              <span className="block">Accelerate</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className={`text-xl md:text-2xl ${subTextColor} mb-10`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Redefining user experiences through<br />
              Behavioural Science & AI
            </motion.p>
          </div>

          {/* Client Logos - Separate Div Below Text */}
          <div className="w-full mt-4">
            <div className="w-full max-w-3xl">
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  style={{ width: 'max-content' }}
                  variants={logoAnimationVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex">
                    <SiBmw size={55} className={`${iconColorClass} mx-10`} />
                    <SiTata size={55} className={`${iconColorClass} mx-10`} />
                    <SiSony size={55} className={`${iconColorClass} mx-10`} />
                    <DiAndroid size={55} className={`${iconColorClass} mx-10`} />
                    <DiApple size={55} className={`${iconColorClass} mx-10`} />
                    <FaAmazon size={55} className={`${iconColorClass} mx-10`} />
                    <FaCcAmazonPay size={55} className={`${iconColorClass} mx-10`} />
                    <SiAmazonfiretv size={55} className={`${iconColorClass} mx-10`} />
                  </div>
                  <div className="flex">
                    <SiBmw size={55} className={`${iconColorClass} mx-10`} />
                    <SiTata size={55} className={`${iconColorClass} mx-10`} />
                    <SiSony size={55} className={`${iconColorClass} mx-10`} />
                    <DiAndroid size={55} className={`${iconColorClass} mx-10`} />
                    <DiApple size={55} className={`${iconColorClass} mx-10`} />
                    <FaAmazon size={55} className={`${iconColorClass} mx-10`} />
                    <FaCcAmazonPay size={55} className={`${iconColorClass} mx-10`} />
                    <SiAmazonfiretv size={55} className={`${iconColorClass} mx-10`} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button (Bottom Right) - Uncomment if needed */}
      <div className="fixed bottom-10 right-10 z-10 flex items-center justify-center">
        <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
          {/* Circular Rotating Text Outside, supports dark/light mode */}
          <CircularText
            text="contact - contact - contact - "
            onHover="speedUp"
            spinDuration={20}
            isDarkMode={isDarkMode}
            size={170}
          />
          {/* Lion Animation Inside */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black rounded-full" style={{ width: 100, height: 100, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lottie animationData={LionAnimation} loop={true} style={{ width: 200, height: 200 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Text */}
      <div className={`absolute bottom-10 left-30 text-[15px] ${isDarkMode ? 'text-gray-300 border-e-gray-300' : 'text-gray-600 border-e-[#0a0a0a]'} border-e-2 p-6`}>
        Your trusted UI UX design agency.
      </div>
    </section>
  );
}
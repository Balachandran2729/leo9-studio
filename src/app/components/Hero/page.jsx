"use client";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import heroAnimation from '../../animation/Man and robot with computers sitting together in workplace.json';
import LionAnimation from '../../animation/fs_lion.json';
import CircularText from '../../motion/CircularText';
import { SiBmw, SiTata, SiSony, SiAmazonfiretv } from "react-icons/si";
import { DiAndroid, DiApple } from "react-icons/di";
import { FaAmazon, FaCcAmazonPay } from "react-icons/fa";
export default function Hero({ isDarkMode = false }) {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
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
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subTextColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const iconColorClass = isDarkMode ? 'text-gray-100' : 'text-gray-900';

  return (
    <section className={`relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0">
        
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 md:ms-10">
          <Lottie
            animationData={heroAnimation}
            loop={true}
            style={{ width: '100%', maxWidth: 500, height: 'auto' }} 
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-20 md:mb-0"> 
          <div className="w-full flex flex-col justify-end items-center md:items-start">
            <motion.h1
              className={`text-5xl md:text-7xl font-extrabold ${textColor} leading-tight mb-6 pt-10 text-center md:text-left`}
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
              className={`text-xl md:text-2xl ${subTextColor} mb-10 text-center md:text-left`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Redefining user experiences through<br />
              Behavioural Science & AI
            </motion.p>
          </div>
          <div className=" w-full flex justify-start items-center mb-4 ms-20 md:mb-0"> 
        <div className={`text-[15px] ${isDarkMode ? 'text-gray-300 border-e-gray-300' : 'text-gray-600 border-e-[#0a0a0a]'} `}>
          Your trusted UI UX design agency.
        </div>
      </div>
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
      <div className="hidden md:flex fixed bottom-10 right-10 z-10 items-center justify-center">
        <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
          <CircularText
            text="contact - contact - contact - "
            onHover="speedUp"
            spinDuration={20}
            isDarkMode={isDarkMode}
            size={170}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black rounded-full" style={{ width: 100, height: 100, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lottie animationData={LionAnimation} loop={true} style={{ width: 200, height: 200 }} />
            </div>
          </div>
        </div>
      </div>
      <div className={`hidden md:flex absolute bottom-10 left-4 md:left-30 text-[15px] ${isDarkMode ? 'text-gray-300 border-e-gray-300' : 'text-gray-600 border-e-[#0a0a0a]'} border-e-2 p-2 md:p-6`}>
        Your trusted UI UX design agency.
      </div>
    </section>
  );
}
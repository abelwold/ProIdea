import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from '/images/logo1.jpg';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 md:py-24 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
        
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 dark:text-indigo-300 leading-tight mb-4">
            Crafting Personal & Family Web Experiences
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 mx-auto md:mx-0 sm:max-w-md md:max-w-xl">
            I design and build custom digital spaces to help individuals and families preserve memories, track milestones, and stay connected — through clean, interactive, and meaningful web apps.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
  href="/Abel_Nerea_Resume_Updated_25_pdf.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  📄 Download Resume
</a>


            <a
              href="/Projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              💡 See Project Ideas
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start text-2xl text-indigo-700 dark:text-indigo-400">
            <a href="https://github.com/abelwold" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abel-nerea-074240176/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img
            src={profileImage}
            alt="Abel Nerea"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

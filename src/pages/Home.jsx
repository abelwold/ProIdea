// src/components/HeroSection.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-100 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-800 leading-tight mb-4">
            Crafting Personal & Family Web Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            I design and build custom digital spaces to help individuals and families preserve memories, track milestones, and stay connected — through clean, interactive, and meaningful web apps.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
           <a
  href="/Abel_Nerea_Resume_Updated_25.pdf"
  download
  className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
>
  <FaDownload />
  Download Resume
</a>
            <a
              href="/Projects"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              💡 See Project Ideas
            </a>
          </div>
          <div className="flex gap-6 mt-6 justify-center md:justify-start text-2xl text-indigo-700">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile-placeholder.png"
            alt="Abel Nerea"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

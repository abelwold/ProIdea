// src/pages/About.jsx
import React from 'react';
import { FaReact, FaFigma, FaGithub, FaNodeJs, FaJava, FaPython, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMysql, SiPostcss, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiBootstrap } from 'react-icons/si';

export default function About() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          I'm Abel Nerea — a creative developer and designer based in Poland. I blend logic and aesthetics to deliver impactful web solutions.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          From personal family apps to client portfolios, I specialize in React, Firebase, and Tailwind CSS. I value clean code, responsive design, and purposeful user experience.
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">My Skills</h3>
          <div className="flex justify-center flex-wrap gap-6 text-4xl text-indigo-500">
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiFirebase title="Firebase" />
            <SiBootstrap title="Bootstrap" />
            <FaPhp title="PHP" />
            <FaJava title="Java" />
            <FaPython title="Python" />
            <SiMysql title="MySQL" />
            <SiAdobeillustrator title="Illustrator" />
            <SiAdobephotoshop title="Photoshop" />
            <FaFigma title="Figma" />
            <FaGithub title="GitHub" />
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/Abel_Nerea_Resume_Updated_25.pdf"
            download
            className="inline-block mt-4 bg-indigo-600 text-white px-5 py-3 rounded-2xl hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 text-left max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-gray-800 mb-2">What Drives Me</h4>
          <p className="text-gray-700">
            I believe technology is best when it brings people together. Whether it's preserving memories through apps or solving workflow problems, I approach each project with empathy, curiosity, and a desire to simplify lives.
          </p>
        </div>

        <div className="mt-12 text-left max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Timeline</h4>
          <ul className="border-l-2 border-indigo-500 pl-4">
            <li className="mb-6">
              <p className="font-semibold text-indigo-600">2023 - MSc in Computer Engineering, Vistula University</p>
              <p className="text-gray-700">Graduated with a strong focus on full-stack development and data-driven projects.</p>
            </li>
            <li className="mb-6">
              <p className="font-semibold text-indigo-600">2022 - QA Engineer Intern at A1QA</p>
              <p className="text-gray-700">Built and ran automation scripts using Selenium and GitHub for collaborative testing.</p>
            </li>
            <li>
              <p className="font-semibold text-indigo-600">2021 - Game Tester at Testronic</p>
              <p className="text-gray-700">Performed exploratory and scripted tests, logged bugs using Jira.</p>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-left max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Testimonials</h4>
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 mb-4">
            "Abel consistently delivered clean, efficient solutions and contributed to better workflows with his curiosity and team spirit." — Mentor at A1QA
          </blockquote>
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
            "His ability to translate abstract ideas into working, user-friendly interfaces is top-notch." — Former Project Collaborator
          </blockquote>
        </div>
      </div>
    </section>
  );
}

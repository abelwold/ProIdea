// src/pages/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Bringing Together',
    description: 'A structured and personalized family dashboard for documenting travel history, managing important documents, and preserving family memories and finances — all in one place.',
    image: '/images/bringing-together.png',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Family Tree Viewer',
    description: 'A visual relationship viewer tailored for personal or family use. Maps out family structures with profile images and Firestore-powered data.',
    image: '/images/family-tree-viewer.png',
    tags: ['Balkan Graph', 'Firestore'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Financial Tracker',
    description: 'A personal and family-oriented finance tracker designed for documenting income, expenses, recurring entries, and insightful charts.',
    image: '/images/family-financial-tracker.png',
    tags: ['Firebase', 'Chart.js', 'CSV Export'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Legacy & Memory Vault',
    description: 'A private, digital space to record voice/video memories, write letters to the future, and preserve family stories for generations.',
    image: '/images/LV.png',
    tags: ['Private Vault', 'Audio/Video Storage'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Family Asset Planner',
    description: 'Manage properties, financial assets, inheritance logic and visual breakdowns — designed for legacy clarity and family continuity.',
    image: '/images/FA.png',
    tags: ['Wealth Tracking', 'Data Visualization'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Education & Milestone Tracker',
    description: 'Log and visualize family education journeys, achievements, and career milestones — from preschool to professional life.',
    image: '/images/ET.png',
    tags: ['Timeline', 'Firestore'],
    liveLink: '#',
    githubLink: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-800 mb-12">Project Ideas</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-xl transition relative group"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-200 text-indigo-800 px-2 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 justify-center mt-4 text-indigo-600 text-sm">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

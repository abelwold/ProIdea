import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';
import ProjectModal from '../components/ProjectModal';

const projects = [
  {
    title: 'UnifiedLife Hub',
    description: 'A centralized dashboard for managing travel, documents, finance, and memories.',
    fullDescription:
      'UnifiedLife Hub is a comprehensive personal dashboard designed to bring together essential life data. It includes modules for travel history, document management, income/expense tracking, memory storage, and residential history — all in one secure space.',
    features: [
      'Interactive travel logger with stats and filters',
      'Secure document uploads with metadata',
      'Finance tracker with recurring entry logic and CSV export',
      'Memory vault for images and videos',
      'Residence history timeline and current location summary'
    ],
    image: '/images/unifiedlife-demo.png',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    previewLink: '/images/unifiedlife-demo.png',
    githubLink: '#'
  },
  {
    title: 'Smart Finance Tracker',
    description: 'Track income, expenses, and visualize your financial journey.',
    fullDescription: 'An intuitive web app for managing personal or shared finances. Supports recurring entries, CSV exports, and data visualization.',
    features: [
      'Income and expense logging with categories',
      'Recurring payments and reminders',
      'Bar and pie chart summaries',
      'CSV export for analysis',
      'File upload for receipts or notes'
    ],
    image: '/images/Smart_Finance_Tracker.png',
    tags: ['Finance', 'Charts', 'CSV'],
    previewLink: '/images/Smart_Finance_Tracker.png',
    githubLink: '#'
  },
  {
    title: 'Legacy Vault',
    description: 'Preserve stories, messages, and memories for future generations.',
    fullDescription: 'A private vault to record and store audio, video, or written memories — ideal for long-term digital legacy creation within families.',
    features: [
      'Audio/video message uploads',
      'Letters to the future functionality',
      'Secure and private access per user',
      'Organized media timelines',
      'Support for tagging and categorizing memories'
    ],
    image: '/images/Legacy_Vault.png',
    tags: ['Legacy', 'Media', 'Memory Vault'],
    previewLink: '/images/Legacy_Vault.png',
    githubLink: '#'
  },
  {
    title: 'Asset Manager',
    description: 'Track and visualize family wealth and property ownership.',
    fullDescription: 'A visual tool for logging family assets, inheritance logic, and property details — great for long-term planning and transparency.',
    features: [
      'Asset creation with owner metadata',
      'Charts showing value by year or type',
      'Upload ownership documents',
      'Categorization by family member',
      'Exportable views'
    ],
    image: '/images/Asset_Manager.png',
    tags: ['Assets', 'Family Wealth', 'Visualization'],
    previewLink: '/images/Asset_Manager.png',
    githubLink: '#'
  },
  {
    title: 'Milestone Tracker',
    description: 'Document and showcase educational and career achievements.',
    fullDescription: 'From preschool to professional life, this tracker visualizes progress and stores proof of key moments.',
    features: [
      'Timeline of achievements by person',
      'Document uploads (certificates, diplomas)',
      'Tag milestones by education level or field',
      'Visual filters by role or phase',
      'Optional export or printing'
    ],
    image: '/images/Milestone_Tracker.png',
    tags: ['Milestones', 'Education', 'Timeline'],
    previewLink: '/images/Milestone_Tracker.png',
    githubLink: '#'
  },
  {
    title: 'Family Tree Viewer',
    description: 'Map family relationships visually with profile-linked data.',
    fullDescription: 'A tool that turns relationship data into an interactive tree with profiles, photos, and context-aware connections.',
    features: [
      'Dynamic tree layout using graph libraries',
      'Profile images and relationship types',
      'Click to view details',
      'Firestore or custom backend integration',
      'Designed for personal and extended family use'
    ],
    image: '/images/Family_Tree_Viewer.png',
    tags: ['Graph', 'Family Tree', 'Firestore'],
    previewLink: '/images/Family_Tree_Viewer.png',
    githubLink: '#'
  },
  {
    title: 'Private Cloud Dashboard',
    description: 'Lightweight file storage system for private groups or families.',
    fullDescription: 'Simplified document and media uploader for private access, perfect for sharing between small groups with folder-like UI.',
    features: [
      'Upload files with category and tags',
      'Firestore/Storage backend',
      'Access control per user',
      'Preview support for images/docs',
      'Search and sort utilities'
    ],
    image: '/images/Private_Cloud_Dashboard.png',
    tags: ['File Storage', 'Firebase', 'Private'],
    previewLink: '/images/Private_Cloud_Dashboard.png',
    githubLink: '#'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-10 sm:mb-12">
          Project Ideas
        </h2>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-indigo-50 dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow hover:shadow-xl transition relative group flex flex-col"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start mt-auto text-indigo-600 dark:text-indigo-400 text-sm">
                {project.previewLink ? (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={project.previewLink}
                      alt={`${project.title} demo`}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 italic">Preview Coming Soon</span>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 hover:text-indigo-500 dark:hover:text-indigo-300 justify-center"
                >
                  <FaInfoCircle /> More Info
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

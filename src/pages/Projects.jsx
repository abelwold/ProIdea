import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ProjectModal from '../components/ProjectModal';

const projects = [
  {
    key: 'unifiedLife',
    image: '/images/unifiedlife-demo.png',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    previewLink: '/images/unifiedlife-demo.png',
    githubLink: '#'
  },
  {
    key: 'financeTracker',
    image: '/images/Smart_Finance_Tracker.png',
    tags: ['Finance', 'Charts', 'CSV'],
    previewLink: '/images/Smart_Finance_Tracker.png',
    githubLink: '#'
  },
  {
    key: 'legacyVault',
    image: '/images/Legacy_Vault.png',
    tags: ['Legacy', 'Media', 'Memory Vault'],
    previewLink: '/images/Legacy_Vault.png',
    githubLink: '#'
  },
  {
    key: 'assetManager',
    image: '/images/Asset_Manager.png',
    tags: ['Assets', 'Family Wealth', 'Visualization'],
    previewLink: '/images/Asset_Manager.png',
    githubLink: '#'
  },
  {
    key: 'milestoneTracker',
    image: '/images/Milestone_Tracker.png',
    tags: ['Milestones', 'Education', 'Timeline'],
    previewLink: '/images/Milestone_Tracker.png',
    githubLink: '#'
  },
  {
    key: 'familyTree',
    image: '/images/Family_Tree_Viewer.png',
    tags: ['Graph', 'Family Tree', 'Firestore'],
    previewLink: '/images/Family_Tree_Viewer.png',
    githubLink: '#'
  },
  {
    key: 'cloudDashboard',
    image: '/images/Private_Cloud_Dashboard.png',
    tags: ['File Storage', 'Firebase', 'Private'],
    previewLink: '/images/Private_Cloud_Dashboard.png',
    githubLink: '#'
  }
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState(null);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-10 sm:mb-12">
          {t('projects.sectionTitle')}
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
                  alt={t(`projects.${project.key}.title`)}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                {t(`projects.${project.key}.title`)}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-1">
                {t(`projects.${project.key}.desc`)}
              </p>

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
                      alt={`${t(`projects.${project.key}.title`)} demo`}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 italic">
                    {t('projects.previewComingSoon')}
                  </span>
                )}

                <button
                  onClick={() => setSelectedKey(project.key)}
                  className="flex items-center gap-1 hover:text-indigo-500 dark:hover:text-indigo-300 justify-center"
                >
                  <FaInfoCircle /> {t('projects.moreInfo')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Translated modal based on selectedKey */}
      {selectedKey && (
        <ProjectModal
          projectKey={selectedKey}
          onClose={() => setSelectedKey(null)}
        />
      )}
    </section>
  );
}

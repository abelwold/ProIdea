import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ProjectModal({ projectKey, onClose }) {
  const { t } = useTranslation();

  if (!projectKey) return null;

  const title = t(`projects.${projectKey}.title`);
  const fullDescription = t(`projects.${projectKey}.fullDescription`);
  const features = t(`projects.${projectKey}.features`, { returnObjects: true });

  return (
    <AnimatePresence>
      {projectKey && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 max-w-lg w-full rounded-xl shadow-xl p-6 relative text-gray-900 dark:text-gray-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 text-lg"
              onClick={onClose}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{fullDescription}</p>

            {Array.isArray(features) && features.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                {features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

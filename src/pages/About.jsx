import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaReact, FaFigma, FaGithub, FaNodeJs, FaJava, FaPython, FaPhp
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFirebase, SiMysql, SiPostcss, SiAdobeillustrator,
  SiAdobephotoshop, SiAdobexd, SiBootstrap
} from 'react-icons/si';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
          {t('about.sectionTitle')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t('about.intro1')}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t('about.intro2')}</p>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            {t('about.skillsTitle')}
          </h3>
          <div className="flex justify-center flex-wrap gap-6 text-4xl text-indigo-500 dark:text-indigo-300">
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

        {/* What Drives Me */}
        <div className="mt-10 text-left max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('about.drivesMeTitle')}
          </h4>
          <p className="text-gray-700 dark:text-gray-300">{t('about.drivesMeText')}</p>
        </div>

        {/* Timeline */}
        <div className="mt-12 text-left max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {t('about.timelineTitle')}
          </h4>
          <ul className="border-l-2 border-indigo-500 pl-4">
            <li className="mb-6">
              <p className="font-semibold text-indigo-600 dark:text-indigo-400">{t('about.edu')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('about.eduDesc')}</p>
            </li>
            <li className="mb-6">
              <p className="font-semibold text-indigo-600 dark:text-indigo-400">{t('about.a1qa')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('about.a1qaDesc')}</p>
            </li>
            <li>
              <p className="font-semibold text-indigo-600 dark:text-indigo-400">{t('about.testronic')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('about.testronicDesc')}</p>
            </li>
          </ul>
        </div>

        {/* Testimonials */}
        <div className="mt-12 text-left max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {t('about.testimonialsTitle')}
          </h4>
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 dark:text-gray-300 mb-4">
            {t('about.testimonial1')}
          </blockquote>
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 dark:text-gray-300">
            {t('about.testimonial2')}
          </blockquote>
        </div>
      </div>
    </section>
  );
}

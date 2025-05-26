import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-sm">
        
        {/* About */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
            {t('footer.aboutTitle')}
          </h4>
          <p>{t('footer.aboutText')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
            {t('footer.quickLinks')}
          </h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">{t('footer.home')}</a></li>
            <li><a href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">{t('footer.projects')}</a></li>
            <li><a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">{t('footer.about')}</a></li>
            <li><a href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">{t('footer.contactPage')}</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
            {t('footer.services')}
          </h4>
          <ul className="space-y-1">
            <li>{t('footer.customDashboards')}</li>
            <li>{t('footer.financeTools')}</li>
            <li>{t('footer.legacyVaults')}</li>
            <li>{t('footer.familySystems')}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
            {t('footer.contact')}
          </h4>
          <p>
            {t('footer.email')}:{" "}
            <a href="mailto:abenerea@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              abenerea@gmail.com
            </a>
          </p>
          <p className="mt-2">
            {t('footer.linkedin')}:{" "}
            <a href="https://www.linkedin.com/in/abel-nerea-074240176/" target="_blank" rel="noreferrer" className="hover:underline">
              abel-nerea
            </a>
          </p>
          <p>
            {t('footer.github')}:{" "}
            <a href="https://github.com/abelwold" target="_blank" rel="noreferrer" className="hover:underline">
              abelwold
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Abel Nerea. {t('footer.copyright')}
      </div>
    </footer>
  );
}

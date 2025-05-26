// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-4 right-4 z-50">
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-white dark:bg-gray-800 text-sm border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-2 py-1 rounded shadow focus:outline-none"
      >
        <option value="en">🇬🇧 EN</option>
        <option value="pl">🇵🇱 PL</option>
      </select>
    </div>
  );
}

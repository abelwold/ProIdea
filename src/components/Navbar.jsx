import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setIsOpen(false);
  };

  const navLinkClasses = (path) =>
    `relative pb-1 transition duration-300 ${
      isActive(path)
        ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
        : 'hover:text-indigo-600 dark:hover:text-indigo-400'
    }`;

  const underlineClasses = (path) =>
    `absolute left-0 -bottom-0.5 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ${
      isActive(path) ? 'w-full' : 'w-0 group-hover:w-full'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md sticky top-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
          Abel Nerea
        </Link>

        {/* Right-side controls */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher - Desktop */}
          <div className="hidden md:block">
            <select
              onChange={handleLangChange}
              value={i18n.language}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-sm px-3 py-1 rounded-md focus:outline-none"
            >
              <option value="en">🇬🇧 English</option>
              <option value="pl">🇵🇱 Polski</option>
            </select>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-400" />}
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Links - Desktop */}
      <div className="hidden md:flex justify-center mt-2 space-x-6">
        {['/', '/projects', '/about', '/contact', '/pricing'].map((path, i) => {
  const label = ['nav.home', 'nav.projects', 'nav.about', 'nav.contact', 'nav.pricing'][i];

          return (
            <div key={path} className="group relative">
              <Link to={path} className={navLinkClasses(path)}>
                {t(label)}
                <span className={underlineClasses(path)}></span>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Links - Mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 flex flex-col space-y-3">
          {['/', '/projects', '/about', '/contact', '/pricing'].map((path, i) => {
  const label = ['nav.home', 'nav.projects', 'nav.about', 'nav.contact', 'nav.pricing'][i];
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive(path) ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
                }`}
              >
                {t(label)}
              </Link>
            );
          })}

          {/* Language Switcher - Mobile */}
          <div className="pt-2">
            <select
              onChange={handleLangChange}
              value={i18n.language}
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-sm px-3 py-2 rounded-md focus:outline-none"
            >
              <option value="en">🇬🇧 English</option>
              <option value="pl">🇵🇱 Polski</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}

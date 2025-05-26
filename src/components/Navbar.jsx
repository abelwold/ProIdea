import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setIsOpen(false); // ✅ closes mobile menu on change
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md sticky top-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
  

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

        

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Links - Desktop */}
      <div className="hidden md:flex justify-center mt-2 space-x-6">
        <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
        <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</Link>
        <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
        <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
      </div>

      {/* Links - Mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 flex flex-col space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>

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

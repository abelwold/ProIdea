import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">Abel Nerea</Link>

        {/* Theme Toggle */}
      

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 dark:text-gray-100 focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</Link>
          <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
          <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
        </div>
      </div>

      {/* Links - Mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 px-6 pb-4 flex flex-col space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border dark:border-gray-700 shadow-md rounded-full p-3 transition-all hover:scale-105 hover:shadow-lg"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
    </button>
  );
}

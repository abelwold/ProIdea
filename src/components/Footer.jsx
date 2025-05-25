import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-sm">
        {/* About */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">About</h4>
          <p>
            Developer and designer creating personalized web applications — from family tools to finance dashboards — focused on clarity, connection, and long-term value.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a></li>
            <li><a href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a></li>
            <li><a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
            <li><a href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Services</h4>
          <ul className="space-y-1">
            <li>Custom Dashboards</li>
            <li>Finance Tools</li>
            <li>Legacy Vaults</li>
            <li>Family Systems</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Contact</h4>
          <p>Email: <a href="mailto:abenerea@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">abenerea@gmail.com</a></p>
          <p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/abel-nerea-074240176/" target="_blank" className="hover:underline">abel-nerea</a></p>
          <p>GitHub: <a href="https://github.com/abelwold" target="_blank" className="hover:underline">abewold</a></p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Abel Nerea. All rights reserved.
      </div>
    </footer>
  );
}

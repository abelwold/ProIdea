import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.sendForm(
      'service_2ejba7y',
      'template_2qsr6pz',
      formRef.current,
      '-8UEPi65_xh92r1MS'
    )
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section className="bg-indigo-50 dark:bg-gray-900 py-16 px-4 sm:px-6 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Whether it's for collaboration, freelancing, or just to say hi — I'm always open to connecting.
        </p>

        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border border-green-300 dark:border-green-600 rounded-lg">
            ✅ Message sent successfully!
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border border-red-300 dark:border-red-600 rounded-lg">
            ❌ Failed to send message. Please try again.
          </div>
        )}
        {status === 'loading' && (
          <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border border-blue-300 dark:border-blue-600 rounded-lg">
            ⏳ Sending your message...
          </div>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-left">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Name</label>
            <input
              name="user_name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Email</label>
            <input
              name="user_email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
              placeholder="Tell me something..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

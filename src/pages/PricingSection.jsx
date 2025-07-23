export default function PricingSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Pricing Plans
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Choose a package that fits your needs — perfect for individuals and small businesses.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Starter Plan */}
        <div className="border rounded-lg shadow-sm p-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Starter</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Great for personal pages or simple portfolios.</p>
          <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">€79</p>
          <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>1 Landing Page</li>
            <li>Responsive Design</li>
            <li>Email Support</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="border-2 border-blue-600 rounded-lg shadow-md p-6 bg-white dark:bg-gray-900">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pro</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Ideal for small businesses and service providers.</p>
          <p className="mt-6 text-3xl font-bold text-blue-600">€199</p>
          <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Up to 5 Pages</li>
            <li>Basic Admin Panel</li>
            <li>Form Integration</li>
            <li>Logo Placement</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="border rounded-lg shadow-sm p-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Premium</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">For full-featured apps like Trial Puncher or dashboards.</p>
          <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Custom Quote</p>
          <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Unlimited Pages</li>
            <li>Advanced Dashboard</li>
            <li>Database & Auth</li>
            <li>Custom Features</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Figma Design Showcase</h1>
        <p className="text-gray-600 mb-8">
          A demonstration of Claude Code's ability to transpose Figma designs into production-quality React TypeScript components.
        </p>

        <nav className="space-y-4">
          <Link
            to="/shop"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Listing Page</h2>
            <p className="text-gray-600 text-sm">E-commerce shop with filters, product grid, and navigation</p>
          </Link>

          <Link
            to="/dashboard"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">SaaS Dashboard</h2>
            <p className="text-gray-600 text-sm">Analytics dashboard with charts, stats, and recent orders</p>
          </Link>

          <Link
            to="/art"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Figma Kit - Cover Page</h2>
            <p className="text-gray-600 text-sm">Hero section with gradient background, badge, and featured imagery</p>
          </Link>

          <Link
            to="/about"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">World Peas - About Page</h2>
            <p className="text-gray-600 text-sm">Organic food company landing page with clean typography and natural aesthetic</p>
          </Link>

          <Link
            to="/overview"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Financial Advisor Dashboard</h2>
            <p className="text-gray-600 text-sm">Dark theme client overview with profile, tasks, and recommendations</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

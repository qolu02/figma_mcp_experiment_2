import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface TopNavProps {
  title?: string;
  shopName?: string;
}

export const TopNav: React.FC<TopNavProps> = ({ title = 'Dashboard', shopName = "Nanny's Shop" }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-5">
      <div className="flex items-center justify-between min-w-0 gap-4">
        <h1 className="text-xl font-semibold text-gray-900 truncate">{title}</h1>

        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Shop Selector */}
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors min-w-0">
            <span className="text-sm font-medium text-gray-700 truncate">{shopName}</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <BellIcon className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <button className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
              alt="User"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

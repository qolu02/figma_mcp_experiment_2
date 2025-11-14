import {
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ArchiveBoxIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  GiftIcon,
  LifebuoyIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  activeItem?: string;
}

const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, active: true },
  { id: 'orders', label: 'Orders', icon: ShoppingBagIcon, badge: '3' },
  { id: 'customers', label: 'Customers', icon: UserGroupIcon },
  { id: 'inventory', label: 'Inventory', icon: ArchiveBoxIcon },
  { id: 'conversations', label: 'Conversations', icon: ChatBubbleLeftRightIcon, badge: '16' },
  { id: 'settings', label: 'Settings', icon: Cog6ToothIcon },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'dashboard' }) => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" opacity="0.7" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">Metrix</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeItem;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors min-w-0 ${
                    isActive
                      ? 'bg-indigo-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`px-2 py-0.5 text-xs rounded-full flex-shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <LifebuoyIcon className="w-5 h-5" />
          <span className="text-sm">Contact Support</span>
        </button>

        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2 min-w-0">
            <GiftIcon className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-900 truncate">Free Gift Awaits You!</span>
          </div>
          <p className="text-xs text-gray-600 mb-3 truncate">Upgrade your account</p>
          <button className="text-xs text-indigo-600 hover:underline truncate">
            Upgrade your account →
          </button>
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

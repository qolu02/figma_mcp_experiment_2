import { NavigationPillList } from '../molecules/NavigationPillList';
import { HeaderAuth } from '../molecules/HeaderAuth';

const NAV_ITEMS = ['Products', 'Solutions', 'Community', 'Resources', 'Pricing', 'Contact', 'Link'];

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <circle cx="8" cy="8" r="3" fill="currentColor" />
                <circle cx="16" cy="8" r="3" fill="currentColor" />
                <circle cx="8" cy="16" r="3" fill="currentColor" />
                <circle cx="16" cy="16" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <NavigationPillList items={NAV_ITEMS} />

          {/* Auth buttons */}
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
};

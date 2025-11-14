import { Button } from '@/components/ui/button';

const tabs = ['Overview', 'Timeline', 'Action Plan', 'Vault', 'Profile'];

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full bg-[#3a4052] border-b border-[#2a2f3a]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center gap-8 overflow-x-auto">
          {tabs.map((tab, index) => (
            <Button
              key={tab}
              variant="ghost"
              className={`px-0 pb-3 pt-0 rounded-none border-b-2 transition-colors text-sm ${
                index === 0
                  ? 'border-[#e8a588] text-[#e8a588] hover:bg-transparent hover:text-[#e8a588]'
                  : 'border-transparent text-gray-400 hover:bg-transparent hover:text-gray-300'
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

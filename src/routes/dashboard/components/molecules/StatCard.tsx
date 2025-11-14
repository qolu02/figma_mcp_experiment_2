import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';
import { TimeWindowDropdown } from '../atoms/TimeWindowDropdown';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
  dropdown?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, change, trend, dropdown, icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2 min-w-0">
      <div className="flex items-center justify-between gap-2 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          {icon && <div className="text-gray-400 flex-shrink-0">{icon}</div>}
          <span className="text-sm text-gray-500 truncate">{label}</span>
        </div>
        {dropdown && <TimeWindowDropdown defaultValue={dropdown} variant="days" />}
      </div>
      <div className="flex items-end justify-between gap-2 min-w-0">
        <span className="text-2xl font-semibold text-gray-900 truncate">{value}</span>
        {change && (
          <div className={`flex items-center gap-1 text-sm flex-shrink-0 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? (
              <ArrowTrendingUpIcon className="w-4 h-4" />
            ) : (
              <ArrowTrendingDownIcon className="w-4 h-4" />
            )}
            <span className="whitespace-nowrap">{change}</span>
          </div>
        )}
      </div>
    </div>
  );
};

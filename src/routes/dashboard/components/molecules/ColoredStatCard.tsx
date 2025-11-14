import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ColoredStatCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon?: React.ReactNode;
  variant?: 'blue' | 'white';
  dropdown?: string;
}

export const ColoredStatCard: React.FC<ColoredStatCardProps> = ({
  label,
  value,
  change,
  icon,
  variant = 'blue',
  dropdown
}) => {
  const isBlue = variant === 'blue';

  return (
    <div className={`rounded-lg p-4 flex flex-col gap-3 min-w-0 ${
      isBlue ? 'bg-indigo-500 text-white' : 'bg-white border border-gray-200'
    }`}>
      <div className="flex items-center justify-between gap-2 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          {icon && <div className={`flex-shrink-0 ${isBlue ? 'text-white' : 'text-gray-400'}`}>{icon}</div>}
          <span className={`text-sm truncate ${isBlue ? 'text-white/80' : 'text-gray-500'}`}>{label}</span>
        </div>
        {dropdown && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className={`text-xs whitespace-nowrap ${isBlue ? 'text-white/70' : 'text-gray-400'}`}>{dropdown}</span>
            <ChevronDownIcon className={`w-3 h-3 ${isBlue ? 'text-white/70' : 'text-gray-400'}`} />
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-2 min-w-0">
        <span className={`text-3xl font-semibold truncate ${isBlue ? 'text-white' : 'text-gray-900'}`}>
          {value}
        </span>
        {change && (
          <span className={`text-sm flex-shrink-0 whitespace-nowrap ${isBlue ? 'text-white/70' : 'text-green-600'}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
};

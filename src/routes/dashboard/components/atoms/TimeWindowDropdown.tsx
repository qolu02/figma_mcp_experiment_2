import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type TimeWindowVariant = 'days' | 'weeks';

interface TimeWindowDropdownProps {
  defaultValue?: string;
  variant?: TimeWindowVariant;
  align?: 'start' | 'end';
  className?: string;
  textClassName?: string;
}

const TIME_WINDOWS = {
  days: ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'This Year'],
  weeks: ['This Week', 'Last Week', 'This Month', 'Last Month'],
} as const;

export const TimeWindowDropdown: React.FC<TimeWindowDropdownProps> = ({
  defaultValue,
  variant = 'days',
  align = 'end',
  className = '',
  textClassName = 'text-xs text-gray-400',
}) => {
  const options = TIME_WINDOWS[variant];
  const displayValue = defaultValue || options[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`flex items-center gap-1 flex-shrink-0 hover:bg-gray-50 hover:bg-white/10 rounded px-1 py-0.5 transition-colors ${className}`}>
          <span className={`whitespace-nowrap ${textClassName}`}>{displayValue}</span>
          <ChevronDownIcon className={`w-3 h-3 ${textClassName.includes('white') ? textClassName : 'text-gray-400'}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {options.map((option) => (
          <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

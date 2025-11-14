import { BarChart as RechartsBar, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TimeWindowDropdown } from '../atoms/TimeWindowDropdown';

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
  dropdown?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ data, title = 'Summary', dropdown = 'Last 7 Days' }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6 min-w-0 gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 truncate">{title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded transition-colors flex items-center gap-1">
                Sales
                <ChevronDownIcon className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Sales</DropdownMenuItem>
              <DropdownMenuItem>Orders</DropdownMenuItem>
              <DropdownMenuItem>Revenue</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <TimeWindowDropdown defaultValue={dropdown} variant="days" />
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBar data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={16} />
          </RechartsBar>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

import { BarChart as RechartsBar, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer flex-shrink-0">
            <option>Sales</option>
            <option>Orders</option>
          </select>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="text-xs text-gray-400 whitespace-nowrap">{dropdown}</span>
          <ChevronDownIcon className="w-3 h-3 text-gray-400" />
        </div>
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

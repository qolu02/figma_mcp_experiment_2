import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TimeWindowDropdown } from '../atoms/TimeWindowDropdown';

interface DonutChartProps {
  data: Array<{ name: string; value: number; color: string }>;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4 min-w-0 gap-2">
        <h3 className="text-base font-semibold text-gray-900 truncate">Marketing</h3>
        <TimeWindowDropdown defaultValue="This Week" variant="weeks" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-48 h-48 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-3 min-w-0">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 min-w-0">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600 truncate">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

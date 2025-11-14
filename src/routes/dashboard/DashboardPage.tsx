import { ChartBarIcon, UserGroupIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Sidebar } from './components/organisms/Sidebar';
import { TopNav } from './components/organisms/TopNav';
import { StatCard } from './components/molecules/StatCard';
import { ColoredStatCard } from './components/molecules/ColoredStatCard';
import { ProductStatsCard } from './components/molecules/ProductStatsCard';
import { DonutChart } from './components/molecules/DonutChart';
import { BarChart } from './components/molecules/BarChart';
import { RecentOrders } from './components/organisms/RecentOrders';
import { TimeWindowDropdown } from './components/atoms/TimeWindowDropdown';
import type { Order } from './types/order';

const MARKETING_DATA = [
  { name: 'Acquisition', value: 35, color: '#6366f1' },
  { name: 'Purchase', value: 25, color: '#f59e0b' },
  { name: 'Retention', value: 40, color: '#a78bfa' },
];

const SALES_DATA = [
  { name: 'Sept 10', value: 85000 },
  { name: 'Sept 11', value: 65000 },
  { name: 'Sept 12', value: 75000 },
  { name: 'Sept 13', value: 45000 },
  { name: 'Sept 14', value: 90000 },
  { name: 'Sept 15', value: 55000 },
  { name: 'Sept 16', value: 70000 },
];

const MOCK_ORDERS: Order[] = [
  { id: 1, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/fbbf24/000000', status: 'Pending', date: '12 Sept 2022' },
  { id: 2, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/1f2937/ffffff', status: 'Completed', date: '12 Sept 2022' },
  { id: 3, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/fbbf24/000000', status: 'Pending', date: '12 Sept 2022' },
  { id: 4, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/1f2937/ffffff', status: 'Completed', date: '12 Sept 2022' },
  { id: 5, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/1f2937/ffffff', status: 'Completed', date: '12 Sept 2022' },
  { id: 6, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/1f2937/ffffff', status: 'Completed', date: '12 Sept 2022' },
  { id: 7, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/fbbf24/000000', status: 'Pending', date: '12 Sept 2022' },
  { id: 8, productName: 'iPhone 13', price: 730000, quantity: 1, image: 'https://placehold.co/100x100/fbbf24/000000', status: 'Pending', date: '12 Sept 2022' },
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav title="Dashboard" />

        <main className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Sales Card */}
              <div className="lg:col-span-4">
                <StatCard
                  label="Sales"
                  value="₦4,000,000.00"
                  icon={<ChartBarIcon className="w-5 h-5" />}
                  dropdown="This Week"
                />
              </div>

              {/* Volume Card */}
              <div className="lg:col-span-4">
                <StatCard
                  label="Volume"
                  value="350"
                  change="+20.00%"
                  trend="up"
                  icon={<ChartBarIcon className="w-5 h-5" />}
                />
              </div>

              {/* Customers/Orders Card */}
              <div className="lg:col-span-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                  {/* Header with This Week dropdown */}
                  <div className="flex items-center justify-end mb-2">
                    <TimeWindowDropdown defaultValue="This Week" variant="weeks" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 flex-1">
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center gap-1 mb-2">
                        <UserGroupIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500 truncate">Customers</span>
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-gray-900">1,250</p>
                        <p className="text-xs text-green-600">+15.80%</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between border-l border-gray-200 pl-3">
                      <span className="text-xs text-gray-500 mb-2 truncate">Active</span>
                      <div>
                        <p className="text-xl font-semibold text-gray-900">1,180</p>
                        <p className="text-xs text-gray-500">85%</p>
                      </div>
                    </div>
                    <div className="flex flex-col border-l border-gray-200 pl-3">
                      <span className="text-xs text-gray-500 mb-2 truncate">All Orders</span>
                      <p className="text-xl font-semibold text-gray-900 mb-1">450</p>
                      <div className="text-xs space-y-0.5">
                        <p className="text-gray-500">Pending <span className="font-medium">5</span></p>
                        <p className="text-gray-500">Completed <span className="font-medium">445</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6">
              {/* Left Column - Charts and Stats */}
              <div className="xl:col-span-8 space-y-4 lg:space-y-6">
                {/* Row 1: Marketing Donut Chart + Product Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <DonutChart data={MARKETING_DATA} />
                  <ProductStatsCard />
                </div>

                {/* Row 2: Abandoned Cart + Customers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <ColoredStatCard
                    label="Abandoned Cart"
                    value="20%"
                    change="+0.00%"
                    icon={<ShoppingCartIcon className="w-5 h-5" />}
                    variant="white"
                    dropdown="This Week"
                  />
                  <ColoredStatCard
                    label="Customers"
                    value="30"
                    icon={<UserGroupIcon className="w-5 h-5" />}
                    variant="white"
                    dropdown="This Week"
                  />
                </div>

                {/* Row 3: Bar Chart */}
                <BarChart data={SALES_DATA} />
              </div>

              {/* Right Column - Recent Orders */}
              <div className="xl:col-span-4">
                <div className="h-[600px] xl:h-full">
                  <RecentOrders orders={MOCK_ORDERS} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

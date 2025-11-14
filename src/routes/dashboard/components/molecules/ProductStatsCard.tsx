import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const ProductStatsCard: React.FC = () => {
  return (
    <div className="bg-indigo-500 rounded-lg p-6 text-white space-y-6">
      {/* All Products */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <ShoppingBagIcon className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm text-white/80 truncate">All Products</span>
        </div>
        <span className="text-3xl font-semibold">45</span>
      </div>

      {/* Active */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/80">Active</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">32</span>
          <span className="text-sm text-white/70">+24%</span>
        </div>
      </div>
    </div>
  );
};

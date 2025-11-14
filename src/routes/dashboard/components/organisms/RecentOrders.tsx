import type { Order } from '../../types/order';

interface RecentOrdersProps {
  orders: Order[];
}

export const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-base font-semibold text-gray-900">Recent Orders</h3>
      </div>

      <div className="flex-1 overflow-y-auto">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            {/* Product Image */}
            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={order.image}
                alt={order.productName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {order.productName}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                ₦{order.price.toLocaleString()}.00 × {order.quantity}
              </p>
            </div>

            {/* Date and Status */}
            <div className="text-right flex-shrink-0">
              <p className="text-xs text-gray-400 mb-1">{order.date}</p>
              <span
                className={`inline-block px-2 py-1 text-xs rounded ${
                  order.status === 'Completed'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-orange-50 text-orange-700'
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

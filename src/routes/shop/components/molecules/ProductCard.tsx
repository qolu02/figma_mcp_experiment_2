import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-white">
      <div className="w-full h-48 bg-gray-200 rounded"></div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-gray-900">{product.title}</p>
        <p className="text-base font-semibold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

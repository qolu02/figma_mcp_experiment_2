import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '../molecules/SearchBar';
import { ProductCard } from '../molecules/ProductCard';
import type { Product } from '../../types/product';

interface ProductGridProps {
  products: Product[];
}

const FILTER_OPTIONS = ['New', 'Price ascending', 'Price descending', 'Rating'];

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('New');

  const handleSortClick = (filter: string) => {
    setSelectedSort(filter);
  };

  return (
    <div className="flex-1">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search"
        />

        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((filter) => {
            const isSelected = selectedSort === filter;
            return (
              <button
                key={filter}
                onClick={() => handleSortClick(filter)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  isSelected
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isSelected && <CheckIcon className="w-4 h-4" />}
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

import { Header } from './components/organisms/Header';
import { FilterMenu } from './components/organisms/FilterMenu';
import { ProductGrid } from './components/organisms/ProductGrid';
import { Footer } from './components/organisms/Footer';
import type { Product } from './types/product';

const MOCK_PRODUCTS: Product[] = [
  { id: 1, title: 'Wireless Headphones', price: 79, image: 'https://placehold.co/400x300' },
  { id: 2, title: 'Smart Watch', price: 199, image: 'https://placehold.co/400x300' },
  { id: 3, title: 'Laptop Stand', price: 49, image: 'https://placehold.co/400x300' },
  { id: 4, title: 'Mechanical Keyboard', price: 129, image: 'https://placehold.co/400x300' },
  { id: 5, title: 'USB-C Hub', price: 39, image: 'https://placehold.co/400x300' },
  { id: 6, title: 'Desk Lamp', price: 59, image: 'https://placehold.co/400x300' },
];

export const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <FilterMenu />
          <ProductGrid products={MOCK_PRODUCTS} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

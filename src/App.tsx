import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/routes/home/HomePage';
import { ShopPage } from '@/routes/shop/ShopPage';
import { DashboardPage } from '@/routes/dashboard/DashboardPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

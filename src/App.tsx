import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/routes/home/HomePage';
import { ShopPage } from '@/routes/shop/ShopPage';
import { DashboardPage } from '@/routes/dashboard/DashboardPage';
import { ArtPage } from '@/routes/art/ArtPage';
import { AboutPage } from '@/routes/about/AboutPage';
import { OverviewPage } from '@/routes/overview/OverviewPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import { Header } from './components/organisms/Header';
import { HeroSection } from './components/organisms/HeroSection';
import { ImagesSection } from './components/organisms/ImagesSection';
import { BeliefsSection } from './components/organisms/BeliefsSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ImagesSection />
      <BeliefsSection />
    </div>
  );
};

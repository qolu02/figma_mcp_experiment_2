import { ProfileHeader } from './components/organisms/ProfileHeader';
import { Navigation } from './components/organisms/Navigation';
import { StudioSection } from './components/organisms/StudioSection';
import { RecommendationsBoard } from './components/organisms/RecommendationsBoard';
import { AskBar } from './components/organisms/AskBar';

export const OverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1e232e] pb-32">
      {/* Header with menu button */}
      <div className="bg-[#1e232e] px-6 md:px-12 lg:px-24 py-6">
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Profile Header */}
      <ProfileHeader />

      {/* Navigation Tabs */}
      <Navigation />

      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-24 py-8 space-y-12">
        {/* Studio Section */}
        <StudioSection />

        {/* Recommendations Board */}
        <RecommendationsBoard />
      </main>

      {/* Bottom Ask Bar */}
      <AskBar />
    </div>
  );
};

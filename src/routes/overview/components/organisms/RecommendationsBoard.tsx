import { RecommendationCard } from '../molecules/RecommendationCard';

const RECOMMENDATIONS = [
  {
    title: 'Financial Independence',
    description: 'On track to $10M by 55 with $6.15M portfolio, but zero monthly savings creates flexibility to startup uncertainty.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stats: {
      new: 3,
      shortlisted: 2,
    },
  },
  {
    title: 'Tax Efficiency',
    description: 'Self-employed with no retirement contributions while $5M taxable portfolio generates unnecessary annual',
    stats: {
      new: 0,
      shortlisted: 2,
      inPlan: 1,
    },
  },
];

export const RecommendationsBoard: React.FC = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors mb-5">
        <span className="text-sm">Recommendations</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {RECOMMENDATIONS.map((rec, index) => (
          <RecommendationCard key={index} {...rec} />
        ))}
      </div>
    </section>
  );
};

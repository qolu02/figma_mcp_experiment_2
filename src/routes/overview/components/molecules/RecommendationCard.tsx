interface RecommendationCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  stats: {
    new: number;
    shortlisted: number;
    inPlan?: number;
  };
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  description,
  icon,
  stats,
}) => {
  return (
    <div className="bg-[#2a2f3a] border border-[#3a4052] rounded-xl p-6 hover:border-[#4a5160] transition-all cursor-pointer group relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7eb8d9]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-xl text-white group-hover:text-[#8eb4d4] transition-colors">
              {title}
            </h3>
            {icon && <div className="text-gray-500 text-sm">{icon}</div>}
          </div>
          <button className="text-gray-500 hover:text-white transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Stats */}
        <div className="space-y-2">
          <p className="text-xs text-gray-600 uppercase tracking-wider mb-3 font-medium">Recommendations</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-white font-medium w-4">{stats.new}</span>
            <span className="text-gray-500">New</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-white font-medium w-4">{stats.shortlisted}</span>
            <span className="text-gray-500">Shortlisted</span>
          </div>
          {stats.inPlan !== undefined && (
            <div className="flex items-center gap-3 text-sm">
              <span className="text-white font-medium w-4">{stats.inPlan}</span>
              <span className="text-gray-500">In plan</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

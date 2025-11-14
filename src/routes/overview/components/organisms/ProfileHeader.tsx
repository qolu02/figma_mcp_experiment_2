export const ProfileHeader: React.FC = () => {
  return (
    <div className="w-full bg-[#3a4052] px-6 md:px-12 lg:px-24 py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Top row with dropdown */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#4a5160] rounded-md text-gray-300 text-sm hover:bg-[#525968] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18m-9 5h9" />
            </svg>
            All clients
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Avatar with Donut Chart */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
              {/* Background circle - darker */}
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="none"
                stroke="#2a2f3a"
                strokeWidth="28"
              />
              {/* Segment 1 - Salmon/Peach */}
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="none"
                stroke="#d9967e"
                strokeWidth="28"
                strokeDasharray="153 408"
                strokeDashoffset="0"
                strokeLinecap="round"
              />
              {/* Segment 2 - Lighter peach */}
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="none"
                stroke="#c98674"
                strokeWidth="28"
                strokeDasharray="102 408"
                strokeDashoffset="-153"
                strokeLinecap="round"
              />
              {/* Segment 3 - Dark blue-gray */}
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="none"
                stroke="#5a6375"
                strokeWidth="28"
                strokeDasharray="153 408"
                strokeDashoffset="-255"
                strokeLinecap="round"
              />
            </svg>
            {/* Center number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-semibold text-gray-200">76</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-normal text-white mb-2 leading-tight">
              John Miller
            </h1>
            <p className="text-gray-400 text-sm mb-6">
              Moderate Risk Tolerance • Tier A Client • Stable Financial Health
            </p>

            {/* Description */}
            <div className="text-gray-400 text-sm leading-relaxed max-w-4xl">
              <p>
                John is a <span className="text-white font-medium">39 years old newly self-employed CEO</span> of Synora, Inc. with{' '}
                <span className="text-white font-medium">$6.15M in investable assets</span> from a{' '}
                <span className="text-white font-medium">divorce & home sale</span> 2 years ago.
                He aims to <span className="text-white font-medium">retire at 55</span> with $10M, maintaining an{' '}
                <span className="text-white font-medium">aggressive portfolio</span> while renting in{' '}
                <span className="text-white font-medium">Brooklyn</span> with his partner, who earns $450k.{' '}
                <button className="text-[#e8a588] hover:text-[#f0b59a] transition-colors inline-flex items-center gap-1">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

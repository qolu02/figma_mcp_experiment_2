interface StudioCardProps {
  dueDate: string;
  title: string;
  description: string;
}

export const StudioCard: React.FC<StudioCardProps> = ({ dueDate, title, description }) => {
  return (
    <div className="bg-[#2a2f3a] border border-[#3a4052] rounded-xl p-5 hover:border-[#4a5160] transition-all cursor-pointer group">
      {/* Due date badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">{dueDate}</span>
        <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h3 className="text-white text-base font-normal mb-2 group-hover:text-[#8eb4d4] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm">
        {description}
      </p>
    </div>
  );
};

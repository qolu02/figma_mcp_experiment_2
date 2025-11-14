import { Button } from '@/components/ui/button';
import { StudioCard } from '../molecules/StudioCard';

const STUDIO_CARDS = [
  {
    dueDate: 'DUE OCT 21',
    title: 'Prep for Quarterly meeting',
    description: 'Agenda and key talking points',
  },
  {
    dueDate: 'DRAFTED YESTERDAY',
    title: 'Recap Last meeting',
    description: 'See summary, actions and deliverables',
  },
];

export const StudioSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
          <span className="text-sm">Ready for review</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <Button className="bg-gradient-to-r from-[#7eb8d9] to-[#a68dd4] text-white hover:from-[#8ec4e5] hover:to-[#b69de0] border-0 text-sm h-10">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          All studio actions
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {STUDIO_CARDS.map((card, index) => (
          <StudioCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

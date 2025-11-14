import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const AskBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2a2f3a] border-t border-[#1e232e] py-5 px-6 md:px-12 lg:px-24 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center gap-3">
        {/* History button */}
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white hover:bg-[#3a4052] flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Button>

        {/* Input */}
        <div className="flex-1 relative">
          <Input
            placeholder="Ask anything"
            className="bg-[#3a4052] border-[#3a4052] text-white placeholder-gray-500 h-11 pr-12 focus-visible:ring-[#7eb8d9]"
          />
        </div>

        {/* Add button */}
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white hover:bg-[#3a4052] flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Button>

        {/* Notification button */}
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white hover:bg-[#3a4052] flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

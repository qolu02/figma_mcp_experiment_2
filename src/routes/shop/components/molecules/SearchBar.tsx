import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@/components/atoms/Input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = 'Search' }) => {
  return (
    <div className="relative w-full md:w-96">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 w-full"
      />
    </div>
  );
};

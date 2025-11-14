import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

export const FilterMenu: React.FC = () => {
  const [keywords, setKeywords] = useState(['Spring', 'Smart', 'Modern']);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  return (
    <aside className="w-full md:w-60 bg-white border border-gray-200 rounded-lg p-4 h-fit">
      {/* Keywords */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
            >
              {keyword}
              <button onClick={() => removeKeyword(keyword)} className="hover:text-gray-900">
                <XMarkIcon className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mb-6">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <div>
              <div className="font-medium">Label</div>
              <div className="text-xs text-gray-500">Description</div>
            </div>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <div>
              <div className="font-medium">Label</div>
              <div className="text-xs text-gray-500">Description</div>
            </div>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <div>
              <div className="font-medium">Label</div>
              <div className="text-xs text-gray-500">Description</div>
            </div>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-900">Label</h3>
          <span className="text-sm text-gray-600">${priceRange[0]}-{priceRange[1]}</span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          min={0}
          max={100}
          step={1}
        />
      </div>

      {/* Color */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Color</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <span>Label</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <span>Label</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <span>Label</span>
          </label>
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Size</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <span>Label</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <span>Label</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <Checkbox />
            <span>Label</span>
          </label>
        </div>
      </div>
    </aside>
  );
};

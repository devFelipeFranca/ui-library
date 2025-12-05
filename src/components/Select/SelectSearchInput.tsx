import React from 'react';
import { useSelectContext } from './SelectContext';
import { SearchIcon } from '../Icons';

interface SelectSearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SelectSearchInput = ({ placeholder = "Search...", className }: SelectSearchInputProps) => {
  const { searchQuery, setSearchQuery } = useSelectContext();

  return (
    <div className={`p-2 border-b border-gray-100 ${className || ''}`}>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-gray-400" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full py-2 pl-10 pr-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};


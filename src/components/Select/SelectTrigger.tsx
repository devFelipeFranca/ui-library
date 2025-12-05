import React from 'react';
import { useSelectContext } from './SelectContext';
import { ChevronDownIcon } from '../Icons';

interface SelectTriggerProps {
  placeholder?: string;
  className?: string;
}

export const SelectTrigger = ({ placeholder = "Select an option", className }: SelectTriggerProps) => {
  const { isOpen, toggle, selectedOption } = useSelectContext();

  return (
    <button
      type="button"
      onClick={toggle}
      className={`w-full flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${className || ''}`}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      <span className={`block truncate ${selectedOption ? 'text-gray-900' : 'text-gray-500'}`}>
        {selectedOption ? selectedOption.label : placeholder}
      </span>
      <span className="ml-2 flex items-center pointer-events-none">
        <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </span>
    </button>
  );
};


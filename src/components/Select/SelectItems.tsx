import React from 'react';
import { useSelectContext } from './SelectContext';

interface SelectListProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectList = ({ children, className }: SelectListProps) => {
  return (
    <div className={`max-h-60 overflow-y-auto py-1 ${className || ''}`}>
      {children}
    </div>
  );
};

interface SelectItemProps {
  value: any;
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export const SelectItem = ({ value, children, label, className }: SelectItemProps) => {
  const { selectOption, selectedOption, searchQuery } = useSelectContext();

  const textContent = label || (typeof children === 'string' ? children : '');
  
  if (searchQuery && textContent) {
     if (!textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
       return null;
     }
  }

  const isSelected = selectedOption?.value === value;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectOption({ label: textContent || String(value), value });
    }
  };

  return (
    <div
      role="option"
      aria-selected={isSelected}
      tabIndex={0}
      onClick={() => selectOption({ label: textContent || String(value), value })}
      onKeyDown={handleKeyDown}
      className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between outline-none
        ${isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100 focus:bg-gray-100'}
        ${className || ''}
      `}
    >
      <span className="truncate">{children}</span>
      {isSelected && (
        <span className="text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      )}
    </div>
  );
};


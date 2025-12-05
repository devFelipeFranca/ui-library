import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SelectContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  selectedOption: { label: string; value: any } | null;
  selectOption: (option: { label: string; value: any }) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelectContext must be used within a SelectRoot');
  }
  return context;
};

interface SelectRootProps {
  children: ReactNode;
  onChange?: (value: any) => void;
  defaultValue?: { label: string; value: any };
}

export const SelectRoot = ({ children, onChange, defaultValue }: SelectRootProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: any } | null>(defaultValue || null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggle = () => setIsOpen((prev) => !prev);
  
  const close = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  const selectOption = (option: { label: string; value: any }) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option.value);
    }
    close();
  };

  const value = React.useMemo(() => ({
    isOpen,
    toggle,
    close,
    selectedOption,
    selectOption,
    searchQuery,
    setSearchQuery,
  }), [isOpen, selectedOption, searchQuery]);

  return (
    <SelectContext.Provider value={value}>
      <div className="relative w-full font-sans text-base">
        {children}
      </div>
    </SelectContext.Provider>
  );
};


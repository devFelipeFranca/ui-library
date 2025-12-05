import React, { useRef, useEffect } from 'react';
import { useSelectContext } from './SelectContext';

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectContent = ({ children, className }: SelectContentProps) => {
  const { isOpen, close } = useSelectContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    
    const handleGlobalClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (contentRef.current && contentRef.current.contains(target)) {
            return;
        }
        close();
    };
    
    const listener = (e: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
            const root = contentRef.current.closest('.relative');
            if (root && root.contains(e.target as Node)) {
                return;
            }
            close();
        }
    };
    
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      ref={contentRef}
      className={`absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden ${className || ''}`}
    >
      {children}
    </div>
  );
};


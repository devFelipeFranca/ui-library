import React from 'react';
import * as Select from './index';

const mockData = Array.from({ length: 50 }, (_, i) => ({
  label: `Option ${i + 1} - ${['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'][i % 5]}`,
  value: `opt-${i + 1}`,
}));

export const SelectDemo = () => {
  const handleChange = (value: any) => {
    console.log('Selected Value:', value);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center justify-start space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Select Component Demo</h1>
      
      <div className="w-72">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Choose an Item
        </label>
        
        <Select.Root onChange={handleChange}>
          <Select.Trigger placeholder="Select an option..." />
          <Select.Content>
            <Select.SearchInput placeholder="Filter options..." />
            <Select.List>
              {mockData.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.List>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="w-72">
        <label className="block text-sm font-medium text-gray-700 mb-1">
           Pre-selected Value
        </label>
         <Select.Root defaultValue={mockData[2]} onChange={handleChange}>
          <Select.Trigger />
          <Select.Content>
            <Select.SearchInput />
            <Select.List>
              {mockData.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.List>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};

export default SelectDemo;


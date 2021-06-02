import React from 'react';
import Section from './Section'
import Option from './Option'

const Command = () => {
  return (
    <div className="flex flex-col w-96 rounded-3xl bg-white pb-2 overflow-hidden">
      <input
        type="text"
        className="h-12 focus:outline-none px-4 py-3 bg-transparent text-gray-800" 
        placeholder="Search anything..."
        autoFocus
      />
      <Section label="Menu" />
      <Option 
        label="Option"
      />
    </div>
  );
};

export default Command;
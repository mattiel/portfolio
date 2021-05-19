import React from 'react';
import Section from './Section'
import Option from './Option'

const Command = () => {
  return (
    <div className="flex flex-col w-full md:max-w-screen-md rounded-3xl bg-white pb-2 overflow-hidden">
      <input
        type="text"
        className="h-12 focus:outline-none px-4 py-3 bg-transparent text-gray-400" 
        placeholder="Search anything or use hotkey..."
        autoFocus
      />
      <Section label="Section" />
      <Option 
        label="Option"
      />
    </div>
  );
};

export default Command;
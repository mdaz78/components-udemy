import React, { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  const handleOptionClick = (event) => {
    const index = event.target.getAttribute('data-index');
    const option = options[index];
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div
        key={option.value}
        onClick={handleOptionClick}
        data-index={index}
        className='cursor-pointer hover:bg-sky-100 rounded p-1'
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className='w-48 relative'>
      <Panel
        onClick={handleClick}
        className='cursor-pointer flex items-center justify-between'
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default DropDown;

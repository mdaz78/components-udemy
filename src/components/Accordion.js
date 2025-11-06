import { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (event) => {
    const index = Number(event.target.getAttribute('data-index'));
    setExpandedIndex((current) => (current === index ? -1 : index));
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className='text-2xl'>
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          data-index={index}
          onClick={handleClick}
          className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between'
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return <div className='border-x border-t rounded'>{renderedItems}</div>;
};

export default Accordion;

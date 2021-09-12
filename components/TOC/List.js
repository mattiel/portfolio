import React from 'react';
import clsx from 'clsx';

import Item from './Item'

const List = ({ sections, isTiny, onClick }) => {
  const ulClassNames = clsx(
    'flex items-start transition-all',
    isTiny && 'flex-col'
  )

  function handleClick(e) {
    if(onClick) {
      e.preventDefault();
      onClick();
    }
  }

  return (
    <div className="layout h-full">
      <ul className={ulClassNames}>
        {sections.map((section, idx) => {
          return(
            <Item 
              key={idx}
              section={section}
              isTiny={isTiny}
            />
          )
        })}
      </ul>
      {isTiny && (
        <div 
          className="absolute right-0 h-12 w-12 grid place-items-center"
          onClick={handleClick}
        >
          <a className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default List;
import React from 'react';
import clsx from 'clsx';

const WorkInProgress = ({ isAbsolute }) => {
  const classNames = clsx(
    "inline-flex font-medium items-center py-2 px-3 bottom-6 right-6 rounded-lg bg-black bg-opacity-80 text-white",
    isAbsolute ? "absolute" : "fixed"
  )

  return (
    <div 
      className={classNames}
      style={{
        gridColumn: 'unset'
      }}
    >
      <div className="grid place-items-center w-4 h-4 mr-2">
        <div className="pulsing-blob">

        </div>
      </div>
      Work In Progress
    </div>
  );
};

export default WorkInProgress;
import React from 'react';
import { twMerge } from 'tailwind-merge';

function Panel({ children, className, ...rest }) {
  return (
    <div
      className={twMerge(
        'border rounded p-3 shadow bg-white w-full',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Panel;

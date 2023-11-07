import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen w-full bg-blue-600 font-mono'>{children}</div>
  );
};

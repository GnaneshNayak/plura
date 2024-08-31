import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
};

export default Layout;

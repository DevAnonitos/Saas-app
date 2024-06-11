import React from 'react';
import Image from 'next/image';

const RootLayout = ({ 
  children 
}: Readonly<{
  children: React.ReactNode,
}>) => {
  return (
    <div>RootLayout</div>
  );
};

export default RootLayout;
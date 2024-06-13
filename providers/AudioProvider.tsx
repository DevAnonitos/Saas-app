import React, { ReactNode } from 'react';

const AudioProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AudioProvider;
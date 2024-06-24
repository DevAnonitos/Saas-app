"use client";

import React, { 
  ReactNode, 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react';
import { usePathname } from 'next/navigation';

export const useAudio = () => {
  
};

const AudioProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AudioProvider;
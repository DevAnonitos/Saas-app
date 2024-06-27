"use client";

import React, { 
  ReactNode, 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react';
import { usePathname } from 'next/navigation';

const AudioContext = createContext<undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);

  if(!context) throw new Error("useAudio must be used within an AudioProvider");

  return context;
};

const AudioProvider = ({ children }: { children: ReactNode }) => {

  const pathName = usePathname();

  return (
    <div>
      {children}
    </div>
  );
};

export default AudioProvider;
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';
import { fortmatTime } from '@/lib/formatTime';

const PodcastPlayer = () => {
  return (
    <div className={cn("sticky bottom-0 left-0 size-full flex-col")}>
      <Progress />
      <section 
        className='glassmorphism-black flex h-[112px] w-full 
        items-center justify-between px-4 max-md:justify-center 
        max-md:gap-5 md:px-12'
      >

      </section>
    </div>
  )
};

export default PodcastPlayer;
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';
import { formatTime } from '@/lib/formatTime';

import { useAudio } from '@/providers/AudioProvider';

const PodcastPlayer = () => {

  // const { audio } = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className={cn("sticky bottom-0 left-0 size-full flex-col")}>
      <Progress />
      <section 
        className='glassmorphism-black flex h-[112px] w-full 
        items-center justify-between px-4 max-md:justify-center 
        max-md:gap-5 md:px-12'
      >
        <audio 
          src="" 
          className='hidden' 
        />
        <div className='flex items-center gap-4 max-md:hidden'>
          <Link href={`/podcast`}>
            <Image
              src="/images/player1.png"
              width={64}
              height={64}
              alt='Player 1'
              className="aspect-square rounded-xl"
            />
          </Link>
          <div className='flex w-[160px] flex-col'>
            <h2 className='text-14 truncate font-semibold text-white-1'>
              ID072019
            </h2>
            <p className='text-12 font-normal text-white-2'>
              W/n
            </p>
          </div>
        </div>
        <div className='flex-center cursor-pointer gap-3 md:gap-6'>
          <div className='flex items-center gap-1.5'>
            <Image
              src={"/icons/reverse.svg"}
              width={24}
              height={24}
              alt="rewind"
            />
            <h2 className="text-12 font-bold text-white-4">-5</h2>
          </div>
          <Image
            src={isPlaying ? "/icons/Pause.svg" : "/icons/Play.svg"}
            width={30}
            height={30}
            alt="play"
          />
          <div className="flex items-center gap-1.5">
            <h2 className="text-12 font-bold text-white-4">+5</h2>
            <Image
              src={"/icons/forward.svg"}
              width={24}
              height={24}
              alt="forward"
              
            />
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <h2 className='text-16 font-normal text-white-2 max-md:hidden'>
            12:30
          </h2>
          <div className='flex w-full gap-2'>
            <Image
              src={isMuted ? "/icons/unmute.svg" : "/icons/mute.svg"}
              width={24}
              height={24}
              alt="mute unmute"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  )
};

export default PodcastPlayer;
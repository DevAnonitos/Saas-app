"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import Header from './Header';
import Carousel from './Carousel';
import LoaderSpinner from './LoaderSpinner';

import { SignedIn, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const RightSidebar = () => {

  const router = useRouter()

  return (
    <section className={cn("right_sidebar h-[calc(100vh-5px)]")}>
      <section>
        <Header headerTitle='Fan like You'  />
      </section>

      <section className='flex flex-col gap-8 pt-12'>
        <Header headerTitle='Top Podcast' />
        <div className='flex flex-col gap-6'>

        </div>
      </section>
    </section>
  );
};

export default RightSidebar;
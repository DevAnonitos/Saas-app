import React, { Suspense } from 'react';
import Image from 'next/image';
import { Toaster } from '@/components/ui/toaster';

import LoaderSpinner from '@/components/LoaderSpinner';
import PodcastPlayer from '@/components/PodcastPlayer';

import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import MobileNav from '@/components/MobileNav';

const RootLayout = ({ 
  children 
}: Readonly<{
  children: React.ReactNode,
}>) => {
  return (
    <div className='relative flex flex-col'>
      <main className='relative flex'>
        <LeftSidebar />

        <section className='flex min-h-screen flex-1 flex-col px-4 sm:px-14'>
          <div className='mx-auto flex w-full max-w-5xl flex-col max-sm:px-4'>
            <div className='flex h-16 items-center justify-between md:hidden'>
              <Image 
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
              <MobileNav />
            </div>
            <div className='flex flex-col md:pb-14'>
              <Toaster />
              <Suspense fallback={<LoaderSpinner />}>
                {children}
              </Suspense>
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>

      <PodcastPlayer />
    </div>
  );
};

export default RootLayout;
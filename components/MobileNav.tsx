"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { 
  Sheet, 
  SheetClose, 
  SheetContent, 
  SheetTrigger 
} from './ui/sheet';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';

const MobileNav = () => {
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Button>
            Dev
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className='border-none'>
          <Link href="/" className='flex cursor-pointer items-center gap-1 pb-10 pl-4'>
            <h1 className="text-24 font-extrabold  text-white-1 ml-2">
              PodFy
            </h1>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 text-white'>

              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
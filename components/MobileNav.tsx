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

import { sidebarLink } from '@/constants';

const MobileNav = () => {

  const pathName = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image 
            src="/icons/hamburger.svg" 
            alt='Menu' 
            width={20} 
            height={30} 
            className='cursor-pointer' 
          />
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
                {sidebarLink.map(({ route, label, imgURL }) => {
                  const isActive = pathName === route || pathName.startsWith(`${route}/`);

                  return (
                    <SheetClose 
                      asChild key={route}
                    >
                      <Link 
                        href={route} 
                        className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-start", 
                          {'bg-nav-focus border-r-4 border-orange-1': isActive})
                        }
                      >
                        <Image 
                          src={imgURL} 
                          alt={label} 
                          width={24} 
                          height={24} 
                        />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
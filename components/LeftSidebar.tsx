"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { sidebarLink } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import { SignIn, SignedOut, useClerk } from '@clerk/nextjs';

const LeftSidebar = () => {

  const pathName = usePathname();
  const router = useRouter();
  // const { signOut } = useClerk();

  return (
    <section className={cn("left_sidebar h-[calc(100vh-5px)]", {  })}>
      <nav className='flex flex-col gap-6'>
        <Link 
          href="/" 
          className='flex cursor-pointer items-center 
          gap-1 pb-10 max-lg:justify-center'
        >
          <Image 
            src="/icons/logo.svg" 
            alt="logo" 
            width={23} 
            height={27} 
          />
          <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">
            PodFy
          </h1>
        </Link>

        {sidebarLink.map(({ route, label, imgURL }) => {
          const isActive = pathName === route || pathName.startsWith(`${route}/`);

          return (
            <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start", {
              'bg-nav-focus border-r-4 border-orange-1': isActive
            })}>
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p className='text-white-1'>{label}</p>
            </Link>
          )
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
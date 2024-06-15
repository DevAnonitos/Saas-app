"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { SignIn, SignedOut, useClerk } from '@clerk/nextjs';

const LeftSidebar = () => {

  const pathName = usePathname();
  const router = useRouter();
  // const { signOut } = useClerk();

  return (
    <section className={cn("h-[calc(100vh-5px)]", {  })}>
      <nav className='flex flex-col gap-6'>
        <Link href="/" className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
          <h1 className="text-24 font-extrabold text-black max-lg:hidden">
            Podcastr
          </h1>
        </Link>
      </nav>
    </section>
  );
};

export default LeftSidebar;
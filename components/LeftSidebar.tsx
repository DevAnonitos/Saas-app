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
    <div>LeftSidebar</div>
  );
};

export default LeftSidebar;
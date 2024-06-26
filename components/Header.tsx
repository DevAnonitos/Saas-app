import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type HeaderProps = {
  headerTitle?: string;
  titleClassName?: string;
};

const Header = ({ headerTitle, titleClassName }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between border-[1px] border-gray-700 p-3 rounded-xl ">
      {headerTitle ? (
        <h1 className={cn('text-18 font-bold text-white-1', titleClassName)}>
          {headerTitle}
        </h1>
      ): <div />}
      <Link href="/discover" className="text-16 font-semibold text-orange-1">
        See all
      </Link>
    </header>
  );
};

export default Header;
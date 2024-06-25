"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDebounce } from '@/lib/useDebounce';
import { usePathname, useRouter } from 'next/navigation';
import { Input } from './ui/input';

const SearchBar = () => {

  const [search, setSearch] = useState("");
  const router =  useRouter();
  const pathName = usePathname();

  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    if(debouncedValue){
      router.push(`/discover?search=${debouncedValue}`);
    } else if(!debouncedValue && pathName === "/discover") {
      router.push("/discover");
    }
  }, [router, pathName, debouncedValue]);

  return (
    <div className='relative mt-8 block'>
      <Input
        className='input-class py-6 pl-12 focus-visible:ring-offset-orange-1'
        placeholder='Search for favorite podcasts...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onLoad={() => setSearch("")}
      />
      <Image
        src="/icons/search.svg"
        alt='search'
        height={20}
        width={20}
        className='absolute left-4 top-3.5'
      />
    </div>
  );
};

export default SearchBar;
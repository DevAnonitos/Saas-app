"use client";

import React from 'react';
import EmptyState from '@/components/EmptyState';
import SearchBar from '@/components/SearchBar';
import LoaderSpinner from '@/components/LoaderSpinner';

const Discover = () => {
  return (
    <div className='flex flex-col gap-9'>
      <SearchBar />
    </div>
  );
};

export default Discover;
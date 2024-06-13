"use client";

import React from 'react'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9 md:overflow-hidden'>
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">
          New Trending Podcasts ✨
        </h1>

        <div className='bg-slate-200'>
          PodCast Lists
        </div>
      </section>
    </div>
  );
};

export default Home;
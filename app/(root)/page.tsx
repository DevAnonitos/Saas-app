"use client";

import React, { Suspense } from 'react';
import LoaderSpinner from '@/components/LoaderSpinner';
import PodcastCard from '@/components/PodcastCard';

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9 md:overflow-hidden'>
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">
          New Trending Podcasts ✨
        </h1>

        <div className='podcast_grid'>
          <Suspense fallback={<LoaderSpinner />}>
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Home;
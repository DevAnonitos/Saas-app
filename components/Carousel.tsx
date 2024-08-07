import React, { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoaderSpinner from './LoaderSpinner';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

const Carousel = () => {

  const router = useRouter();

  return (
    <section className='flex w-full flex-col gap-4 overflow-hidden'>
      <div className='flex'>

      </div>
      <div className='flex justify-center gap-2'>
        <DotButton
          onClick={() => {}}
          selected
        />
      </div>
    </section>
  );
};

export default Carousel;
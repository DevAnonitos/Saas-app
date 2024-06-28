import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PodcastCard = () => {

  const router = useRouter();

  const handleViews = () => {
    router.push(`/podcasts/`, {
      scroll: true,
    });
  };

  return (
    <div className='cursor-pointer' onClick={handleViews}>
      <figure className='flex flex-col gap-2'>
        <Image
          src={`/images/player1.png`}
          width={174}
          height={174}
          alt='Player 1'
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className='flex flex-col'>
          <h1 className="text-16 truncate font-bold text-white-1">ID072019</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            Nhac chua lanh ne
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
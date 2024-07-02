import React from 'react';
import { SignUp } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className='flex-center h-screen w-full'>
      <SignUp />
    </div>
  );
};

export default Page;
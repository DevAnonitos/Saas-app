import React from 'react';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='flex-center h-screen w-full'>
      <SignIn />
    </div>
  );
};

export default SignInPage;
import React from 'react';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='flex-center h-screen w-full'>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
import React from 'react';
import { Loader } from "lucide-react"

const Loading = () => {
  return (
    <div className='flex-center h-screen w-full'>
      <Loader className='animate-spin' size={30} />
    </div>
  );
};

export default Loading;
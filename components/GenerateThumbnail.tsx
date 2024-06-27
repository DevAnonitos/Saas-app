import React, { useRef, useState } from 'react';

import { Button } from "./ui/button";

const GenerateThumbnail = () => {
  return (
    <>
      <div className='generate_thumbnail'>
        <Button
          type="button"
          variant="secondary"
          className='text-white-1'
        >
          Use AI to generate thumbnail
        </Button>
        <Button
          type="button"
          variant="outline"
          className='text-white-1 bg-black-1 border-[1px] border-gray-700'
        >
          Upload custom image
        </Button>
      </div>
    </>
  );
};

export default GenerateThumbnail;
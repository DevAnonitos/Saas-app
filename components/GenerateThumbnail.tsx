import React, { useRef, useState } from 'react';

import Image from 'next/image';

import { Button } from "./ui/button";
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

import { v4 as uuidv4 } from 'uuid';
import { Loader } from 'lucide-react';

const GenerateThumbnail = () => {

  const [isAiThumbnail, setIsAiThumbnail] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const { toast } = useToast();

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
      {isAiThumbnail ? (
        <>
          <div className='flex flex-col gap-5'>
            <div className='mt-5 flex flex-col gap-2.5'>
              <Label className="text-16 font-bold text-white-1">
                AI Prompt to generate Thumbnail
              </Label>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='image_div'>
            <Input
              type='file'
              className='hidden'
              placeholder='uploading thumbnail'
            />
            {!isImageLoading ? (
              <Image 
                src="/icons/upload-image.svg" 
                width={40} 
                height={40} 
                alt="upload" 
              />
            ): (
              <div className='text-16 flex-center font-medium text-white-1'>
                UpLoading...
                <Loader size={20} className='animate-spin ml-2' />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GenerateThumbnail;
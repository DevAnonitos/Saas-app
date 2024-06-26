import React, { useState } from 'react'

import { Loader } from 'lucide-react';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

import { v4 as uuidv4 } from 'uuid';


const GeneratePodcast = () => {
  return (
    <div>
      <div className='flex flex-col gap-2.5'>
        <Label className='text-16 font-bold text-white-1'>
          AI Prompt to generate Podcast
        </Label>
        <Textarea 
          className="input-class font-light focus-visible:ring-offset-orange-1"
          placeholder='Provide text to generate audio'
          rows={5}
        />
      </div> 
    </div>
  );
};

export default GeneratePodcast;
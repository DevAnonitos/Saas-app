"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from '@/lib/utils';
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from 'next/navigation';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/components/ui/use-toast';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';

import { Loader } from 'lucide-react';

import GeneratePodcast from '@/components/GeneratePodcast';

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];
const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
});

const CreatePodcast = () => {

  const [voiceTypes, setVoiceTypes] = useState<string | null>(null);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();


  return (
    <section className='mt-10 flex flex-col'>
      <h1 className='text-20 font-bold text-white-1'>Create Podcast</h1>

      <Form {...form}>
        <form className='mt-12 flex w-full flex-col bg-black-1 p-6 border-[1px] border-gray-700 rounded-2xl'>
          <div className='flex flex-col gap-[30px] pb-10'>
            <FormField
              control={form.control} 
              name='podcastTitle'
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">Title</FormLabel>
                  <FormControl>
                    <Input className="input-class focus-visible:ring-offset-orange-1" placeholder="PodFy App" {...field} />
                  </FormControl>
                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />

            <div className='flex flex-col gap-2.5'>
              <Label className="text-16 font-bold text-white-1">
                Select AI Voice
              </Label>

              <Select>
                <SelectTrigger className={cn('text-16 w-full border-none bg-black-2 text-gray-1 focus-visible:ring-offset-orange-1')}>
                  <SelectValue 
                    placeholder="Select AI Voice" 
                    className="placeholder:text-gray-1 " 
                  />
                </SelectTrigger>
                <SelectContent className="text-16 border-none bg-black-2 font-bold text-white-1 focus-visible:ring-offset-orange-1">
                  {voiceCategories.map((category) => (
                    <SelectItem 
                      key={category} 
                      value={category} 
                      className="capitalize focus:bg-orange-1 cursor-pointer"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <FormField
              control={form.control}
              name="podcastDescription"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">Description</FormLabel>
                  <FormControl>
                    <Textarea className="input-class focus-visible:ring-offset-orange-1" placeholder="Write a short podcast description" {...field} />
                  </FormControl>
                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-col pt-10'>
            {/* Generate Podcast  */}
            <GeneratePodcast />
            <div className='mt-10 w-full'>
              
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreatePodcast;
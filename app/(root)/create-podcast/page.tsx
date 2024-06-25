"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from '@/components/ui/button';

import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';

const CreatePodcast = () => {
  return (
    <div>CreatePodcast</div>
  );
};

export default CreatePodcast;
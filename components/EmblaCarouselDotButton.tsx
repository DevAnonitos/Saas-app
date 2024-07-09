import React, { 
  PropsWithChildren, 
  useCallback, 
  useEffect, 
  useState 
} from "react";
import { cn } from "@/lib/utils";
import { EmblaCarouselType } from 'embla-carousel';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

export const useDotButton = () => {

};

export const DotButton = ({ selected, onClick  }: DotButtonProps) => {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={cn("size-2.5 bg-white-3 cursor-pointer transition-all duration-500 rounded-full")}
    />
  );
};
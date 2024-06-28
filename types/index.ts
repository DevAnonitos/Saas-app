import { Dispatch, SetStateAction } from "react";

// EmptyStateProps
export interface EmptyStateProps {
  title: string;
  search?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

// PodcastProps
export interface PodcastProps {

};

export interface PodcastCardProps {

};

export interface ProfilePodcastProps {
  podcasts: PodcastProps[];
  listeners: number;
};

export interface AudioProps {

};

export interface CarouselProps {

};


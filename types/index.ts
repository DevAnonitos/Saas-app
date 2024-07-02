import React, { Dispatch, SetStateAction } from "react";

// EmptyStateProps
export interface EmptyStateProps {
  title: string;
  search?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

export interface TopPodcastersProps {

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
  title: string;
  audioUrl: string;
  author: string;
  imageUrl: string;
  podcastId: string;
};

export interface AudioContextType {
  audio: AudioProps | undefined;
  setAudio: React.Dispatch<React.SetStateAction<AudioProps | undefined>>;
};

export interface CarouselProps {
  fansLikeDetail: TopPodcastersProps[];
};

export interface ProfileCardProps {
  podcastData: ProfilePodcastProps;
  imageUrl: string;
  userFirstName: string;
};

export type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};


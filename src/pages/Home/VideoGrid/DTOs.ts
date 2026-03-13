export interface Video {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

export interface VideoGridProps {
  videos: Video[];
  isVideoLoading: boolean;
  error: string;
}

export interface VideoCardProps {
  video: Video;
}
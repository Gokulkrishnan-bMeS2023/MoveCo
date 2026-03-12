export interface Video {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

export interface VideoGridProps {
  limit?: number;
}

export interface VideoCardProps {
  video: Video;
}
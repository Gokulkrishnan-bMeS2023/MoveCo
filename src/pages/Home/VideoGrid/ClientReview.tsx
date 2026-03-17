import { Grid, AspectRatio, Center, Text, Skeleton } from "@chakra-ui/react";
import type { VideoGridProps, VideoCardProps } from "./DTOs";

const VideoGrid = ({ videos, isVideoLoading, error }: VideoGridProps) => {
  if (error) {
    return (
      <Center py={10}>
        <Text textStyle="size-lg">{error}</Text>
      </Center>
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
      }}
      gap={6}
    >
      {isVideoLoading && videos.length === 0
        ? Array.from({ length: 2 }).map((_, index) => (
            <VideoSkeleton key={index} />
          ))
        : videos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
    </Grid>
  );
};

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <AspectRatio ratio={16 / 9} rounded="2xl" overflow="hidden">
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
        title={video.title ?? "Client Video"}
        allowFullScreen
        loading="lazy"
      />
    </AspectRatio>
  );
};

const VideoSkeleton = () => {
  return (
    <AspectRatio ratio={16 / 9} rounded="2xl" overflow="hidden">
      <Skeleton height="100%" width="100%" />
    </AspectRatio>
  );
};

export default VideoGrid;

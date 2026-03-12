import { Grid, AspectRatio, Center, Spinner, Text } from "@chakra-ui/react";
import { useVideoGrid } from "./useClientReview";
import type { VideoGridProps, VideoCardProps } from "./DTOs";

const VideoGrid = ({ limit }: VideoGridProps) => {
  const { videos, isLoading } = useVideoGrid(limit);

  if (isLoading && videos.length === 0) {
    return (
      <Center p={10}>
        <Spinner color="brand.primary" size="xl" />
      </Center>
    );
  }

  if (!isLoading && videos.length === 0) {
    return (
      <Center p={10}>
        <Text>No videos to display yet.</Text>
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
      {videos.map((video) => (
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
        title={video.title || "Client Video"}
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default VideoGrid;

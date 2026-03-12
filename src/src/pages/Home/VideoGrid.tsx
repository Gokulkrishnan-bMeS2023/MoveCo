import { Grid, AspectRatio, Center, Spinner, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getYouTubeVideos } from "../../api/videoReviewService";

export interface Video {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

interface VideoGridProps {
  limit?: number;
}

const VideoGrid = ({ limit }: VideoGridProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (videos.length === 0) {
          setIsLoading(true);
        }
        const response = await getYouTubeVideos(limit || 10);
        setVideos(response.data || []);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, [limit]);

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

const VideoCard = ({ video }: { video: Video }) => {
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
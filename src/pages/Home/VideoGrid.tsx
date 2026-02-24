import { Grid, AspectRatio } from "@chakra-ui/react";

const VIDEO_IDS = [
  "RVf3ANbGWVg",
  "nrDAlrSTDa0",
  "mHMxStdru8E",
  "vX3P6AokCZA",
  "5cpXMr2uyAI",
  "qKT-G3cfcw8",
  "2r6pcr0Gwhg",
  "_UfdDEY7wmI",
  "pO8FJeuMqSU",
  "p7QroQ66aH8",
];

interface VideoGridProps {
  limit?: number; // 👈 optional
}

const VideoGrid = ({ limit }: VideoGridProps) => {
  const videosToShow = limit ? VIDEO_IDS.slice(0, limit) : VIDEO_IDS;

  return (
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        {videosToShow.map((id) => (
          <AspectRatio
            key={id}
            ratio={16 / 9}
            rounded="2xl"
            overflow="hidden"
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="Client Review"
              allowFullScreen
            />
          </AspectRatio>
        ))}
      </Grid>
  );
};

export default VideoGrid;

import { Heading, Flex, Container } from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import VideoGrid from "../../Home/VideoGrid/ClientReview";
import { useVideoGrid } from "../../Home/VideoGrid/useClientReview";

const VideoHome = () => {
  const [page, setPage] = useState(1);
  const pageSize = 2;

  const { videos, isVideoLoading, error, hasMore } =
    useVideoGrid(page, pageSize);

  return (
    <Container>
      <Heading
        mb={{ base: 4, lg: 6 }}
        as="h2"
        fontWeight="normal"
        color="brand.primary"
        textAlign={{ base: "center", md: "left" }}
      >
        Client Speaks
      </Heading>


      <VideoGrid videos={videos} isVideoLoading={isVideoLoading} error={error} />

      {hasMore && (
        <Flex justify="center" mt={8}>
          <Button
            label="Load More"
            rounded="full"
            variant="primary"
            onClick={() => setPage((prev) => prev + 1)}
          />
        </Flex>
      )}
    </Container>
  );
};

export default VideoHome;
import { Heading, Flex, Container } from "@chakra-ui/react";
import { useState } from "react";
import VideoGrid from "../../components/common/VideoGrid";
import Button from "../../components/common/Button/Button";

const VideoHome = () => {
  const [visibleCount, setVisibleCount] = useState(2); // initial 2

  return (
    <Container maxW="100%" py={{ base: 10, md: 12 }} px={8}>
      <Heading  mb={{base:6, lg:8}} as="h2" color="brand.primary">
        Video Reviews
      </Heading>
      <VideoGrid limit={visibleCount} />
      <Flex justify="center" mt={8}>
        <Button
          label="Load More"
          variant="primary"
          rounded="full"
          onClick={() => setVisibleCount((prev) => prev + 4)} // +4 each click
        />
      </Flex>
    </Container>
  );
};

export default VideoHome;

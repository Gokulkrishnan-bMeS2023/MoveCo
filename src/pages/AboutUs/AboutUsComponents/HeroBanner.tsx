import { Box, Heading, Image } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface HeroBannerProps {
  title: ReactNode;
  bgImage: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

const HeroBanner = ({
  title,
  bgImage,
  overlayColor = "#0000004D",
  overlayOpacity = 0.9,
}: HeroBannerProps) => {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      minH={{ base: "230px", md: "360px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={bgImage}
        alt="MoveCo Contact Us banner"
        width="100%"
        height="100%"
        objectFit="cover"
        position="absolute"
        inset={0}
        loading="eager"
        fetchPriority="high"
      />
      <Box
        position="absolute"
        inset={0}
        bg={overlayColor}
        opacity={overlayOpacity}
      />
      <Box position="relative" textAlign="center">
        <Heading as="h1" fontWeight="normal" color="brand.white" mb={4}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default HeroBanner;

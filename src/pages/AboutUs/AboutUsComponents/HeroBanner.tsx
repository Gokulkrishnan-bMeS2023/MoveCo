import { Box, Heading } from "@chakra-ui/react";
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
  overlayColor = "gray",
  overlayOpacity = 0.6,
}: HeroBannerProps) => {
  return (
    <Box
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      borderRadius="lg"
      minH={{ base: "230px", md: "320px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
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

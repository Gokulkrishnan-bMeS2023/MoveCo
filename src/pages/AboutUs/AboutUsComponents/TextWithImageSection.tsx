import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Badge from "../../../components/common/Badge/Badge";

interface ImageTextSectionProps {
  image: string;
  alt?: string;
  buttonLabel?: string;
  content: ReactNode;
  reverse?: boolean; 
}

const TextWithImageSection = ({
  image,
  alt = "section image",
  buttonLabel,
  content,
  reverse = false,
}: ImageTextSectionProps) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      alignItems="center"
      gap={{ base: 8, md: 24 }}  
    >
      <Box
        w="100%"
        order={{ base: 1, md: reverse ? 2 : 1 }}  
      >
        <Image
          src={image}
          alt={alt}
          w="100%"
          h="auto"
          borderRadius="2xl"
          loading="eager"
          fetchPriority="high"
        />
      </Box>
      <Box order={{ base: 2, md: reverse ? 1 : 2 }}>
        {buttonLabel && (
          <Box mb={{ base: 4, lg: 6 }}>
            <Badge label={buttonLabel} />
          </Box>
        )}

        <Text textStyle="size-3xl">{content}</Text>
      </Box>
    </SimpleGrid>
  );
};

export default TextWithImageSection;

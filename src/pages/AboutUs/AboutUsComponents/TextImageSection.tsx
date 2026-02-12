import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Button from "../../../components/common/Button/Button";

interface ImageTextSectionProps {
  image: string;
  alt?: string;
  buttonLabel?: string;
  content: ReactNode;
  reverse?: boolean; 
}

const ImageTextSection = ({
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
        />
      </Box>
      <Box order={{ base: 2, md: reverse ? 1 : 2 }}>
        {buttonLabel && (
          <Box mb={{ base: 4, lg: 6 }}>
            <Button
              fontSize="xl"
              rounded="full"
              variant="primary"
              label={buttonLabel}
            />
          </Box>
        )}

        <Text textStyle="size-3xl">{content}</Text>
      </Box>
    </SimpleGrid>
  );
};

export default ImageTextSection;

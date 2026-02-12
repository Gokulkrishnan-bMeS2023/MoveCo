import { Flex, Box, Image, List, HStack, Text } from "@chakra-ui/react";

interface ImageListSectionProps {
  image: string;
  points: string[];
  imagePosition?: "left" | "right";
}

const ImageWithListContent = ({
  image,
  points,
  imagePosition = "left",
}: ImageListSectionProps) => {
  return (
    <Flex
      maxW="7xl"
      mx="auto"
      gap={10}
      align="center"
      direction={{
        base: "column",
        md: imagePosition === "left" ? "row" : "row-reverse",
      }}
    >
      <Box flex="1">
        <Image
          src={image}
          alt="Section Image"
          borderRadius="xl"
          boxShadow="lg"
          objectFit="cover"
          w="100%"
          maxH="420px"
        />
      </Box>

      <Box flex="1">
        <List.Root gap={4} listStyle="none" ps={0}>
          {points.map((item, index) => (
            <List.Item key={index}>
              <HStack align="start" gap={4}>
                <Box
                  minW="28px"
                  h="28px"
                  bg="brand.primary"
                  color="brand.white"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                >
                  {index + 1}
                </Box>
                <Text textStyle="size-lg">{item}</Text>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      </Box>
    </Flex>
  );
};

export default ImageWithListContent;

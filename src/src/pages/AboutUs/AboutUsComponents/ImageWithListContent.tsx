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
      gap={{base: 6, lg: 14}}
      align="center"
      direction={{
        base: "column",
        lg: imagePosition === "left" ? "row" : "row-reverse",
      }}
      justify="center"
    >
      <Box w={{ base: "100%", lg: "50%" }}>
        <Image
          src={image}
          alt="Section Image"
          borderRadius="xl"
          boxShadow="lg"
          w="100%"  
          objectFit="cover"
          loading="eager"
          fetchPriority="high"
        />
      </Box>

      <Box w={{ base: "100%", lg: "50%" }}>
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

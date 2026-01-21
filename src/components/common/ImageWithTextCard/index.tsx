import { Box, Image, Heading, Text } from "@chakra-ui/react";

interface ImageWithTextCardProps {
  imgUrl: string;
  altText: string;
  heading: string;
  content: string;
}

const ImageWithTextCard = (props: ImageWithTextCardProps) => {
  const { imgUrl, altText, heading, content } = props;

  return (
    <Box>
      {/* Image */}
      <Image
        src={imgUrl}
        alt={altText}
        borderTopLeftRadius="2xl"
        borderTopRightRadius="2xl"
        width="100%"
      />

      {/* Text Container */}
      <Box
        backgroundColor="blackAlpha.800"
        color="white"
        padding={12}
        borderBottomLeftRadius="2xl"
        borderBottomRightRadius="2xl"
      >
        <Heading
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontWeight="medium"
        >
          {heading}
        </Heading>

        <Text
          fontSize={{ base: "lg", lg: "2xl" }}
          marginTop={4}
        >
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export { ImageWithTextCard };

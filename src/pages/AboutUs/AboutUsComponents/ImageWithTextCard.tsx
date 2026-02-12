import { Image, Heading, Text, Flex } from "@chakra-ui/react";

interface ImageWithTextCardProps {
  imgUrl: string;
  altText: string;
  heading: string;
  content: string;
}

const ImageWithTextCard = ({
  imgUrl,
  altText,
  heading,
  content,
}: ImageWithTextCardProps) => {
  return (
    <Flex
      direction="column"
      height="100%"   
    >
      <Image
        src={imgUrl}
        alt={altText}
        borderTopLeftRadius="2xl"
        borderTopRightRadius="2xl"
        width="100%"
        objectFit="cover"
      />

      <Flex
        direction="column"
        flex="1"       
        bg="brand.primary"
        color="brand.white"
        p={8}
        borderBottomLeftRadius="2xl"
        borderBottomRightRadius="2xl"
      >
        <Heading as="h3" mb={2}>
          {heading}
        </Heading>

        <Text textStyle="size-lg">
          {content}
        </Text>
      </Flex>
    </Flex>
  );
};

export { ImageWithTextCard };

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Button from "../Button/Button";

interface SideContentSectionProps {
  title: string;
  description: string;
  image: string;
  linkText?: string;
  linkHref?: string;
}

const SideContentSection = ({
  title,
  description,
  image,
  linkText = "Read More",
  linkHref = "#",
}: SideContentSectionProps) => {
  return (
    <>
    <Box w={{ base: "100%", lg: "50%" }} textAlign={{base:"center",lg:"left"}} >
      <Heading mb={4} as="h2">{title}</Heading>
    </Box>
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "8", lg: "16" }}
      align="center"
      justify="center"
    >
      {/* LEFT */}
      <Box w={{ base: "100%", lg: "50%" }}>

        <Image
          src={image}
          alt={title}
          mt={4}
          rounded="2xl"
          w="100%"
          height="auto"
          
        />
      </Box>

      {/* RIGHT */}
      <Box w={{ base: "100%", lg: "50%" }}>
        <Text textStyle="size-xl" mb={4}>
          {description}
        </Text>

       <Button
          label={linkText}
          variant="outline"
          as="a"
          href={linkHref}
          rounded="full"
        />
      </Box>
    </Flex>
    </>
  );
};

export default SideContentSection;




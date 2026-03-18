import { Box, Flex, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import Badge from "../../../components/common/Badge/Badge";
import { services } from "./data";

const ServiceCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
 
  <Box
    borderRadius="2xl"
    overflow="hidden"
    position="relative"
    role="group"
    cursor="default"
    boxShadow="md"
    bg="brand.primary"
    display="flex" 
    flexDirection="column"
    h="100%"   
    transition="transform 0.3s ease, box-shadow 0.3s ease"
    _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
  >
    <Box h="300px" overflow="hidden">
      <Image
        src={image}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
        transition="transform 0.5s ease"
        _groupHover={{ transform: "scale(1.06)" }}
      />
    </Box>

    <Box p={8} flex="1">
      <Heading as="h3"
        color="brand.white"
        fontWeight="semibold"
        lineHeight="short"
        mb={2}
      >
        {title}
      </Heading>
      <Text textStyle="size-xl" color="brand.white">
        {description}
      </Text>
    </Box>
  </Box>
);

const ServiceSection = () => {
  return (
    <>
      <Flex justify={{ base: "center", lg: "flex-start" }}>
        <Badge label="Our Services" mb={4} />
      </Flex>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
        mb={{ base: 4, lg: 6 }}
        gap={{ base: 4, lg: 12 }}
      >
        <Heading
          as="h1"
          fontWeight="normal"
          maxW={{ lg: "45%" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Things That Will Be Taken{" "}
          <Text as="span" color="brand.primary">
            Care Of
          </Text>
        </Heading>
        <Text
          textStyle={"size-2xl"}
          textAlign={{ base: "center", lg: "right" }}
          maxW={{ lg: "45%" }}
        >
          Let us take care of packing and unpacking of your household goods,
          while keeping your entire moving plan hassle free.
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6}>
        {services.map((service,index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ServiceSection;

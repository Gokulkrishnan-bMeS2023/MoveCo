import { Box, Flex, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import Badge from "../../../components/common/Badge/Badge";

// ── Service Cards Data ────────────────────────────────────────────────────
const services = [
  {
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    title: "Professional Transport Service",
    description: "Transport your households to desired destination",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    title: "Packing & Unpacking Services",
    description: "Pack & unpack your home items safe & professionally",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    title: "Storage Solutions",
    description: "Secure short & long-term storage for your belongings",
  },
];

// ── Service Card ──────────────────────────────────────────────────────────
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
    transition="transform 0.3s ease, box-shadow 0.3s ease"
    _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
  >
    {/* Image */}
    <Box h="240px" overflow="hidden">
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

    {/* Content */}
    <Box bg="brand.primary" px={6} py={5}>
      <Text
        color="white"
        fontWeight="semibold"
        fontSize="lg"
        lineHeight="short"
        mb={2}
      >
        {title}
      </Text>
      <Text color="whiteAlpha.800" fontSize="sm">
        {description}
      </Text>
    </Box>
  </Box>
);

// ── Main Section ──────────────────────────────────────────────────────────
const ServiceSection = () => {
  return (
    <>
      {/* ── Things That Will Be Taken Care Of ── */}
      <Box pt="sectionTop">
        <Badge label="Our Services" />
        <Flex
          mb={{ base: 6, lg: 10 }}
          direction={{ base: "column", lg: "row" }}
          align={{ base: "flex-start", lg: "center" }}
          justify="space-between"
          gap={{ base: 4, lg: 10 }}
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
            textStyle="size-2xl"
            maxW={{ lg: "42%" }}
            textAlign={{ base: "center", lg: "right" }}
          >
            Let us take care of packing and unpacking of your household goods,
            while keeping your entire moving plan hassle free.
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ServiceSection;

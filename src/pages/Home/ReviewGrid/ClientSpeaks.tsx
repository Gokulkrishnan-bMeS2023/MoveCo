import {
  Grid,
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { images } from "../../../assets";
import type { ClientSpeak } from "./DTOs";

interface ClientSpeaksProps {
  testimonials: ClientSpeak[];
  isLoading: boolean;
  error?: string;
}

const ClientSpeaks = ({ testimonials, isLoading }: ClientSpeaksProps) => {
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  if (isLoading && safeTestimonials.length === 0) {
    return (
      <Center p={10}>
        <Spinner color="brand.primary" size="xl" />
      </Center>
    );
  }

  if (safeTestimonials.length === 0) {
    return (
      <Center p={10}>
        <Text>No testimonials to display yet.</Text>
      </Center>
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap={6}
    >
      {safeTestimonials.map((client, index) => (
        <ReviewCard key={client.id || index} client={client} />
      ))}
    </Grid>
  );
};

const ReviewCard = ({ client }: { client: ClientSpeak }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
    >
      <Box
        bg="brand.white"
        p={6}
        rounded="2xl"
        shadow={isHovered ? "2xl" : "sm"}
        border="1px solid"
        borderColor={isHovered ? "brand.primary" : "gray.100"}
        transition="all 0.2s ease-in-out"
        overflow="hidden"
      >
        <Flex align="center" gap={4} mb={4}>
          <Image
            src={client?.image || images?.profile}
            boxSize="50px"
            alt="profile"
            borderRadius="full"
            objectFit="cover"
          />
          <Heading as="h5">
            {client?.firstName} {client?.lastName}
          </Heading>
        </Flex>

        <Box
          maxH={isHovered ? "none" : "100px"}
          overflow="hidden"
          position="relative"
        >
          <Text color="brand.secondary" lineHeight="1.6">
            {client?.comments}
          </Text>

          {!isHovered && (
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              h="40px"
              bgGradient="linear(to-t, white, transparent)"
              pointerEvents="none"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientSpeaks;
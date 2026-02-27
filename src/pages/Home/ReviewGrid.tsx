import { Grid, Box, Text, Heading, Flex, Image, Spinner, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { images } from "../../assets";
import { getTestimonial } from "../../api/testimonialService";

export interface ClientSpeak {
  id: number;
  firstName: string;
  lastName: string;
  comments: string;
  image?: string;
}

interface ClientSpeaksProps {
  limit?: number;
}

const ClientSpeaks = ({ limit }: ClientSpeaksProps) => {
  const [testimonials, setTestimonials] = useState<ClientSpeak[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonial();
        const rawData = Array.isArray(response.data) ? response.data : response.data?.data || [];
        const normalized = rawData.map((item: any) => ({
          id: item.id || item.Id,
          firstName: item.firstName || item.FirstName || "Guest",
          lastName: item.lastName || item.LastName || "",
          comments: item.comments || item.Comments || "",
          image: item.image || item.Image || null,
        }));

        setTestimonials(normalized);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const speaksToShow = limit ? testimonials.slice(0, limit) : testimonials;

  if (isLoading) {
    return (
      <Center p={10}>
        <Spinner color="brand.primary" size="xl" />
      </Center>
    );
  }

  if (testimonials.length === 0) {
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
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
      alignItems="start"
    >
      {speaksToShow.map((client) => (
        <ReviewCard key={client.id} client={client} />
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
      zIndex={isHovered ? 20 : 1}
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
            src={client.image || images.profile}
            boxSize="50px"
            alt="profile"
            borderRadius="full"
            objectFit="cover"
            
          />
          <Heading as="h5">
            {client.firstName} {client.lastName}
          </Heading>
        </Flex>

        <Box
          maxH={isHovered ? "none" : "100px"}
          overflow="hidden"
          position="relative"
        >
          <Text
            color="brand.secondary"
            lineHeight="1.6"
          >
            {client.comments}
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
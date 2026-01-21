import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      bgGradient="radial(circle at top, var(--chakra-colors-blue-50), transparent 60%)"
    >
      <Container maxW="4xl">
        <Stack
          textAlign="center"
          gap={8}
          borderWidth="1px"
          borderRadius="2xl"
          p={{ base: 8, md: 14 }}
          bg="bg.surface"
          boxShadow="xl"
        >
          {/* 404 */}
          <Heading
            fontSize={{ base: "7xl", md: "9xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
          >
            404
          </Heading>

          <Stack gap={2}>
            <Heading size="lg">Page not found</Heading>
            <Text color="fg.muted" fontSize="lg">
              Sorry, the page you’re looking for doesn’t exist or has been
              moved.
            </Text>
          </Stack>

          {/* Actions */}
          <HStack justify="center" gap={4} flexWrap="wrap">
            <Button size="lg" colorScheme="blue" onClick={() => navigate("/")}>
              <HStack gap={2}>
                <Icon as={FaHome} />
                <Text>Go Home</Text>
              </HStack>
            </Button>

            <Button size="lg" variant="outline" onClick={() => navigate(-1)}>
              <HStack gap={2}>
                <Icon as={FaArrowLeft} />
                <Text>Go Back</Text>
              </HStack>
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NotFound;

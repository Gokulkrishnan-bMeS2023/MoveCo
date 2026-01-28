import { Box, Container, Heading, Text, Stack, HStack } from "@chakra-ui/react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box minH="88vh" display="flex" alignItems="center">
      <Container maxW="100%" px={{ base: 4, md: 8 }}>
        <Stack
          mx="auto"
          textAlign="center"
          gap={{ base: 6, md: 8 }}
          borderWidth="1px"
          borderRadius="2xl"
          p={{ base: 6, sm: 8, md: 14 }}
          bg="brand.white"
          boxShadow="xl"
          maxW={{ base: "100%", sm: "90%", md: "50%" }}
        >
          {/* 404 */}
          <Heading
            as="h1"
            fontWeight="700"
            fontSize={{ base: "6xl", sm: "7xl", md: "9xl" }}
            color="brand.primary"
          >
            404
          </Heading>

          <Stack gap={2}>
            <Heading as="h3">Page not found</Heading>
            <Text textStyle="size-xl" color="brand.secondary">
              Sorry, the page you’re looking for doesn’t exist or has been
              moved.
            </Text>
          </Stack>

          {/* Actions */}
          <HStack
            justify="center"
            gap={4}
            flexWrap="wrap"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Button
              label="Go Home"
              variant="primary"
              leftIcon={<FaHome />}
              px={8}
              onClick={() => navigate("/")}
            />

            <Button
              label="Go Back"
              variant="outline"
              leftIcon={<FaArrowLeft />}
              px={8}
              onClick={() => navigate(-1)}
            />
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NotFound;

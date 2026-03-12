import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { images } from "../../../assets";
import { GetQuote } from "../../Home/QuoteForm/Quote";

const InstantOnlineEstimate = () => {
  
  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 4, lg: 10 }}
        mb={{ base: 4, lg: 6 }}
      >
        <Heading
          as="h1"
          fontWeight="normal"
          maxW={{ lg: "45%" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Instant{" "}
          <Text as="span" color="brand.primary">
            Online Estimate
          </Text>
        </Heading>
        <Text
          textStyle="size-2xl"
          maxW={{ lg: "45%" }}
          textAlign={{ base: "center", lg: "right" }}
        >
          Already have an inventory list? Avoid surprises and get an immediate,
          guaranteed fixed-price moving quote right now.
        </Text>
      </Flex>
      <Flex gap={10} align="center" direction={{ base: "column", md: "row" }}>
        <Box
          bg="brand.white"
          p={{ base: 6, md: 8 }}
          borderRadius="xl"
          boxShadow="lg"
          w={{ base: "100%", md: "420px" }}
        >
        <GetQuote showEstimate={false} />
        </Box>
        <Box w={{ base: "100%", md: "50%" }} textAlign="start">
          <Image
            src={images.logistics}
            alt="Logistics Illustration"
            maxW="480px"
            mx="auto"
            maxH={{ base: "300px", md: "450px" }}
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default InstantOnlineEstimate;

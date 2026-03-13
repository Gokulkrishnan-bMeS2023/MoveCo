import {
  Box,
  Image,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../assets";
import RecaptchaWrapper from "../../../utils/RecaptchaWrapper";
import InHomeMoveEstimateForm from "./InHomeMoveEstimateForm";

const InHomeMoveEstimateContent = () => {
  const navigate = useNavigate();
 
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
          In-Home
          <Text as="span" color="brand.primary">
            Move Estimate
          </Text>
        </Heading>
        <Text
          textStyle="size-xl"
          maxW={{ lg: "45%" }}
          textAlign={{ base: "center", lg: "right" }}
        >
          All information will not be released to any other person or company,
          please read our{" "}
          <Text
            as="span"
            color="brand.primary"
            textDecoration="underline"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/privacy-policy")}
          >
            privacy policy
          </Text>
          .{" "}
          <Text as="span" fontWeight="500">
            Be sure to ask about our packing services!
          </Text>
        </Text>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        alignItems="center"
        gap={{ base: 4, lg: 16 }}
      >
        <Box w="100%">
          <Image
            src={images.inHomeMove}
            alt="footprint"
            w="100%"
            h="auto"
            borderRadius="2xl"
            loading="eager"
            fetchPriority="high"
          />
        </Box>
        <Text textStyle="size-3xl" textAlign={{ base: "center", lg: "left" }}>
          After filling out this form, an appointment will be made to have a
          real, live person come out and estimate your move costs. This is a
          free service, and is perfect for individuals who are unsure as to how
          items can and will be moved.
        </Text>
      </SimpleGrid>

      <Box pt="sectionTop">
        <RecaptchaWrapper>
          <InHomeMoveEstimateForm />
        </RecaptchaWrapper>
      </Box>
    </Container>
  );
};

export default InHomeMoveEstimateContent;

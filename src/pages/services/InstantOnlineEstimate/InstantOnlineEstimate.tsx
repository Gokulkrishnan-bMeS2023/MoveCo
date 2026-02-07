import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import InputField from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import DateInput from "../../../components/common/DateInput/DateInput";
import Logistics from "../../../assets/Logistics.svg";
const InstantOnlineEstimate = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {/* Heading Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: 6, md: 10 }}
        mb={12}
      >
        {/* Left */}
        <Box maxW="600px" w="100%">
          <Heading as="h1" fontWeight="normal" mb={2}>
            Instant{" "}
            <Text as="span" color="brand.primary">
              Online Estimate
            </Text>
          </Heading>
        </Box>

        {/* Right */}
        <Box maxW="500px" w="100%">
          <Text textStyle="size-2xl" textAlign={{ base: "left", md: "right" }}>
            Already have an inventory list? Avoid surprises and get an
            immediate, guaranteed fixed-price moving quote right now.
          </Text>
        </Box>
      </Flex>

      <Flex gap={10} align="center" direction={{ base: "column", md: "row" }}>
        {/* Form Card */}
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          w={{ base: "100%", md: "420px" }}
        >
          <Heading as="h3" fontWeight="normal" mb={4} color="brand.primary">
            📋 Get a Moving Quote
          </Heading>

          <Stack gap={4}>
            <InputField label="Name" leftIcon={<FaUser />} isRequired />

            <InputField label="LastName" leftIcon={<FaUser />} isRequired />

            <DateInput label="Date" isRequired />

            <InputField
              label="PhoneNumber"
              leftIcon={<FaPhoneAlt />}
              isRequired
            />
            <InputField label="Email" leftIcon={<FaEnvelope />} isRequired />
            <Button
              onClick={() => navigate("/move-information")}
              label="Get Your Quote"
              variant="primary"
            />
            <Text textStyle="size-sm">
              Prefer to speak with us directly?{" "}
              <Text as="span" textStyle="size-sm" color="brand.primary">
                Call us at (800) 890-0928
              </Text>
            </Text>
          </Stack>
        </Box>
        <Box w={{ base: "100%", md: "50%" }} textAlign="start">
          <Image
            src={Logistics}
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

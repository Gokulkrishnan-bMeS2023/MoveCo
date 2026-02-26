import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import DateInput from "../../../components/common/DateInput/DateInput";
import type { InstantEstimateDTO, InstantEstimateErrors } from "./DTOs";
import { validateInstantEstimate } from "./validation";
import { useEffect } from "react";
import { images } from "../../../assets";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";

const InstantOnlineEstimate = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<InstantEstimateDTO>({
    firstName: "",
    lastName: "",
    date: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<InstantEstimateErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("instantEstimate");
    if (saved) {
      setValues(JSON.parse(saved));
    }
  }, []);

  const handleChange = (field: keyof InstantEstimateDTO, value: string) => {
    const updated = { ...values, [field]: value };
    setValues(updated);
    sessionStorage.setItem("instantEstimate", JSON.stringify(updated));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateInstantEstimate(values);
    setIsLoading(true);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    navigate(
      `/move-information?firstName=${encodeURIComponent(values.firstName)}&lastName=${encodeURIComponent(values.lastName)}&email=${encodeURIComponent(values.email)}&phone=${encodeURIComponent(values.phone)}&moveDate=${encodeURIComponent(values.date)}`,
    );

    fetch("http://balas.tryasp.net/api/Auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        movingDate: values.date,
        estimateType: "Instant Online Estimate",
      }),
    }).catch((err) => console.error("Background API error:", err));
  };

  return (
    <Container>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: 4, md: 10 }}
        mb={{ base: 4, lg: 6 }}
      >
        <Box maxW="600px" w="100%">
          <Heading as="h1" fontWeight="normal">
            Instant{" "}
            <Text as="span" color="brand.primary">
              Online Estimate
            </Text>
          </Heading>
        </Box>
        <Box maxW="500px" w="100%">
          <Text textStyle="size-2xl" textAlign={{ base: "left", md: "right" }}>
            Already have an inventory list? Avoid surprises and get an
            immediate, guaranteed fixed-price moving quote right now.
          </Text>
        </Box>
      </Flex>
      <Flex gap={10} align="center" direction={{ base: "column", md: "row" }}>
        <Box
          bg="brand.white"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          w={{ base: "100%", md: "420px" }}
        >
          <Heading as="h3" textAlign="center" fontWeight="normal" mb={4}>
          Get a Moving{" "}
          <Text as="span" color="brand.primary">
            Quote
          </Text>
        </Heading>
          <Stack gap={4}>
            <InputField
              label="Name"
              placeholder="Name"
              value={values.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              isRequired
              errorMessage={errors.firstName}
            />
            <InputField
              label="Last Name"
              placeholder="Last Name"
              value={values.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              isRequired
              errorMessage={errors.lastName}
            />
            <DateInput
              label="Date"
              variant="future-only"
              value={values.date}
              onChange={(e) => handleChange("date", e.target.value)}
              isRequired
              errorMessage={errors.date}
            />

            <PhoneField
              label="Phone Number"
              value={values.phone}
              onChange={(digits) => handleChange("phone", digits)}
              isRequired
              errorMessage={errors.phone}

            />
            <InputField
              label="Email"
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              isRequired
              errorMessage={errors.email}
            />
            <Button
              onClick={handleSubmit}
              label={isLoading ? "Submitting..." : "Get Your Quote"}
              variant="primary"
              disabled={isLoading}
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
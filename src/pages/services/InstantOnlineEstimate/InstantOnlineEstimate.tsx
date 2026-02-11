import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import DateInput from "../../../components/common/DateInput/DateInput";
import Logistics from "../../../assets/Logistics.svg";

interface InstantEstimateValues {
  firstName: string;
  lastName: string;
  date: string;
  phone: string;
  email: string;
}

const InstantOnlineEstimate = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<InstantEstimateValues>({
    firstName: "",
    lastName: "",
    date: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<InstantEstimateValues>>({});

  const handleChange = (field: keyof InstantEstimateValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };
const handleSubmit = async () => {
  const newErrors: any = {};

  if (!values.firstName) newErrors.firstName = "Name is required";
  if (!values.lastName) newErrors.lastName = "Last name is required";
  if (!values.date) newErrors.date = "Date is required";
  if (!values.phone) newErrors.phone = "Phone number is required";

  if (!values.email) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    newErrors.email = "Invalid email address";
  }

  // ❌ Stop here if validation fails
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // ✅ Validation passed
  setErrors({});

  try {
    const response = await fetch(
      "https://workinsite-test-api.onrender.com/Register",
      {
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
          estimateType: "Instant Online Estimate", // or dynamic
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const data = await response.json();
    console.log("Success:", data);

    // 🔀 Navigate only AFTER successful API call
    navigate("/move-information");

  } catch (error: any) {
    console.error("API Error:", error.message);
  }
};


  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
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
            <InputField
              label="Name"
              leftIcon={<FaUser color="var(--chakra-colors-brand-primary)" />}
              placeholder="Name"
              value={values.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              isRequired
              errorMessage={errors.firstName}
            />
            <InputField
              label="Last Name"
              leftIcon={<FaUser color="var(--chakra-colors-brand-primary)" />}
              placeholder="Last Name"
              value={values.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              isRequired
              errorMessage={errors.lastName}
            />
            <DateInput
              label="Date"
              leftIcon={
                <FaCalendarAlt color="var(--chakra-colors-brand-primary)" />
              }
              value={values.date}
              onChange={(e) => handleChange("date", e.target.value)}
              isRequired
              errorMessage={errors.date}
            />
            <InputField
              label="Phone Number"
              placeholder="Phone Number"
              leftIcon={
                <FaPhoneAlt color="var(--chakra-colors-brand-primary)" />
              }
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              isRequired
              errorMessage={errors.phone}
            />
            <InputField
              label="Email"
              leftIcon={
              <FaEnvelope color="var(--chakra-colors-brand-primary)" />
              }
              placeholder="Email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              isRequired
              errorMessage={errors.email}
            />
            <Button
              onClick={handleSubmit}
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

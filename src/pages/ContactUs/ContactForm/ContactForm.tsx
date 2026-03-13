import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Flex,
  Card,
  Icon,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import InputField from "../../../components/common/Input/Input";
import Notes from "../../../components/common/Notes/Notes";
import Button from "../../../components/common/Button/Button";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  return (
    <Card.Root variant="elevated" size="lg">
      <Card.Body gap={{ base: 4, md: 6 }}>
        <HStack gap={3} alignItems="flex-start">
          <Flex bg="brand.primary" px={3} py={2} borderRadius="md">
            <Box color="brand.white">
              <Icon
                as={FaEnvelope}
                boxSize={{ base: 5, md: 6 }}
                color="brand.white"
              />
            </Box>
          </Flex>
          <Heading as="h3" fontWeight="normal">
            Send an{" "}
            <Text as="span" color="brand.primary">
              Email
            </Text>
          </Heading>
        </HStack>

        <VStack gap={4} align="stretch">
          <Text textStyle="size-lg">
            Send us an email, we would love to hear from you!
          </Text>
          <Text textStyle="size-lg">
            Just fill out the form, and a representative will get back to you as
            soon as possible
          </Text>

          <InputField
            label="Your Name"
            placeholder="Your Name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            errorMessage={errors.name}
            isRequired
          />

          <InputField
            label="Your Email"
            placeholder="Your Email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            errorMessage={errors.email}
            isRequired
          />

          <PhoneField
            label="Your Phone Number"
            value={values.phone}
            onChange={(digits) => handleChange("phone", digits)}
            errorMessage={errors.phone}
            isRequired
          />

          <Notes
            label="Your Message"
            placeholder="Your Message"
            value={values.message ?? ""}
            onChange={(value) => handleChange("message", value)}
          />

          <Box textAlign={{ base: "center", md: "right" }} mt={4}>
            <Button
              px="16"
              variant="primary"
              label={isSubmitting ? "Sending..." : "Send"}
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
          </Box>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export default ContactForm;

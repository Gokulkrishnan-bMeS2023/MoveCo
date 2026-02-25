import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Flex,
  Separator,
  Card,
  Icon,
} from "@chakra-ui/react";
import { useContactForms } from "./useContactForms";
import InputField from "../../components/common/Input/Input";
import Notes from "../../components/common/Notes/Notes";
import Button from "../../components/common/Button/Button";
import { FaEnvelope } from "react-icons/fa";
import PhoneField from "../../components/common/PhoneInput/PhoneInput";

const SendEmailForm = () => {
  const {
    contactValues,
    contactErrors,
    handleContactChange,
    submitContactForm,
  } = useContactForms();

  return (
    <>
      {/* Send Email Form */}
      <Card.Root variant="elevated" size="lg">
        <Card.Body gap={{ base: 4, md: 6 }}>
          <HStack gap={3} alignItems={"flex-start"}>
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
          <Separator />
            <InputField
              label="Your Name"
              value={contactValues.name}
              onChange={(e) => handleContactChange("name", e.target.value)}
              errorMessage={contactErrors.name}
              isRequired
              placeholder="Your Name"
            />
            <InputField
              label="Your Email"
              type="email"
              value={contactValues.email}
              onChange={(e) => handleContactChange("email", e.target.value)}
              errorMessage={contactErrors.email}
              isRequired
              placeholder="Your Email"
            />
            <PhoneField
              label="Your Phone Number"
              value={contactValues.phone}
              onChange={(digits) => handleContactChange("phone", digits)}
              errorMessage={contactErrors.phone}
              isRequired
            />
            <Notes
              label="Your Message"
              value={contactValues.message ?? ""}
              onChange={(value) => handleContactChange("message", value)}
              placeholder="Your Message"
            />
            <Box textAlign={{ base: "center", md: "right" }} mt={4}>
              <Button
                px="16"
                variant="primary"
                label="Send"
                onClick={() => {
                  if (submitContactForm()) {
                    console.log("CONTACT DATA", contactValues);
                    alert("Your message has been submitted successfully!");
                  }
                }}
              />
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default SendEmailForm;

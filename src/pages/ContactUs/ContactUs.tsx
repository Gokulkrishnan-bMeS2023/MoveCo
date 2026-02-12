import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  HStack,
  VStack,
  Flex,
  Separator,
  Card,
  Icon,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserFriends,
} from "react-icons/fa";
import contactImage from "../../assets/contact.webp";
import InputField from "../../components/common/Input/Input";
import { useContactForms } from "./useContactForms";
import Button from "../../components/common/Button/Button";
import Notes from "../../components/common/Notes/Notes";
import HeroBanner from "../AboutUs/AboutUsComponents/HeroBanner";

const ContactCard = ({
  city,
  address,
  office,
  tollFree,
}: {
  city: string;
  address?: string;
  office: string;
  tollFree?: string;
}) => {
  return (
    <Card.Root
      variant="elevated"
      size="lg"
      _hover={{
        transform: "translateY(-8px)",
        shadow: "xl",
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      borderLeftWidth={4}
      borderColor="brand.primary"
    >
      <Card.Body gap={4}>
        <Heading as="h3" fontWeight="normal">
          {city}
        </Heading>

        {address && (
          <HStack align="start" gap={3}>
            <Flex align="center" gap={3}>
              <Icon
                as={FaMapMarkerAlt}
                boxSize={{ base: 3, md: 4 }}
                color="brand.primary"
              />
              <Text textStyle="size-lg">{address}</Text>
            </Flex>
          </HStack>
        )}

        <Stack gap={2}>
          <HStack gap={2}>
            <Flex align="center" gap={3}>
              <Icon
                as={FaPhoneAlt}
                boxSize={{ base: 3, md: 4 }}
                color="brand.primary"
              />
              <Text textStyle="size-lg">{office}</Text>
            </Flex>
          </HStack>

          {tollFree && (
            <Text textStyle="size-lg" ml={7}>
              Toll Free: {tollFree}
            </Text>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

const ContactUsPage = () => {
  const {
    contactValues,
    contactErrors,
    referralValues,
    referralErrors,
    handleContactChange,
    handleReferralChange,
    submitContactForm,
    submitReferralForm,
  } = useContactForms();
  return (
    <Container maxW="100%" py={{ base: 10, md: 12 }} px={8}>
       <HeroBanner
          bgImage={contactImage}
          title="Contact Us"
        />
      <Box pt={{ base: 10, md: 16 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
          mb={{ base: 6, lg: 8 }}
        >
          <Box maxW={{ lg: "45%" }}>
            <Heading as="h1" fontWeight="normal">
              Our {""}
              <Text as="span" color="brand.primary">
                Offices
              </Text>
            </Heading>
          </Box>
          <Box maxW={{ lg: "45%" }}>
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
            >
              Visit us at any of our convenient locations across Texas
            </Text>
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          <ContactCard
            city="Dallas"
            address="1439 Crescent Ave, Lewisville, TX-75057"
            office="972-250-1100"
            tollFree="800-590-0928"
          />
          <ContactCard city="Houston" office="281-825-5544" />
          <ContactCard city="Austin" office="512-366-7901" />
        </SimpleGrid>
      </Box>

      <Box pt={{ base: 10, md: 16 }}>
        <Box maxW={{ lg: "45%" }} mb={{ base: 6, lg: 8 }}>
          <Heading as="h1" fontWeight="normal">
            Visit Our {""}
            <Text as="span" color="brand.primary">
              Main Office
            </Text>
          </Heading>
          <Text textStyle="size-2xl">Located in Lewisville, Texas</Text>
        </Box>

        <Card.Root variant="elevated" overflow="hidden">
          <iframe
            title="MoveCo.net LLC Location"
            src="https://www.google.com/maps?q=MoveCo.net+LLC,+1439+Crescent+Ave,+Lewisville,+TX+75057&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            loading="lazy"
          />
        </Card.Root>
      </Box>

      <Box pt={{ base: 10, md: 16 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
          mb={{ base: 6, lg: 8 }}
        >
          <Box maxW={{ lg: "45%" }}>
            <Heading as="h1" fontWeight="normal">
              Send Us a {""}
              <Text as="span" color="brand.primary">
                Message
              </Text>
            </Heading>
          </Box>
          <Box maxW={{ lg: "35%" }}>
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
            >
              Fill out the form below and We will get back to you as soon as
              possible.
            </Text>
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
          {/* Send Email Form */}
          <Card.Root variant="elevated" size="lg">
            <Card.Body gap={{ base: 4, md: 6 }}>
              <HStack gap={3} flexWrap="wrap">
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

              <Text textStyle="size-lg">
                Send us an email, we would love to hear from you!
              </Text>
              <Text textStyle="size-lg">
                Just fill out the form, and a representative will get back to
                you as soon as possible
              </Text>
              <Separator />
              <VStack gap={4} align="stretch">
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
                  value={contactValues.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  errorMessage={contactErrors.email}
                  isRequired
                  placeholder="Your Email"
                />
                <InputField
                  label="Your Phone Number"
                  value={contactValues.phone}
                  onChange={(e) => handleContactChange("phone", e.target.value)}
                  errorMessage={contactErrors.phone}
                  isRequired
                  placeholder="Your Phone Number"
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
                      }
                    }}
                  />
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Tell a Friend Form */}
          <Card.Root variant="elevated" size="lg">
            <Card.Body gap={{ base: 4, md: 6 }}>
              <HStack gap={3} flexWrap="wrap">
                <Flex bg="brand.primary" px={3} py={2} borderRadius="md">
                  <Box color="brand.white">
                    <Icon
                      as={FaUserFriends}
                      boxSize={{ base: 5, md: 6 }}
                      color="brand.white"
                    />
                  </Box>
                </Flex>
                <Heading as="h3" fontWeight="normal">
                  Tell a friend{" "}
                  <Text as="span" color="brand.primary">
                    about MoveCo
                  </Text>
                </Heading>
              </HStack>

              <Text textStyle="size-lg">
                To email a friend about MoveCo, fill out the information below
              </Text>
              <Separator />

              <VStack gap={4} align="stretch">
                <InputField
                  label="Your Name"
                  placeholder="Your Name"
                  value={referralValues.yourName}
                  onChange={(e) =>
                    handleReferralChange("yourName", e.target.value)
                  }
                  errorMessage={referralErrors.yourName}
                  isRequired
                />
                <InputField
                  label="Friend's Phone Number"
                  placeholder="Friend's Phone Number"
                  value={referralValues.friendPhone}
                  onChange={(e) =>
                    handleReferralChange("friendPhone", e.target.value)
                  }
                  errorMessage={referralErrors.friendPhone}
                  isRequired
                />
                <InputField
                  label="Friend's Email Address"
                  placeholder="Friend's Email Address"
                  value={referralValues.friendEmail}
                  onChange={(e) =>
                    handleReferralChange("friendEmail", e.target.value)
                  }
                  errorMessage={referralErrors.friendEmail}
                  isRequired
                />
                <Box textAlign={{ base: "center", md: "right" }} mt={4}>
                  <Button
                    px="16"
                    variant="primary"
                    label="Send"
                    onClick={() => {
                      if (submitReferralForm()) {
                        console.log("REFERRAL DATA", referralValues);
                      }
                    }}
                  />
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ContactUsPage;

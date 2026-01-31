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
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        bgGradient: "to-r",
        gradientFrom: "blue.500",
        gradientTo: "purple.500",
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      }}
      // _hover={{
      //   _before: {
      //     transform: "scaleX(1)",
      //   },
      // }}
    >
      <Card.Body gap={4}>
        <Heading size={{ base: "md", md: "lg" }} color="fg.emphasized">
          {city}
        </Heading>

        {address && (
          <HStack align="start" gap={3}>
            <Box color="blue.500" mt={1} flexShrink={0}>
              <Icon
                as={FaMapMarkerAlt}
                boxSize={{ base: 3, md: 4 }}
                color="brand.primary"
              />
            </Box>
            <Text
              color="fg.muted"
              lineHeight="1.7"
              fontSize={{ base: "sm", md: "md" }}
            >
              {address}
            </Text>
          </HStack>
        )}

        <Stack gap={2}>
          <HStack gap={3}>
            <Box color="blue.500">
              <Icon
                as={FaPhoneAlt}
                boxSize={{ base: 3, md: 4 }}
                color="brand.primary"
              />
            </Box>
            <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>
              {office}
            </Text>
          </HStack>

          {tollFree && (
            <Text ml={7} fontSize="sm" color="fg.muted">
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
    <Container maxW="100%" px={8} py={12}>
      {/* Hero Section */}
      <Box
        bgImage={`url(${contactImage})`}
        bgSize="cover"
        borderRadius="lg"
        minH={{ base: "230px", md: "320px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        <Box position="absolute" inset={0} bg="green.900" opacity={0.1} />
        <Box position="relative" textAlign="center">
          <Heading as={"h2"} color="brand.white" fontWeight="normal" mb={4}>
            Contact Us
          </Heading>
        </Box>
      </Box>

      {/* Locations Section */}
      <Stack gap={{ base: 6, md: 8 }} mb={{ base: 12, md: 16, lg: 20 }}>
        <Box>
          <Flex
            mt={6}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal" mb={2}>
                Our {""}
                <Text as="span" color="brand.primary">
                  Offices
                </Text>
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                Visit us at any of our convenient locations across Texas
              </Text>
            </Box>
          </Flex>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 4, md: 6, lg: 8 }}
        >
          <ContactCard
            city="Dallas"
            address="1439 Crescent Ave, Lewisville, TX-75057"
            office="972-250-1100"
            tollFree="800-590-0928"
          />
          <ContactCard city="Houston" office="281-825-5544" />
          <ContactCard city="Austin" office="512-366-7901" />
        </SimpleGrid>
      </Stack>

      {/* Map Section */}
      <Stack gap={{ base: 4, md: 6 }} mb={{ base: 12, md: 16, lg: 20 }}>
        <Box maxW="600px" w="100%">
          <Heading as="h1" fontWeight="normal" mb={2}>
            Visit Our {""}
            <Text as="span" color="brand.primary">
              Main Office
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
            Located in Lewisville, Texas
          </Text>
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
      </Stack>

      {/* Contact Forms Section */}
      <Box mb={{ base: 8, md: 12 }}>
        <Box maxW="650px" w="100%">
          <Heading as="h1" fontWeight="normal" mb={2}>
            Send Us a {""}
            <Text as="span" color="brand.primary">
              Message
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
            Send us an email, we would love to hear from you! <br /> Just fill
            out the form, and a representative will get back to you as soon as
            possible
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
          {/* Send Email Form */}
          <Card.Root variant="elevated" size="lg">
            <Card.Body gap={{ base: 4, md: 6 }}>
              <HStack gap={3} flexWrap="wrap">
                <Flex bg="brand.primary" p={3} borderRadius="lg">
                  <Box color="brand.white">
                    <Icon
                      as={FaEnvelope}
                      boxSize={{ base: 5, md: 6 }}
                      color="brand.white"
                    />
                  </Box>
                </Flex>
                <Heading size={{ base: "lg", md: "xl" }}>Send an Email</Heading>
              </HStack>

              <Text
                color="fg.muted"
                lineHeight="1.7"
                fontSize={{ base: "sm", md: "md" }}
              >
                Send us an email and we'll get back to you as soon as possible.
              </Text>
              <Separator />
              <VStack gap={{ base: 4, md: 5 }} align="stretch">
                <InputField
                  label="Name"
                  value={contactValues.name}
                  onChange={(e) => handleContactChange("name", e.target.value)}
                  errorMessage={contactErrors.name}
                  leftIcon={<FaUserFriends />}
                  isRequired
                />
                <InputField
                  label="Email"
                  value={contactValues.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  errorMessage={contactErrors.email}
                  leftIcon={<FaEnvelope />}
                  isRequired
                />
                <InputField
                  label="Phone"
                  value={contactValues.phone}
                  onChange={(e) => handleContactChange("phone", e.target.value)}
                  errorMessage={contactErrors.phone}
                  leftIcon={<FaPhoneAlt />}
                  isRequired
                />
                <Notes
                  label="Message"
                  value={contactValues.message ?? ""}
                  onChange={(value) => handleContactChange("message", value)}
                  placeholder="Write your message here..."
                />
                <Button
                  fontSize="xl"
                  rounded="full"
                  variant="primary"
                  label="Send"
                  onClick={() => {
                    if (submitContactForm()) {
                      console.log("CONTACT DATA", contactValues);
                    }
                  }}
                />
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Tell a Friend Form */}
          <Card.Root variant="elevated" size="lg">
            <Card.Body gap={{ base: 4, md: 6 }}>
              <HStack gap={3} flexWrap="wrap">
                <Flex bg="brand.primary" p={3} borderRadius="lg">
                  <Box color="brand.white">
                    <Icon
                      as={FaUserFriends}
                      boxSize={{ base: 5, md: 6 }}
                      color="brand.white"
                    />
                  </Box>
                </Flex>
                <Heading size={{ base: "lg", md: "xl" }}>Tell a Friend</Heading>
              </HStack>

              <Text
                color="fg.muted"
                lineHeight="1.7"
                fontSize={{ base: "sm", md: "md" }}
              >
                Help spread the word about MoveCo and refer your friends.
              </Text>
              <Separator />

              <VStack gap={{ base: 4, md: 5 }} align="stretch">
                <InputField
                  label="Your Name"
                  value={referralValues.yourName}
                  onChange={(e) =>
                    handleReferralChange("yourName", e.target.value)
                  }
                  errorMessage={referralErrors.yourName}
                  isRequired
                />
                <InputField
                  label="Friend Phone"
                  value={referralValues.friendPhone}
                  onChange={(e) =>
                    handleReferralChange("friendPhone", e.target.value)
                  }
                  errorMessage={referralErrors.friendPhone}
                  isRequired
                />
                <InputField
                  label="Friend Email"
                  value={referralValues.friendEmail}
                  onChange={(e) =>
                    handleReferralChange("friendEmail", e.target.value)
                  }
                  errorMessage={referralErrors.friendEmail}
                  isRequired
                />
                <Button
                  fontSize="xl"
                  rounded="full"
                  variant="primary"
                  label="Send"
                  onClick={() => {
                    if (submitReferralForm()) {
                      console.log("REFERRAL DATA", referralValues);
                    }
                  }}
                />
              </VStack>
            </Card.Body>
          </Card.Root>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ContactUsPage;

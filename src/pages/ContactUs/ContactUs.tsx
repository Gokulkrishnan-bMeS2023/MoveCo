// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Stack,
//   SimpleGrid,
//   Input,
//   Textarea,
//   Button,
//   Icon,
//   Image,
//   HStack,
//   VStack,
// } from "@chakra-ui/react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaUserFriends,
// } from "react-icons/fa";

// import contactImage from "../../assets/contact.webp";

// const ContactCard = ({
//   city,
//   address,
//   office,
//   tollFree,
// }: {
//   city: string;
//   address?: string;
//   office: string;
//   tollFree?: string;
// }) => (
//   <Box
//     borderWidth="1px"
//     borderRadius="2xl"
//     p={6}
//     bg="bg.surface"
//     transition="all 0.2s"
//     _hover={{ shadow: "md", transform: "translateY(-4px)" }}
//   >
//     <Heading size="md" mb={3}>
//       {city}
//     </Heading>

//     {address && (
//       <HStack align="start" mb={3}>
//         <Icon as={FaMapMarkerAlt} mt={1} color="blue.500" />
//         <Text>{address}</Text>
//       </HStack>
//     )}

//     <HStack>
//       <Icon as={FaPhoneAlt} color="blue.500" />
//       <Text fontWeight="medium">{office}</Text>
//     </HStack>

//     {tollFree && (
//       <Text mt={1} fontSize="sm" color="fg.muted">
//         Toll Free: {tollFree}
//       </Text>
//     )}
//   </Box>
// );

// const ContactUsPage = () => {
//   return (
//     <Container maxW="7xl" py={{ base: 10, md: 16 }}>
//       {/* Hero */}
//       <Box position="relative" borderRadius="2xl" overflow="hidden" mb={16}>
//         <Image
//           src={contactImage}
//           alt="Contact MoveCo"
//           w="100%"
//           h="320px"
//           objectFit="cover"
//         />
//         <Box
//           position="absolute"
//           inset={0}
//           bg="blackAlpha.600"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Stack textAlign="center" color="white">
//             <Heading size="xl">Contact Us</Heading>
//           </Stack>
//         </Box>
//       </Box>

//       {/* Locations */}
//       <Stack mb={16}>
//         <Heading size="lg" mb={6}>
//           Our Offices
//         </Heading>

//         <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
//           <ContactCard
//             city="Dallas"
//             address="1439 Crescent Ave, Lewisville, TX-75057"
//             office="972-250-1100"
//             tollFree="800-590-0928"
//           />
//           <ContactCard city="Houston" office="281-825-5544" />
//           <ContactCard city="Austin" office="512-366-7901" />
//         </SimpleGrid>
//       </Stack>

//       {/* Map */}
//       <Stack mb={16}>
//         <Heading size="lg" mb={4}>
//           Visit Us
//         </Heading>

//         <Box borderRadius="2xl" overflow="hidden" borderWidth="1px">
//           <iframe
//             title="MoveCo.net LLC Location"
//             src="https://www.google.com/maps?q=MoveCo.net+LLC,+1439+Crescent+Ave,+Lewisville,+TX+75057&output=embed"
//             width="100%"
//             height="360"
//             style={{ border: 0 }}
//             loading="lazy"
//           />
//         </Box>
//       </Stack>

//       {/* Forms */}
//       <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
//         {/* Send Email */}
//         <Box borderWidth="1px" borderRadius="2xl" p={8}>
//           <HStack mb={4}>
//             <Icon as={FaEnvelope} color="blue.500" boxSize={5} />
//             <Heading size="md">Send an Email</Heading>
//           </HStack>
//           <Text mb={6} color="fg.muted">
//             Send us an email, we would love to hear from you!
//           </Text>
//           <Text mb={6} color="fg.muted">
//             Just fill out the form, and a representative will get back to you as
//             soon as possible
//           </Text>
//           <VStack gap={4} align="stretch">
//             <Input placeholder="Your Name*" />
//             <Input placeholder="Your Email*" type="email" />
//             <Input placeholder="Your Phone Number*" />
//             <Textarea placeholder="Your Message" rows={4} />

//             <Button size="lg" colorScheme="blue">
//               Send
//             </Button>
//           </VStack>
//         </Box>

//         {/* Tell a Friend */}
//         <Box borderWidth="1px" borderRadius="2xl" p={8}>
//           <HStack mb={4}>
//             <Icon as={FaUserFriends} color="blue.500" boxSize={5} />
//             <Heading size="md">Tell a Friend</Heading>
//           </HStack>

//           <Text mb={6} color="fg.muted">
//             Help spread the word about MoveCo.
//           </Text>

//           <VStack gap={4} align="stretch">
//             <Input placeholder="Your Name*" />
//             <Input placeholder="Friend's Phone Number*" />
//             <Input placeholder="Friend's Email Address*" type="email" />

//             <Button variant="outline" size="lg">
//               send
//             </Button>
//           </VStack>
//         </Box>
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default ContactUsPage;



//2

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Image,
  HStack,
  VStack,
  Flex,
  Separator,
  Card,
  Input,
  Textarea,
  Field,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserFriends,
  FaPaperPlane,
} from "react-icons/fa";

// Replace with your actual image
// const contactImage = "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=400&fit=crop";
import contactImage from "../../assets/contact.webp";

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
    //   _hover={{
    //     _before: {
    //       transform: "scaleX(1)",
    //     },
    //   }}
    >
      <Card.Body gap={4}>
        <Heading size={{ base: "md", md: "lg" }} color="fg.emphasized">
          {city}
        </Heading>

        {address && (
          <HStack align="start" gap={3}>
            <Box color="blue.500" mt={1} flexShrink={0}>
              <FaMapMarkerAlt size={18} />
            </Box>
            <Text color="fg.muted" lineHeight="1.7" fontSize={{ base: "sm", md: "md" }}>
              {address}
            </Text>
          </HStack>
        )}

        <Stack gap={2}>
          <HStack gap={3}>
            <Box color="blue.500">
              <FaPhoneAlt size={16} />
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
  return (
    <Box bg="bg.muted" minH="100vh">
      <Container maxW="7xl" py={{ base: 6, md: 12, lg: 16 }} px={{ base: 4, md: 6, lg: 8 }}>
        {/* Hero Section */}
        <Box
          position="relative"
          borderRadius={{ base: "2xl", md: "3xl" }}
          overflow="hidden"
          mb={{ base: 12, md: 16, lg: 20 }}
          shadow="2xl"
        >
          <Image
            src={contactImage}
            alt="Contact MoveCo"
            w="100%"
            h={{ base: "240px", sm: "300px", md: "400px", lg: "450px" }}
            objectFit="cover"
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="to-br"
            gradientFrom="blackAlpha.700"
            gradientTo="blue.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={4}
          >
            <Stack textAlign="center" color="white" gap={{ base: 2, md: 4 }} maxW="3xl">
              <Heading
                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                textShadow="0 2px 4px rgba(0,0,0,0.3)"
              >
                Get In Touch
              </Heading>
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight="medium" opacity={0.95}>
                We're here to help with your moving needs
              </Text>
            </Stack>
          </Box>
        </Box>

        {/* Locations Section */}
        <Stack gap={{ base: 6, md: 8 }} mb={{ base: 12, md: 16, lg: 20 }}>
          <Box textAlign="center">
            <Heading size={{ base: "2xl", md: "3xl" }} mb={3} color="fg.emphasized">
              Our Offices
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              maxW="2xl"
              mx="auto"
              px={4}
            >
              Visit us at any of our convenient locations across Texas
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 4, md: 6, lg: 8 }}>
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
          <Box textAlign="center">
            <Heading size={{ base: "2xl", md: "3xl" }} mb={3} color="fg.emphasized">
              Visit Our Main Office
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
          <Box textAlign="center" mb={{ base: 8, md: 10 }}>
            <Heading size={{ base: "2xl", md: "3xl" }} mb={3} color="fg.emphasized">
              Send Us a Message
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              maxW="2xl"
              mx="auto"
              px={4}
            >
              Have questions? We'd love to hear from you
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
            {/* Send Email Form */}
            <Card.Root variant="elevated" size="lg">
              <Card.Body gap={{ base: 4, md: 6 }}>
                <HStack gap={3} flexWrap="wrap">
                  <Flex bg="blue.50" p={3} borderRadius="lg">
                    <Box color="blue.500">
                      <FaEnvelope size={24} />
                    </Box>
                  </Flex>
                  <Heading size={{ base: "lg", md: "xl" }}>Send an Email</Heading>
                </HStack>

                <Text color="fg.muted" lineHeight="1.7" fontSize={{ base: "sm", md: "md" }}>
                  Send us an email and we'll get back to you as soon as possible.
                </Text>

                <Separator />

                <VStack gap={{ base: 4, md: 5 }} align="stretch">
                  <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input
                      placeholder="Your Name"
                      size={{ base: "md", md: "lg" }}
                    />
                    <Field.RequiredIndicator />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Email</Field.Label>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      size={{ base: "md", md: "lg" }}
                    />
                    <Field.RequiredIndicator />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Phone Number</Field.Label>
                    <Input
                      placeholder="(555) 123-4567"
                      size={{ base: "md", md: "lg" }}
                    />
                    <Field.RequiredIndicator />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Message</Field.Label>
                    <Textarea
                      placeholder="Your message here..."
                      rows={5}
                      resize="vertical"
                    />
                  </Field.Root>

                  <Button
                    size={{ base: "md", md: "lg" }}
                    colorPalette="blue"
                    _hover={{
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                  >
                    <FaPaperPlane />
                    Send Message
                  </Button>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Tell a Friend Form */}
            <Card.Root variant="elevated" size="lg">
              <Card.Body gap={{ base: 4, md: 6 }}>
                <HStack gap={3} flexWrap="wrap">
                  <Flex bg="purple.50" p={3} borderRadius="lg">
                    <Box color="purple.500">
                      <FaUserFriends size={24} />
                    </Box>
                  </Flex>
                  <Heading size={{ base: "lg", md: "xl" }}>Tell a Friend</Heading>
                </HStack>

                <Text color="fg.muted" lineHeight="1.7" fontSize={{ base: "sm", md: "md" }}>
                  Help spread the word about MoveCo and refer your friends.
                </Text>

                <Separator />

                <VStack gap={{ base: 4, md: 5 }} align="stretch">
                  <Field.Root>
                    <Field.Label>Your Name</Field.Label>
                    <Input
                      placeholder="Your Name"
                      size={{ base: "md", md: "lg" }}
                    />
                    <Field.RequiredIndicator />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Friend's Phone</Field.Label>
                    <Input
                      placeholder="(555) 123-4567"
                      size={{ base: "md", md: "lg" }}
                    />
                    <Field.RequiredIndicator />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Friend's Email</Field.Label>
                    <Input
                      placeholder="friend@email.com"
                      type="email"
                      size={{ base: "md", md: "lg" }}
                    />
                    <Field.RequiredIndicator />
                  </Field.Root>

                  <Button
                    variant="outline"
                    size={{ base: "md", md: "lg" }}
                    colorPalette="purple"
                    borderWidth="2px"
                    _hover={{
                      bg: "purple.500",
                      color: "white",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                  >
                    <FaPaperPlane />
                    Send Referral
                  </Button>
                </VStack>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
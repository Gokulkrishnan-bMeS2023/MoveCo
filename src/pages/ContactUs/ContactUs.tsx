// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Stack,
//   SimpleGrid,
//   Button,
//   Image,
//   HStack,
//   VStack,
//   Flex,
//   Separator,
//   Card,
//   Textarea,
//   Field,
// } from "@chakra-ui/react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaUserFriends,
//   FaPaperPlane,
// } from "react-icons/fa";

// import contactImage from "../../assets/contact.webp";
// import InputField from "../../components/common/Input/Input";

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
// }) => {
//   return (
//     <Card.Root
//       variant="elevated"
//       size="lg"
//       _hover={{
//         transform: "translateY(-8px)",
//         shadow: "xl",
//       }}
//       transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
//       position="relative"
//       overflow="hidden"
//       _before={{
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: "4px",
//         bgGradient: "to-r",
//         gradientFrom: "blue.500",
//         gradientTo: "purple.500",
//         transform: "scaleX(0)",
//         transformOrigin: "left",
//         transition: "transform 0.3s ease",
//       }}
//       // _hover={{
//       //   _before: {
//       //     transform: "scaleX(1)",
//       //   },
//       // }}
//     >
//       <Card.Body gap={4}>
//         <Heading size={{ base: "md", md: "lg" }} color="fg.emphasized">
//           {city}
//         </Heading>

//         {address && (
//           <HStack align="start" gap={3}>
//             <Box color="blue.500" mt={1} flexShrink={0}>
//               <FaMapMarkerAlt size={18} />
//             </Box>
//             <Text
//               color="fg.muted"
//               lineHeight="1.7"
//               fontSize={{ base: "sm", md: "md" }}
//             >
//               {address}
//             </Text>
//           </HStack>
//         )}

//         <Stack gap={2}>
//           <HStack gap={3}>
//             <Box color="blue.500">
//               <FaPhoneAlt size={16} />
//             </Box>
//             <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>
//               {office}
//             </Text>
//           </HStack>

//           {tollFree && (
//             <Text ml={7} fontSize="sm" color="fg.muted">
//               Toll Free: {tollFree}
//             </Text>
//           )}
//         </Stack>
//       </Card.Body>
//     </Card.Root>
//   );
// };

// const ContactUsPage = () => {

//   return (
//     <Box bg="bg.muted" minH="100vh">
//       <Container
//         maxW="7xl"
//         py={{ base: 6, md: 12, lg: 16 }}
//         px={{ base: 4, md: 6, lg: 8 }}
//       >
//         {/* Hero Section */}
//         <Box
//           position="relative"
//           borderRadius={{ base: "2xl", md: "3xl" }}
//           overflow="hidden"
//           mb={{ base: 12, md: 16, lg: 20 }}
//           shadow="2xl"
//         >
//           <Image
//             src={contactImage}
//             alt="Contact MoveCo"
//             w="100%"
//             h={{ base: "240px", sm: "300px", md: "400px", lg: "450px" }}
//             objectFit="cover"
//           />
//           <Box
//             position="absolute"
//             inset={0}
//             bgGradient="to-br"
//             gradientFrom="blackAlpha.700"
//             gradientTo="blue.600"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             px={4}
//           >
//             <Stack
//               textAlign="center"
//               color="white"
//               gap={{ base: 2, md: 4 }}
//               maxW="3xl"
//             >
//               <Heading
//                 size={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                 fontWeight="bold"
//                 textShadow="0 2px 4px rgba(0,0,0,0.3)"
//               >
//                 Get In Touch
//               </Heading>
//               <Text
//                 fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                 fontWeight="medium"
//                 opacity={0.95}
//               >
//                 We're here to help with your moving needs
//               </Text>
//             </Stack>
//           </Box>
//         </Box>

//         {/* Locations Section */}
//         <Stack gap={{ base: 6, md: 8 }} mb={{ base: 12, md: 16, lg: 20 }}>
//           <Box textAlign="center">
//             <Heading
//               size={{ base: "2xl", md: "3xl" }}
//               mb={3}
//               color="fg.emphasized"
//             >
//               Our Offices
//             </Heading>
//             <Text
//               fontSize={{ base: "md", md: "lg" }}
//               color="fg.muted"
//               maxW="2xl"
//               mx="auto"
//               px={4}
//             >
//               Visit us at any of our convenient locations across Texas
//             </Text>
//           </Box>

//           <SimpleGrid
//             columns={{ base: 1, md: 2, lg: 3 }}
//             gap={{ base: 4, md: 6, lg: 8 }}
//           >
//             <ContactCard
//               city="Dallas"
//               address="1439 Crescent Ave, Lewisville, TX-75057"
//               office="972-250-1100"
//               tollFree="800-590-0928"
//             />
//             <ContactCard city="Houston" office="281-825-5544" />
//             <ContactCard city="Austin" office="512-366-7901" />
//           </SimpleGrid>
//         </Stack>

//         {/* Map Section */}
//         <Stack gap={{ base: 4, md: 6 }} mb={{ base: 12, md: 16, lg: 20 }}>
//           <Box textAlign="center">
//             <Heading
//               size={{ base: "2xl", md: "3xl" }}
//               mb={3}
//               color="fg.emphasized"
//             >
//               Visit Our Main Office
//             </Heading>
//             <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
//               Located in Lewisville, Texas
//             </Text>
//           </Box>

//           <Card.Root variant="elevated" overflow="hidden">
//             <iframe
//               title="MoveCo.net LLC Location"
//               src="https://www.google.com/maps?q=MoveCo.net+LLC,+1439+Crescent+Ave,+Lewisville,+TX+75057&output=embed"
//               width="100%"
//               height="450"
//               style={{ border: 0, display: "block" }}
//               loading="lazy"
//             />
//           </Card.Root>
//         </Stack>

//         {/* Contact Forms Section */}
//         <Box mb={{ base: 8, md: 12 }}>
//           <Box textAlign="center" mb={{ base: 8, md: 10 }}>
//             <Heading
//               size={{ base: "2xl", md: "3xl" }}
//               mb={3}
//               color="fg.emphasized"
//             >
//               Send Us a Message
//             </Heading>
//             <Text
//               fontSize={{ base: "md", md: "lg" }}
//               color="fg.muted"
//               maxW="2xl"
//               mx="auto"
//               px={4}
//             >
//               Have questions? We'd love to hear from you
//             </Text>
//           </Box>

//           <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
//             {/* Send Email Form */}
//             <Card.Root variant="elevated" size="lg">
//               <Card.Body gap={{ base: 4, md: 6 }}>
//                 <HStack gap={3} flexWrap="wrap">
//                   <Flex bg="blue.50" p={3} borderRadius="lg">
//                     <Box color="blue.500">
//                       <FaEnvelope size={24} />
//                     </Box>
//                   </Flex>
//                   <Heading size={{ base: "lg", md: "xl" }}>
//                     Send an Email
//                   </Heading>
//                 </HStack>

//                 <Text
//                   color="fg.muted"
//                   lineHeight="1.7"
//                   fontSize={{ base: "sm", md: "md" }}
//                 >
//                   Send us an email and we'll get back to you as soon as
//                   possible.
//                 </Text>

//                 <Separator />

//                 <VStack gap={{ base: 4, md: 5 }} align="stretch">
//                   <InputField
//                     label="Name"
//                     placeholder="Your Name"
//                     isRequired
//                     leftIcon={<FaUserFriends />}
//                   />
//                   <InputField
//                     label="Email"
//                     type="email"
//                     placeholder="your@email.com"
//                     isRequired
//                     leftIcon={<FaEnvelope />}
//                   />
//                   <InputField
//                     label="Phone Number"
//                     placeholder="(555) 123-4567"
//                     isRequired
//                     leftIcon={<FaPhoneAlt />}
//                   />

//                   <Field.Root>
//                     <Field.Label>Message</Field.Label>
//                     <Textarea
//                       placeholder="Your message here..."
//                       rows={5}
//                       resize="vertical"
//                     />
//                   </Field.Root>

//                   <Button
//                     size={{ base: "md", md: "lg" }}
//                     colorPalette="blue"
//                     _hover={{
//                       transform: "translateY(-2px)",
//                     }}
//                     transition="all 0.2s"
//                   >
//                     <FaPaperPlane />
//                     Send Message
//                   </Button>
//                 </VStack>
//               </Card.Body>
//             </Card.Root>

//             {/* Tell a Friend Form */}
//             <Card.Root variant="elevated" size="lg">
//               <Card.Body gap={{ base: 4, md: 6 }}>
//                 <HStack gap={3} flexWrap="wrap">
//                   <Flex bg="purple.50" p={3} borderRadius="lg">
//                     <Box color="purple.500">
//                       <FaUserFriends size={24} />
//                     </Box>
//                   </Flex>
//                   <Heading size={{ base: "lg", md: "xl" }}>
//                     Tell a Friend
//                   </Heading>
//                 </HStack>

//                 <Text
//                   color="fg.muted"
//                   lineHeight="1.7"
//                   fontSize={{ base: "sm", md: "md" }}
//                 >
//                   Help spread the word about MoveCo and refer your friends.
//                 </Text>

//                 <Separator />

//                 <VStack gap={{ base: 4, md: 5 }} align="stretch">
//                   <InputField
//                     label="Your Name"
//                     placeholder="Your Name"
//                     isRequired
//                     leftIcon={<FaUserFriends />}
//                   />

//                   <InputField
//                     label="Friend's Phone Number"
//                     placeholder="(555) 123-4567"
//                     isRequired
//                     leftIcon={<FaPhoneAlt />}
//                   />

//                   <InputField
//                     label="Friend's Email Address"
//                     type="email"
//                     placeholder="friend@email.com"
//                     isRequired
//                     leftIcon={<FaEnvelope />}
//                   />

//                   <Button
//                     variant="outline"
//                     size={{ base: "md", md: "lg" }}
//                     colorPalette="purple"
//                     borderWidth="2px"
//                     _hover={{
//                       bg: "purple.500",
//                       color: "white",
//                       transform: "translateY(-2px)",
//                     }}
//                     transition="all 0.2s"
//                   >
//                     <FaPaperPlane />
//                     Send Referral
//                   </Button>
//                 </VStack>
//               </Card.Body>
//             </Card.Root>
//           </SimpleGrid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ContactUsPage;

///2

// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Stack,
//   SimpleGrid,
//   Button,
//   Image,
//   HStack,
//   VStack,
//   Flex,
//   Separator,
//   Card,
//   Textarea,
//   Field,
// } from "@chakra-ui/react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaUserFriends,
//   FaPaperPlane,
// } from "react-icons/fa";

// import contactImage from "../../assets/contact.webp";
// import InputField from "../../components/common/Input/Input";
// import { useContactForms } from "./useContactForms";

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
// }) => {
//   return (
//     <Card.Root
//       variant="elevated"
//       size="lg"
//       _hover={{
//         transform: "translateY(-8px)",
//         shadow: "xl",
//       }}
//       transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
//       position="relative"
//       overflow="hidden"
//       _before={{
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: "4px",
//         bgGradient: "to-r",
//         gradientFrom: "blue.500",
//         gradientTo: "purple.500",
//         transform: "scaleX(0)",
//         transformOrigin: "left",
//         transition: "transform 0.3s ease",
//       }}
//       // _hover={{
//       //   _before: {
//       //     transform: "scaleX(1)",
//       //   },
//       // }}
//     >
//       <Card.Body gap={4}>
//         <Heading size={{ base: "md", md: "lg" }} color="fg.emphasized">
//           {city}
//         </Heading>

//         {address && (
//           <HStack align="start" gap={3}>
//             <Box color="blue.500" mt={1} flexShrink={0}>
//               <FaMapMarkerAlt size={18} />
//             </Box>
//             <Text
//               color="fg.muted"
//               lineHeight="1.7"
//               fontSize={{ base: "sm", md: "md" }}
//             >
//               {address}
//             </Text>
//           </HStack>
//         )}

//         <Stack gap={2}>
//           <HStack gap={3}>
//             <Box color="blue.500">
//               <FaPhoneAlt size={16} />
//             </Box>
//             <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>
//               {office}
//             </Text>
//           </HStack>

//           {tollFree && (
//             <Text ml={7} fontSize="sm" color="fg.muted">
//               Toll Free: {tollFree}
//             </Text>
//           )}
//         </Stack>
//       </Card.Body>
//     </Card.Root>
//   );
// };

// const ContactUsPage = () => {
//   const {
//     contactValues,
//     contactErrors,
//     referralValues,
//     referralErrors,
//     handleContactChange,
//     handleReferralChange,
//     submitContactForm,
//     submitReferralForm,
//   } = useContactForms();
//   return (
//     <Box bg="bg.muted" minH="100vh">
//       <Container
//         maxW="7xl"
//         py={{ base: 6, md: 12, lg: 16 }}
//         px={{ base: 4, md: 6, lg: 8 }}
//       >
//         {/* Hero Section */}
//         <Box
//           position="relative"
//           borderRadius={{ base: "2xl", md: "3xl" }}
//           overflow="hidden"
//           mb={{ base: 12, md: 16, lg: 20 }}
//           shadow="2xl"
//         >
//           <Image
//             src={contactImage}
//             alt="Contact MoveCo"
//             w="100%"
//             h={{ base: "240px", sm: "300px", md: "400px", lg: "450px" }}
//             objectFit="cover"
//           />
//           <Box
//             position="absolute"
//             inset={0}
//             bgGradient="to-br"
//             gradientFrom="blackAlpha.700"
//             gradientTo="blackAlpha.400"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             px={4}
//           >
//             <Stack
//               textAlign="center"
//               color="white"
//               gap={{ base: 2, md: 4 }}
//               maxW="3xl"
//             >
//               <Heading
//                 size={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                 fontWeight="bold"
//                 textShadow="0 2px 4px rgba(0,0,0,0.3)"
//               >
//                 Contact Us
//               </Heading>
//               <Text
//                 fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                 fontWeight="medium"
//                 opacity={0.95}
//               >
//                 We're here to help with your moving needs
//               </Text>
//             </Stack>
//           </Box>
//         </Box>

//         {/* Locations Section */}
//         <Stack gap={{ base: 6, md: 8 }} mb={{ base: 12, md: 16, lg: 20 }}>
//           <Box textAlign="center">
//             <Heading
//               size={{ base: "2xl", md: "3xl" }}
//               mb={3}
//               color="fg.emphasized"
//             >
//               Our Offices
//             </Heading>
//             <Text
//               fontSize={{ base: "md", md: "lg" }}
//               color="fg.muted"
//               maxW="2xl"
//               mx="auto"
//               px={4}
//             >
//               Visit us at any of our convenient locations across Texas
//             </Text>
//           </Box>

//           <SimpleGrid
//             columns={{ base: 1, md: 2, lg: 3 }}
//             gap={{ base: 4, md: 6, lg: 8 }}
//           >
//             <ContactCard
//               city="Dallas"
//               address="1439 Crescent Ave, Lewisville, TX-75057"
//               office="972-250-1100"
//               tollFree="800-590-0928"
//             />
//             <ContactCard city="Houston" office="281-825-5544" />
//             <ContactCard city="Austin" office="512-366-7901" />
//           </SimpleGrid>
//         </Stack>

//         {/* Map Section */}
//         <Stack gap={{ base: 4, md: 6 }} mb={{ base: 12, md: 16, lg: 20 }}>
//           <Box textAlign="center">
//             <Heading
//               size={{ base: "2xl", md: "3xl" }}
//               mb={3}
//               color="fg.emphasized"
//             >
//               Visit Our Main Office
//             </Heading>
//             <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
//               Located in Lewisville, Texas
//             </Text>
//           </Box>

//           <Card.Root variant="elevated" overflow="hidden">
//             <iframe
//               title="MoveCo.net LLC Location"
//               src="https://www.google.com/maps?q=MoveCo.net+LLC,+1439+Crescent+Ave,+Lewisville,+TX+75057&output=embed"
//               width="100%"
//               height="450"
//               style={{ border: 0, display: "block" }}
//               loading="lazy"
//             />
//           </Card.Root>
//         </Stack>

//         {/* Contact Forms Section */}
//         <Box mb={{ base: 8, md: 12 }}>
//           <Box textAlign="center" mb={{ base: 8, md: 10 }}>
//             <Heading
//               size={{ base: "2xl", md: "3xl" }}
//               mb={3}
//               color="fg.emphasized"
//             >
//               Send Us a Message
//             </Heading>
//             <Text
//               fontSize={{ base: "md", md: "lg" }}
//               color="fg.muted"
//               maxW="2xl"
//               mx="auto"
//               px={4}
//             >
//               Have questions? We'd love to hear from you
//             </Text>
//           </Box>

//           <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
//             {/* Send Email Form */}
//             <Card.Root variant="elevated" size="lg">
//               <Card.Body gap={{ base: 4, md: 6 }}>
//                 <HStack gap={3} flexWrap="wrap">
//                   <Flex bg="blue.50" p={3} borderRadius="lg">
//                     <Box color="blue.500">
//                       <FaEnvelope size={24} />
//                     </Box>
//                   </Flex>
//                   <Heading size={{ base: "lg", md: "xl" }}>
//                     Send an Email
//                   </Heading>
//                 </HStack>

//                 <Text
//                   color="fg.muted"
//                   lineHeight="1.7"
//                   fontSize={{ base: "sm", md: "md" }}
//                 >
//                   Send us an email and we'll get back to you as soon as
//                   possible.
//                 </Text>

//                 <Separator />

//                 <VStack gap={{ base: 4, md: 5 }} align="stretch">
//                   <InputField
//                     label="Name"
//                     value={contactValues.name}
//                     onChange={(e) =>
//                       handleContactChange("name", e.target.value)
//                     }
//                     errorMessage={contactErrors.name}
//                     leftIcon={<FaUserFriends />}
//                     isRequired
//                   />

//                   <InputField
//                     label="Email"
//                     value={contactValues.email}
//                     onChange={(e) =>
//                       handleContactChange("email", e.target.value)
//                     }
//                     errorMessage={contactErrors.email}
//                     leftIcon={<FaEnvelope />}
//                     isRequired
//                   />

//                   <InputField
//                     label="Phone"
//                     value={contactValues.phone}
//                     onChange={(e) =>
//                       handleContactChange("phone", e.target.value)
//                     }
//                     errorMessage={contactErrors.phone}
//                     leftIcon={<FaPhoneAlt />}
//                     isRequired
//                   />

//                   <Field.Root>
//                     <Field.Label>Message</Field.Label>
//                     <Textarea
//                       value={contactValues.message}
//                       onChange={(e) =>
//                         handleContactChange("message", e.target.value)
//                       }
//                     />
//                   </Field.Root>

//                   <Button
//                     colorPalette="blue"
//                     onClick={() => {
//                       if (submitContactForm()) {
//                         console.log("CONTACT DATA", contactValues);
//                       }
//                     }}
//                   >
//                     <FaPaperPlane />
//                     Send Message
//                   </Button>
//                 </VStack>
//               </Card.Body>
//             </Card.Root>

//             {/* Tell a Friend Form */}
//             <Card.Root variant="elevated" size="lg">
//               <Card.Body gap={{ base: 4, md: 6 }}>
//                 <HStack gap={3} flexWrap="wrap">
//                   <Flex bg="purple.50" p={3} borderRadius="lg">
//                     <Box color="purple.500">
//                       <FaUserFriends size={24} />
//                     </Box>
//                   </Flex>
//                   <Heading size={{ base: "lg", md: "xl" }}>
//                     Tell a Friend
//                   </Heading>
//                 </HStack>

//                 <Text
//                   color="fg.muted"
//                   lineHeight="1.7"
//                   fontSize={{ base: "sm", md: "md" }}
//                 >
//                   Help spread the word about MoveCo and refer your friends.
//                 </Text>

//                 <Separator />

//                 <VStack gap={{ base: 4, md: 5 }} align="stretch">
//                   <InputField
//                     label="Your Name"
//                     value={referralValues.yourName}
//                     onChange={(e) =>
//                       handleReferralChange("yourName", e.target.value)
//                     }
//                     errorMessage={referralErrors.yourName}
//                     isRequired
//                   />

//                   <InputField
//                     label="Friend Phone"
//                     value={referralValues.friendPhone}
//                     onChange={(e) =>
//                       handleReferralChange("friendPhone", e.target.value)
//                     }
//                     errorMessage={referralErrors.friendPhone}
//                     isRequired
//                   />

//                   <InputField
//                     label="Friend Email"
//                     value={referralValues.friendEmail}
//                     onChange={(e) =>
//                       handleReferralChange("friendEmail", e.target.value)
//                     }
//                     errorMessage={referralErrors.friendEmail}
//                     isRequired
//                   />
//                   <Button
//                     variant="outline"
//                     colorPalette="purple"
//                     onClick={() => {
//                       if (submitReferralForm()) {
//                         console.log("REFERRAL DATA", referralValues);
//                       }
//                     }}
//                   >
//                     <FaPaperPlane />
//                     Send Referral
//                   </Button>
//                 </VStack>
//               </Card.Body>
//             </Card.Root>
//           </SimpleGrid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ContactUsPage;

//3

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  HStack,
  VStack,
  Flex,
  Separator,
  Card,
  Textarea,
  Field,
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
    <Box bg="bg.muted" minH="100vh">
      <Container
        maxW="7xl"
        py={{ base: 6, md: 12, lg: 16 }}
        px={{ base: 4, md: 6, lg: 8 }}
      >
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
            gradientTo="blackAlpha.400"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={4}
          >
            <Stack
              textAlign="center"
              color="white"
              gap={{ base: 2, md: 4 }}
              maxW="3xl"
            >
              <Heading
                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                textShadow="0 2px 4px rgba(0,0,0,0.3)"
              >
                Contact Us
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                fontWeight="medium"
                opacity={0.95}
              >
                We're here to help with your moving needs
              </Text>
            </Stack>
          </Box>
        </Box>

        {/* Locations Section */}
        <Stack gap={{ base: 6, md: 8 }} mb={{ base: 12, md: 16, lg: 20 }}>
          <Box textAlign="center">
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              mb={3}
              color="fg.emphasized"
            >
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
          <Box textAlign="center">
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              mb={3}
              color="fg.emphasized"
            >
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
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              mb={3}
              color="fg.emphasized"
            >
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
                  <Flex bg="brand.primary" p={3} borderRadius="lg">
                    <Box color="brand.white">
                      <Icon
                        as={FaEnvelope}
                        boxSize={{ base: 5, md: 6 }}
                        color="brand.white"
                      />
                    </Box>
                  </Flex>
                  <Heading size={{ base: "lg", md: "xl" }}>
                    Send an Email
                  </Heading>
                </HStack>

                <Text
                  color="fg.muted"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Send us an email and we'll get back to you as soon as
                  possible.
                </Text>

                <Separator />

                <VStack gap={{ base: 4, md: 5 }} align="stretch">
                  <InputField
                    label="Name"
                    value={contactValues.name}
                    onChange={(e) =>
                      handleContactChange("name", e.target.value)
                    }
                    errorMessage={contactErrors.name}
                    leftIcon={<FaUserFriends />}
                    isRequired
                  />

                  <InputField
                    label="Email"
                    value={contactValues.email}
                    onChange={(e) =>
                      handleContactChange("email", e.target.value)
                    }
                    errorMessage={contactErrors.email}
                    leftIcon={<FaEnvelope />}
                    isRequired
                  />

                  <InputField
                    label="Phone"
                    value={contactValues.phone}
                    onChange={(e) =>
                      handleContactChange("phone", e.target.value)
                    }
                    errorMessage={contactErrors.phone}
                    leftIcon={<FaPhoneAlt />}
                    isRequired
                  />

                  <Field.Root>
                    <Field.Label>Message</Field.Label>
                    <Textarea
                      value={contactValues.message}
                      onChange={(e) =>
                        handleContactChange("message", e.target.value)
                      }
                    />
                  </Field.Root>

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
                  <Heading size={{ base: "lg", md: "xl" }}>
                    Tell a Friend
                  </Heading>
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
    </Box>
  );
};

export default ContactUsPage;

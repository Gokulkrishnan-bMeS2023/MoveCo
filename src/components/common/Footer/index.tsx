// import { Box, Flex, Text, Image, Link, Heading } from "@chakra-ui/react";
// import MoveCo from "../../../assets/moveco.webp";
// import BBB from "../../../assets/card-item-3.webp";
// import SMA from "../../../assets/smalogo.png";
// import AMSA from "../../../assets/amsa-logo-blue.png";
// import MFH from "../../../assets/mfh.svg";
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();
//   return (
//     <Box
//       bg="brand.secondary"
//       color="brand.white"
//       px={{ base: 6, lg: 10 }}
//       py={12}
//     >
//       <Flex
//         direction={{ base: "column", lg: "row" }}
//         justify="space-between"
//         gap={10}
//       >
//         <Box
//           textAlign={{ base: "center", lg: "left" }}
//           maxW="520px"
//           mx={{ base: "auto", lg: 0 }}
//         >
//           <Image
//             src={MoveCo}
//             alt="MoveCo"
//             mx={{ base: "auto", lg: 0 }}
//             mb={4}
//             display={{ base: "block", lg: "none" }}
//           />

//           <Heading as="h3" fontWeight="800">
//             MoveCo.Net
//           </Heading>

//           <Text mt={4} textStyle="size-md" lineHeight="1.8">
//             21439 Crescent Ave Lewisville TX 75057 <br />
//             (972) 250-1100 | (817) 380-5398 <br />
//             Toll Free: (800) 590-0928 <br />
//             TX DMV No. 006044279C <br />
//             US DOT #1432374 MC #541225
//           </Text>
//         </Box>

//         <Box display={{ base: "none", lg: "block" }} alignSelf="center">
//           <Image src={MoveCo} alt="MoveCo" />
//         </Box>
//       </Flex>

//       <Box mt={4}>
//         <Flex
//           direction={{ base: "column", lg: "row" }}
//           align="center"
//           gap={5}
//           justify={{ base: "center", lg: "space-between" }}
//           textAlign={{ base: "center", lg: "left" }}
//           mb={4}
//         >
//           <Flex
//             align="center"
//             gap={2}
//             bg="brand.white"
//             color="brand.secondary"
//             p={2}
//           >
//             <Image
//               src="https://d3eaozktcyljdh.cloudfront.net/themes/custom/txdmv/logo.svg"
//               alt="Texas Department of Motor Vehicles Logo"
//               h="24px"
//               objectFit="contain"
//             />

//             <Text textStyle="size-sm">
//               Toll-Free{" "}
//               <Link href="tel:18883684689" fontWeight="600">
//                 1 (888) 368-4689
//               </Link>
//             </Text>
//           </Flex>

//           <Flex gap={6} align="center">
//             {[
//               { img: BBB, link: "https://www.bbb.org/" },
//               { img: SMA, link: "https://www.mytexasmover.com/" },
//               { img: AMSA, link: "https://www.moving.org/" },
//               { img: MFH, link: "https://www.moveforhunger.org/" },
//             ].map((item, i) => (
//               <Link key={i} href={item.link}>
//                 <Image
//                   src={item.img}
//                   h="40px"
//                   objectFit="contain"
//                   opacity={0.9}
//                   _hover={{ opacity: 1 }}
//                 />
//               </Link>
//             ))}
//           </Flex>
//         </Flex>

//         <Flex justify="center">
//           <Text textStyle="size-sm">
//             Copyright © 2025 MoveCo.Net. All rights reserved.
//             <Link ml={1} textDecoration="underline" color="brand.white">
//               <Text as="span" textStyle="size-md" onClick={() => navigate("/privacy-policy")}>
//                 Privacy Notice
//               </Text>
//             </Link>
//           </Text>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export { Footer };

//2

import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Heading,
  Grid,
  Stack,
  HStack,
} from "@chakra-ui/react";
import MoveCo from "../../../assets/moveco.webp";
import BBB from "../../../assets/card-item-3.webp";
import SMA from "../../../assets/smalogo.png";
import AMSA from "../../../assets/amsa-logo-blue.png";
import MFH from "../../../assets/mfh.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const certifications = [
    { img: BBB, link: "https://www.bbb.org/", alt: "Better Business Bureau" },
    {
      img: SMA,
      link: "https://www.mytexasmover.com/",
      alt: "Southwest Movers Association",
    },
    {
      img: AMSA,
      link: "https://www.moving.org/",
      alt: "American Moving & Storage Association",
    },
    {
      img: MFH,
      link: "https://www.moveforhunger.org/",
      alt: "Move For Hunger",
    },
  ];

  return (
    <Box
      as="footer"
      bg="brand.secondary"
      color="brand.white"
      pt={{ base: "12", md: "16" }}
      pb="6"
    >
      <Box maxW="1200px" mx="auto" px={{ base: "4", md: "8" }}>
        {/* Main Footer Content */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "2fr 1fr 1fr",
          }}
          gap={{ base: "10", md: "12" }}
          mb="12"
        >
          {/* Company Info */}
          <Stack gap="5">
            <Image src={MoveCo} alt="MoveCo.Net Logo" maxW="180px" h="auto" />
            <Stack gap="2" fontSize="sm" lineHeight="tall">
              <Text fontWeight="medium">MoveCo.Net</Text>
              <Text>21439 Crescent Ave</Text>
              <Text>Lewisville TX 75057</Text>
              <Stack gap="1" mt="3">
                <Text>
                  <Link
                    href="tel:9722501100"
                    _hover={{ color: "brand.warning" }}
                  >
                    (972) 250-1100
                  </Link>{" "}
                  |{" "}
                  <Link
                    href="tel:8173805398"
                    _hover={{ color: "brand.warning" }}
                  >
                    (817) 380-5398
                  </Link>
                </Text>
                <Text>
                  Toll Free:{" "}
                  <Link
                    href="tel:8005900928"
                    _hover={{ color: "brand.warning" }}
                    fontWeight="semibold"
                  >
                    (800) 590-0928
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>

          {/* Licenses & Certifications */}
          <Stack gap="4">
            <Heading as="h4" size="md" color="brand.warning">
              Licenses
            </Heading>
            <Stack gap="2" fontSize="sm">
              <Text>TX DMV No. 006044279C</Text>
              <Text>US DOT #1432374</Text>
              <Text>MC #541225</Text>
            </Stack>
            <Box mt="2">
              <Text fontSize="sm" mb="2" color="brand.bgGray">
                24/7 Support
              </Text>
              <Link
                href="tel:8883684689"
                fontSize="lg"
                fontWeight="bold"
                color="brand.warning"
                _hover={{ opacity: 0.8 }}
              >
                1 (888) 368-4689
              </Link>
            </Box>
          </Stack>

          {/* Partner Badges */}
          <Stack gap="4">
            <Heading as="h4" size="md" color="brand.warning">
              Accreditations
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap="4">
              {certifications.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="brand.white"
                  p="3"
                  borderRadius="md"
                  transition="all 0.2s"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    maxH="40px"
                    objectFit="contain"
                  />
                </Link>
              ))}
            </Grid>
          </Stack>
        </Grid>

        {/* Bottom Bar */}
        <Box borderTop="1px solid" borderColor="whiteAlpha.200" pt="6">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap="4"
            fontSize="sm"
            color="whiteAlpha.800"
          >
            <Text>Copyright © 2025 MoveCo.Net. All rights reserved.</Text>
            <HStack gap="6">
              <Link
                onClick={() => navigate("/privacy-policy")}
                cursor="pointer"
                _hover={{ color: "brand.warning", textDecoration: "underline" }}
              >
                Privacy Notice
              </Link>
              <Link
                onClick={() => navigate("/terms")}
                cursor="pointer"
                _hover={{ color: "brand.warning", textDecoration: "underline" }}
              >
                Terms of Service
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export { Footer };

import { Box, Flex, Text, Image, Link, Heading } from "@chakra-ui/react";
import MoveCo from "../../../assets/moveco.webp";
import BBB from "../../../assets/card-item-3.webp";
import SMA from "../../../assets/smalogo.png";
import AMSA from "../../../assets/amsa-logo-blue.png";
import MFH from "../../../assets/mfh.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      bg="brand.secondary"
      color="brand.white"
      px={{ base: 6, lg: 10 }}
      py={12}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        gap={10}
      >
        <Box
          textAlign={{ base: "center", lg: "left" }}
          maxW="520px"
          mx={{ base: "auto", lg: 0 }}
        >
          <Image
            src={MoveCo}
            alt="MoveCo"
            mx={{ base: "auto", lg: 0 }}
            mb={4}
            display={{ base: "block", lg: "none" }}
          />

          <Heading as="h3" fontWeight="800">
            MoveCo.Net
          </Heading>

          <Text mt={4} textStyle="size-md" lineHeight="1.8">
            21439 Crescent Ave Lewisville TX 75057 <br />
            (972) 250-1100 | (817) 380-5398 <br />
            Toll Free: (800) 590-0928 <br />
            TX DMV No. 006044279C <br />
            US DOT #1432374 MC #541225
          </Text>
        </Box>

        <Box display={{ base: "none", lg: "block" }} alignSelf="center">
          <Image src={MoveCo} alt="MoveCo" />
        </Box>
      </Flex>

      <Box mt={4}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={5}
          justify={{ base: "center", lg: "space-between" }}
          textAlign={{ base: "center", lg: "left" }}
          mb={4}
        >
          <Flex
            align="center"
            gap={2}
            bg="brand.white"
            color="brand.secondary"
            p={2}
          >
            <Image
              src="https://d3eaozktcyljdh.cloudfront.net/themes/custom/txdmv/logo.svg"
              alt="Texas Department of Motor Vehicles Logo"
              h="24px"
              objectFit="contain"
            />

            <Text textStyle="size-sm">
              Toll-Free{" "}
              <Link href="tel:18883684689" fontWeight="600">
                1 (888) 368-4689
              </Link>
            </Text>
          </Flex>

          <Flex gap={4} align="center">
            {[
              { img: BBB, link: "https://www.bbb.org/" },
              { img: SMA, link: "https://www.mytexasmover.com/" },
              { img: AMSA, link: "https://www.moving.org/" },
              { img: MFH, link: "https://www.moveforhunger.org/" },
            ].map((item, i) => (
              <Link key={i} href={item.link} bg="brand.white"
                  p="2"
                  borderRadius="md"
                  transition="all 0.2s">
                <Image
                  src={item.img}
                  h="40px"
                  objectFit="contain"
                  opacity={0.9}
                  _hover={{ opacity: 1 }}
                />
              </Link>
            ))}
          </Flex>
        </Flex>

        <Flex justify="center">
          <Text textStyle="size-sm">
            Copyright © 2025 MoveCo.Net. All rights reserved.
            <Link ml={1} textDecoration="underline" color="brand.white">
              <Text as="span" textStyle="size-md" onClick={() => navigate("/privacy-policy")}>
                Privacy Notice
              </Text>
            </Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export { Footer };
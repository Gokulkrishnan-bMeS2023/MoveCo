import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Container,
} from "@chakra-ui/react";
import { section } from "framer-motion/client";
import BannerImg from "../../assets/about-us-banner.webp";
import ServiceImg from "../../assets/service1.webp";
import ServiceImg2 from "../../assets/service2.webp";
import AboutFeatureSwitcher from "../../components/common/AboutFeatureSwitcher/AboutFeatureSwitcher";
import Button from "../../components/common/Button/Button";
import BenefitsGrid from "./BenefitsGrid";
import Features from "./Features";

const AboutUs = () => {
  return (
    <Box as={section}>
      <Container maxW="100%" px={8} py={12}>
        <Box
          bgImage={`url(${BannerImg})`}
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
              Wanna Know More {""}
              <Text as="span" color="brand.warning">
                About Us?
              </Text>
            </Heading>
          </Box>
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12}>
        <Box>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="About Us"
          />
          <Flex
            mt={6}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal" mb={2}>
                What Do We Do <br />
                In{" "}
                <Text as="span" color="brand.primary">
                  MoveCo?
                </Text>
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                For more than 100 years experience, We move coast to coast under
                our own authority.
              </Text>
            </Box>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
            <Box w="100%" maxW={{ base: "100%", md: "550px" }}>
              <Image
                src={ServiceImg}
                alt="footprint"
                w="100%"
                h="auto"
                mt={6}
                borderRadius="2xl"
              />
            </Box>
            <Box p={4}>
              <Button
                fontSize="xl"
                rounded="full"
                variant="primary"
                label="Our Mission"
              />
              <Text mt={6} textStyle="size-3xl">
                We aim to impress you with our service so much that you'll share
                our business cards with your friends and colleagues, post your
                text and video testimonials on our website, and choose us for
                your next move.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12}>
        <Box>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            alignItems="center"
            gap={{ base: 8, md: 12 }}
          >
            <Box w="100%" maxW="520px">
              <Button
                fontSize="xl"
                rounded="full"
                variant="primary"
                label="Testimonials"
              />
              <Text textStyle="size-3xl" mt={6}>
                Our online testimonial board goes a step further. You can post
                your moving experience for our future customers to see. You can
                also go to our website & see over 10 years of customer reviews.
                Our crews make the difference. We conduct background checks and
                random drug tests.
              </Text>
            </Box>
            <Box w="100%" maxW={{ base: "100%", md: "550px" }}>
              <Image
                src={ServiceImg2}
                alt="image"
                w="100%"
                h="auto"
                borderRadius="2xl"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12}>
        <Box>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Features"
          />
          <Flex
            mt={6}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal" mb={2}>
                What Do You Get <br />
                When you In{" "}
                <Text as="span" color="brand.primary">
                  Choose <br /> Us?
                </Text>
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                For more than 100 years experience, We move coast to coast under
                our own authority.
              </Text>
            </Box>
          </Flex>
          <Features />
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12}>
        <Box py={10}>
          <AboutFeatureSwitcher />
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12}>
        <Box>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Benifits"
          />
          <Flex
            mt={6}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal" mb={2}>
                Our <br />{" "}
                <Text as="span" color="brand.primary">
                  Standards
                </Text>
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                For more than 100 years experience, We move coast to coast under
                our own authority.
              </Text>
            </Box>
          </Flex>
          <BenefitsGrid />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

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
import CardTemplate from "../../components/common/CardTemplate/CardTemplate";
import { benefits } from "../../data/benefitsData";
import { features } from "../../data/features";

const AboutUs = () => {
  return (
    <Box as={section}>
      <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
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
          <Box position="absolute" inset={0} bg="brand.primary" opacity={0.1} />
          <Box position="relative" textAlign="center">
            <Heading as={"h2"} color="brand.white" fontWeight="normal" mb={4}>
              Wanna Know More {""}
              <Text as="span" color="brand.warning">
                About Us?
              </Text>
            </Heading>
          </Box>
        </Box>
        <Box pt={{ base: 10, md: 16 }}>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="About Us"
            mb={{ base: 4, lg: 6 }}
          />
          <Flex
            mb={{ base: 6, lg: 8 }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal">
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
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            alignItems="center"
            gap={{ base: 8, md: 12 }}
          >
            <Box w="100%" maxW={{ base: "100%", md: "550px" }}>
              <Image
                src={ServiceImg}
                alt="footprint"
                w="100%"
                h="auto"
                borderRadius="2xl"
              />
            </Box>
            <Box>
              <Box>
                <Button
                  fontSize="xl"
                  rounded="full"
                  variant="primary"
                  label="Our Mission"
                  mb={{ base: 4, lg: 6 }}
                />
              </Box>
              <Text textStyle="size-3xl">
                We aim to impress you with our service so much that you'll share
                our business cards with your friends and colleagues, post your
                text and video testimonials on our website, and choose us for
                your next move.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box pt={{ base: 10, md: 16 }}>
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
                mb={{ base: 4, lg: 6 }}
              />
              <Text textStyle="size-3xl">
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
        <Box pt={{ base: 10, md: 16 }}>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Features"
            mb={{ base: 4, lg: 6 }}
          />
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
            mb={{ base: 6, lg: 8 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal">
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
         <CardTemplate data={features} />
        </Box>
        <Box pt={{ base: 10, md: 16 }}>
          <AboutFeatureSwitcher />
        </Box>
        <Box pt={{ base: 10, md: 16 }}>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Benefits"
            mb={{ base: 4, lg: 6 }}
          />
          <Flex
            mb={{ base: 6, lg: 8 }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal">
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
          <CardTemplate data={benefits} />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

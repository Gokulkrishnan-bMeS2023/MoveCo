import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
} from "@chakra-ui/react";
import { section } from "framer-motion/client";
import Button from "../../../components/common/Button/Button";
import { benefits, features } from "./data";
import HeroBanner from "../AboutUsComponents/HeroBanner";
import ImageTextSection from "../AboutUsComponents/TextWithImageSection";
import CardTemplate from "../AboutUsComponents/CardTemplate";
import AboutFeatureSwitcher from "../AboutUsComponents/AboutFeatureSwitcher";
import { useNavigate } from "react-router-dom";
import { images } from "../../../assets";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Box as={section}>
      <Container>
        <HeroBanner
          bgImage={images.aboutUsBanner}
          overlayColor="brand.primary"
          title="About Us"
        />
        <Box pt="sectionTop">
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
          <ImageTextSection
            image={images.service1}
            buttonLabel="Our Mission"
            content={
              <>
                We aim to impress you with our service so much that you'll share
                our business cards with your friends and colleagues, post your
                text and video testimonials on our website, and choose us for
                your next move.
              </>
            }
          />
        </Box>
        <Box pt="sectionTop">
          <ImageTextSection
            image={images.service2}
            buttonLabel="Testimonials"
            reverse
            content={
              <>
                Our online testimonial board goes a step further. You can post
                your moving experience for our future customers to see. You can
                also go to our website & see over 10 years of customer reviews.
                Our crews make the difference. We conduct background checks and
                random drug tests.
              </>
            }
          />
        </Box>
        <Box pt="sectionTop">
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
        <Box pt="sectionTop">
          <AboutFeatureSwitcher />
        </Box>
        <Box pt="sectionTop">
          <Flex justify="space-between" align="center" mb={{ base: 6, lg: 8 }}>
            <Button
              fontSize="xl"
              rounded="full"
              variant="primary"
              label="Benefits"
            />
            <Button
              fontSize="xl"
              rounded="full"
              variant="outline"
              onClick={() => navigate("/our-standard")}
              label="View all"
            />
          </Flex>
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

import { Box, Heading, Text, Flex, Container } from "@chakra-ui/react";
import Button from "../../../components/common/Button/Button";
import { benefits, features } from "./data";
import HeroBanner from "../AboutUsComponents/HeroBanner";
import ImageTextSection from "../AboutUsComponents/TextWithImageSection";
import TextWithLogoPanelSection from "../AboutUsComponents/TextWithLogoSection";
import CardTemplate from "../AboutUsComponents/CardTemplate";
import AboutFeatureSwitcher from "../AboutUsComponents/AboutFeatureSwitcher";
import { useNavigate } from "react-router-dom";
import Badge from "../../../components/common/Badge/Badge";
import { images } from "../../../assets";
import { LuArrowUpRight } from "react-icons/lu";
import txDmvLogo from "../../../assets/Texasdeptmotorvehicle.webp";
import dotLogo from "../../../assets/card-item-2.webp";
import bbbLogo from "../../../assets/BBBlogo.webp";
import smaLogo from "../../../assets/card-item-4.webp";

const AboutUs = () => {
  const navigate = useNavigate();

  const missionContent = (
    <>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <Badge label="Our Mission" mb={4} />
      </Flex>
      <Text textStyle="size-3xl">
        We aim to impress you with our service so much that you'll share our
        business cards with your friends and colleagues, post your text and
        <Box
          as="span"
          color="brand.primary"
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          onClick={() => navigate("/video-review")}
        >
          {" "}
          video testimonials{" "}
        </Box>
        on our website, and choose us for your next move.
      </Text>
    </>
  );

  const testimonialContent = (
    <>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <Badge label="Testimonials" mb={4} />
      </Flex>

      
      <Text textStyle="size-3xl">
        Our online
        
        goes a step further. You can post your moving experience for our future
        customers to see. You can also go to our website & see over 10 years of
        customer reviews. Our crews make the difference. We conduct background
        checks and random drug tests.
      </Text>
    </>
  );

  const licensesContent = (
    <>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <Badge label="Licenses" mb={4} />
      </Flex>
      <Text textStyle="size-3xl">
        What does BBB and SMA membership mean for you? It ensures MoveCo follows
        strict ethical standards and gives you access to arbitration or
        mediation if you're ever dissatisfied, protecting your rights as a
        customer.
      </Text>
    </>
  );

  return (
    <Box>
      <Container>
        <HeroBanner
          bgImage={images.aboutUsBanner}
          overlayColor="brand.primary"
          title="About Us"
          overlayOpacity={0.1}
        />

        <Box pt="sectionTop">
          <Box>
            <Flex justify={{ base: "center", lg: "flex-start" }}>
              <Badge label="About Us" mb={4} />
            </Flex>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 4, lg: 10 }}
              mb={{ base: 4, lg: 6 }}
            >
              <Heading
                as="h1"
                fontWeight="normal"
                maxW={{ lg: "45%" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                What Do We Do In{" "}
                <Text as="span" color="brand.primary">
                  MoveCo?
                </Text>
              </Heading>
              <Text
                textStyle="size-2xl"
                maxW={{ lg: "45%" }}
                textAlign={{ base: "center", lg: "right" }}
              >
                For more than 100 years experience, We move coast to coast under
                our own authority.
              </Text>
            </Flex>
            <ImageTextSection
              image={images.service1}
              content={missionContent}
            />
          </Box>
        </Box>

        <Box pt="sectionTop">
          <TextWithLogoPanelSection
            reverse
            content={licensesContent}
            leftColumn={{
              heading: "Licensed With",
              logos: [
                { src: txDmvLogo, alt: "Texas Department of Motor Vehicles" },
                { src: dotLogo, alt: "US Department of Transportation" },
              ],
            }}
            rightColumn={{
              heading: "Membership with",
              logos: [
                { src: bbbLogo, alt: "Better Business Bureau" },
                { src: smaLogo, alt: "Southwest Movers Association" },
              ],
            }}
          />
        </Box>

      
        <Box pt="sectionTop">
          <ImageTextSection
            image={images.service2}
            content={testimonialContent}
          />
        </Box>

        <Box pt="sectionTop">
          <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Badge label="Features" mb={4} />
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align="center"
            gap={{ base: 4, lg: 10 }}
            mb={{ base: 4, lg: 6 }}
          >
            <Heading
              as="h1"
              fontWeight="normal"
              maxW={{ lg: "45%" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              What Do You Get When you In{" "}
              <Text as="span" color="brand.primary">
                Choose Us?
              </Text>
            </Heading>
            <Text
              textStyle="size-2xl"
              maxW={{ lg: "45%" }}
              textAlign={{ base: "center", lg: "right" }}
            >
              For more than 100 years experience, We move coast to coast under
              our own authority.
            </Text>
         
          </Flex>
          <CardTemplate data={features} />
        </Box>

        <Box pt="sectionTop">
          <AboutFeatureSwitcher />
        </Box>

        <Box pt="sectionTop">
          <Flex justify="space-between" align="center" mb={4}>
            <Badge label="Benefits" />
            <Button
              textStyle="size-xl"
              rounded="full"
              variant="outline"
              onClick={() => navigate("/our-standard")}
              label="View all"
              rightIcon={<LuArrowUpRight size={16} />}
            />
          </Flex>
          <Flex
            mb={{ base: 4, lg: 6 }}
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 4, lg: 10 }}
          >
            <Heading
              as="h1"
              fontWeight="normal"
              maxW={{ lg: "45%" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Our{" "}
              <Text as="span" color="brand.primary">
                Standards
              </Text>
            </Heading>
            <Text
              textStyle="size-2xl"
              maxW={{ lg: "45%" }}
              textAlign={{ base: "center", lg: "right" }}
            >
              For more than 100 years experience, We move coast to coast under
              our own authority.
            </Text>
          
          </Flex>
          <CardTemplate data={benefits} />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

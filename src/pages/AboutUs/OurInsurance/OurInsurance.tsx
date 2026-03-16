import { Box, Text, Container, Heading, Flex } from "@chakra-ui/react";
import { coveredWays, inHomePolicy } from "./data";
import CardTemplate from "../AboutUsComponents/CardTemplate";
import CommonAccordion from "../AboutUsComponents/CommonAccordion";
import HeroBanner from "../AboutUsComponents/HeroBanner";
import ImageTextSection from "../AboutUsComponents/TextWithImageSection";
import { images } from "../../../assets";
import Badge from "../../../components/common/Badge/Badge";

const OurInsurance = () => {
  const missionContent = (
    <>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <Badge label="Our Mission" mb={4} />
      </Flex>
      <Text textStyle="size-3xl">
        No one expects anything to get damaged during a move. But life does
        happen, no matter how careful you are. That’s why we’ve built one of the
        most efficient and streamlined damage claim processes in the industry.
        Our philosophy is simple—if something gets broken or damaged, we make it
        right. There’s no reason we can’t fix the issue and keep you as a happy
        customer.
      </Text>
    </>
  );

  return (
    <div>
      <Container>
        <HeroBanner title="Our Insurance" bgImage={images.insuranceBanner} />
        <Box pt="sectionTop">
          <Box>
            <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Badge
              label="Our Insurance" mb={4}
            />
            </Flex>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 4, lg: 10 }}
              mb={{ base: 4, lg: 6 }}
            >
                <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{base: "center",lg:"left"}}>
                  Why Insurance Matters 
                  In{" "}
                  <Text as="span" color="brand.primary">
                    MoveCo?
                  </Text>
                </Heading>
                <Text
                  textStyle="size-2xl"
                  maxW={{ lg: "45%" }}
                  textAlign={{ base: "center", lg: "right" }}
                >
                  For more than 100 years experience, We move coast to coast
                  under our own authority.
                </Text>
            </Flex>
            <ImageTextSection image={images.packer} content={missionContent} />
          </Box>
        </Box>
        <Box pt="sectionTop">
          <Box>
            <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Badge
              label="Our Coverage"
              mb={4}
            />
            </Flex>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 4, lg: 10 }}
              mb={{ base: 4, lg: 6 }}
            >
                <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{base: "center",lg:"left"}}>
                  <Text as="span" color="brand.primary">
                    With MoveCo, 
                  </Text>
                  You’re Covered in Every Way
                </Heading>
                <Text
                  textStyle="size-2xl"
                  maxW={{ lg: "45%" }}
                  textAlign={{ base: "center", lg: "right" }}
                >
                  Our coverage options are designed to protect your belongings
                  and give you peace of mind.
                </Text>
            </Flex>
            <CardTemplate data={coveredWays} columns={{ base: 1, md: 2, lg: 3 }}/>
          </Box>
        </Box>
      </Container>
      <Box bg={"brand.white"} px="-8">
        <Container px={8} pt={4} pb={10}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 4, lg: 10 }}
            mb={{ base: 4, lg: 6 }}
          >
              <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{base: "center",lg:"left"}}>
                <Text as="span" color="brand.primary">
                  MoveCo 
                </Text>
                In-House Policy
              </Heading>
              <Text
                textStyle="size-2xl"
                maxW={{ lg: "45%" }}
                textAlign={{ base: "center", lg: "right" }}
              >
                Our movers are experienced and very careful, and we back this up
                with an in-house policy.
              </Text>
          </Flex>
          <CommonAccordion sections={inHomePolicy} />
        </Container>
      </Box>
    </div>
  );
};

export default OurInsurance;

import { Box, Text, Container, Heading, Flex } from "@chakra-ui/react";
import { standardFeature } from "./data";
import { professionalStandards } from "./data";
import CardTemplate from "../AboutUsComponents/CardTemplate";
import CommonAccordion from "../AboutUsComponents/CommonAccordion";
import HeroBanner from "../AboutUsComponents/HeroBanner";
import { images } from "../../../assets";
import Badge from "../../../components/common/Badge/Badge";

const OurStandard = () => {
  return (
    <div>
      <Container>
        <HeroBanner title="Our Standard" bgImage={images.insuranceBanner} />
        <Box pt="sectionTop">
          <Flex justify={{ base: "center", lg: "flex-start" }}>
          <Badge
            label="Benefits" mb={4}
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
                Our {" "}
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
          <CardTemplate data={standardFeature} />
        </Box>
      </Container>
      <Box bg={"brand.white"} px="-8">
        <Container px={8} pt={4} pb={10}>
          <Flex
            mb={{ base: 4, lg: 6 }}
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 4, lg: 10 }}
          >
              <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{base: "center",lg:"left"}}>
                <Text as="span" color="brand.primary">
                  MoveCo
                </Text>
                Professional Standards
              </Heading>
              <Text
                textStyle="size-2xl"
                maxW={{ lg: "45%" }}
                textAlign={{ base: "center", lg: "right" }}
              >
                Our professional standards ensure safety, compliance, and
                transparency on every move.
              </Text>
          </Flex>
          <CommonAccordion sections={professionalStandards} />
        </Container>
      </Box>
    </div>
  );
};

export default OurStandard;

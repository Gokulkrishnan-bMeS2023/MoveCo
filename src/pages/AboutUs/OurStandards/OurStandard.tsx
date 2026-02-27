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
          <Badge
            label="Benefits" mb={4}
          />
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 4, md: 10 }}
            mb={{ base: 4, lg: 6 }}
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
          <CardTemplate data={standardFeature} />
        </Box>
      </Container>
      <Box bg={"brand.white"} px="-8">
        <Container px={8} pt={4} pb={10}>
          <Flex
            mb={{ base: 4, lg: 6 }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 4, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal">
                <Text as="span" color="brand.primary">
                  MoveCo <br />
                </Text>
                Professional Standards
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                Our professional standards ensure safety, compliance, and
                transparency on every move.
              </Text>
            </Box>
          </Flex>
          <CommonAccordion sections={professionalStandards} />
        </Container>
      </Box>
    </div>
  );
};

export default OurStandard;

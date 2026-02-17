import { Box, Text, Container, Heading, Flex } from "@chakra-ui/react";
import InsuranceImg from "../../../assets/insurance-banner.webp";
import Button from "../../../components/common/Button/Button";
import { standardFeature } from "./data";
import { professionalStandards } from "./data";
import CardTemplate from "../AboutUsComponents/CardTemplate";
import CommonAccordion from "../AboutUsComponents/CommonAccordion";
import HeroBanner from "../AboutUsComponents/HeroBanner";

const OurStandard = () => {
  return (
    <div>
      <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
        <HeroBanner title="Our Standard" bgImage={InsuranceImg} />
        <Box pt={{ base: 10, md: 16 }}>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Benefits"
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
            mb={{ base: 6, lg: 8 }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
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

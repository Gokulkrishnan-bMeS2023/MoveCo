import { Box, Text, Container, Heading, Flex } from "@chakra-ui/react";
import { coveredWays, inHomePolicy } from "./data";
import Button from "../../../components/common/Button/Button";
import CardTemplate from "../AboutUsComponents/CardTemplate";
import CommonAccordion from "../AboutUsComponents/CommonAccordion";
import HeroBanner from "../AboutUsComponents/HeroBanner";
import ImageTextSection from "../AboutUsComponents/TextWithImageSection";
import { images } from "../../../assets";

const OurInsurance = () => {
  return (
    <div>
      <Container>
        <HeroBanner title="Our Insurance" bgImage={images.insuranceBanner} />
        <Box pt="sectionTop">
          <Box>
            <Button
              fontSize="xl"
              rounded="full"
              variant="primary"
              label="Our Insurance"
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
                  Why Insurance Matters <br />
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
                  For more than 100 years experience, We move coast to coast
                  under our own authority.
                </Text>
              </Box>
            </Flex>
            <ImageTextSection
              image={images.packer}
              buttonLabel="Our Mission"
              content={
                <>
                  No one expects anything to get damaged during a move. But life
                  does happen, no matter how careful you are. That’s why we’ve
                  built one of the most efficient and streamlined damage claim
                  processes in the industry. Our philosophy is simple—if
                  something gets broken or damaged, we make it right. There’s no
                  reason we can’t fix the issue and keep you as a happy
                  customer.
                </>
              }
            />
          </Box>
        </Box>
        <Box pt="sectionTop">
          <Box>
            <Button
              fontSize="xl"
              rounded="full"
              variant="primary"
              label="Our Coverage"
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
                  <Text as="span" color="brand.primary">
                    With MoveCo, <br />
                  </Text>
                  You’re Covered in Every Way
                </Heading>
              </Box>
              <Box maxW="430px" w="100%">
                <Text
                  textStyle="size-2xl"
                  textAlign={{ base: "left", md: "right" }}
                >
                  Our coverage options are designed to protect your belongings
                  and give you peace of mind.
                </Text>
              </Box>
            </Flex>
            <CardTemplate data={coveredWays} />
          </Box>
        </Box>
      </Container>
      <Box bg={"white"} px="-8">
        <Container px={8} pt={4} pb={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
            mb={{ base: 4, lg: 6 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal">
                <Text as="span" color="brand.primary">
                  MoveCo <br />
                </Text>
                In-House Policy
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                Our movers are experienced and very careful, and we back this up
                with an in-house policy.
              </Text>
            </Box>
          </Flex>
          <CommonAccordion sections={inHomePolicy} />
        </Container>
      </Box>
    </div>
  );
};

export default OurInsurance;

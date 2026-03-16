import { Flex, Heading, Text } from "@chakra-ui/react";
import CommonAccordion from "../../AboutUs/AboutUsComponents/CommonAccordion";
import Badge from "../../../components/common/Badge/Badge";
import { professionalStandards } from "./data";

const FAQ = () => {
  return (
    <>
      <Flex justify={{ base: "center", lg: "flex-start" }}>
        <Badge label="FAQs" mb={4} />
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
          <Text as="span" color="brand.primary">
            Having Doubts?
          </Text>
          <br />
          We got you covered!
        </Heading>
        <Text
          textStyle="size-2xl"
          maxW={{ lg: "45%" }}
          textAlign={{ base: "center", lg: "right" }}
        >
          Here are the list of some frequently asked questions from people, to
          help you understand more about our service
        </Text>
      </Flex>
      <CommonAccordion sections={professionalStandards} />
    </>
  );
};

export default FAQ;

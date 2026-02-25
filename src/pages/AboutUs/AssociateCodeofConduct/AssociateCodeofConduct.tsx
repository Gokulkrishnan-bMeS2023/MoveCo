import { Box, Heading, Text, Container } from "@chakra-ui/react";
import { dressCode } from "./data";
import { customerPoints, officePoints } from "./data";
import HeroBanner from "../AboutUsComponents/HeroBanner";
import { images } from "../../../assets";
import React from "react";

const CardTemplate = React.lazy(
  () => import("../AboutUsComponents/CardTemplate"),
);
const ImageListSection = React.lazy(
  () => import("../AboutUsComponents/ImageWithListContent"),
);
const AssociateCodeOfConduct = () => {
  return (
    <Container>
      <HeroBanner
        title="Associate Code of Conduct"
        bgImage={images.insuranceBanner}
      />
      <Box pt="sectionTop">
        <Heading mb={{ base: 4, lg: 6 }} as="h1" fontWeight="normal">
          Dress{" "}
          <Text as="span" color="brand.primary">
            Code
          </Text>
        </Heading>
        <CardTemplate data={dressCode} columns={{ base: 1, md: 2, lg: 3 }} />
      </Box>
      <Box pt="sectionTop">
        <Heading
          mb={{ base: 4, lg: 6 }}
          w={{ base: "100%", lg: "50%" }}
          as="h1"
          fontWeight="normal"
        >
          Customer{" "}
          <Text as="span" color="brand.primary">
            Relations
          </Text>
        </Heading>
        <ImageListSection
          image={images.customerRelationships}
          points={customerPoints}
          imagePosition="left"
        />
      </Box>
      <Box pt="sectionTop">
        <Heading
          mb={{ base: 4, lg: 6 }}
          as="h1"
          fontWeight="normal"
          w={{ base: "100%", lg: "50%" }}
        >
          Dealing with{" "}
          <Text as="span" color="brand.primary">
            the Office
          </Text>
        </Heading>
        <ImageListSection
          image={images.dealWithOffice}
          points={officePoints}
          imagePosition="right"
        />
      </Box>
    </Container>
  );
};

export default AssociateCodeOfConduct;

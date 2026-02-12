import {
  Box,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import customerImg from "../../../assets/customer-relationships.jpg";
import InsuranceImg from "../../../assets/modifiedbanner.png";
import DealOfficeImg from "../../../assets/deal.jpg";
import { dressCode } from "./data";
import { customerPoints, officePoints } from "./data";
import CardTemplate from "../AboutUsComponents/CardTemplate";
import HeroBanner from "../AboutUsComponents/HeroBanner";
import ImageListSection from "../AboutUsComponents/ImageListSection";

const AssociateCodeOfConduct = () => {
  return (
      <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
        <HeroBanner
          title="Associate Code of Conduct"
          bgImage={InsuranceImg}
        />
        <Box pt={{ base: 10, md: 16 }} >
          <Heading mb={{ base: 6, lg: 8 }} as="h1" fontWeight="normal"> Dress <Text as="span" color="brand.primary">Code</Text></Heading>
          <CardTemplate data={dressCode} columns={{ base: 1, sm: 2, md: 3 }} />
        </Box>
        <Box pt={{ base: 10, md: 16 }} >
          <Heading mb={{ base: 6, lg: 8 }} w={{ base: "100%", lg: "50%" }} textAlign={{ base: "center", lg: "left" }} as="h1" fontWeight="normal" >Customer <Text as="span" color="brand.primary">
            Relations
          </Text></Heading>
          <ImageListSection
            image={customerImg}
            points={customerPoints}
            imagePosition="left"
          />
        </Box>
        <Box pt={{ base: 10, md: 16 }}>
          <Heading mb={{ base: 6, lg: 8 }} as="h1" fontWeight="normal" w={{ base: "100%", lg: "50%" }} textAlign={{ base: "center", lg: "left" }}>Dealing with <Text as="span" color="brand.primary">
            the Office
          </Text></Heading>
          <ImageListSection
            image={DealOfficeImg}
            points={officePoints}
            imagePosition="right"
          />
        </Box>
      </Container>
  );
};

export default AssociateCodeOfConduct;

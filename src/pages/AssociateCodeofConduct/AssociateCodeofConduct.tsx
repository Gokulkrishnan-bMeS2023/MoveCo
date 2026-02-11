import {
  Box,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import customerImg from "../../assets/cust-relations.jpeg";
import InsuranceImg from "../../assets/modifiedbanner.png";
import { dressCode } from "../../data/dressCode";
import CardTemplate from "../../components/common/CardTemplate/CardTemplate";
import ImageListSection from "../../components/common/ImageListSection/ImageListSection";
import { customerPoints } from "../../data/CustomerRelation";
import { officePoints } from "../../data/dealOffice";
const AssociateCodeOfConduct = () => {
  return (
    <>
      <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
        <Box
          bgImage={`url(${InsuranceImg})`}
          bgSize="cover"
          borderRadius="lg"
          minH={{ base: "230px", md: "320px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" inset={0} bg="grey" opacity={0.6} />
          <Box position="relative" textAlign="center">
            <Heading as="h1" fontWeight="normal" color="brand.white" mb={4}>
              Associate Code of Conduct
            </Heading>
          </Box>
        </Box>
        <Box pt={{ base: 10, md: 16 }}>
          <Heading mb={{ base: 6, lg: 8 }} as="h1" fontWeight="normal"> Dress <Text as="span" color="brand.primary">Code</Text></Heading>
          <CardTemplate data={dressCode} columns={{ base: 1, sm: 2, md: 3 }} />
        </Box>
        <Box pt={{ base: 10, md: 16 }}>
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
            image={InsuranceImg}
            points={officePoints}
            imagePosition="right"
          />

        </Box>
      </Container>
    </>
  );
};

export default AssociateCodeOfConduct;







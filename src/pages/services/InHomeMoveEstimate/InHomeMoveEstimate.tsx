import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Button from "../../../components/common/Button/Button";
import inhomemoveestimate from "../../../assets/inhomemoveestimate.webp";

const InHomeMoveEstimate = () => {
  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      <Box>
        <Button
          fontSize="xl"
          rounded="full"
          variant="primary"
          label="About Us"
        />
        <Flex
          mb={{ base: 6, lg: 8 }}
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
        >
          <Box maxW="600px" w="100%">
            <Heading as="h1" fontWeight="normal">
              In-Home <br />
              <Text as="span" color="brand.primary">
                Move Estimate
              </Text>
            </Heading>
          </Box>
          <Box maxW="430px" w="100%">
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
            >
              All information will not be released to any other person or
              company, please read our privacy policy Be sure to ask about our
              packing services!
            </Text>
          </Box>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
          <Box w="100%" maxW={{ base: "100%", md: "550px" }}>
            <Image
              src={inhomemoveestimate}
              alt="footprint"
              w="100%"
              h="auto"
              borderRadius="2xl"
            />
          </Box>
          <Box p={4}>
            <Button
              fontSize="xl"
              rounded="full"
              variant="primary"
              label="Our Mission"
            />
            <Text textStyle="size-3xl">
              After filling out this form, an appointment will be made to have a
              real, live person come out and estimate your move costs. This is a
              free service, and is perfect for individuals who are unsure as to
              how items can and will be moved. A trained, courteous MoveCo.net
              employee will thoroughly inspect and evalute your items, and give
              you a fair and accurate quote for all your moving needs.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default InHomeMoveEstimate;

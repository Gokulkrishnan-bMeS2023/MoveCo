import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  Stack,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import CommonAccordion from "../../../AboutUs/AboutUsComponents/CommonAccordion";
import CardTemplate from "../../../AboutUs/AboutUsComponents/CardTemplate";
import { quoteIncludesData } from "./data";
import { quoteInfoSections } from "./data";
import Badge from "../../../../components/common/Badge/Badge";

const Confirmation = () => {
  return (
    <div>
      <Container>
        <Flex direction="column" align="flex-start" mb={{ base: 4, lg: 6 }} gap={{ base: 4, md: 10 }}>
          <Box maxW="800px" w="100%">
            <Heading as="h1" fontWeight="normal">
              Quote for your{" "}
              <Text as="span" color="brand.primary">
                Move
              </Text>
            </Heading>
          </Box>
        </Flex>

          <Box
            bg="brand.white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.100"
          >
            <Stack gap={4}>
              <Heading as="h3" color="brand.primary" fontWeight="normal">
                Quote Confirmation
              </Heading>

              <Box border="1px solid" borderColor="gray.200" overflow="hidden">
                <Grid templateColumns="repeat(4, 1fr)">
                  <GridItem bg="brand.primary" px={4} py={3}>
                    <Text
                      color="brand.white"
                      fontWeight="medium"
                      textStyle="size-lg"
                    >
                      Quote No
                    </Text>
                  </GridItem>
                  <GridItem bg="brand.primary" px={4} py={3}>
                    <Text
                      color="brand.white"
                      fontWeight="medium"
                      textStyle="size-lg"
                    >
                      Moving Price
                    </Text>
                  </GridItem>
                  <GridItem bg="brand.primary" px={4} py={3}>
                    <Text
                      color="brand.white"
                      fontWeight="medium"
                      textStyle="size-lg"
                    >
                      Packing Price
                    </Text>
                  </GridItem>
                  <GridItem bg="brand.primary" px={4} py={3}>
                    <Text
                      color="brand.white"
                      fontWeight="medium"
                      textStyle="size-lg"
                    >
                      Total Price
                    </Text>
                  </GridItem>
                </Grid>

                {/* Table Data Row - White */}
                <Grid templateColumns="repeat(4, 1fr)">
                  <GridItem
                    bg="white"
                    px={4}
                    py={4}
                    borderTop="1px solid"
                    borderColor="gray.100"
                  >
                    <Text fontWeight="normal" textStyle="size-lg">
                      80160
                    </Text>
                  </GridItem>
                  <GridItem
                    bg="brand.white"
                    px={4}
                    py={4}
                    borderTop="1px solid"
                    borderColor="gray.100"
                  >
                    <Text fontWeight="normal" textStyle="size-lg">
                      $0.00
                    </Text>
                  </GridItem>
                  <GridItem
                    bg="white"
                    px={4}
                    py={4}
                    borderTop="1px solid"
                    borderColor="gray.100"
                  >
                    <Text fontWeight="normal" textStyle="size-lg">
                      $0.00
                    </Text>
                  </GridItem>
                  <GridItem
                    bg="white"
                    px={4}
                    py={4}
                    borderTop="1px solid"
                    borderColor="gray.100"
                  >
                    <Text
                      color="brand.primary"
                      fontWeight="normal"
                      textStyle="size-lg"
                    >
                      $0.00
                    </Text>
                  </GridItem>
                </Grid>
              </Box>
              <Box>
                <Text fontWeight="normal" textStyle="size-lg">
                  Thank you for receiving a quote with MoveCo.net. Please take a
                  moment to read what your quote includes.
                </Text>
              </Box>
            </Stack>
          </Box>

        <Box pt="sectionTop">
          <Badge label="Includes" mb={4}/>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 4, md: 10 }}
            mb={{ base: 4, lg: 6 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal">
                Your Quote <br />{" "}
                <Text as="span" color="brand.primary">
                  Includes
                </Text>
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                Every quote covers insurance, protection, and full-service care
                — no hidden costs, no surprises.
              </Text>
            </Box>
          </Flex>
          <CardTemplate data={quoteIncludesData} />
        </Box>
        
        <Box pt="sectionTop">
          <Stack gap="sectionTop">
            {/* Customer Information */}
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Customer Information
                </Heading>
                <Box
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                >
                  <Grid templateColumns="repeat(2, 1fr)">
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Customer Name
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Address
                      </Text>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)">
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        TX 49839.
                      </Text>
                    </GridItem>
                  </Grid>
                </Box>
              </Stack>
            </Box>

            {/* Contact Information */}
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Contact Information
                </Heading>
                <Box
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                >
                  <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Primary Phone
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Mobile Phone
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Work Phone
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Home Phone
                      </Text>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        (883)-748-7384
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                  </Grid>
                </Box>
              </Stack>
            </Box>

            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Your moving quote is based on the following inventory and
                  conditions
                </Heading>
                <Text
                  textStyle="size-sm"
                  fontWeight="semibold"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={2}
                >
                  Trucks
                </Text>
                <Box
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                >
                  <Grid templateColumns="repeat(2, 1fr)">
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Quantity
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="semibold"
                        textStyle="size-lg"
                      >
                        Description
                      </Text>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)">
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        0
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        24 Foot Truck
                      </Text>
                    </GridItem>
                  </Grid>
                </Box>
              </Stack>
            </Box>

            {/* Inventory */}
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Inventory
                </Heading>
                <Box
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                >
                  <Grid templateColumns="repeat(1, 1fr)">
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Additional Information
                      </Text>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(1, 1fr)">
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                  </Grid>

                  {/* Grand Total inside the same box */}
                  <Flex
                    justify="space-between"
                    align="center"
                    px={4}
                    py={3}
                    bg="brand.gray/20"
                    borderTop="1px solid"
                    borderColor="brand.gray"
                  >
                    <Text textStyle="size-lg" color="brand.gray">
                      *Any gratuities must be given directly to the movers
                    </Text>
                    <Text
                      fontWeight="bold"
                      textStyle="size-lg"
                      color="brand.primary"
                    >
                      Grand total : $0.00
                    </Text>
                  </Flex>
                </Box>
              </Stack>
            </Box>

            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Map & Directions
                </Heading>
                <Text
                  textStyle="size-sm"
                  fontWeight="semibold"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={2}
                >
                  Start Address
                </Text>
                <Box
                  border="1px solid"
                  borderColor="brand.gray"
                  overflow="hidden"
                >
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Address
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        City
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        State
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Zipcode
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Door Distance / Stairs
                      </Text>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        TX
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        49839
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="gray.100"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        Less than 100 Feets/0
                      </Text>
                    </GridItem>
                  </Grid>
                </Box>

                {/* End Address Table */}
                 <Text
                  textStyle="size-sm"
                  fontWeight="semibold"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={2}
                >
                  End Address
                </Text>
                <Box
                  border="1px solid"
                  borderColor="brand.gray"
                  overflow="hidden"
                >
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Address
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        City
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        State
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Zipcode
                      </Text>
                    </GridItem>
                    <GridItem bg="brand.primary" px={4} py={3}>
                      <Text
                        color="brand.white"
                        fontWeight="medium"
                        textStyle="size-lg"
                      >
                        Door Distance / Stairs
                      </Text>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        -
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        TX
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="brand.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        98594
                      </Text>
                    </GridItem>
                    <GridItem
                      bg="brand.white"
                      px={4}
                      py={4}
                      borderTop="1px solid"
                      borderColor="barnd.gray"
                    >
                      <Text fontWeight="normal" textStyle="size-lg">
                        Less than 100 Feets/0
                      </Text>
                    </GridItem>
                  </Grid>
                </Box>

                {/* Map + Directions Panel */}
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={4}>
                  {/* Google Map Embed */}
                  <Box
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    overflow="hidden"
                    h="350px"
                  >
                    <iframe
                      title="Move Directions"
                      width="100%"
                      height="350"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                      src="https://www.google.com/maps?q=TX+49839+to+TX+98594&output=embed"
                    />
                  </Box>

                  {/* Directions Panel */}
                  <Box>
                    <Text fontWeight="normal" textStyle="size-lg" mb={4}>
                      Total Distance: 0 km
                    </Text>

                    {/* Origin */}
                    <Box bg="brand.gray/30" px={4} py={3} mb={2}>
                      <Text textStyle="size-lg">
                        Froste Ln, Winters, TX 79567, USA
                      </Text>
                    </Box>

                    {/* Steps */}
                    <Box px={2} py={3} mb={2}>
                      <Text textStyle="size-lg" color="brand.gray" mb={2}>
                        1 ft. About 1 min
                      </Text>
                      <Text textStyle="size-lg">
                        1. Head on{" "}
                        <Text as="span" fontWeight="bold">
                          Froste Ln
                        </Text>{" "}
                        1 ft
                      </Text>
                      <Text textStyle="size-lg" color="brand.gray" mt={1}>
                        Restricted usage road
                      </Text>
                    </Box>

                    {/* Destination */}
                    <Box bg="brand.gray/30" px={4} py={3} mb={4}>
                      <Text textStyle="size-lg">
                        Froste Ln, Winters, TX 79567, USA
                      </Text>
                    </Box>

                    <Text textStyle="size-lg" color="brand.gray">
                      Powered by Google, ©2026 Google
                    </Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
      <Box  pt="sectionTop">
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
                What Your Quote Includes
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                Everything you need to know about your move — pricing, crew,
                equipment, and customer protection
              </Text>
            </Box>
          </Flex>
          <CommonAccordion sections={quoteInfoSections} />
        </Container>
      </Box>
      </Box>
    </div>
  );
};

export default Confirmation;

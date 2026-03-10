

import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import CardTemplate from "../../../../../pages/AboutUs/AboutUsComponents/CardTemplate";
import CommonAccordion from "../../../../AboutUs/AboutUsComponents/CommonAccordion";
import { quoteIncludesData, quoteInfoSections } from "./data";
import Badge from "../../../../../components/common/Badge/Badge";
import ReCAPTCHA from "react-google-recaptcha";
import TableSection from "./TableSection"; 

const Confirmation = () => {
  return (
    <>
      <Container>
        <Flex
          direction="column"
          align="flex-start"
          mb={{ base: 4, lg: 6 }}
          gap={{ base: 4, md: 10 }}
        >
          <Box maxW="800px" w="100%">
            <Heading as="h1" fontWeight="normal" textAlign={{ base: "center", md: "left" }}>
              Quote for your{" "}
              <Text as="span" color="brand.primary">Move</Text>
            </Heading>
          </Box>
        </Flex>

        {/* ── Quote Confirmation ── */}
        <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
          <Stack gap={4}>
            <Heading as="h3" color="brand.primary" fontWeight="normal">Quote Confirmation</Heading>
            <TableSection
              columns={["Quote No", "Moving Price", "Packing Price", "Total Price"]}
              rows={[["80160", "$0.00", "$0.00", "$0.00"]]}
            />
            <Box>
              <Text fontWeight="normal" textStyle="size-lg">
                Thank you for receiving a quote with MoveCo.net. Please take a moment to read what your quote includes.
              </Text>
            </Box>
          </Stack>
        </Box>

        {/* ── ReCAPTCHA ── */}
        <Box pt="sectionTop">
          <Box bg="brand.gray/20" borderRadius="md" p={4} border="1px solid" borderColor="gray.200">
            <Flex align="center" gap={6} flexWrap="wrap">
              <ReCAPTCHA sitekey="6LclVXksAAAAAHhsQjdcn_3LMqjWWJOK0qO_1yg-" onChange={(val) => console.log(val)} />
              <Text textStyle="size-lg" flexWrap="nowrap">
                You can reserve your move date by{" "}
                <Text as="span" color="brand.primary" fontWeight="medium">clicking here</Text>
              </Text>
            </Flex>
          </Box>
        </Box>

        {/* ── Quote Includes ── */}
        <Box pt="sectionTop">
          <Flex justify={{ base: "center", md: "flex-start" }}>
            <Badge label="Includes" mb={4} />
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} justify="space-between" gap={{ base: 4, md: 10 }} mb={{ base: 4, lg: 6 }}>
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal" textAlign={{ base: "center", md: "left" }}>
                Your Quote{" "}<Text as="span" color="brand.primary">Includes</Text>
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text textStyle="size-2xl" textAlign={{ base: "center", md: "right" }}>
                Every quote covers insurance, protection, and full-service care — no hidden costs, no surprises.
              </Text>
            </Box>
          </Flex>
          <CardTemplate data={quoteIncludesData} />
        </Box>

        <Box pt="sectionTop">
          <Stack gap="sectionTop">

            {/* ── Customer Information ── */}
            <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">Customer Information</Heading>
                <TableSection
                  columns={["Customer Name", "Address"]}
                  rows={[["-", "TX 49839."]]}
                />
              </Stack>
            </Box>

            {/* ── Contact Information ── */}
            <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">Contact Information</Heading>
                <TableSection
                  columns={["Primary Phone", "Mobile Phone", "Work Phone", "Home Phone"]}
                  rows={[["(883)-748-7384", "-", "-", "-"]]}
                />
              </Stack>
            </Box>

            {/* ── Trucks ── */}
            <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Your moving quote is based on the following inventory and conditions
                </Heading>
                <Text textStyle="size-sm" fontWeight="semibold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={2}>Trucks</Text>
                <TableSection
                  columns={["Quantity", "Description"]}
                  rows={[["0", "24 Foot Truck"]]}
                />
              </Stack>
            </Box>

            {/* ── Inventory ── */}
            <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">Inventory</Heading>
                <Box border="1px solid" borderColor="gray.200" overflow="hidden">
                  <TableSection columns={["Additional Information"]} rows={[["-"]]} />
                  <Flex justify="space-between" align="center" px={4} py={3} bg="brand.gray/20" borderTop="1px solid" borderColor="brand.gray">
                    <Text textStyle="size-lg" color="brand.gray">*Any gratuities must be given directly to the movers</Text>
                    <Text fontWeight="bold" textStyle="size-lg" color="brand.primary">Grand total : $0.00</Text>
                  </Flex>
                </Box>
              </Stack>
            </Box>

            {/* ── Map & Directions ── */}
            <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">Map & Directions</Heading>

                <Text textStyle="size-sm" fontWeight="semibold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={2}>Start Address</Text>
                <Box border="1px solid" borderColor="brand.gray" overflow="hidden">
                  <Box overflowX="auto">
                    <Box minW="600px">
                      <TableSection
                        columns={["Address", "City", "State", "Zipcode", "Door Distance / Stairs"]}
                        rows={[["-", "-", "TX", "49839", "Less than 100 Feets/0"]]}
                      />
                    </Box>
                  </Box>
                </Box>

                <Text textStyle="size-sm" fontWeight="semibold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={2}>End Address</Text>
                <Box border="1px solid" borderColor="brand.gray" overflow="hidden">
                  <Box overflowX="auto">
                    <Box minW="600px">
                      <TableSection
                        columns={["Address", "City", "State", "Zipcode", "Door Distance / Stairs"]}
                        rows={[["-", "-", "TX", "98594", "Less than 100 Feets/0"]]}
                      />
                    </Box>
                  </Box>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={4}>
                  <Box border="1px solid" borderColor="gray.200" borderRadius="lg" overflow="hidden" h="350px">
                    <iframe
                      title="Move Directions"
                      width="100%"
                      height="350"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                      src="https://www.google.com/maps?q=TX+49839+to+TX+98594&output=embed"
                    />
                  </Box>
                  <Box>
                    <Text fontWeight="normal" textStyle="size-lg" mb={4}>Total Distance: 0 km</Text>
                    <Box bg="brand.gray/30" px={4} py={3} mb={2}>
                      <Text textStyle="size-lg">Froste Ln, Winters, TX 79567, USA</Text>
                    </Box>
                    <Box px={2} py={3} mb={2}>
                      <Text textStyle="size-lg" color="brand.gray" mb={2}>1 ft. About 1 min</Text>
                      <Text textStyle="size-lg">
                        1. Head on <Text as="span" fontWeight="bold">Froste Ln</Text> 1 ft
                      </Text>
                      <Text textStyle="size-lg" color="brand.gray" mt={1}>Restricted usage road</Text>
                    </Box>
                    <Box bg="brand.gray/30" px={4} py={3} mb={4}>
                      <Text textStyle="size-lg">Froste Ln, Winters, TX 79567, USA</Text>
                    </Box>
                    <Text textStyle="size-lg" color="brand.gray">Powered by Google, ©2026 Google</Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </Box>

          </Stack>
        </Box>
      </Container>

      {/* ── What Your Quote Includes ── */}
      <Box pt="sectionTop">
        <Box bg="brand.white" px="-8">
          <Container px={8} pt={4} pb={10}>
            <Flex mb={{ base: 4, lg: 6 }} direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} justify="space-between" gap={{ base: 4, md: 10 }}>
              <Box maxW="600px" w="100%">
                <Heading as="h1" fontWeight="normal" textAlign={{ base: "center", md: "left" }}>
                  <Text as="span" color="brand.primary">MoveCo <br /></Text>
                  What Your Quote Includes
                </Heading>
              </Box>
              <Box maxW="430px" w="100%">
                <Text textStyle="size-2xl" textAlign={{ base: "center", md: "right" }}>
                  Everything you need to know about your move — pricing, crew, equipment, and customer protection
                </Text>
              </Box>
            </Flex>
            <CommonAccordion sections={quoteInfoSections} />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Confirmation;
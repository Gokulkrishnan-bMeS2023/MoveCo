import { Box, Heading, Text, Flex, Container, Stack, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import CommonAccordion from "../../AboutUs/AboutUsComponents/CommonAccordion";


const quoteInfoSections = [
  {
    title: "Pricing & Guarantees",
    items: [
      "Our prices are based on the items we are moving, so you never need to worry about how long movers take, or how much your furniture weighs. It's not an \"estimate\" — it's a guaranteed binding price.",
    ],
  },
  {
    title: "Licensing & Compliance",
    items: [
      "MoveCo.net is licensed with the Texas Department of Motor Vehicles (TXDMV #006044279C) and the US Department of Transportation (USDOT #1432374). We move coast to coast under our own authority. MoveCo.net is a member with the Better Business Bureau, and the Southwest Movers Association (SMA).",
    ],
  },
  {
    title: "Customer Protection & Membership Benefits",
    items: [
      "Membership with the BBB and SMA means MoveCo.net must abide by a strict set of ethics to maintain standing with these organizations. You, our customer, also have the right to arbitration and mediation if you're unsatisfied with any action taken by MoveCo.net — protecting you, the consumer.",
    ],
  },
  {
    title: "Transparency & Testimonials",
    items: [
      "Our online testimony board goes a step further. You can post your moving experience for future customers to see, and visit our website to browse over eight years of real customer comments.",
    ],
  },
  {
    title: "Safety & Staff Policies",
    items: [
      "Our crews make the difference. We conduct background checks and random drug tests. Our crews are trained professionals — we never use day laborers or contract moves out to other companies. Our crews are our reputation.",
    ],
  },
  {
    title: "Equipment & Operations",
    items: [
      "Our trucks are well-maintained and equipped with high-quality pads, straps, and dollies. Our entire fleet is GPS tracked in real time.",
    ],
  },
  {
    title: "Payment Options",
    items: [
      "Payment may be made with personal check (upon approval), cash, or any major credit card. You decide what's convenient for you. Payment is collected at the drop-off location, or online through our secure and easy payment portal.",
    ],
  },
  {
    title: "Our Commitment to You",
    items: [
      "Our goal is simple: we want you to be impressed enough with our service to share our business cards with friends and co-workers, post a positive testimonial on our website, and choose us again the next time you move.",
    ],
  },
];
const Conformation = () => {
    return (
        <div>
            <Container>
                <Flex direction="column" align="flex-start" gap={4} mb={12}>
                    <Box maxW="800px" w="100%">
                        <Heading as="h1" fontWeight="normal">
                            Quote for your{" "}
                            <Text as="span" color="brand.primary">
                                Move
                            </Text>
                        </Heading>
                    </Box>
                </Flex>

                <Stack gap={8}>
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

                            {/* Quote Summary Table */}
                            <Box
                                border="1px solid"
                                borderColor="gray.200"
                                borderRadius="lg"
                                overflow="hidden"
                            >
                                {/* Table Header - Green */}
                                <Grid templateColumns="repeat(4, 1fr)">
                                    <GridItem
                                        bg="brand.primary"
                                        px={4}
                                        py={3}
                                    >
                                        <Text color="white" fontWeight="semibold" fontSize="sm">
                                            Quote No
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        bg="brand.primary"
                                        px={4}
                                        py={3}
                                    >
                                        <Text color="white" fontWeight="semibold" fontSize="sm">
                                            Moving Price
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        bg="brand.primary"
                                        px={4}
                                        py={3}
                                    >
                                        <Text color="white" fontWeight="semibold" fontSize="sm">
                                            Packing Price
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        bg="brand.primary"
                                        px={4}
                                        py={3}
                                    >
                                        <Text color="white" fontWeight="semibold" fontSize="sm">
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
                                        <Text fontWeight="medium" fontSize="sm">
                                            80160
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        bg="white"
                                        px={4}
                                        py={4}
                                        borderTop="1px solid"
                                        borderColor="gray.100"
                                    >
                                        <Text fontWeight="medium" fontSize="sm">
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
                                        <Text fontWeight="medium" fontSize="sm">
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
                                        <Text color="brand.primary" fontWeight="bold" fontSize="sm">
                                            $0.00
                                        </Text>
                                    </GridItem>
                                </Grid>
                            </Box>

                            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                                {/* your other content here */}
                            </SimpleGrid>
                        </Stack>
                    </Box>
                </Stack>
                <Box>
      <Text fontWeight="bold" mb={8}>
        Thank you for receiving a quote with MoveCo.net. Please take a moment to read what your quote includes.
      </Text>
      <CommonAccordion sections={quoteInfoSections}  />
    </Box>
            </Container>
        </div>
    );
};

export default Conformation;
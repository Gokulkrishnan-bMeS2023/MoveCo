import { Box, Heading, Text, Flex, Container, Stack, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

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
            </Container>
        </div>
    );
};

export default Conformation;
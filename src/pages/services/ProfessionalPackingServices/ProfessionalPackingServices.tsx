import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  HStack,
  For,
  VStack,
} from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { FiPackage, FiFileText } from "react-icons/fi";
import img1 from "../../../assets/service2.webp";

const PACKING_OPTIONS = [
  {
    id: 1,
    icon: FiPackage,
    title: "Option 1",
    description:
      "A flat rate based on all items being seen in person by one of our drivers. We will come out to your home/office and provide a guaranteed price.",
  },
  {
    id: 2,
    icon: FiFileText,
    title: "Option 2",
    description:
      "We can pack your house/office on a per box basis. All paper, tape and labor is included in the flat rate per box.",
  },
];

const PACKING_RATES = [
  { boxType: "Book box", size: "1.5 cu/ft", rate: "$8.00 per box" },
  { boxType: "Medium box", size: "3 cu/ft", rate: "$9.00 per box" },
  { boxType: "Dish pack", size: "5.2 cu/ft", rate: "$25.00 per box" },
  { boxType: "Wardrobe box", size: "N/A", rate: "$18.00 per box" },
  { boxType: "Picture boxes", size: "N/A", rate: "$15.00 per box" },
  { boxType: "Unpacking a box", size: "N/A", rate: "$7.00 per box" },
];

const OptionCard = ({ icon: Icon, title, description }: any) => (
  <Box
    bg="brand.white"
    p={8}
    borderRadius="xl"
    boxShadow="sm"
    border="1px solid"
    borderColor="gray.100"
  >
    <HStack gap={3} mb={4}>
      <Box color="brand.primary">
        <Icon size={28} />
      </Box>
      <Heading as="h3" fontWeight="normal">
        {title}
      </Heading>
    </HStack>
    <Text textStyle="size-lg">{description}</Text>
  </Box>
);

const PackingServicesPage = () => {
  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {/* Header Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: 6, md: 10 }}
      >
        <Box maxW="600px" w="100%">
          <Heading as="h1" fontWeight="normal" mb={2}>
            Professional{" "}
            <Text as="span" color="brand.primary">
              Packing Services
            </Text>
          </Heading>
        </Box>
        <Box maxW="430px" w="100%">
          <Text textStyle="size-2xl" textAlign={{ base: "left", md: "right" }}>
            Transparent pricing • Professional packing • No hidden costs
          </Text>
        </Box>
      </Flex>

      <VStack gap={8}>
        {/* Options Grid */}
        <Box pt={{ base: 10, md: 16 }}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <For each={PACKING_OPTIONS}>
              {(option) => <OptionCard key={option.id} {...option} />}
            </For>
          </Grid>
        </Box>

        {/* Packing Rates Section */}
        <Box
          bg="brand.white"
          p={{ base: 6, md: 8 }}
          borderRadius="xl"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.100"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }}
            gap={8}
            alignItems="center"
          >
            <Box>
              <Heading as="h3" fontWeight="normal" mb={6} color="brand.primary">
                Packing Rates
              </Heading>

              <Table.Root textStyle="size-lg" variant="outline" striped>
                <Table.Header bg={"brand.primary"}>
                  <Table.Row>
                    <Table.ColumnHeader color={"brand.white"}>
                      Box type
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color={"brand.white"}>
                      Size
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color={"brand.white"}>
                      Rate
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <For each={PACKING_RATES}>
                    {(item) => (
                      <Table.Row key={item.boxType}>
                        <Table.Cell>{item.boxType}</Table.Cell>
                        <Table.Cell>{item.size}</Table.Cell>
                        <Table.Cell fontWeight="medium">{item.rate}</Table.Cell>
                      </Table.Row>
                    )}
                  </For>
                </Table.Body>
              </Table.Root>

              <Text textStyle="size-lg" mt={6}>
                It is impossible to know how many boxes one may need. So, we
                calculate your price once our staff is finished packing, on the
                actual number of boxes packed.
              </Text>
            </Box>

            {/* Image Section */}
            <Box
              display={{ base: "none", lg: "block" }}
              borderRadius="lg"
              overflow="hidden"
              height="400px"
            >
              <img
                src={img1}
                alt="Professional packing services"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Grid>
        </Box>
      </VStack>
    </Container>
  );
};

export default PackingServicesPage;

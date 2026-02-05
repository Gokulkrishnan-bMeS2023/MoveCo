import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Image,
  Flex,
  Icon,
  Table,
  Card,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { FaTruckMoving, FaClipboardList } from "react-icons/fa";

export default function ProfessionalPackingServices() {
  return (
    <Container maxW="100%" px={8} py={12}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={14} alignItems="center">
        {/* ================= LEFT CONTENT ================= */}
        <Stack gap={8}>
          {/* TITLE */}
          <VStack alignItems={"self-start"}>
            <Heading as="h1" fontWeight={"normal"}>
              Professional
            </Heading>
            <Heading as="h1" fontWeight={"normal"} color="brand.primary">
              Packing Services
            </Heading>
          </VStack>

          {/* OPTION 1 */}
          <Card.Root rounded="2xl" shadow="md">
            <Card.Body>
              <Stack gap={3}>
                <Flex align="center" gap={2}>
                  <Icon fontSize="3xl" color="brand.primary">
                    <FaTruckMoving />
                  </Icon>
                  <Heading as={"h3"} textStyle="size-lg">
                    Option 1
                  </Heading>
                </Flex>

                <Box textStyle="size-md">
                  A flat rate based on all items being seen in person by one of
                  our drivers. We will come out to your home/office and provide
                  a guaranteed price.
                </Box>
              </Stack>
            </Card.Body>
          </Card.Root>

          {/* OPTION 2 */}
          <Card.Root rounded="2xl" shadow="md">
            <Card.Body>
              <Stack gap={4}>
                <Flex align="center" gap={2}>
                  <Icon fontSize="3xl" color="brand.primary">
                    <FaClipboardList />
                  </Icon>
                  <Heading as={"h3"} textStyle="size-lg">
                    Option 2
                  </Heading>
                </Flex>

                <Box textStyle="size-md">
                  We can pack your house/office on a per box basis. All paper,
                  tape and labor is included in the flat rate per box.
                </Box>

                {/* PRICING TABLE */}
                <Box overflowX="auto">
                  <Table.Root size="md">
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeader>Box Type</Table.ColumnHeader>
                        <Table.ColumnHeader>Size</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">
                          Price
                        </Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Book box</Table.Cell>
                        <Table.Cell>1.5 cu/ft</Table.Cell>
                        <Table.Cell textAlign="end">$8.00 per box</Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.Cell>Medium Box</Table.Cell>
                        <Table.Cell>3.1 cu/ft</Table.Cell>
                        <Table.Cell textAlign="end">$9.00 per box</Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.Cell>Dish pack</Table.Cell>
                        <Table.Cell>5.2 cu/ft</Table.Cell>
                        <Table.Cell textAlign="end">$25.00 per box</Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.Cell>Wardrobe w/bar</Table.Cell>
                        <Table.Cell>N/A</Table.Cell>
                        <Table.Cell textAlign="end">$18.00 per box</Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.Cell>Picture boxes</Table.Cell>
                        <Table.Cell>N/A</Table.Cell>
                        <Table.Cell textAlign="end">$15.00 per box</Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.Cell>Unpacking a box</Table.Cell>
                        <Table.Cell>N/A</Table.Cell>
                        <Table.Cell textAlign="end">$7.00 per box</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table.Root>
                </Box>
              </Stack>
            </Card.Body>
          </Card.Root>

          {/* FOOT NOTE */}
          <Box textStyle="size-sm" opacity={0.8}>
            It is impossible to know how many boxes one may need. So we
            calculate your price once our staff is finished packing, on the
            actual number of boxes packed.
          </Box>
        </Stack>

        {/* ================= RIGHT IMAGE ================= */}
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Professional packing service"
          rounded="2xl"
          shadow="xl"
          w="100%"
          h={{ base: "320px", md: "560px" }}
          objectFit="cover"
        />
      </SimpleGrid>
    </Container>
  );
}

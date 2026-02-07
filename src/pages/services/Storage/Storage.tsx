import { useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Image,
  Span,
  For,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";

import Button from "../../../components/common/Button/Button";
import storageImage from "../../../assets/Storage.jpg";

const STORAGE_PRICING = [
  { size: "10 x 20", price: "$260" },
  { size: "10 x 30", price: "$395" },
];

export default function StoragePage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {/* Top heading row */}

      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: 6, md: 10 }}
      >
        <Box maxW="600px" w="100%">
          <Heading as="h1" fontWeight="normal" mb={2} color="brand.primary">
            Storages
          </Heading>
        </Box>
        <Box maxW="430px" w="100%">
          <Text textStyle="size-2xl" textAlign={{ base: "left", md: "right" }}>
            Professional storage service for your possessions during the move
          </Text>
        </Box>
      </Flex>

      {/* Image + content section */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: 10, md: 16 }}
        alignItems="flex-start"
        pt={{ base: 10, md: 16 }}
      >
        {/* Left image */}
        <Box rounded="2xl" overflow="hidden">
          <Image
            src={storageImage}
            alt="Storage Services"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        {/* Right content */}
        <Stack gap={6}>
          <Text textStyle="size-2xl">
            MoveCo.net offers climate controlled storage service with 24-hour
            security cameras at our Lewisville facility. One of the major
            advantage of using our storage service is the convenience that it
            brings to you. Once we have loaded up your belongings, you do not
            need to worry about a thing until you’re ready to have your items
            redelivered to your new house. Once you have realized how this
            services soothes your overall moving / transition experience from
            one house to another, you will not only use this service again but
            recommend it to friends and family.
          </Text>

          {/* View all / View less */}
          <Box>
            <Text
              textStyle="size-2xl"
              lineClamp={showAll ? undefined : 2}
              transition="all 0.3s ease"
            >
              Free safety Packing included: We operate full-service storag
              facility where we take extra care of your possessions. We use our
              commercial-grade blankets and shrink wrapping material when we
              load your items into our storage facility. Please note that you
              will not have access to your items till the redelivery date,
              unless you schedule an appointment which has a fixed cost of
              $50.00. As of now we do not offer storage service in our Austin or
              Houston facility.
            </Text>

            <Button
              mt={3}
              variant="outline"
              label={showAll ? "View less" : "View all"}
              onClick={() => setShowAll(!showAll)}
            />
          </Box>
        </Stack>
      </SimpleGrid>

      {/* Storage Pricing */}
      <Box pt={{ base: 10, md: 16 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
          gap={8}
          bg="brand.white"
          p={{ base: 6, md: 10 }}
          borderRadius="xl"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.100"
        >
          {/* Left - Info Box */}
          <Box
            bg="gray.50"
            p={6}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack gap={4} textAlign="center">
              <Heading as="h3" fontWeight="normal" textAlign="center">
                Storage <Span color="brand.primary">Pricing</Span>
              </Heading>
              <Text textStyle="size-lg">
                We also offer <strong>RV and boat storage</strong>.
              </Text>
              <Text textStyle="size-md" color="gray.600">
                Call for pricing
              </Text>
            </Stack>
          </Box>

          {/* Right - Pricing Table */}
          <Box>
            <Table.Root size="lg" variant="outline" striped>
              <Table.Header>
                <Table.Row bg="brand.primary">
                  <Table.ColumnHeader color="brand.white" fontSize="md">
                    Size (Feet)
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="brand.white" fontSize="md">
                    Price / Month (Climate Controlled)
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <For each={STORAGE_PRICING}>
                  {(item) => (
                    <Table.Row key={item.size}>
                      <Table.Cell fontSize="lg">{item.size}</Table.Cell>
                      <Table.Cell
                        fontWeight="semibold"
                        fontSize="lg"
                        color="brand.primary"
                      >
                        {item.price}
                      </Table.Cell>
                    </Table.Row>
                  )}
                </For>
              </Table.Body>
            </Table.Root>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}

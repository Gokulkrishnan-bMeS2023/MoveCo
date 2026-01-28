// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   SimpleGrid,
//   Stack,
//   Table,
//   Button,
//   Icon,
//   Image,
//   HStack,
//   Card,
// } from "@chakra-ui/react";
// import { FaBoxOpen, FaClipboardCheck, FaPhoneAlt } from "react-icons/fa";

// const ProfessionalPackingServices = () => {
//   return (
//     <Box>
//       {/* HERO */}
//       <Box bg="brand.primary" color="white" py={{ base: 12, md: 20 }}>
//         <Container>
//           <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
//             <Stack gap={4}>
//               <Heading as="h1">Professional Packing Services</Heading>
//               <Text fontSize="lg">
//                 Stress-free packing for homes and offices using premium
//                 materials.
//               </Text>
//               <Button bg="white" color="brand.primary" width="fit-content">
//                 Get a Free Estimate
//               </Button>
//             </Stack>

//             <Image
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//               alt="Packing service"
//               borderRadius="xl"
//             />
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* CONTENT */}
//       <Box py={14}>
//         <Container>
//           {/* OPTIONS */}
//           <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={14}>
//             <Card.Root>
//               <Card.Header>
//                 <HStack gap={3}>
//                   <Icon
//                     as={FaClipboardCheck}
//                     color="brand.primary"
//                     boxSize={6}
//                   />
//                   <Heading as="h3">Option 1 – Flat Rate Estimate</Heading>
//                 </HStack>
//               </Card.Header>
//               <Card.Body>
//                 <Text>
//                   Guaranteed flat rate after an in-person assessment. No
//                   surprises.
//                 </Text>
//               </Card.Body>
//             </Card.Root>

//             <Card.Root>
//               <Card.Header>
//                 <HStack gap={3}>
//                   <Icon as={FaBoxOpen} color="brand.primary" boxSize={6} />
//                   <Heading as="h3">Option 2 – Per Box Pricing</Heading>
//                 </HStack>
//               </Card.Header>
//               <Card.Body>
//                 <Text>
//                   Pay only for the boxes used. All materials and labor included.
//                 </Text>
//               </Card.Body>
//             </Card.Root>
//           </SimpleGrid>

//           {/* TABLE */}
//           <Heading as="h2" mb={4}>
//             Box Pricing
//           </Heading>

//           <Table.Root striped interactive mb={12}>
//             <Table.Header>
//               <Table.Row>
//                 <Table.ColumnHeader>Box Type</Table.ColumnHeader>
//                 <Table.ColumnHeader>Size</Table.ColumnHeader>
//                 <Table.ColumnHeader textAlign="right">Price</Table.ColumnHeader>
//               </Table.Row>
//             </Table.Header>

//             <Table.Body>
//               {[
//                 ["Book Box", "1.5 cu/ft", "$8.00"],
//                 ["Medium Box", "3.1 cu/ft", "$9.00"],
//                 ["Dish Pack", "5.2 cu/ft", "$25.00"],
//                 ["Wardrobe Box", "N/A", "$18.00"],
//                 ["Picture Box", "N/A", "$15.00"],
//                 ["Unpacking Per Box", "N/A", "$7.00"],
//               ].map(([name, size, price]) => (
//                 <Table.Row key={name}>
//                   <Table.Cell>{name}</Table.Cell>
//                   <Table.Cell>{size}</Table.Cell>
//                   <Table.Cell textAlign="right">{price}</Table.Cell>
//                 </Table.Row>
//               ))}
//             </Table.Body>
//           </Table.Root>

//           <Text mb={10}>
//             It is impossible to know how many boxes one may need. So we
//             calculate your price once our staff is finished packing, on the
//             actual number of boxes packed.
//           </Text>

//           {/* CTA */}
//           <Stack
//             direction={{ base: "column", md: "row" }}
//             gap={4}
//             justify="center"
//             align="center"
//           >
//             <Button bg="brand.primary" color="white" size="lg">
//               Schedule Packing Service
//             </Button>

//             <Button
//               size="lg"
//               variant="outline"
//               borderColor="brand.primary"
//               color="brand.primary"
//               // leftIcon={<FaPhoneAlt />}
//             >
//               Call Us Now
//             </Button>
//           </Stack>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default ProfessionalPackingServices;

//2
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

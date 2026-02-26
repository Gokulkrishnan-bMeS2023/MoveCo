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
import { PACKING_OPTIONS, PACKING_RATES } from "./data";
import type { PackingOption } from "./DTOs";
import { images } from "../../../assets";

const OptionCard = ({ icon: Icon, title, description }: PackingOption) => (
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
    <Container>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: 4, md: 10 }}
        mb={{ base: 4, lg: 6 }}
      >
        <Box maxW="600px" w="100%">
          <Heading as="h1" fontWeight="normal">
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
        <Box >
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <For each={PACKING_OPTIONS}>
              {(option) => <OptionCard key={option.id} {...option} />}
            </For>
          </Grid>
        </Box>

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
                src={images.pricing}
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

//2

// import {
//   Box,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   Grid,
//   HStack,
//   For,
//   VStack,
// } from "@chakra-ui/react";
// import { Table } from "@chakra-ui/react";
// import { PACKING_OPTIONS, PACKING_RATES } from "./data";
// import type { PackingOption } from "./DTOs";

// const OptionCard = ({ icon: Icon, title, description }: PackingOption) => (
//   <Box
//     bg="brand.white"
//     p={8}
//     borderRadius="xl"
//     boxShadow="sm"
//     border="1px solid"
//     borderColor="gray.100"
//   >
//     <HStack gap={3} mb={4}>
//       <Box color="brand.primary">
//         <Icon size={28} />
//       </Box>
//       <Heading as="h3" fontWeight="normal">
//         {title}
//       </Heading>
//     </HStack>
//     <Text textStyle="size-lg">{description}</Text>
//   </Box>
// );

// const PackingServicesPage = () => {
//   return (
//     <Container>
//       <Flex
//         direction={{ base: "column", md: "row" }}
//         align={{ base: "flex-start", md: "center" }}
//         justify="space-between"
//         gap={{ base: 4, md: 10 }}
//         mb={{ base: 6, lg: 8 }}
//       >
//         <Box maxW="600px" w="100%">
//           <Heading as="h1" fontWeight="normal">
//             Professional{" "}
//             <Text as="span" color="brand.primary">
//               Packing Services
//             </Text>
//           </Heading>
//         </Box>
//         <Box maxW="430px" w="100%">
//           <Text textStyle="size-2xl" textAlign={{ base: "left", md: "right" }}>
//             Transparent pricing • Professional packing • No hidden costs
//           </Text>
//         </Box>
//       </Flex>

//       <VStack gap={8}>
//         <Box>
//           <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
//             <For each={PACKING_OPTIONS}>
//               {(option) => <OptionCard key={option.id} {...option} />}
//             </For>
//           </Grid>
//         </Box>

//         <Box
//           bg="brand.white"
//           p={{ base: 6, md: 8 }}
//           borderRadius="xl"
//           boxShadow="sm"
//           border="1px solid"
//           borderColor="gray.100"
//           w={"100%"}
//         >
//           <Heading as="h3" fontWeight="normal" mb={6} color="brand.primary">
//             Packing Rates
//           </Heading>
//           <Table.Root textStyle="size-lg" variant="outline" striped>
//             <Table.Header bg={"brand.primary"}>
//               <Table.Row>
//                 <Table.ColumnHeader color={"brand.white"}>
//                   Box type
//                 </Table.ColumnHeader>
//                 <Table.ColumnHeader color={"brand.white"}>
//                   Size
//                 </Table.ColumnHeader>
//                 <Table.ColumnHeader color={"brand.white"}>
//                   Rate
//                 </Table.ColumnHeader>
//               </Table.Row>
//             </Table.Header>
//             <Table.Body>
//               <For each={PACKING_RATES}>
//                 {(item) => (
//                   <Table.Row key={item.boxType}>
//                     <Table.Cell>{item.boxType}</Table.Cell>
//                     <Table.Cell>{item.size}</Table.Cell>
//                     <Table.Cell fontWeight="medium">{item.rate}</Table.Cell>
//                   </Table.Row>
//                 )}
//               </For>
//             </Table.Body>
//           </Table.Root>

//           <Text textStyle="size-lg" mt={6}>
//             It is impossible to know how many boxes one may need. So, we
//             calculate your price once our staff is finished packing, on the
//             actual number of boxes packed.
//           </Text>
//         </Box>
//       </VStack>
//     </Container>
//   );
// };

// export default PackingServicesPage;

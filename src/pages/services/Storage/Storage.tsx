// import {
//   Box,
//   Container,
//   SimpleGrid,
//   Stack,
//   Heading,
//   Text,
//   Image,
//   HStack,
// } from "@chakra-ui/react";

// import storageImage from "../../../assets/Storage.jpg";

// export default function StoragePage() {
//   return (
//     <Container maxW="100%" px={8} py={10}>
//       {/* Top heading row */}
//       <HStack
//         justify="space-between"
//         align="flex-start"
//         mb={{ base: 10, md: 16 }}
//         gap={10}
//       >
//         <Stack gap={4} maxW="60%">
//           <Heading as="h1" fontWeight="normal" color={"brand.primary"}>
//             Storages
//           </Heading>
//         </Stack>

//         <Text textStyle="size-xl" textAlign="right" maxW="30%">
//           Professional storage service for your possessions during the move
//         </Text>
//       </HStack>

//       {/* Image + content section */}
//       <SimpleGrid
//         columns={{ base: 1, md: 2 }}
//         gap={{ base: 10, md: 16 }}
//         alignItems="flex-start"
//       >
//         {/* Left image */}
//         <Box rounded="2xl" overflow="hidden">
//           <Image
//             src={storageImage}
//             alt="Storage Services"
//             w="100%"
//             h="100%"
//             objectFit="cover"
//           />
//         </Box>

//         {/* Right content */}
//         <Stack gap={6}>
//           <Text textStyle="size-2xl">
//             MoveCo.net offers climate controlled storage service with 24-hour
//             security cameras at our Lewisville facility. One of the major
//             advantage of using our storage service is the convenience that it
//             brings to you. Once we have loaded up your belongings, you do not
//             need to worry about a thing until you’re ready to have your items
//             redelivered to your new house. Once you have realized how this
//             services soothes your overall moving / transition experience from
//             one house to another, you will not only use this service again but
//             recommend it to friends and family.
//           </Text>

//           <Text textStyle="size-2xl">
//             Free safety Packing included: We operate full-service storag
//             facility where we take extra care of your possessions. We use our
//             commercial-grade blankets and shrink wrapping material when we load
//             your items into our storage facility. Please note that you will not
//             have access to your items till the redelivery date, unless you
//             schedule an appointment which has a fixed cost of $50.00. As of now
//             we do not offer storage service in our Austin or Houston facility.
//           </Text>
//         </Stack>
//       </SimpleGrid>
//     </Container>
//   );
// }

//2

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Image,
  HStack,
  Span,
} from "@chakra-ui/react";
import storageImage from "../../../assets/Storage.jpg";

export default function StoragePage() {
  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      <HStack
        justify="space-between"
        align="flex-start"
       mb={{base:6, lg:8}}
        gap={10}
      >
        <Stack gap={4} maxW="60%">
          <Heading as="h1" fontWeight="normal" color="brand.primary">
            Storages
          </Heading>
        </Stack>

        <Text textStyle="size-xl" textAlign="right" maxW="30%">
          Professional storage service for your possessions during the move
        </Text>
      </HStack>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: 10, md: 16 }}
        alignItems="flex-start"
      >
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

          <Text textStyle="size-2xl">
            Free safety packing included: We operate a full-service storage
            facility where we take extra care of your possessions. We use
            commercial-grade blankets and shrink wrapping material when we load
            your items into storage. Please note that you will not have access
            to your items until the redelivery date unless you schedule an
            appointment, which has a fixed cost of $50.00. At this time, we do
            not offer storage services in Austin or Houston.
          </Text>
        </Stack>
      </SimpleGrid>

       <Box pt={{ base: 10, md: 16 }} maxW="4xl">
      <Stack gap={6}>
        <Heading as="h1" fontWeight={"normal"} >
          Storage <Span color="brand.primary">Pricing</Span>
        </Heading>
        <Stack borderWidth="1px" borderRadius="xl" p={6} gap={4} bg="brand.white">
          <HStack justify="space-between" fontWeight="semibold">
            <Text textStyle="size-xl">Size (Feet)</Text>
            <Text textStyle="size-xl">Price / Month</Text>
          </HStack>

          <HStack justify="space-between">
            <Text textStyle="size-md">10 x 20</Text>
            <Text textStyle="size-md">$260</Text>
          </HStack>

          <HStack justify="space-between">
            <Text textStyle="size-md">10 x 30</Text>
            <Text textStyle="size-md">$395</Text>
          </HStack>
        </Stack>

        <Text textStyle="size-lg">
          We also offer <strong>RV and boat storage</strong>. call for pricing.
        </Text>
      </Stack>
      </Box>
    </Container>
  );
}

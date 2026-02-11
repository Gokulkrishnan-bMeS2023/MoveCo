// import {
//   Box,
//   SimpleGrid,
//   Text,
//   Icon,
// } from "@chakra-ui/react";
// import {
//   FaComments,
//   FaDollarSign,
//   FaClock,
//   FaMapMarkerAlt,
//   FaShieldAlt,
//   FaTruckMoving,
//   FaBoxes,
//   FaCheckCircle,
//   FaIdCard,
//   FaUsers,
//   FaBuilding,
//   FaUserShield,
//   FaTools,
//   FaClipboardList,
//   FaBalanceScale,
//   FaHandshake,
//   FaUserTie,
//   FaRegCreditCard,
//   FaRoute,
// } from "react-icons/fa";

// const benefits = [
//   {
//     icon: FaComments,
//     text: "Online feedback board for customers to post reviews",
//   },
//   {
//     icon: FaDollarSign,
//     text: "Guaranteed move prices with no hidden costs",
//   },
//   {
//     icon: FaClock,
//     text: "Guaranteed pick up and delivery dates",
//   },
//   {
//     icon: FaMapMarkerAlt,
//     text: "GPS tracked trucks for real-time location updates",
//   },
//   {
//     icon: FaCheckCircle,
//     text: "Membership in good standing with BBB & SMA",
//   },
//   {
//     icon: FaShieldAlt,
//     text: "2 Million dollars General Liability Insurance",
//   },
//   {
//     icon: FaBoxes,
//     text: "$50,000 Standard Cargo Insurance coverage",
//   },
//   {
//     icon: FaTruckMoving,
//     text: "Furniture placed exactly where you want it in each room",
//   },

//   // NEW 12 (important + trust focused)
//   {
//     icon: FaRoute,
//     text: "Exclusive use of our trucks — one move at a time",
//   },
//   {
//     icon: FaIdCard,
//     text: "Registered with Texas DMV and US DOT",
//   },
//   {
//     icon: FaUsers,
//     text: "Over 100 years of combined moving experience",
//   },
//   {
//     icon: FaUserTie,
//     text: "All drivers have a minimum of 2 years experience",
//   },
//   {
//     icon: FaShieldAlt,
//     text: "1 Million dollars Commercial Auto Liability Insurance",
//   },
//   {
//     icon: FaHandshake,
//     text: "In-house policy to repair or replace damaged items",
//   },
//   {
//     icon: FaBalanceScale,
//     text: "$50,000 bonded and fully compliant with regulations",
//   },
//   {
//     icon: FaClipboardList,
//     text: "Itemized pricing — no hourly rates or clock watching",
//   },
//   {
//     icon: FaRegCreditCard,
//     text: "Upfront pricing with online itemized quotes",
//   },
//   {
//     icon: FaUserShield,
//     text: "Background-checked movers with strict conduct policies",
//   },
//   {
//     icon: FaTools,
//     text: "Late-model trucks and professional moving equipment",
//   },
//   {
//     icon: FaBuilding,
//     text: "Member in good standing with Chamber of Commerce",
//   },
// ];


// export default function BenefitsGrid() {
//   return (
//     <SimpleGrid
//       columns={{ base: 1, sm: 2, md: 4 }}
//       gap={8}
//     >
//       {benefits.map((item, index) => (
//         <Box
//           key={index}
//           role="group"
//           bg="brand.white"
//           border="1px solid"
//           borderColor="gray.300"
//           borderRadius="2xl"
//           p={8}
//           textAlign="center"
//           minH="320px"
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           transition="all 0.3s ease"
//           _hover={{
//             transform: "translateY(-6px) scale(1.04)",
//             boxShadow: "2xl",
//             borderColor: "brand.primary",
//           }}
//         >
//           <Box
//             w="125px"
//             h="125px"
//             bg="brand.primary"
//             borderRadius="full"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             mx="auto"
//             mb={6}
//             transition="all 0.3s ease"
//             _groupHover={{
//               transform: "scale(1.15)",
//             }}
//           >
//             <Icon as={item.icon} boxSize={14} color="brand.white" />
//           </Box>

//           <Text textStyle="size-2xl">
//             {item.text}
//           </Text>
//         </Box>
//       ))}
//     </SimpleGrid>
//   );
// }

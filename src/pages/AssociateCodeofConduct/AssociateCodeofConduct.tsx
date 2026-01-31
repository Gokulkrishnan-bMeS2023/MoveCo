
import { 
  Box, 
  SimpleGrid, 
  Text, 
  Circle, 
  Container,
  Icon
} from '@chakra-ui/react';

import { 
  FaTshirt, 
  FaBan, 
  FaWalking, 
  FaSoap 
} from 'react-icons/fa';
import { GiBelt } from 'react-icons/gi';
import { PiSparkleLight } from 'react-icons/pi';

interface DressCodeItem {
  id: number;
  text: string;
  icon: any;
}

const dressCodeData: DressCodeItem[] = [
  { id: 1, text: "Wear a MoveCo t-shirt at all times while working.", icon: FaTshirt },
  { id: 2, text: "Maintain a neat, clean appearance (no holes or stains).", icon: PiSparkleLight },
  { id: 3, text: "No visible piercings or tattoos.", icon: FaBan },
  { id: 4, text: "No sagging of pants or shorts - wear a belt!", icon: GiBelt },
  { id: 5, text: "Wear shoes with non-slip soles.", icon: FaWalking },
  { id: 6, text: "Maintain good personal hygiene.", icon: FaSoap },
];

const AssociateCodeofConduct = () => {

  return (
    <Container maxW="100%" py={10} px={8}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {dressCodeData.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="xl"
            bg="brand.white"
            p={8}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            boxShadow="sm"
            transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-6px) scale(1.04)",
            boxShadow: "2xl",
            borderColor: "brand.primary",
          }}
          >
            <Circle size="100px" bg="brand.primary" color="brand.white" mb={6}>
              <Icon as={item.icon} boxSize={10} />
            </Circle>
            
            <Text 
              textStyle="size-xl"
              lineHeight="tall"
            >
              {item.text}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      
    </Container>
  );
};

export default AssociateCodeofConduct;




// import { Box, Flex, Heading, Text, Image, List, ListItem } from "@chakra-ui/react";
// import customerImg from "../assets/customer.png"; // change path

// const CustomerRelations = () => {
//   return (
//     <Flex
//       maxW="7xl"
//       mx="auto"
//       px={8}
//       py={12}
//       gap={10}
//       align="center"
//       direction={{ base: "column", md: "row" }}
//     >
//       {/* LEFT SIDE - HEADING + IMAGE */}
//       <Box flex="1">
//         <Heading mb={4}>Customer Relations</Heading>

//         <Image
//           src={customerImg}
//           alt="Customer Relations"
//           borderRadius="xl"
//           boxShadow="lg"
//           objectFit="cover"
//           w="100%"
//           maxH="420px"
//         />
//       </Box>

//       {/* RIGHT SIDE - POINTS CARD */}
//       <Box
//         flex="1"
//         bg="white"
//         p={6}
//         borderRadius="xl"
//         boxShadow="lg"
//       >
//         <List spacing={3}>
//           <ListItem>✔ Be polite, well-mannered and respectful.</ListItem>
//           <ListItem>✔ Do not use crude or offensive language.</ListItem>
//           <ListItem>✔ Arrive on time and call when on the way if late.</ListItem>
//           <ListItem>✔ Have your own tools for disassembly and reassembly.</ListItem>
//           <ListItem>✔ Be a courteous driver in the MoveCo truck.</ListItem>
//           <ListItem>✔ NO SMOKING within 15ft of the truck.</ListItem>
//           <ListItem>✔ Customers must sign off on all add-ons.</ListItem>
//           <ListItem>✔ Paperwork must be signed at pickup and unload.</ListItem>
//           <ListItem>
//             ✔ Ask: “Is everything OK? Are you happy with our service?”
//           </ListItem>
//           <ListItem>
//             ✔ Encourage referrals and give magnets & business cards.
//           </ListItem>
//         </List>
//       </Box>
//     </Flex>
//   );
// };

// export default CustomerRelations;

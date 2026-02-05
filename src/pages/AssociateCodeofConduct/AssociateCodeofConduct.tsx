


import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  HStack,
  Text,
  SimpleGrid,
  Circle,
  Icon,
  Container,
} from "@chakra-ui/react";

import {
  FaTshirt,
  FaBan,
  FaWalking,
  FaSoap
} from "react-icons/fa";
import { GiBelt } from "react-icons/gi";
import { PiSparkleLight } from "react-icons/pi";
import customerImg from "../../assets/scottish-rite.jpg";
import InsuranceImg from "../../assets/modifiedbanner.png";

const dressCodeData = [
  { id: 1, text: "Wear a MoveCo t-shirt at all times while working.", icon: FaTshirt },
  { id: 2, text: "Maintain a neat, clean appearance (no holes or stains).", icon: PiSparkleLight },
  { id: 3, text: "No visible piercings or tattoos.", icon: FaBan },
  { id: 4, text: "No sagging of pants or shorts - wear a belt!", icon: GiBelt },
  { id: 5, text: "Wear shoes with non-slip soles.", icon: FaWalking },
  { id: 6, text: "Maintain good personal hygiene.", icon: FaSoap },
];

const customerPoints = [
  "Be polite, well-mannered, and respectful to every customer. Do not use profane, crude, or offensive language toward customers.",
  "Arrive on time and call the customer when you are on the way or if you are running late.",
  "Have your own tools for basic disassembly and reassembly. Be a courteous driver while in a MoveCo truck.",
  "NO SMOKING WITHIN 15FT OF THE BACK OF THE TRUCK.",
  "Have customers sign off on all add-ons before moving them. Make sure paperwork is signed at the pick up and the unload (2x’s).",
  "Ask, upon completion, “Is everything OK? Are you happy with our service? Is everything where you want it?” Tell them, “We get most of our business from referrals, so please let your friends and co-workers know how your move went.”",
  "Give the customer magnets and plenty of business cards.",
];

const officePoints = [
  "Report to dispatch on time at 6:45 AM.",
  "ZERO TOLERANCE OF ALCOHOL OR DRUG USE!!!",
  "Do not litter from the truck while traveling to or from a customer’s location.",
  "Inform the office of any emergencies ASAP, with the truck or on the move. Write driver and helpers names on top of completed paperwork. Make note of any tips.",
  "Make sure customer’s contact and address information is current. To accept a check, you must see and document their driver’s license, DOB and current address.",
  "Make sure Movers Invoices are completed and returned every Monday for Payroll.",
  "When a truck is returned to the yard, make sure the box and cab are clean and prepped for the next day (pads folded with right amount of equipment).",
];

const AssociateCodeOfConduct = () => {
  return (
    <>
      <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
        <Box
          bgImage={`url(${InsuranceImg})`}
          bgSize="cover"
          borderRadius="lg"
          minH={{ base: "230px", md: "320px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" inset={0} bg="grey" opacity={0.6} />
          <Box position="relative" textAlign="center">
            <Heading as="h1" fontWeight="normal" color="brand.white" mb={4}>
              Associate Code of Conduct
            </Heading>
          </Box>
        </Box>
        <Box pt={{base:10, md:16}}>
        <Heading mb={{base:6, lg:8}} as="h1" fontWeight="normal"> Dress <Text as="span" color="brand.primary">Code</Text></Heading>
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
              <Text textStyle="size-xl" fontWeight="500">{item.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box pt={{base:10, md:16}}>
          <Heading mb={{base:6, lg:8}} w={{ base: "100%", lg: "50%" }} textAlign={{ base: "center", lg: "left" }} as="h1" fontWeight="normal" >Customer <Text as="span" color="brand.primary">
            Relations
          </Text></Heading>
        <Flex
          maxW="7xl"
          mx="auto"
          gap={10}
          align="center"
          direction={{ base: "column", md: "row" }}
        >
          <Box flex="1">
            <Image
              src={customerImg}
              alt="Customer Relations"
              borderRadius="xl"
              boxShadow="lg"
              objectFit="cover"
              w="100%"
              maxH="420px"
            />
          </Box>
          <Box flex="1">
            <List.Root gap={2} listStyle="none" ps={0}>
              {customerPoints.map((item, index) => (
                <List.Item key={index}>
                  <HStack align="start" gap={4}>
                    <Box
                      minW="28px"
                      h="28px"
                      bg="brand.primary"
                      color="brand.white"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                    >
                      {index + 1}
                    </Box>
                    <Text>{item}</Text>
                  </HStack>
                </List.Item>
              ))}
            </List.Root>
          </Box>
        </Flex>
      </Box>

      <Box pt={{base:10, md:16}}>
          <Heading mb={{base:6, lg:8}} as="h1" fontWeight="normal" w={{ base: "100%", lg: "50%" }} textAlign={{ base: "center", lg: "left" }}>Dealing with <Text as="span" color="brand.primary">
            the Office
          </Text></Heading>
        <Flex
          maxW="7xl"
          mx="auto"
          gap={10}
          align="center"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box flex="1">
            <Box >
              <List.Root listStyle="none" ps={0} gap={2}>
                {officePoints.map((item, index) => (
                  <List.Item key={index}>
                    <HStack align="start" gap={4}>
                      <Box
                        minW="28px"
                        h="28px"
                        bg="brand.primary"
                        color="brand.white"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                      >
                        {index + 1}
                      </Box>
                      <Text>{item}</Text>
                    </HStack>
                  </List.Item>
                ))}
              </List.Root>
            </Box>
          </Box>
          <Box flex="1">
            <Image
              src={InsuranceImg}
              alt="Dealing with the Office"
              borderRadius="2xl"
              boxShadow="xl"
              objectFit="cover"
              w="100%"
              maxH="450px"
            />
          </Box>
        </Flex>
        </Box>
      </Container>
    </>
  );
};

export default AssociateCodeOfConduct;







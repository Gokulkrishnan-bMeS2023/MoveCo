import {
  Box,
  Text,
  Icon,
  Container,
  Heading,
  Flex,
  SimpleGrid,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import InsuranceImg from "../../assets/modifiedbanner.png";
import Button from "../../components/common/Button/Button";
import {
  FaComments,
  FaDollarSign,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaTruckMoving,
  FaBoxes,
  FaCheckCircle,
} from "react-icons/fa";

const OurStandard = () => {
  const professionalStandards = [
    {
      title: "Licensing & Compliance",
      items: [
        "Registered with Texas Department of Motor Vehicles (TX DMV)",
        "Registered with US Department of Transportation (US DOT)",
        "$50,000 bonded company",
        "Member in good standing with the Chamber of Commerce",
        "Compliant with all state and federal regulations",
      ],
    },
    {
      title: "Safety & Staff Policies",
      items: [
        "Background-checked movers",
        "Random drug testing for associates",
        "Formal associate conduct policy",
        "Enforced professional dress code",
        "All drivers have a minimum of 2 years experience",
      ],
    },
    {
      title: "Equipment & Operations",
      items: [
        "Late-model trucks and professional moving equipment",
        "GPS-tracked fleet for real-time location updates",
        "Exclusive use of our trucks — one move at a time",
        "Professional packing tools and materials",
      ],
    },
    {
      title: "Pricing & Customer Protection",
      items: [
        "Guaranteed move prices with no hidden costs",
        "No hourly rates or clock watching",
        "Upfront itemized online quotes",
        "In-house policy to repair or replace damaged items",
      ],
    },
  ];

  const benefits = [
    {
      icon: FaComments,
      text: "Online feedback board for customers to post reviews",
    },
    {
      icon: FaDollarSign,
      text: "Guaranteed move prices with no hidden costs",
    },
    {
      icon: FaClock,
      text: "Guaranteed pick up and delivery dates",
    },
    {
      icon: FaMapMarkerAlt,
      text: "GPS tracked trucks for real-time location updates",
    },
    {
      icon: FaCheckCircle,
      text: "Membership in good standing with BBB & SMA",
    },
    {
      icon: FaShieldAlt,
      text: "2 Million dollars General Liability Insurance",
    },
    {
      icon: FaBoxes,
      text: "$50,000 Standard Cargo Insurance coverage",
    },
    {
      icon: FaTruckMoving,
      text: "Furniture placed exactly where you want it in each room",
    },
  ];

  return (
    <div>
      <Container maxW="100%" px={8} py={12}>
        {/* <Box> */}
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
            <Heading as={"h2"} color="brand.white" fontWeight="normal" mb={4}>
              Our Standard
            </Heading>
          </Box>
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12}>
        <Box>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Benifits"
          />
          <Flex
            mt={6}
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 10 }}
          >
            <Box maxW="600px" w="100%">
              <Heading as="h1" fontWeight="normal" mb={2}>
                Our <br />{" "}
                <Text as="span" color="brand.primary">
                  Standards
                </Text>
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                For more than 100 years experience, We move coast to coast under
                our own authority.
              </Text>
            </Box>
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8} mt={12}>
            {benefits.map((item, index) => (
              <Box
                key={index}
                role="group"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="2xl"
                p={8}
                textAlign="center"
                minH="320px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px) scale(1.04)",
                  boxShadow: "2xl",
                  borderColor: "brand.primary",
                }}
              >
                <Box
                  w="125px"
                  h="125px"
                  bg="brand.primary"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={6}
                  transition="all 0.3s ease"
                  _groupHover={{
                    transform: "scale(1.15)",
                  }}
                >
                  <Icon as={item.icon} boxSize={14} color="white" />
                </Box>
                <Text textStyle="size-2xl">{item.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
      <Container>
        <Flex
          mt={6}
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
        >
          <Box maxW="600px" w="100%">
            <Heading as="h1" fontWeight="normal" mb={2}>
              <Text as="span" color="brand.primary">
                MoveCo <br />
              </Text>
              Professional Standards
            </Heading>
          </Box>
          <Box maxW="430px" w="100%">
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
            >
              Our professional standards ensure safety, compliance, and
              transparency on every move.
            </Text>
          </Box>
        </Flex>
        <Box mt={16}>
          <AccordionRoot multiple style={{ padding: "0px" }}>
            {professionalStandards.map((section, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                borderBottom="1px solid"
                borderColor="gray.200"
                py={4}
              >
                <AccordionItemTrigger
                  px={0}
                  py={2}
                  _hover={{
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                  }}
                >
                  <Flex flex="1" align="center" justify="space-between">
                    <Text textStyle="size-2xl">{section.title}</Text>
                    <AccordionItemIndicator>
                      <Icon as={FaPlus} boxSize={4} fontWeight="normal" />
                    </AccordionItemIndicator>
                  </Flex>
                </AccordionItemTrigger>
                <AccordionItemContent pt={4} color="gray.600">
                  <Box as="ul" pl={6} listStyleType="none">
                    {section.items.map((item, i) => (
                      <Text as="li" key={i} textStyle="size-lg" mb={2}>
                        <Text as="span" color="brand.primary" mr={2}>
                          ➣
                        </Text>
                        {item}
                      </Text>
                    ))}
                  </Box>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Box>
      </Container>
    </div>
  );
};

export default OurStandard;

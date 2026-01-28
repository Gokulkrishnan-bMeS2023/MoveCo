import {
  Box,
  SimpleGrid,
  Text,
  Icon,
  Container,
  Heading,
  Flex,
  Image,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
} from "@chakra-ui/react";
import InsuranceImg from "../../assets/modifiedbanner.png";
import Button from "../../components/common/Button/Button";
import pakerImg from "../../assets/packer.jpg";
import {
  FaDollarSign,
  FaShieldAlt,
  FaBoxOpen,
  FaTools,
  FaClipboardList,
  FaBalanceScale,
  FaPlus,
} from "react-icons/fa";

const OurInsurance = () => {
  const coverageFeatures = [
    { icon: FaBoxOpen, text: "$40,000 Standard Cargo Insurance" },
    { icon: FaClipboardList, text: "$50,000 Bond Coverage" },
    { icon: FaShieldAlt, text: "$2 Million General Liability Insurance" },
    { icon: FaTools, text: "MoveCo In-House Damage Policy" },
    { icon: FaDollarSign, text: "Optional Additional Valuation" },
    { icon: FaBalanceScale, text: "BBB, SMA & TX DMV Arbitration" },
  ];

  const policyExamples = [
    {
      title: "Wood Furniture & Minor Repairs",
      description:
        "Almost all damages are a nick or scratch on the piece of wood furniture. Wood furniture can almost always be repaired by a professional company. If a glass top or a mirror was broken a new piece could easily be custom cut to replace the broken piece. If an item could not be repaired a settlement offer would be given considering current market value. All repair/settlement decisions that are above the state’s 60 cents per lbs requirement, are made at MoveCo.net’s sole discretion. We get most of our business for referrals this is a means of promoting customer service.",
    },
    {
      title: "High-Value Furniture",
      description:
        "If you have extremely valuable furniture you may consider purchasing the additional valuation.",
    },
    {
      title: "Art & Antiques",
      description:
        "If you have any art or antiques of considerable value you may consider purchasing third-party art insurance.",
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
              Our Insurance
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
            label="Our Insurance"
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
                Why Insurance Matters <br />
                In{" "}
                <Text as="span" color="brand.primary">
                  MoveCo?
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
          <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
            <Box w="100%" maxW={{ base: "100%", md: "550px" }}>
              <Image
                src={pakerImg}
                alt="footprint"
                w="100%"
                h="auto"
                mt={6}
                borderRadius="2xl"
              />
            </Box>
            <Box py={4}>
              <Button
                fontSize="xl"
                rounded="full"
                variant="primary"
                label="Our Mission"
              />
              <Text mt={6} textStyle="size-3xl">
                No one expects anything to get damaged during a move. But life
                does happen, no matter how careful you are. That’s why we’ve
                built one of the most efficient and streamlined damage claim
                processes in the industry. Our philosophy is simple—if something
                gets broken or damaged, we make it right. There’s no reason we
                can’t fix the issue and keep you as a happy customer.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12}>
        <Box>
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Our Coverage"
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
                <Text as="span" color="brand.primary">
                  With MoveCo, <br />
                </Text>
                You’re Covered in Every Way
              </Heading>
            </Box>
            <Box maxW="430px" w="100%">
              <Text
                textStyle="size-2xl"
                textAlign={{ base: "left", md: "right" }}
              >
                Our coverage options are designed to protect your belongings and
                give you peace of mind.
              </Text>
            </Box>
          </Flex>
          {/* <Features /> */}
          <SimpleGrid
            mt={12}
            columns={{ base: 1, sm: 2, md: 4 }}
            gap={8}
            
          >
            {coverageFeatures.map((item, index) => (
              <Box
                key={index}
                role="group"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="2xl"
                p={8}
                w="100%"
                minH="340px"
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
                {/* ICON */}
                <Box
                  w="125px"
                  h="125px"
                  bg="brand.primary"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                  transition="all 0.3s ease"
                  _groupHover={{ transform: "scale(1.15)" }}
                >
                  <Icon as={item.icon} boxSize={12} color="white" />
                </Box>

                {/* TEXT */}
                <Text textAlign="center" textStyle="size-2xl">
                  {item.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
      <Container maxW="100%" px={8} py={12} bg={"white"}>
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
              In-House Policy
            </Heading>
          </Box>
          <Box maxW="430px" w="100%">
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
            >
              Our movers are experienced and very careful, and we back this up
              with an in-house policy.
            </Text>
          </Box>
        </Flex>
        <Box mt={16}>
          <Box p={0}>
            <AccordionRoot multiple style={{ padding: "0px" }}>
              {policyExamples.map((example, index) => (
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
                    <Flex
                      flex="1"
                      align="center"
                      justify="space-between"
                      cursor="pointer"
                    >
                      <Flex align="center">
                        {/* <Icon as={example.icon} mr={3} color="brand.primary" /> */}
                        <Text textStyle="size-2xl">{example.title}</Text>
                      </Flex>
                      <AccordionItemIndicator>
                        <Icon as={FaPlus} boxSize={4} fontWeight="normal" />
                      </AccordionItemIndicator>
                    </Flex>
                  </AccordionItemTrigger>
                  <AccordionItemContent pt={4} color="gray.600">
                    <Text textStyle="size-lg">{example.description}</Text>
                  </AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default OurInsurance;

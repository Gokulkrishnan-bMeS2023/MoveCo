import {
  Box,
  Text,
  Icon,
  Container,
  Heading,
  Flex,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
} from "@chakra-ui/react";
import {
  
  FaPlus
} from "react-icons/fa";
import InsuranceImg from "../../assets/modifiedbanner.png";
import BenefitsGrid from "./BenefitsGrid";
import Button from "../../components/common/Button/Button";




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

  return <div>
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
          <BenefitsGrid />
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
      Our professional standards ensure safety, compliance, and transparency
      on every move.
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
            <Text textStyle="size-2xl">
              {section.title}
            </Text>

            <AccordionItemIndicator>
              <Icon as={FaPlus} boxSize={4} fontWeight="normal" />
            </AccordionItemIndicator>
          </Flex>
        </AccordionItemTrigger>

        <AccordionItemContent pt={4} color="gray.600">
          <Box as="ul" pl={4}>
            {section.items.map((item, i) => (
              <Text as="li" key={i} textStyle="size-lg" mb={2}>
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
};

export default OurStandard;

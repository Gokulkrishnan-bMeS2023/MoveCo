// import {
//   Box,
//   Heading,
//   Text,
//   Flex,
//   Container,
//   Stack,
//   SimpleGrid,
// } from "@chakra-ui/react";
// import CardTemplate from "../../../AboutUs/AboutUsComponents/CardTemplate";
// import CommonAccordion from "../../../AboutUs/AboutUsComponents/CommonAccordion";
// import { quoteIncludesData, quoteInfoSections } from "./data";
// import Badge from "../../../../components/common/Badge/Badge";
// import TableSection from "./TableSection";

// const Confirmation = () => {
//   return (
//     <>
//       <Container>
//         <Flex
//           direction="column"
//           align="flex-start"
//           mb={{ base: 4, lg: 6 }}
//           gap={{ base: 4, md: 10 }}
//         >
//           <Box maxW="800px" w="100%">
//             <Heading as="h1" fontWeight="normal" textAlign={{ base: "center", md: "left" }}>
//               Quote for your{" "}
//               <Text as="span" color="brand.primary">Move</Text>
//             </Heading>
//           </Box>
//         </Flex>

//         {/* ── Quote Confirmation ── */}
//         <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
//           <Stack gap={4}>
//             <Heading as="h3" color="brand.primary" fontWeight="normal">Quote Confirmation</Heading>
//             <TableSection
//               columns={["Quote No", "Moving Price", "Packing Price", "Total Price"]}
//               rows={[["80160", "$0.00", "$0.00", "$0.00"]]}
//             />
//             <Box>
//               <Text fontWeight="normal" textStyle="size-lg">
//                 Thank you for receiving a quote with MoveCo.net. Please take a moment to read what your quote includes.
//               </Text>
//             </Box>
//           </Stack>
//         </Box>

//         {/* ── ReCAPTCHA ── */}
//         <Box pt="sectionTop">
//           <Box bg="brand.gray/20" borderRadius="md" p={4} border="1px solid" borderColor="gray.200">
//             <Flex align="center" gap={6} flexWrap="wrap">
//               {/* <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={(val) => console.log(val)} /> */}
//               <Text textStyle="size-lg" flexWrap="nowrap">
//                 You can reserve your move date by{" "}
//                 <Text as="span" color="brand.primary" fontWeight="medium">clicking here</Text>
//               </Text>
//             </Flex>
//           </Box>
//         </Box>

//         {/* ── Quote Includes ── */}
//         <Box pt="sectionTop">
//           <Flex justify={{ base: "center", md: "flex-start" }}>
//             <Badge label="Includes" mb={4} />
//           </Flex>
//           <Flex direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} justify="space-between" gap={{ base: 4, md: 10 }} mb={{ base: 4, lg: 6 }}>
//             <Box maxW="600px" w="100%">
//               <Heading as="h1" fontWeight="normal" textAlign={{ base: "center", md: "left" }}>
//                 Your Quote{" "}<Text as="span" color="brand.primary">Includes</Text>
//               </Heading>
//             </Box>
//             <Box maxW="430px" w="100%">
//               <Text textStyle="size-2xl" textAlign={{ base: "center", md: "right" }}>
//                 Every quote covers insurance, protection, and full-service care — no hidden costs, no surprises.
//               </Text>
//             </Box>
//           </Flex>
//           <CardTemplate data={quoteIncludesData} />
//         </Box>

//         <Box pt="sectionTop">
//           <Stack gap="sectionTop">

//             {/* ── Customer Information ── */}
//             <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
//               <Stack gap={4}>
//                 <Heading as="h3" color="brand.primary" fontWeight="normal">Customer Information</Heading>
//                 <TableSection
//                   columns={["Customer Name", "Address"]}
//                   rows={[["-", "TX 49839."]]}
//                 />
//               </Stack>
//             </Box>

//             <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
//               <Stack gap={4}>
//                 <Heading as="h3" color="brand.primary" fontWeight="normal">Contact Information</Heading>
//                 <TableSection
//                   columns={["Primary Phone", "Mobile Phone", "Work Phone", "Home Phone"]}
//                   rows={[["(883)-748-7384", "-", "-", "-"]]}
//                 />
//               </Stack>
//             </Box>

//             {/* ── Trucks ── */}
//             <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
//               <Stack gap={4}>
//                 <Heading as="h3" color="brand.primary" fontWeight="normal">
//                   Your moving quote is based on the following inventory and conditions
//                 </Heading>
//                 <Text textStyle="size-sm" fontWeight="semibold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={2}>Trucks</Text>
//                 <TableSection
//                   columns={["Quantity", "Description"]}
//                   rows={[["0", "24 Foot Truck"]]}
//                 />
//               </Stack>
//             </Box>

//             {/* ── Inventory ── */}
//             <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
//               <Stack gap={4}>
//                 <Heading as="h3" color="brand.primary" fontWeight="normal">Inventory</Heading>
//                 <Box border="1px solid" borderColor="gray.200" overflow="hidden">
//                   <TableSection columns={["Additional Information"]} rows={[["-"]]} />
//                   <Flex justify="space-between" align="center" px={4} py={3} bg="brand.gray/20" borderTop="1px solid" borderColor="brand.gray">
//                     <Text textStyle="size-lg" color="brand.gray">*Any gratuities must be given directly to the movers</Text>
//                     <Text fontWeight="bold" textStyle="size-lg" color="brand.primary">Grand total : $0.00</Text>
//                   </Flex>
//                 </Box>
//               </Stack>
//             </Box>

//             <Box bg="brand.white" p={{ base: 6, md: 8 }} borderRadius="2xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
//               <Stack gap={4}>
//                 <Heading as="h3" color="brand.primary" fontWeight="normal">Map & Directions</Heading>

//                 <Text textStyle="size-sm" fontWeight="semibold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={2}>Start Address</Text>
//                 <Box border="1px solid" borderColor="brand.gray" overflow="hidden">
//                   <Box overflowX="auto">
//                     <Box minW="600px">
//                       <TableSection
//                         columns={["Address", "City", "State", "Zipcode", "Door Distance / Stairs"]}
//                         rows={[["-", "-", "TX", "49839", "Less than 100 Feets/0"]]}
//                       />
//                     </Box>
//                   </Box>
//                 </Box>

//                 <Text textStyle="size-sm" fontWeight="semibold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={2}>End Address</Text>
//                 <Box border="1px solid" borderColor="brand.gray" overflow="hidden">
//                   <Box overflowX="auto">
//                     <Box minW="600px">
//                       <TableSection
//                         columns={["Address", "City", "State", "Zipcode", "Door Distance / Stairs"]}
//                         rows={[["-", "-", "TX", "98594", "Less than 100 Feets/0"]]}
//                       />
//                     </Box>
//                   </Box>
//                 </Box>

//                 <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={4}>
//                   <Box border="1px solid" borderColor="gray.200" borderRadius="lg" overflow="hidden" h="350px">
//                     <iframe
//                       title="Move Directions"
//                       width="100%"
//                       height="350"
//                       style={{ border: 0, display: "block" }}
//                       loading="lazy"
//                       src="https://www.google.com/maps?q=TX+49839+to+TX+98594&output=embed"
//                     />
//                   </Box>
//                   <Box>
//                     <Text fontWeight="normal" textStyle="size-lg" mb={4}>Total Distance: 0 km</Text>
//                     <Box bg="brand.gray/30" px={4} py={3} mb={2}>
//                       <Text textStyle="size-lg">Froste Ln, Winters, TX 79567, USA</Text>
//                     </Box>
//                     <Box px={2} py={3} mb={2}>
//                       <Text textStyle="size-lg" color="brand.gray" mb={2}>1 ft. About 1 min</Text>
//                       <Text textStyle="size-lg">
//                         1. Head on <Text as="span" fontWeight="bold">Froste Ln</Text> 1 ft
//                       </Text>
//                       <Text textStyle="size-lg" color="brand.gray" mt={1}>Restricted usage road</Text>
//                     </Box>
//                     <Box bg="brand.gray/30" px={4} py={3} mb={4}>
//                       <Text textStyle="size-lg">Froste Ln, Winters, TX 79567, USA</Text>
//                     </Box>
//                     <Text textStyle="size-lg" color="brand.gray">Powered by Google, ©2026 Google</Text>
//                   </Box>
//                 </SimpleGrid>
//               </Stack>
//             </Box>

//           </Stack>
//         </Box>
//       </Container>

//       {/* ── What Your Quote Includes ── */}
//       <Box pt="sectionTop">
//         <Box bg="brand.white" px="-8">
//           <Container px={8} pt={4} pb={10}>
//             <Flex mb={{ base: 4, lg: 6 }} direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} justify="space-between" gap={{ base: 4, md: 10 }}>
//               <Box maxW="600px" w="100%">
//                 <Heading as="h1" fontWeight="normal" textAlign={{ base: "center", md: "left" }}>
//                   <Text as="span" color="brand.primary">MoveCo <br /></Text>
//                   What Your Quote Includes
//                 </Heading>
//               </Box>
//               <Box maxW="430px" w="100%">
//                 <Text textStyle="size-2xl" textAlign={{ base: "center", md: "right" }}>
//                   Everything you need to know about your move — pricing, crew, equipment, and customer protection
//                 </Text>
//               </Box>
//             </Flex>
//             <CommonAccordion sections={quoteInfoSections} />
//           </Container>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Confirmation;

//2

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  Stack,
  SimpleGrid,
  Spinner,
  Center,
} from "@chakra-ui/react";
import CardTemplate from "../../../AboutUs/AboutUsComponents/CardTemplate";
import CommonAccordion from "../../../AboutUs/AboutUsComponents/CommonAccordion";
import { quoteIncludesData, quoteInfoSections } from "./data";
import Badge from "../../../../components/common/Badge/Badge";
import TableSection from "./TableSection";

// ── Types ──────────────────────────────────────────────────────────────────
interface QuoteAddress {
  quoteAddressID: number;
  quoteID: number;
  displayOrder: number;
  addressOne: string;
  addressTwo: string;
  city: string;
  state: string;
  zipcode: string;
  stairFlight: number;
  feetDistance: number;
  latitude: number;
  longitude: number;
  miles: number;
}

interface QuoteInventory {
  categoryID: number;
  inventoryID: number;
  category: string;
  inventory: string;
  weight: number;
  cubicFeet: number;
  price: number;
  qty: number;
}

interface QuoteData {
  quote: {
    quoteID: number;
    customerID: number;
    quoteNumber: string;
    moveSize: string;
    referredBy: string;
    moveTimeRange: string;
    dropOffTimeRange: string;
    notes: string;
    estimatedMileage: number;
    movePrice: number;
    fuelCost: number;
    fuelPrice: number;
    cleaningPrice: number;
    trucks: number;
    moveDate: string;
    dropOffDate: string;
  };
  addresses: QuoteAddress[];
  inventories: QuoteInventory[];
  movePrice: number;
  packagePrice: number;
  totalPrice: number;
  origin: QuoteAddress;
  destination: QuoteAddress;
}

// ── Helpers ────────────────────────────────────────────────────────────────
const fmt = (val: string | number | null | undefined, fallback = "-") => {
  if (val === null || val === undefined || val === "" || val === 0)
    return fallback;
  return String(val);
};

const fmtCurrency = (val: number | null | undefined) => {
  if (val === null || val === undefined) return "$0.00";
  return `$${Number(val).toFixed(2)}`;
};

const fmtDate = (iso: string | null | undefined) => {
  if (!iso) return "-";
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? "-"
    : d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
};

const fmtAddress = (addr: QuoteAddress | undefined) => {
  if (!addr) return "-";
  const parts = [
    addr.addressOne,
    addr.addressTwo,
    addr.city,
    addr.state,
    addr.zipcode,
  ].filter(Boolean);
  return parts.length
    ? parts.join(", ")
    : `${addr.state} ${addr.zipcode}`.trim() || "-";
};

const stairsLabel = (flights: number) =>
  flights === 0 ? "0 flights" : `${flights} flight${flights !== 1 ? "s" : ""}`;

const distanceLabel = (feet: number) =>
  feet === 0 ? "Less than 100 Feet" : `${feet} ft`;

// ── Component ──────────────────────────────────────────────────────────────
const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quoteId: number | undefined = location.state?.quoteId;

  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Guard: must arrive from the app with a quoteId
    if (!location.state?.fromApp || !quoteId) {
      navigate("/", { replace: true });
      return;
    }

    const fetchQuote = async () => {
      try {
        const res = await fetch(
          `https://moveco.runasp.net/api/quotes/${quoteId}`,
        );
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        const data: QuoteData = await res.json();
        setQuoteData(data);
      } catch (err: any) {
        console.error("Failed to fetch quote:", err);
        setError(err?.message || "Failed to load quote details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, [quoteId, location.state, navigate]);

  // ── Loading ──────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <Center minH="60vh">
        <Stack align="center" gap={4}>
          <Spinner size="xl" color="brand.primary" />
          <Text textStyle="size-lg" color="gray.500">
            Loading your quote…
          </Text>
        </Stack>
      </Center>
    );
  }

  // ── Error ────────────────────────────────────────────────────────────────
  if (error || !quoteData) {
    return (
      <Center minH="60vh">
        <Stack align="center" gap={4}>
          <Text textStyle="size-xl" color="red.500" fontWeight="medium">
            {error || "Quote not found."}
          </Text>
          <Text textStyle="size-lg" color="gray.500">
            Please try again or contact support.
          </Text>
        </Stack>
      </Center>
    );
  }

  const { quote, inventories, origin, destination } = quoteData;

  // Build Google Maps embed src from lat/lng
  const mapSrc =
    origin?.latitude && destination?.latitude
      ? `https://www.google.com/maps?q=${origin.latitude},${origin.longitude}+to+${destination.latitude},${destination.longitude}&output=embed`
      : `https://www.google.com/maps?q=${origin?.state}+${origin?.zipcode}+to+${destination?.state}+${destination?.zipcode}&output=embed`;

  return (
    <>
      <Container>
        <Flex
          direction="column"
          align="flex-start"
          mb={{ base: 4, lg: 6 }}
          gap={{ base: 4, md: 10 }}
        >
          <Box maxW="800px" w="100%">
            <Heading
              as="h1"
              fontWeight="normal"
              textAlign={{ base: "center", md: "left" }}
            >
              Quote for your{" "}
              <Text as="span" color="brand.primary">
                Move
              </Text>
            </Heading>
          </Box>
        </Flex>

        <Box
          bg="brand.white"
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <Stack gap={4}>
            <Heading as="h3" color="brand.primary" fontWeight="normal">
              Quote Confirmation
            </Heading>
            <TableSection
              columns={[
                "Quote No",
                "Move Date",
                "Move Size",
                "Estimated Miles",
              ]}
              rows={[
                [
                  fmt(quote.quoteNumber),
                  fmtDate(quote.moveDate),
                  fmt(quote.moveSize),
                  fmt(
                    quote.estimatedMileage > 0
                      ? `${quote.estimatedMileage} mi`
                      : null,
                  ),
                ],
              ]}
            />
            <TableSection
              columns={[
                "Moving Price",
                "Package Price",
                "Fuel Price",
                "Total Price",
              ]}
              rows={[
                [
                  fmtCurrency(quoteData.movePrice),
                  fmtCurrency(quoteData.packagePrice),
                  fmtCurrency(quote.fuelPrice),
                  fmtCurrency(quoteData.totalPrice),
                ],
              ]}
            />
            <Box>
              <Text fontWeight="normal" textStyle="size-lg">
                Thank you for receiving a quote with MoveCo.net. Please take a
                moment to read what your quote includes.
              </Text>
            </Box>
          </Stack>
        </Box>

        {/* ── ReCAPTCHA ── */}
        <Box pt="sectionTop">
          <Box
            bg="brand.gray/20"
            borderRadius="md"
            p={4}
            border="1px solid"
            borderColor="gray.200"
          >
            <Flex align="center" gap={6} flexWrap="wrap">
              <Text textStyle="size-lg" flexWrap="nowrap">
                You can reserve your move date by{" "}
                <Text as="span" color="brand.primary" fontWeight="medium">
                  clicking here
                </Text>
              </Text>
            </Flex>
          </Box>
        </Box>

        {/* ── Quote Includes ── */}
        <Box pt="sectionTop">
          <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Badge label="Includes" mb={4} />
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align="center"
            mb={{ base: 4, lg: 6 }}
            gap={{ base: 4, lg: 12 }}
          >
              <Heading
                 as="h1"
              fontWeight="normal"
              maxW={{ lg: "45%" }}
              textAlign={{ base: "center", lg: "left" }}
              >
                Your Quote{" "}
                <Text as="span" color="brand.primary">
                  Includes
                </Text>
              </Heading>
              <Text
                 textStyle={"size-2xl"}
              textAlign={{ base: "center", lg: "right" }}
              maxW={{ lg: "45%" }}
              >
                Every quote covers insurance, protection, and full-service care
                — no hidden costs, no surprises.
              </Text>
          </Flex>
          <CardTemplate data={quoteIncludesData} />
        </Box>

        <Box pt="sectionTop">
          <Stack gap="sectionTop">
            {/* ── Move Details ── */}
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Move Details
                </Heading>
                <TableSection
                  columns={[
                    "Move Date",
                    "Move Time",
                    "Drop-off Date",
                    "Drop-off Time",
                  ]}
                  rows={[
                    [
                      fmtDate(quote.moveDate),
                      fmt(quote.moveTimeRange),
                      fmtDate(quote.dropOffDate),
                      fmt(quote.dropOffTimeRange),
                    ],
                  ]}
                />
              </Stack>
            </Box>

            {/* ── Trucks ── */}
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Your moving quote is based on the following inventory and
                  conditions
                </Heading>
                <Text
                  textStyle="size-sm"
                  fontWeight="semibold"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={2}
                >
                  Trucks
                </Text>
                <TableSection
                  columns={["Quantity", "Description"]}
                  rows={[[fmt(quote.trucks, "0"), "24 Foot Truck"]]}
                />
              </Stack>
            </Box>

            {/* ── Inventory ── */}
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Inventory
                </Heading>
                <Box
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                >
                  {inventories && inventories.length > 0 ? (
                    <TableSection
                      columns={[
                        "Category",
                        "Item",
                        "Qty",
                        "Weight (lbs)",
                        "Cubic Ft",
                      ]}
                      rows={inventories.map((item) => [
                        fmt(item.category),
                        fmt(item.inventory),
                        fmt(item.qty),
                        fmt(item.weight),
                        fmt(item.cubicFeet),
                      ])}
                    />
                  ) : (
                    <TableSection
                      columns={["Additional Information"]}
                      rows={[[quote.notes || "-"]]}
                    />
                  )}
                  <Flex
                    justify="space-between"
                    align="center"
                    px={4}
                    py={3}
                    bg="brand.gray/20"
                    borderTop="1px solid"
                    borderColor="brand.gray"
                  >
                    <Text textStyle="size-lg" color="brand.gray">
                      *Any gratuities must be given directly to the movers
                    </Text>
                    <Text
                      fontWeight="bold"
                      textStyle="size-lg"
                      color="brand.primary"
                    >
                      Grand total : {fmtCurrency(quoteData.totalPrice)}
                    </Text>
                  </Flex>
                </Box>
              </Stack>
            </Box>

            {/* ── Map & Directions ── */}
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Map & Directions
                </Heading>

                <Text
                  textStyle="size-sm"
                  fontWeight="semibold"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={2}
                >
                  Start Address
                </Text>
                <Box
                  border="1px solid"
                  borderColor="brand.gray"
                  overflow="hidden"
                >
                  <Box overflowX="auto">
                    <Box minW="600px">
                      <TableSection
                        columns={[
                          "Address",
                          "City",
                          "State",
                          "Zipcode",
                          "Door Distance / Stairs",
                        ]}
                        rows={[
                          [
                            fmt(origin?.addressOne),
                            fmt(origin?.city),
                            fmt(origin?.state),
                            fmt(origin?.zipcode),
                            `${distanceLabel(origin?.feetDistance ?? 0)} / ${stairsLabel(origin?.stairFlight ?? 0)}`,
                          ],
                        ]}
                      />
                    </Box>
                  </Box>
                </Box>

                <Text
                  textStyle="size-sm"
                  fontWeight="semibold"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={2}
                >
                  End Address
                </Text>
                <Box
                  border="1px solid"
                  borderColor="brand.gray"
                  overflow="hidden"
                >
                  <Box overflowX="auto">
                    <Box minW="600px">
                      <TableSection
                        columns={[
                          "Address",
                          "City",
                          "State",
                          "Zipcode",
                          "Door Distance / Stairs",
                        ]}
                        rows={[
                          [
                            fmt(destination?.addressOne),
                            fmt(destination?.city),
                            fmt(destination?.state),
                            fmt(destination?.zipcode),
                            `${distanceLabel(destination?.feetDistance ?? 0)} / ${stairsLabel(destination?.stairFlight ?? 0)}`,
                          ],
                        ]}
                      />
                    </Box>
                  </Box>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={4}>
                  <Box
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    overflow="hidden"
                    h="350px"
                  >
                    <iframe
                      title="Move Directions"
                      width="100%"
                      height="350"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                      src={mapSrc}
                    />
                  </Box>
                  <Box>
                    <Text fontWeight="normal" textStyle="size-lg" mb={4}>
                      Total Distance:{" "}
                      {quote.estimatedMileage > 0
                        ? `${quote.estimatedMileage} miles`
                        : "0 km"}
                    </Text>
                    <Box bg="brand.gray/30" px={4} py={3} mb={2}>
                      <Text textStyle="size-lg">{fmtAddress(origin)}</Text>
                    </Box>
                    <Box bg="brand.gray/30" px={4} py={3} mb={4}>
                      <Text textStyle="size-lg">{fmtAddress(destination)}</Text>
                    </Box>
                    <Text textStyle="size-lg" color="brand.gray">
                      Powered by Google, ©2026 Google
                    </Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>

      <Box bg={"brand.white"} px="-8">
        <Container px={8} pt={4} pb={10}>
            <Flex
              direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 4, lg: 10 }}
            mb={{ base: 4, lg: 6 }}
            >
                <Heading
                  as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{base: "center",lg:"left"}}
                >
                  <Text as="span" color="brand.primary">
                    MoveCo <br />
                  </Text>
                  What Your Quote Includes
                </Heading>
                <Text
                  textStyle="size-2xl"
                maxW={{ lg: "45%" }}
                textAlign={{ base: "center", lg: "right" }}
                >
                  Everything you need to know about your move — pricing, crew,
                  equipment, and customer protection
                </Text>
            </Flex>
            <CommonAccordion sections={quoteInfoSections} />
          </Container>
        </Box>
    </>
  );
};

export default Confirmation;

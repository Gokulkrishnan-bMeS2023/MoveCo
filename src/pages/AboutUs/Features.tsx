import { Box, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import {
  FaTruckMoving,
  FaDollarSign,
  FaHouseDamage,
  FaBoxOpen,
  FaCogs,
  FaShieldAlt,
  FaClipboardList,
  FaTools,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface FeatureItem {
  icon: IconType;
  text: string;
}

const primaryFeatures: FeatureItem[] = [
  {
    icon: FaTruckMoving,
    text: "Moving the furniture where you want it in each room",
  },
  {
    icon: FaDollarSign,
    text: "All manpower, fuel, truck, trailer, pad and equipment costs",
  },
  {
    icon: FaHouseDamage,
    text: "House policy to repair or replace items damaged during the move",
  },
  {
    icon: FaBoxOpen,
    text: "$40,000 Standard cargo insurance",
  },
  {
    icon: FaCogs,
    text: "Your consumer rights with the BBB & SMA",
  },
  {
    icon: FaShieldAlt,
    text: "2 Million General Liability Insurance",
  },
  {
    icon: FaClipboardList,
    text: "Bond worth of $50,000",
  },
  {
    icon: FaTools,
    text: "Free disassembly and reassembly of household items",
  },
];

const FeatureGrid = ({ items }: { items: FeatureItem[] }) => (
  <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={6}>
    {items.map((item, index) => (
      <Box
        key={index}
        role="group"
        bg="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="2xl"
        p={8}
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
          <Icon as={item.icon} boxSize={14} color="brand.white" />
        </Box>

        {/* TEXT */}
        <Text textAlign="center" textStyle="size-2xl">
          {item.text}
        </Text>
      </Box>
    ))}
  </SimpleGrid>
);

export default function InsuranceFeatures() {
  return (
    <>
      <FeatureGrid items={primaryFeatures} />

    </>
  );
}

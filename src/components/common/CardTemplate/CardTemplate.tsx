import { Box, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

export interface IconGridItem {
  icon: IconType;
  text: string;
}

interface CommonIconGridProps {
  data: IconGridItem[];
  columns?: { base?: number; sm?: number; md?: number };
}

export default function CommonIconGrid({
  data,
  columns = { base: 1, sm: 2, md: 4 },
}: CommonIconGridProps) {
  return (
    <SimpleGrid columns={columns} gap={8}>
      {data.map((item, index) => (
        <Box
          key={index}
          role="group"
          bg="brand.white"
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
            _groupHover={{ transform: "scale(1.15)" }}
          >
            <Icon as={item.icon} boxSize={14} color="brand.white" />
          </Box>

          <Text textStyle="size-2xl">{item.text}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

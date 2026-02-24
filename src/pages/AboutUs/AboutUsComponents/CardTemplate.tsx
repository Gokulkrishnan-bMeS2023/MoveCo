import { Box, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { memo } from "react";
import type { IconType } from "react-icons";

export interface IconGridItem {
  icon: IconType;
  text: string;
}

interface CommonIconGridProps {
  data: IconGridItem[];
  columns?: { base?: number; md?: number; lg?: number };
}

const IconGridCard = memo(function IconGridCard({
  item,
}: {
  item: IconGridItem;
}) {
  return (
    <Box
      role="group"
      bg="brand.white"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="2xl"
      display="flex"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px) scale(1.04)",
        boxShadow: "2xl",
        borderColor: "brand.primary",
      }}
      flexDirection={{ base: "row", md: "column" }}
      alignItems="center"
      p={{ base: 4, md: 8 }}
      minH={{ base: "unset", md: "320px" }}
      gap={{ base: 4, md: 0 }}
    >
      <Box
        flexShrink={0}
        bg="brand.primary"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        transition="all 0.3s ease"
        _groupHover={{ transform: "scale(1.15)" }}
        w={{ base: "60px", md: "125px" }}
        h={{ base: "60px", md: "125px" }}
        mx={{ base: 0, md: "auto" }}
        mb={{ base: 0, md: 6 }}
      >
        <Icon
          as={item.icon}
          boxSize={{ base: 7, md: 14 }}
          color="brand.white"
        />
      </Box>
      <Text
        textStyle="size-2xl"
        textAlign={{ base: "left", md: "center" }}
        fontSize={{ base: "md", md: undefined }}
        fontWeight={{ base: "semibold", md: undefined }}
        lineHeight="1.3"
      >
        {item.text}
      </Text>
    </Box>
  );
});

const CommonIconGrid = memo(function CommonIconGrid({
  data,
  columns = { base: 1, md: 2, lg: 4 },
}: CommonIconGridProps) {
  return (
    <SimpleGrid columns={columns} gap={{ base: 3, md: 8 }}>
      {data.map((item, index) => (
        <IconGridCard key={index} item={item} />
      ))}
    </SimpleGrid>
  );
});

export default CommonIconGrid;

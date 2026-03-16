import { Box, SimpleGrid, Flex, Text, Image } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Badge from "../../../components/common/Badge/Badge";

interface LogoItem {
  src: string;
  alt: string;
}

interface LogoPanelColumn {
  heading: string;
  logos: [LogoItem, LogoItem];
}

interface TextWithLogoPanelProps {
  leftColumn: LogoPanelColumn;
  rightColumn: LogoPanelColumn;
  buttonLabel?: string;
  content: ReactNode;
  reverse?: boolean;
}

const LogoCard = ({ column }: { column: LogoPanelColumn }) => {
  return (
    <Box
      bg="brand.white"
      borderRadius="2xl"
      boxShadow="md"
      w="100%"
      h="100%"
      p={2}
    >
      <Flex justify="center" align="center" py={{base:4,lg:8}}>
        <Text
          textStyle="size-xl"
          fontWeight="normal"
          color="brand.primary"
          textDecoration="underline"
          textUnderlineOffset="3px"
        >
          {column.heading}
        </Text>
      </Flex>

      <Flex justify="center" align="center" h={{base: "150px", lg: "200px"}}>
        <Image
          src={column.logos[0].src}
          alt={column.logos[0].alt}
          maxH="110px"
          objectFit="contain"
        />
      </Flex>

      <Flex justify="center" align="center" h={{base: "150px", lg: "200px"}}>
        <Image
          src={column.logos[1].src}
          alt={column.logos[1].alt}
          maxH="110px"
          objectFit="contain"
        />
      </Flex>
    </Box>
  );
};

const LogoPanel = ({
  leftColumn,
  rightColumn,
}: {
  leftColumn: LogoPanelColumn;
  rightColumn: LogoPanelColumn;
}) => {
  return (
    <SimpleGrid columns={2} gap={4} w="100%" alignItems="stretch">
      <LogoCard column={leftColumn} />
      <LogoCard column={rightColumn} />
    </SimpleGrid>
  );
};

const TextWithLogoPanelSection = ({
  leftColumn,
  rightColumn,
  buttonLabel,
  content,
  reverse = false,
}: TextWithLogoPanelProps) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      alignItems="center"
      gap={{ base: 8, md: 24 }}
    >
      <Box w="100%" order={{ base: 2, md: reverse ? 2 : 1 }}>
        <LogoPanel leftColumn={leftColumn} rightColumn={rightColumn} />
      </Box>

      <Box order={{ base: 1, md: reverse ? 1 : 2 }}>
        {buttonLabel && (
          <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Badge label={buttonLabel} mb={4} />
          </Flex>
        )}

        <Box textAlign={{ base: "center", md: "left" }}>
          {content}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default TextWithLogoPanelSection;
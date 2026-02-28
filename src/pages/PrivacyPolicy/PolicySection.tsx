import { memo } from "react";
import {
  Box,
  Heading,
  VStack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import type { PolicySectionProps } from "./DTOs";

const PolicySection = memo<PolicySectionProps>(
  ({
    title,
    image,
    reverse = false,
    children,
    pt = "sectionTop",
  }: PolicySectionProps) => {
    return (
      <Box pt={pt}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "4", lg: "14" }}
          alignItems="center"
        >
          {/* Image Side */}
          <GridItem order={{ base: 1, lg: reverse ? 2 : 1 }}>
            <VStack align="start" gap={4}>
              <Heading
                as="h3"
                color="brand.primary"
                textAlign={{ base: "center", md: "left" }}
                w="100%"
              >
                {title}
              </Heading>

              <Image
                src={image}
                alt={title}
                borderRadius="lg"
                w="100%"
                h={{ base: "200px", md: "350px" }}
                objectFit="cover"
                loading="lazy"
                shadow="md"
              />
            </VStack>
          </GridItem>

          <GridItem order={{ base: 2, lg: reverse ? 1 : 2 }}>
            <VStack align="stretch" gap={4} textAlign={{ base: "center", md: "left" }}>
              {children}
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    );
  },
);
export default PolicySection;

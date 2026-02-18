import { memo } from "react";

import {
  Box,
  Heading,
  VStack,
  HStack,
  Icon,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import type { PolicySectionProps } from "./DTOs";

const PolicySection = memo<PolicySectionProps>(
  ({ icon, title, image, reverse = false, children,pt="sectionTop" }: PolicySectionProps) => {
    return (
      <Box pt={pt}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={16}
          alignItems="center"
        >
          {/* Image Side */}
          <GridItem order={{ base: 1, lg: reverse ? 2 : 1 }}>
            <VStack align="start" gap={6}>
              <HStack gap={3} align={{ base: "self-start", md: "center" }}>
                <Icon
                  as={icon}
                  fontSize="3xl"
                  color="brand.primary"
                  mt={{ base: 2, md: 0 }}
                />
                <Heading as="h3" size="lg" color="brand.primary">
                  {title}
                </Heading>
              </HStack>

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
            <VStack align="stretch" gap={4}>
              {children}
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    );
  },
);
export default PolicySection;

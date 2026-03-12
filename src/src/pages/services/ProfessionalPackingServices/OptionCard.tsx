import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import type { PackingOption } from "./DTOs";

const OptionCard = ({ icon: Icon, title, description }: PackingOption) => (
  <Box
    bg="brand.white"
    p={{ base: 6, md: 8 }}
    borderRadius="xl"
    boxShadow="sm"
    border="1px solid"
    borderColor="gray.100"
  >
    <HStack gap={3} mb={4}>
      <Box color="brand.primary">
        <Icon size={28} />
      </Box>
      <Heading as="h3" fontWeight="normal" color="brand.primary">
        {title}
      </Heading>
    </HStack>
    <Text textStyle="size-lg">{description}</Text>
  </Box>
);
export default OptionCard;

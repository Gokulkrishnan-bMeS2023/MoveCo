import { Box, Heading, Text, HStack } from "@chakra-ui/react";

const OptionCard = ({ icon: Icon, title, description }: any) => (
  <Box
    bg="brand.white"
    p={8}
    borderRadius="xl"
    boxShadow="sm"
    border="1px solid"
    borderColor="gray.100"
  >
    <HStack gap={3} mb={4}>
      <Box color="brand.primary">
        <Icon size={28} />
      </Box>
      <Heading as="h3" fontWeight="normal">
        {title}
      </Heading>
    </HStack>
    <Text textStyle="size-lg">{description}</Text>
  </Box>
);
export default OptionCard;

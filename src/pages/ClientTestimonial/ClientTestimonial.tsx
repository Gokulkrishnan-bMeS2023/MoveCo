import { Box, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import ClientSpeaks from "../../components/common/ReviewGrid";
import Button from "../../components/common/Button/Button";

const ClientTestimonial = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <Box px={8} py={12}>
      <Heading mb={6} as="h2" color="brand.primary">
        Client Speaks
      </Heading>

      <ClientSpeaks limit={visibleCount} />
      <Flex justify="center" mt={8}>
        <Button
          label="Load More"
          variant="primary"
          rounded="full"
          onClick={() => setVisibleCount((prev) => prev + 3)}
        />
      </Flex>
    </Box>
  );
};

export default ClientTestimonial;

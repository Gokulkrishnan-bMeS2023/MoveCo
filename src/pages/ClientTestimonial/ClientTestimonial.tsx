import { Heading, Flex, Container } from "@chakra-ui/react";
import { useState } from "react";
import ClientSpeaks from "../../components/common/ReviewGrid";
import Button from "../../components/common/Button/Button";

const ClientTestimonial = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
   <Container maxW="100%" py={{ base: 10, md: 12 }} px={8}>
      <Heading  mb={{base:6, lg:8}} as="h2" color="brand.primary">
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
    </Container>
  );
};

export default ClientTestimonial;

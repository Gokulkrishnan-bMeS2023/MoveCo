
import { Heading, Flex, Container} from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import ClientSpeaks from "../../Home/ReviewGrid/ClientSpeaks";
import { useClientSpeaks } from "../../Home/ReviewGrid/useClientSpeaks";

const ClientTestimonial = () => {
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const { testimonials, isLoading, error, hasMore } =
    useClientSpeaks(page, pageSize);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Container>
      <Heading
        mb={{ base: 4, lg: 6 }}
        as="h2"
        fontWeight="normal"
        color="brand.primary"
        textAlign={{ base: "center", md: "left" }}
      >
        Client Speaks
      </Heading>

      <ClientSpeaks testimonials={testimonials} isLoading={isLoading} error={error} />

      {hasMore && (
        <Flex justify="center" mt={8}>
          <Button
            label={isLoading ? "Loading..." : "Load More"}
            variant="primary"
            rounded="full"
            onClick={handleLoadMore}
            disabled={isLoading}
          />
        </Flex>
      )}
    </Container>
  );
};

export default ClientTestimonial;
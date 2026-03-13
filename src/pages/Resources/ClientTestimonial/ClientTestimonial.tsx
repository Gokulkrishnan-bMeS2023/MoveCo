// // import { Heading, Flex, Container } from "@chakra-ui/react";
// // import { useState } from "react";
// // import Button from "../../../components/common/Button/Button";
// // import ClientSpeaks from "../../Home/ReviewGrid/ClientSpeaks";

// // const ClientTestimonial = () => {
// //   const [visibleCount, setVisibleCount] = useState(3);

// //   return (
// //     <Container>
// //       <Heading
// //         mb={{ base: 4, lg: 6 }}
// //         as="h2"
// //         fontWeight="normal"
// //         color="brand.primary"
// //         textAlign={{ base: "center", md: "left" }}
// //       >
// //         Client Speaks
// //       </Heading>

// //       <ClientSpeaks limit={visibleCount} />
// //       <Flex justify="center" mt={8}>
// //         <Button
// //           label="Load More"
// //           variant="primary"
// //           rounded="full"
// //           onClick={() => setVisibleCount((prev) => prev + 3)}
// //         />
// //       </Flex>
// //     </Container>
// //   );
// // };

// // export default ClientTestimonial;






// import { Heading, Flex, Container, Text } from "@chakra-ui/react";
// import { useState } from "react";
// import Button from "../../../components/common/Button/Button";
// import { useClientSpeaks } from "../../Home/ReviewGrid/useClientSpeaks";
// import ClientSpeaks from "../../Home/ReviewGrid/ClientSpeaks";


// const ClientTestimonial = () => {
//   const [page, setPage] = useState(1);
//   const pageSize = 3;

//   const { testimonials, isLoading, error, hasMore } = useClientSpeaks(page, pageSize);

//   const loadMore = () => setPage(prev => prev + 1);

//   return (
//     <Container>
//       <Heading
//         mb={{ base: 4, lg: 6 }}
//         as="h2"
//         fontWeight="normal"
//         color="brand.primary"
//         textAlign={{ base: "center", md: "left" }}
//       >
//         Client Speaks
//       </Heading>

//       {error && <Text color="red.500" mb={4}>{error}</Text>}

//       <ClientSpeaks testimonials={testimonials} isLoading={isLoading} />

//       {hasMore && (
//         <Flex justify="center" mt={8}>
//           <Button
//             label={isLoading ? "Loading..." : "Load More"}
//             variant="primary"
//             rounded="full"
//             onClick={loadMore}
//             disabled={isLoading}
//           />
//         </Flex>
//       )}
//     </Container>
//   );
// };

// export default ClientTestimonial;








import { Heading, Flex, Container, Text } from "@chakra-ui/react";
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

      {error && (
        <Text color="red.500" mb={4}>
          {error}
        </Text>
      )}

      <ClientSpeaks testimonials={testimonials} isLoading={isLoading} />

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
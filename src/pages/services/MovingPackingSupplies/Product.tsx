// import { useCallback } from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Grid,
//   GridItem,
//   VStack,
//   Span,
//   Center,
//   Alert,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../../components/common/Button/Button";
// import ProductCard from "./ProductCard";
// import { useShoppingCart } from "./Useshoppingcart";
// import { useProducts } from "./Useproduct";

// const PageHeader = () => (
//   <VStack mb={{ base: 4, lg: 6 }} gap={{ base: 4, md: 6 }} align="start">
//     <Heading as="h1" fontWeight="normal">
//       Moving & <Span color="brand.primary">Packing Supplies</Span>
//     </Heading>
//     <Text textStyle="size-lg">
//       When you plan a move, you certainly want to keep your possessions safe and
//       organized. Boxes, packing material, moving safety material, and all the
//       other rest of moving supplies are also sold here in our online shop. With
//       the form below, you can purchase moving supplies and pay for them upon
//       delivery.
//     </Text>
//   </VStack>
// );

// const ProductSkeleton = () => (
//   <Box
//     bg="white"
//     borderRadius={{ base: "lg", md: "xl" }}
//     overflow="hidden"
//     boxShadow="lg"
//     height="100%"
//     display="flex"
//     flexDirection="column"
//     minH="380px"
//   >
//     <Box h={{ base: "200px", sm: "250px", md: "300px" }} bg="gray.100" />
//     <VStack gap={3} p={{ base: 4, md: 6 }} align="stretch" flex="1">
//       <Box h="24px" bg="gray.100" borderRadius="md" />
//       <Box h="24px" w="60%" bg="gray.100" borderRadius="md" />
//       <Box h="36px" bg="gray.100" borderRadius="md" mt="auto" />
//     </VStack>
//   </Box>
// );

// const ProductPage = () => {
//   const navigate = useNavigate();
//   const { addToCart, isInCart, totalItems } = useShoppingCart();
//   const { products, isLoading, error, refetch } = useProducts();

//   const handleViewCart = useCallback(() => {
//     navigate("/cart");
//   }, [navigate]);

//   console.log(products);

//   return (
//     <Container>
//       <PageHeader />

//       {/* Error State */}
//       {error && (
//         <Alert.Root status="error" mb={6} borderRadius="lg">
//           <Alert.Indicator />
//           <Alert.Content>
//             <Alert.Title>Failed to load products</Alert.Title>
//             <Alert.Description>{error}</Alert.Description>
//           </Alert.Content>
//           <Button label="Retry" variant="outline" onClick={refetch} />
//         </Alert.Root>
//       )}

//       {/* Loading State */}
//       {isLoading && (
//         <Grid
//           templateColumns={{
//             base: "1fr",
//             sm: "repeat(2, 1fr)",
//             lg: "repeat(3, 1fr)",
//             xl: "repeat(4, 1fr)",
//           }}
//           gap={{ base: 4, sm: 6, md: 8 }}
//         >
//           {Array.from({ length: 8 }).map((_, i) => (
//             <GridItem key={i}>
//               <ProductSkeleton />
//             </GridItem>
//           ))}
//         </Grid>
//       )}

//       {/* Products Grid */}
//       {!isLoading && !error && products.length > 0 && (
//         <Grid
//           templateColumns={{
//             base: "1fr",
//             sm: "repeat(2, 1fr)",
//             lg: "repeat(3, 1fr)",
//             xl: "repeat(4, 1fr)",
//           }}
//           gap={{ base: 4, sm: 6, md: 8 }}
//         >
//           {products.map((product) => (
//             <GridItem key={product.id}>
//               <ProductCard
//                 product={product}
//                 isInCart={isInCart(product.id)}
//                 onAddToCart={addToCart}
//                 onViewCart={handleViewCart}
//               />
//             </GridItem>
//           ))}
//         </Grid>
//       )}

//       {/* Empty State */}
//       {!isLoading && !error && products.length === 0 && (
//         <Center py={20}>
//           <VStack gap={4}>
//             <Text textStyle="size-xl" color="gray.500">
//               No products available at the moment.
//             </Text>
//             <Button label="Refresh" variant="outline" onClick={refetch} />
//           </VStack>
//         </Center>
//       )}

//       {/* Floating View Cart Button */}
//       {totalItems > 0 && (
//         <Box mt={{ base: 8, md: 10 }} textAlign="center">
//           <Button
//             label={`View Cart (${totalItems} ${totalItems === 1 ? "item" : "items"})`}
//             variant="primary"
//             onClick={handleViewCart}
//           />
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default ProductPage;

//2
import { useCallback } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  VStack,
  Span,
  Center,
  Alert,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import ProductCard from "./ProductCard";
import { useShoppingCart } from "./Useshoppingcart";
import { useProducts } from "./Useproduct";

const PageHeader = () => (
  <VStack mb={{ base: 4, lg: 6 }} gap={{ base: 4, md: 6 }} align="start">
    <Heading as="h1" fontWeight="normal">
      Moving & <Span color="brand.primary">Packing Supplies</Span>
    </Heading>
    <Text textStyle="size-lg">
      When you plan a move, you certainly want to keep your possessions safe and
      organized. Boxes, packing material, moving safety material, and all the
      other rest of moving supplies are also sold here in our online shop. With
      the form below, you can purchase moving supplies and pay for them upon
      delivery.
    </Text>
  </VStack>
);

const ProductSkeleton = () => (
  <Box
    bg="white"
    borderRadius={{ base: "lg", md: "xl" }}
    overflow="hidden"
    boxShadow="lg"
    height="100%"
    display="flex"
    flexDirection="column"
    minH="380px"
  >
    <Box h={{ base: "200px", sm: "250px", md: "300px" }} bg="gray.100" />
    <VStack gap={3} p={{ base: 4, md: 6 }} align="stretch" flex="1">
      <Box h="24px" bg="gray.100" borderRadius="md" />
      <Box h="24px" w="60%" bg="gray.100" borderRadius="md" />
      <Box h="36px" bg="gray.100" borderRadius="md" mt="auto" />
    </VStack>
  </Box>
);

const ProductPage = () => {
  const navigate = useNavigate();
  const { addToCart, isInCart, totalItems } = useShoppingCart();
  const { products, isLoading, error, refetch } = useProducts();

  const handleViewCart = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  console.log(products);

  return (
    <Container>
      <PageHeader />

      {/* Error State */}
      {error && (
        <Alert.Root status="error" mb={6} borderRadius="lg">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Failed to load products</Alert.Title>
            <Alert.Description>{error}</Alert.Description>
          </Alert.Content>
          <Button label="Retry" variant="outline" onClick={refetch} />
        </Alert.Root>
      )}

      {/* Loading State */}
      {isLoading && (
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={{ base: 4, sm: 6, md: 8 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <GridItem key={i}>
              <ProductSkeleton />
            </GridItem>
          ))}
        </Grid>
      )}

      {/* Products Grid */}
      {!isLoading && !error && products.length > 0 && (
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={{ base: 4, sm: 6, md: 8 }}
        >
          {products.map((product) => (
            <GridItem key={product.id}>
              <ProductCard
                product={product}
                isInCart={isInCart(product.id)}
                onAddToCart={addToCart}
                onViewCart={handleViewCart}
              />
            </GridItem>
          ))}
        </Grid>
      )}

      {/* Empty State */}
      {!isLoading && !error && products.length === 0 && (
        <Center py={20}>
          <VStack gap={4}>
            <Text textStyle="size-xl" color="gray.500">
              No products available at the moment.
            </Text>
            <Button label="Refresh" variant="outline" onClick={refetch} />
          </VStack>
        </Center>
      )}

      {/* Floating View Cart Button */}
      {totalItems > 0 && (
        <Box mt={{ base: 8, md: 10 }} textAlign="center">
          <Button
            label={`View Cart (${totalItems} ${totalItems === 1 ? "item" : "items"})`}
            variant="primary"
            onClick={handleViewCart}
          />
        </Box>
      )}
    </Container>
  );
};

export default ProductPage;

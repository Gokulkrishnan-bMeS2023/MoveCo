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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import ProductCard from "./ProductCard";
import { useShoppingCart } from "./product";
import { PRODUCTS, GRID_BREAKPOINTS } from "./data";

const PageHeader = () => (
  <VStack mb={12} gap={{ base: 4, md: 6 }} align="start">
    <Heading as="h1" fontWeight="normal">
      Moving & <Span color="brand.primary">Packing Supplies</Span>
    </Heading>
    <Text textStyle="size-lg" color="gray.600">
      When you plan a move, you certainly want to keep your possessions safe and
      organized. Boxes, packing material, moving safety material, and all the
      other rest of moving supplies are also sold here in our online shop. With
      the form below, you can purchase moving supplies and pay for them upon
      delivery.
    </Text>
  </VStack>
);

const ProductPage = () => {
  const navigate = useNavigate();
  const { addToCart, isInCart, totalItems } = useShoppingCart();

  const handleViewCart = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      <PageHeader />

      <Grid templateColumns={GRID_BREAKPOINTS} gap={{ base: 4, sm: 6, md: 8 }}>
        {PRODUCTS.map((product) => (
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

      {totalItems > 0 && (
        <Box mt={{ base: 8, md: 12 }} textAlign="center">
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

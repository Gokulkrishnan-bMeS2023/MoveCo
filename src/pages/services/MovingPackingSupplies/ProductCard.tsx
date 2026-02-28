import { memo } from "react";
import { Box, Text, Image, HStack, VStack, Badge } from "@chakra-ui/react";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import Button from "../../../components/common/Button/Button";
import type { Product } from "./DTOs";
import { images } from "../../../assets";

interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  onAddToCart: (product: Product) => void;
  onViewCart: () => void;
  showFreeShipping?: boolean;
}

const ProductCard = memo(
  ({
    product,
    isInCart,
    onAddToCart,
    onViewCart,
    showFreeShipping = true,
  }: ProductCardProps) => {
    return (
      <Box
        bg="brand.white"
        borderRadius={{ base: "lg", md: "xl" }}
        overflow="hidden"
        boxShadow="lg"
        transition="all 0.3s"
        _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
        height="100%"
        display="flex"
        flexDirection="column"
      >
        {/* Product Image */}
        <Box
          position="relative"
          overflow="hidden"
          h={{ base: "200px", sm: "250px", md: "300px" }}
        >
          <Image
            src={images.product}
            alt={product?.name || "Product"}
            w="100%"
            h="100%"
            objectFit="cover"
            loading="lazy"
          />
          {showFreeShipping && (
            <Badge
              position="absolute"
              top={{ base: 2, md: 4 }}
              right={{ base: 2, md: 4 }}
              colorPalette="brand.primary"
              textStyle={{ base: "xs", md: "sm" }}
              px={{ base: 2, md: 3 }}
              py={1}
              borderRadius="full"
            >
              FREE SHIPPING
            </Badge>
          )}
        </Box>

        {/* Product Details */}
        <VStack
          gap={{ base: 3, md: 4 }}
          p={{ base: 4, md: 6 }}
          align="stretch"
          flex="1"
        >
          <Text
            textStyle={"size-xl"}
            fontWeight="semibold"
            color="gray.800"
            minH={{ base: "auto", md: "3rem" }}
          >
            {product.name}
          </Text>

          <Text textStyle={"size-2xl"} fontWeight="bold" color="brand.primary">
            ${product.price.toFixed(2)}
          </Text>

          {/* Action Buttons */}
          <HStack justify="flex-end">
            <Button
              label={isInCart ? "View Cart" : "Add To Cart"}
              variant={isInCart ? "outline" : "primary"}
              leftIcon={isInCart ? <FiCheck /> : <FiShoppingCart />}
              onClick={isInCart ? onViewCart : () => onAddToCart(product)}
              aria-label={
                isInCart ? "View shopping cart" : "Add product to cart"
              }
            />
          </HStack>
        </VStack>
      </Box>
    );
  },
);

export default ProductCard;

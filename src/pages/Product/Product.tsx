import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Badge,
  Grid,
  GridItem,
  createToaster,
  Span,
} from "@chakra-ui/react";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import Button from "../../components/common/Button/Button"; // Import your custom Button component
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const toaster = createToaster({
  placement: "top-end",
  duration: 2000,
});

// Helper functions for localStorage
const getCartFromStorage = (): CartItem[] => {
  try {
    const cart = localStorage.getItem("shopping_cart");
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error reading cart from localStorage:", error);
    return [];
  }
};

const saveCartToStorage = (cart: CartItem[]): void => {
  try {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const ProductPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Starter Moving Kit FREE SHIPPING",
      price: 90.0,
      image:
        "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=500",
    },
    {
      id: 2,
      name: "House Moving Kit FREE SHIPPING",
      price: 169.0,
      image:
        "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=500",
    },
    {
      id: 3,
      name: "Premium Moving Blankets",
      price: 45.0,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    },
    {
      id: 4,
      name: "Professional Moving Dolly",
      price: 129.0,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    },
  ];

  // Load cart from localStorage on mount
  useEffect(() => {
    const cart = getCartFromStorage();
    setCartItems(cart);
  }, []);

  const isInCart = (productId: number): boolean => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (product: Product) => {
    const existingCart = getCartFromStorage();
    const existingItem = existingCart.find((item) => item.id === product.id);

    let updatedCart: CartItem[];

    if (existingItem) {
      // Increment quantity if item already exists
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      // Add new item to cart
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      updatedCart = [...existingCart, newItem];
    }

    // Save to localStorage and update state
    saveCartToStorage(updatedCart);
    setCartItems(updatedCart);

    toaster.create({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      type: "success",
    });
  };

  const getTotalCartItems = (): number => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {/* Header */}
      <VStack mb={12} gap={{ base: 4, md: 6 }} align="start">
        <Heading as="h1" fontWeight="normal">
          Moving & <Span color="brand.primary">Packing Supplies</Span>
        </Heading>
        <Text textStyle="size-lg" color="gray.600">
          When you plan a move, you certainly want to keep your possessions safe
          and organized. Boxes, packing material, moving safety material, and
          all the other rest of moving supplies are also sold here in our online
          shop. With the form below, you can purchase moving supplies and pay
          for them upon delivery.
        </Text>
      </VStack>

      {/* Products Grid - Responsive columns */}
      <Grid
        templateColumns={{
          base: "1fr", // Mobile: 1 column
          sm: "repeat(2, 1fr)", // Small tablets: 2 columns
          md: "repeat(2, 1fr)", // Tablets: 2 columns
          lg: "repeat(3, 1fr)", // Desktop: 3 columns
          xl: "repeat(4, 1fr)", // Large desktop: 4 columns
        }}
        gap={{ base: 4, sm: 6, md: 8 }}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <Box
              bg="white"
              borderRadius={{ base: "lg", md: "xl" }}
              overflow="hidden"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
              height="100%"
              display="flex"
              flexDirection="column"
            >
              <Box
                position="relative"
                overflow="hidden"
                h={{ base: "200px", sm: "250px", md: "300px" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Badge
                  position="absolute"
                  top={{ base: 2, md: 4 }}
                  right={{ base: 2, md: 4 }}
                  colorPalette="brand.primary"
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 3 }}
                  py={1}
                  borderRadius="full"
                >
                  FREE SHIPPING
                </Badge>
              </Box>

              <VStack
                gap={{ base: 3, md: 4 }}
                p={{ base: 4, md: 6 }}
                align="stretch"
                flex="1"
              >
                <Heading
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="semibold"
                  color="gray.800"
                  minH={{ base: "auto", md: "3rem" }}
                >
                  {product.name}
                </Heading>

                <HStack
                  justify="space-between"
                  align="center"
                  flexWrap="wrap"
                  gap={2}
                >
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    color="brand.primary"
                  >
                    ${product.price.toFixed(2)}
                  </Text>
                </HStack>

                {/* Buttons - Horizontal on larger screens */}
                <HStack
                  gap={2}
                  justify="flex-end"
                  //   display={{ base: "none", sm: "flex" }} // Horizontal on tablet+
                  flexWrap="wrap"
                >
                  {isInCart(product.id) && (
                    <Button
                      label="View Cart"
                      variant="outline"
                      py={2}
                      onClick={() => navigate("/cart")}
                    />
                  )}

                  <Button
                    label={isInCart(product.id) ? "Added" : "Add To Cart"}
                    variant={isInCart(product.id) ? "outline" : "primary"}
                    leftIcon={
                      isInCart(product.id) ? <FiCheck /> : <FiShoppingCart />
                    }
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product.id)}
                  />
                </HStack>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* View All Cart Items Button - Responsive */}
      {getTotalCartItems() > 0 && (
        <Box mt={{ base: 8, md: 12 }} textAlign="center">
          <Button
            label={`View Cart (${getTotalCartItems()} ${getTotalCartItems() === 1 ? "item" : "items"})`}
            variant="primary"
            onClick={() => navigate("/cart")}
          />
        </Box>
      )}
    </Container>
  );
};

export default ProductPage;

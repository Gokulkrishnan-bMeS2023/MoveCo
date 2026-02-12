import { useCallback, memo } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Table,
  IconButton,
  Input,
  Separator,
  Badge,
  createToaster,
  Span,
} from "@chakra-ui/react";
import { FiX, FiPlus, FiMinus } from "react-icons/fi";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "./Useshoppingcart";

const toaster = createToaster({
  placement: "top-end",
  duration: 2000,
});

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const EmptyCart = memo(
  ({ onStartShopping }: { onStartShopping: () => void }) => (
    <Box
      bg="white"
      p={{ base: 8, md: 12 }}
      borderRadius="xl"
      textAlign="center"
      boxShadow="md"
    >
      <Text fontSize={{ base: "xl", md: "2xl" }} color="gray.400" mb={4}>
        🛒
      </Text>
      <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" mb={6}>
        Your cart is empty
      </Text>
      <Button
        label="Start Shopping"
        variant="primary"
        py={3}
        onClick={onStartShopping}
      />
    </Box>
  ),
);

EmptyCart.displayName = "EmptyCart";

// ============================================================================

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemCard = memo(
  ({ item, onUpdateQuantity, onRemove }: CartItemCardProps) => {
    const handleQuantityChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value) || 1;
        onUpdateQuantity(item.id, val);
      },
      [item.id, onUpdateQuantity],
    );

    return (
      <Box bg="white" borderRadius="lg" p={4} boxShadow="md">
        <HStack gap={3} align="start" mb={3}>
          <Image
            src={item.image}
            alt={item.name}
            boxSize="80px"
            objectFit="cover"
            borderRadius="md"
            flexShrink={0}
            loading="lazy"
          />
          <VStack align="start" gap={1} flex="1">
            <Text fontWeight="semibold" color="gray.800" fontSize="sm">
              {item.name}
            </Text>
            <Text fontWeight="bold" color="brand.primary" fontSize="lg">
              ${item.price.toFixed(2)}
            </Text>
          </VStack>
          <IconButton
            aria-label={`Remove ${item.name}`}
            size="sm"
            colorPalette="red"
            variant="ghost"
            onClick={() => onRemove(item.id)}
          >
            <FiX />
          </IconButton>
        </HStack>

        <HStack justify="space-between" align="center">
          <HStack gap={2}>
            <IconButton
              aria-label="Decrease quantity"
              size="sm"
              bg="brand.primary"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <FiMinus />
            </IconButton>
            <Input
              value={item.quantity}
              onChange={handleQuantityChange}
              w="50px"
              size="sm"
              textAlign="center"
              fontWeight="semibold"
              min={1}
            />
            <IconButton
              aria-label="Increase quantity"
              size="sm"
              bg="brand.primary"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <FiPlus />
            </IconButton>
          </HStack>
          <Text fontWeight="bold" color="gray.800" fontSize="lg">
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </HStack>
      </Box>
    );
  },
);

CartItemCard.displayName = "CartItemCard";

// ============================================================================

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemRow = memo(
  ({ item, onUpdateQuantity, onRemove }: CartItemRowProps) => {
    const handleQuantityChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value) || 1;
        onUpdateQuantity(item.id, val);
      },
      [item.id, onUpdateQuantity],
    );

    return (
      <Table.Row>
        <Table.Cell>
          <IconButton
            aria-label={`Remove ${item.name}`}
            size="sm"
            colorPalette="red"
            variant="ghost"
            onClick={() => onRemove(item.id)}
          >
            <FiX />
          </IconButton>
        </Table.Cell>
        <Table.Cell textStyle="size-md">
          <HStack gap={4}>
            <Image
              src={item.image}
              alt={item.name}
              boxSize="60px"
              objectFit="cover"
              borderRadius="md"
              loading="lazy"
            />
            <Text fontWeight="semibold" color="gray.800">
              {item.name}
            </Text>
          </HStack>
        </Table.Cell>
        <Table.Cell textStyle="size-md">
          <Text fontWeight="semibold" color="gray.700">
            ${item.price.toFixed(2)}
          </Text>
        </Table.Cell>
        <Table.Cell textStyle="size-md">
          <HStack justify="center" gap={2}>
            <IconButton
              aria-label="Decrease quantity"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              bg="brand.primary"
              disabled={item.quantity <= 1}
            >
              <FiMinus />
            </IconButton>
            <Input
              value={item.quantity}
              onChange={handleQuantityChange}
              w="60px"
              textAlign="center"
              fontWeight="semibold"
              min={1}
            />
            <IconButton
              aria-label="Increase quantity"
              size="sm"
              bg="brand.primary"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <FiPlus />
            </IconButton>
          </HStack>
        </Table.Cell>
        <Table.Cell textStyle="size-lg">
          <Text fontWeight="bold" color="gray.800">
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </Table.Cell>
      </Table.Row>
    );
  },
);

CartItemRow.displayName = "CartItemRow";

// ============================================================================

interface CartTotalsProps {
  subtotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}

const CartTotals = memo(
  ({ subtotal, tax, total, onCheckout }: CartTotalsProps) => {
    return (
      <Box
        bg="white"
        p={{ base: 6, md: 8 }}
        borderRadius="xl"
        boxShadow="md"
        maxW={{ base: "100%", md: "500px" }}
        ml={{ base: 0, md: "auto" }}
        w="100%"
      >
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="gray.800"
          mb={{ base: 4, md: 6 }}
        >
          Cart totals
        </Heading>

        <VStack gap={4} align="stretch">
          <HStack justify="space-between">
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              Subtotal
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              color="gray.800"
            >
              ${subtotal.toFixed(2)}
            </Text>
          </HStack>

          <HStack justify="space-between" flexWrap="wrap">
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              Shipping
            </Text>
            <Badge
              colorPalette="brand.primary"
              fontSize={{ base: "sm", md: "md" }}
              px={3}
              py={1}
            >
              Free Shipping
            </Badge>
          </HStack>

          <HStack justify="space-between" align="start">
            <VStack align="start" gap={0}>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                Tax
              </Text>
              <Text
                fontSize="xs"
                color="gray.400"
                display={{ base: "none", sm: "block" }}
              >
                (estimated for the United States (US))
              </Text>
            </VStack>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              color="gray.800"
            >
              ${tax.toFixed(2)}
            </Text>
          </HStack>

          <Separator />

          <HStack justify="space-between">
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color="gray.800"
            >
              Total
            </Text>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="brand.primary"
            >
              ${total.toFixed(2)}
            </Text>
          </HStack>

          <Button
            label="Proceed to checkout"
            variant="primary"
            onClick={onCheckout}
          />

          <Text
            fontSize="sm"
            color="gray.500"
            textAlign="center"
            mt={2}
            display={{ base: "none", sm: "block" }}
          >
            Please Log-in to Proceed Further
          </Text>
        </VStack>
      </Box>
    );
  },
);

CartTotals.displayName = "CartTotals";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const CartPage = () => {
  const navigate = useNavigate();

  const { cartItems, updateQuantity, removeFromCart, subtotal, tax, total } =
    useShoppingCart();

  const handleContinueShopping = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const handleUpdateQuantity = useCallback(
    (id: number, quantity: number) => {
      if (quantity < 1) return;
      updateQuantity(id, quantity);
    },
    [updateQuantity],
  );

  const handleCheckout = useCallback(() => {
    toaster.create({
      title: "Redirecting to checkout",
      description: "Please log in to proceed further",
      type: "warning",
      duration: 3000,
    });
  }, []);

  return (
    <Container maxW="100%" px={8} py={12}>
      {/* Header */}
      <VStack gap={{ base: 4, md: 6 }} mb={{ base: 6, md: 8 }} align="stretch">
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <Heading as="h1" fontWeight="normal">
            Shopping <Span color="brand.primary">Cart</Span>
          </Heading>
          <Button
            label="Continue Shopping"
            variant="outline"
            py={2}
            onClick={handleContinueShopping}
          />
        </HStack>
      </VStack>

      {/* Empty Cart State */}
      {cartItems.length === 0 ? (
        <EmptyCart onStartShopping={handleContinueShopping} />
      ) : (
        <VStack gap={{ base: 6, md: 8 }} align="stretch">
          {/* Mobile Card View */}
          <Box display={{ base: "block", md: "none" }}>
            <VStack gap={4} align="stretch">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </VStack>
          </Box>

          {/* Desktop Table View */}
          <Box
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            display={{ base: "none", md: "block" }}
          >
            <Table.Root variant="outline" striped>
              <Table.Header bg="brand.primary">
                <Table.Row>
                  <Table.ColumnHeader color="brand.white" w="50px" />
                  <Table.ColumnHeader color="brand.white" textStyle="size-md">
                    Product
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="brand.white" textStyle="size-md">
                    Price
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    color="brand.white"
                    textAlign="center"
                    textStyle="size-md"
                  >
                    Quantity
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="brand.white" textStyle="size-md">
                    Total
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {cartItems.map((item) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </Table.Body>
            </Table.Root>
          </Box>

          {/* Cart Totals */}
          <CartTotals
            subtotal={subtotal}
            tax={tax}
            total={total}
            onCheckout={handleCheckout}
          />
        </VStack>
      )}
    </Container>
  );
};

export default CartPage;

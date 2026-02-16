import { useCallback, memo, useState, useMemo } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  IconButton,
  Separator,
  Badge,
  createToaster,
  Span,
  Grid,
  Dialog,
  Input as ChakraInput,
  Stack,
} from "@chakra-ui/react";
import { FiX, FiShoppingCart } from "react-icons/fi";
import Button from "../../../components/common/Button/Button";
import SelectField from "../../../components/common/Select/Select";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "./Useshoppingcart";
import type { CartItem } from "./DTOs";

const toaster = createToaster({
  placement: "top-end",
  duration: 2000,
});

// QUANTITY SELECT MODAL

interface QuantityModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuantity: number;
  itemName: string;
  onConfirm: (quantity: number) => void;
}

const QuantityModal = memo(
  ({
    isOpen,
    onClose,
    currentQuantity,
    itemName,
    onConfirm,
  }: QuantityModalProps) => {
    const [quantity, setQuantity] = useState(currentQuantity.toString());

    const handleConfirm = () => {
      const qty = parseInt(quantity) || 1;
      if (qty > 0) {
        onConfirm(qty);
        onClose();
      }
    };

    const handleCancel = () => {
      setQuantity(currentQuantity.toString());
      onClose();
    };

    return (
      <Dialog.Root open={isOpen} onOpenChange={handleCancel}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="400px">
            <Dialog.Header>
              <Dialog.Title fontSize="xl" fontWeight="bold">
                Enter Quantity
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={4} align="stretch">
                <Text textStyle={"size-md"}>
                  Update quantity for <strong>{itemName}</strong>
                </Text>
                <Box>
                  <Text fontSize="sm" color="gray.600" mb={2}>
                    Quantity
                  </Text>
                  <ChakraInput
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    size="lg"
                    autoFocus
                  />
                </Box>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <HStack gap={3} justify="flex-end" w="100%">
                <Button
                  label="Cancel"
                  variant="outline"
                  onClick={handleCancel}
                />
                <Button
                  label="Confirm"
                  variant="primary"
                  onClick={handleConfirm}
                />
              </HStack>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    );
  },
);

QuantityModal.displayName = "QuantityModal";

// EMPTY CART

const EmptyCart = memo(
  ({ onStartShopping }: { onStartShopping: () => void }) => (
    <Box
      bg="white"
      p={{ base: 8, md: 12 }}
      borderRadius="xl"
      textAlign="center"
      boxShadow="md"
      maxW="600px"
      mx="auto"
    >
      <Box
        fontSize={{ base: "4xl", md: "5xl" }}
        color="gray.300"
        mb={4}
        display="flex"
        justifyContent="center"
      >
        <FiShoppingCart />
      </Box>
      <Heading as={"h3"} mb={2}>
        Your cart is empty
      </Heading>
      <Text fontSize="lg" color="gray.500" mb={6}>
        Add some products to get started
      </Text>
      <Button
        label="Start Shopping"
        variant="primary"
        py={3}
        px={6}
        onClick={onStartShopping}
      />
    </Box>
  ),
);

EmptyCart.displayName = "EmptyCart";

// CART ITEM CARD

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemCard = memo(
  ({ item, onUpdateQuantity, onRemove }: CartItemCardProps) => {
    const [showModal, setShowModal] = useState(false);

    // Generate quantity options dynamically based on current quantity
    const quantityOptions = useMemo(() => {
      const baseOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
      ];

      // If current quantity is greater than 10, add it to the list
      const currentQty = item.quantity;
      if (currentQty > 2) {
        // Insert the current quantity before "More..."
        baseOptions.push({
          label: currentQty.toString(),
          value: currentQty.toString(),
        });
      }

      // Always add "More..." option at the end
      baseOptions.push({ label: "More...", value: "more" });

      return baseOptions;
    }, [item.quantity]);

    const handleQuantityChange = (details: { value: string[] }) => {
      const value = details.value[0];

      if (value === "more") {
        setShowModal(true);
      } else if (value) {
        onUpdateQuantity(item.id, parseInt(value));
      }
    };

    const handleModalConfirm = (quantity: number) => {
      onUpdateQuantity(item.id, quantity);
    };

    return (
      <>
        <Box
          bg="white"
          borderRadius="lg"
          p={{ base: 4, md: 5 }}
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          transition="all 0.2s"
          _hover={{ boxShadow: "md" }}
        >
          <HStack gap={4} align="start">
            {/* Product Image */}
            <Box position="relative" flexShrink={0}>
              <Image
                src={item.image}
                alt={item.name}
                boxSize={{ base: "80px", md: "100px" }}
                objectFit="cover"
                borderRadius="md"
                loading="lazy"
              />
            </Box>

            {/* Product Details */}
            <VStack align="start" gap={2} flex="1" minW="0">
              <HStack justify="space-between" w="100%" align="start">
                <Text
                  fontWeight="semibold"
                  color="gray.800"
                  textStyle={"size-xl"}
                  lineClamp={2}
                  flex="1"
                >
                  {item.name}
                </Text>
                <IconButton
                  aria-label={`Remove ${item.name}`}
                  size="sm"
                  colorPalette="red"
                  variant="ghost"
                  onClick={() => onRemove(item.id)}
                  flexShrink={0}
                >
                  <FiX />
                </IconButton>
              </HStack>

              <Text
                fontWeight="bold"
                color="brand.primary"
                textStyle={"size-xl"}
              >
                ${item.price.toFixed(2)}
              </Text>

              <HStack
                justify="space-between"
                w="100%"
                mt={2}
                flexWrap={{ base: "wrap", sm: "nowrap" }}
                gap={3}
              >
                {/* Quantity Selector */}
                <HStack gap={2} onClick={(e) => e.stopPropagation()}>
                  <Text
                    textStyle={"size-lg"}
                    color="gray.600"
                    fontWeight="medium"
                    flexShrink={0}
                  >
                    Qty:
                  </Text>
                  <Box width="110px">
                    <SelectField
                      options={quantityOptions}
                      value={item.quantity.toString()}
                      onValueChange={handleQuantityChange}
                      placeholder="Select"
                    />
                  </Box>
                </HStack>

                {/* Subtotal */}
                <VStack align="end" gap={0} flexShrink={0}>
                  <Text textStyle={"size-lg"} color="gray.500">
                    Total
                  </Text>
                  <Text
                    textStyle={"size-xl"}
                    fontWeight="bold"
                    color="gray.800"
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <QuantityModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          currentQuantity={item.quantity}
          itemName={item.name}
          onConfirm={handleModalConfirm}
        />
      </>
    );
  },
);

CartItemCard.displayName = "CartItemCard";

// CART TOTALS

interface CartTotalsProps {
  subtotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  isFixed?: boolean;
}

const CartTotals = memo(
  ({ subtotal, tax, total, onCheckout, isFixed = false }: CartTotalsProps) => {
    return (
      <Box
        bg="white"
        p={{ base: 5, md: 6 }}
        borderRadius="xl"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.200"
        h="fit-content"
        position={isFixed ? { base: "relative", lg: "sticky" } : "relative"}
        top={isFixed ? { lg: "20px" } : undefined}
      >
        <Heading as={"h3"} mb={5}>
          Order Summary
        </Heading>

        <VStack gap={4} align="stretch">
          <HStack justify="space-between">
            <Text textStyle="size-lg" color="gray.600">
              Subtotal
            </Text>
            <Text textStyle="size-lg" fontWeight="semibold" color="gray.800">
              ${subtotal.toFixed(2)}
            </Text>
          </HStack>

          <HStack justify="space-between" flexWrap="wrap">
            <Text textStyle="size-lg" color="gray.600">
              Shipping
            </Text>
            <Badge
              colorPalette="green"
              fontSize="sm"
              px={3}
              py={1}
              variant="solid"
            >
              FREE Shipping
            </Badge>
          </HStack>

          <HStack justify="space-between" align="start">
            <VStack align="start" gap={0}>
              <Text textStyle="size-lg" color="gray.600">
                Tax
              </Text>
              <Text textStyle="size-md" color="gray.400">
                (US estimated)
              </Text>
            </VStack>
            <Text textStyle="size-lg" fontWeight="semibold" color="gray.800">
              ${tax.toFixed(2)}
            </Text>
          </HStack>

          <Separator borderColor="gray.300" />

          <HStack justify="space-between" py={2}>
            <Text textStyle="size-lg" fontWeight="bold" color="gray.800">
              Total
            </Text>
            <Text textStyle="size-xl" fontWeight="bold" color="brand.primary">
              ${total.toFixed(2)}
            </Text>
          </HStack>

          <Button
            label="Proceed to Checkout"
            variant="primary"
            onClick={onCheckout}
            py={3}
            w="100%"
          />

          <Text textStyle="size-md" color="gray.500" textAlign="center" mt={2}>
            🔒 Secure Checkout
          </Text>

          <Text textStyle="size-md" textAlign="center">
            Please log in to proceed further
          </Text>
        </VStack>
      </Box>
    );
  },
);

CartTotals.displayName = "CartTotals";

// MAIN COMPONENT

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
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {/* Header */}
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align={{ base: "start", sm: "center" }}
        mb={8}
        gap={4}
      >
        <Heading as="h1" fontWeight="normal">
          Shopping <Span color="brand.primary">Cart</Span>
          {cartItems.length > 0 && (
            <Span color="gray.600" fontSize="xl" fontWeight="normal" ml={2}>
              ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
            </Span>
          )}
        </Heading>
        <Button
          label="Continue Shopping"
          variant="outline"
          onClick={handleContinueShopping}
        />
      </Stack>

      {/* Empty Cart State */}
      {cartItems.length === 0 ? (
        <EmptyCart onStartShopping={handleContinueShopping} />
      ) : (
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 380px",
          }}
          gap={{ base: 6, lg: 8 }}
          alignItems="start"
        >
          {/* Cart Items - Left Side */}
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

          {/* Cart Totals - Right Side (Fixed on Desktop) */}
          <CartTotals
            subtotal={subtotal}
            tax={tax}
            total={total}
            onCheckout={handleCheckout}
            isFixed={true}
          />
        </Grid>
      )}
    </Container>
  );
};

export default CartPage;

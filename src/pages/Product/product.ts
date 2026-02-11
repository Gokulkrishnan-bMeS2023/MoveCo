// ============================================================================
// hooks/useShoppingCart.ts
// Reusable shopping cart hook
// ============================================================================

import { useState, useEffect, useCallback, useMemo } from "react";
import { createToaster } from "@chakra-ui/react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const STORAGE_KEY = "shopping_cart";

const toaster = createToaster({
  placement: "top-end",
  duration: 2000,
});

// ============================================================================
// STORAGE UTILITIES
// ============================================================================

export const cartStorage = {
  get: (): CartItem[] => {
    try {
      const cart = localStorage.getItem(STORAGE_KEY);
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      return [];
    }
  },

  save: (cart: CartItem[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  },

  clear: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing cart from localStorage:", error);
    }
  },
};

// ============================================================================
// CART OPERATIONS
// ============================================================================

export const cartOperations = {
  addItem: (cart: CartItem[], product: Product): CartItem[] => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      return cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }

    return [...cart, { ...product, quantity: 1 }];
  },

  removeItem: (cart: CartItem[], productId: number): CartItem[] => {
    return cart.filter((item) => item.id !== productId);
  },

  updateQuantity: (
    cart: CartItem[],
    productId: number,
    quantity: number,
  ): CartItem[] => {
    if (quantity <= 0) {
      return cartOperations.removeItem(cart, productId);
    }

    return cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item,
    );
  },

  calculateTotal: (cart: CartItem[]): number => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getTotalItems: (cart: CartItem[]): number => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },
};

// ============================================================================
// CUSTOM HOOK
// ============================================================================

export const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart on mount
  useEffect(() => {
    setCartItems(cartStorage.get());
  }, []);

  // Add item to cart
  const addToCart = useCallback((product: Product) => {
    const currentCart = cartStorage.get();
    const updatedCart = cartOperations.addItem(currentCart, product);

    cartStorage.save(updatedCart);
    setCartItems(updatedCart);

    toaster.create({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      type: "success",
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((productId: number) => {
    const currentCart = cartStorage.get();
    const updatedCart = cartOperations.removeItem(currentCart, productId);

    cartStorage.save(updatedCart);
    setCartItems(updatedCart);

    toaster.create({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
      type: "info",
    });
  }, []);

  // Update quantity
  const updateQuantity = useCallback((productId: number, quantity: number) => {
    const currentCart = cartStorage.get();
    const updatedCart = cartOperations.updateQuantity(
      currentCart,
      productId,
      quantity,
    );

    cartStorage.save(updatedCart);
    setCartItems(updatedCart);
  }, []);

  // Clear cart
  const clearCart = useCallback(() => {
    cartStorage.clear();
    setCartItems([]);

    toaster.create({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      type: "info",
    });
  }, []);

  // Check if product is in cart
  const isInCart = useCallback(
    (productId: number): boolean => {
      return cartItems.some((item) => item.id === productId);
    },
    [cartItems],
  );

  // Get item quantity
  const getItemQuantity = useCallback(
    (productId: number): number => {
      const item = cartItems.find((item) => item.id === productId);
      return item?.quantity || 0;
    },
    [cartItems],
  );

  // Memoized calculations
  const totalItems = useMemo(
    () => cartOperations.getTotalItems(cartItems),
    [cartItems],
  );

  const totalPrice = useMemo(
    () => cartOperations.calculateTotal(cartItems),
    [cartItems],
  );

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
    totalItems,
    totalPrice,
  };
};

export type { Product, CartItem };

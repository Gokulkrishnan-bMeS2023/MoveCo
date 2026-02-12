// ============================================================================
// hooks/useShoppingCart.ts
// Centralized shopping cart hook - single source of truth
// ============================================================================

import { useState, useEffect, useCallback, useMemo } from "react";
import { createToaster } from "@chakra-ui/react";
import type { CartItem, Product } from "./DTOs";

// ============================================================================
// CONSTANTS
// ============================================================================

const STORAGE_KEY = "shopping_cart";
export const TAX_RATE = 0.0823; // 8.23% tax

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
// CART OPERATIONS (Pure functions)
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

  calculateSubtotal: (cart: CartItem[]): number => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  calculateTax: (subtotal: number, taxRate: number = TAX_RATE): number => {
    return subtotal * taxRate;
  },

  calculateTotal: (cart: CartItem[], taxRate: number = TAX_RATE): number => {
    const subtotal = cartOperations.calculateSubtotal(cart);
    const tax = cartOperations.calculateTax(subtotal, taxRate);
    return subtotal + tax;
  },

  getTotalItems: (cart: CartItem[]): number => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  isProductInCart: (cart: CartItem[], productId: number): boolean => {
    return cart.some((item) => item.id === productId);
  },

  getItemQuantity: (cart: CartItem[], productId: number): number => {
    const item = cart.find((item) => item.id === productId);
    return item?.quantity || 0;
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

  // Sync state with storage
  const syncCart = useCallback((updatedCart: CartItem[]) => {
    cartStorage.save(updatedCart);
    setCartItems(updatedCart);
  }, []);

  // Add item to cart
  const addToCart = useCallback(
    (product: Product) => {
      const currentCart = cartStorage.get();
      const updatedCart = cartOperations.addItem(currentCart, product);
      syncCart(updatedCart);

      toaster.create({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
        type: "success",
      });
    },
    [syncCart],
  );

  // Remove item from cart
  const removeFromCart = useCallback(
    (productId: number) => {
      const currentCart = cartStorage.get();
      const updatedCart = cartOperations.removeItem(currentCart, productId);
      syncCart(updatedCart);

      toaster.create({
        title: "Item removed",
        description: "Product has been removed from your cart",
        type: "info",
      });
    },
    [syncCart],
  );

  // Update quantity
  const updateQuantity = useCallback(
    (productId: number, quantity: number) => {
      if (quantity < 1) return;

      const currentCart = cartStorage.get();
      const updatedCart = cartOperations.updateQuantity(
        currentCart,
        productId,
        quantity,
      );
      syncCart(updatedCart);
    },
    [syncCart],
  );

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
      return cartOperations.isProductInCart(cartItems, productId);
    },
    [cartItems],
  );

  // Get item quantity
  const getItemQuantity = useCallback(
    (productId: number): number => {
      return cartOperations.getItemQuantity(cartItems, productId);
    },
    [cartItems],
  );

  // Memoized calculations
  const totalItems = useMemo(
    () => cartOperations.getTotalItems(cartItems),
    [cartItems],
  );

  const subtotal = useMemo(
    () => cartOperations.calculateSubtotal(cartItems),
    [cartItems],
  );

  const tax = useMemo(() => cartOperations.calculateTax(subtotal), [subtotal]);

  const total = useMemo(() => subtotal + tax, [subtotal, tax]);

  return {
    // State
    cartItems,

    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    // Queries
    isInCart,
    getItemQuantity,

    // Computed values
    totalItems,
    subtotal,
    tax,
    total,
  };
};

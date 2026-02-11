// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// export const PRODUCTS: Product[] = [
//   {
//     id: 1,
//     name: "Starter Moving Kit FREE SHIPPING",
//     price: 90,
//     image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=500",
//   },
//   {
//     id: 2,
//     name: "House Moving Kit FREE SHIPPING",
//     price: 169,
//     image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=500",
//   },
//   {
//     id: 3,
//     name: "Premium Moving Blankets",
//     price: 45,
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
//   },
//   {
//     id: 4,
//     name: "Professional Moving Dolly",
//     price: 129,
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
//   },
// ];

//2

// ============================================================================
// constants/products.ts
// Product data and constants
// ============================================================================

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  freeShipping?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Starter Moving Kit FREE SHIPPING",
    price: 90.0,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=500",
    category: "Kits",
    freeShipping: true,
  },
  {
    id: 2,
    name: "House Moving Kit FREE SHIPPING",
    price: 169.0,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=500",
    category: "Kits",
    freeShipping: true,
  },
  {
    id: 3,
    name: "Premium Moving Blankets",
    price: 45.0,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    category: "Packing",
    freeShipping: false,
  },
  {
    id: 4,
    name: "Professional Moving Dolly",
    price: 129.0,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    category: "Equipment",
    freeShipping: false,
  },
];

export const CART_STORAGE_KEY = "shopping_cart";

export const TOAST_CONFIG = {
  placement: "top-end" as const,
  duration: 2000,
};

export const GRID_BREAKPOINTS = {
  base: "1fr",
  sm: "repeat(2, 1fr)",
  lg: "repeat(3, 1fr)",
  xl: "repeat(4, 1fr)",
};

import type { Product } from "./DTOs";
import { images } from "../../../assets";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Starter Moving Kit FREE SHIPPING",
    price: 90.0,
    image: images.product,
  },
  {
    id: 2,
    name: "House Moving Kit FREE SHIPPING",
    price: 169.0,
    image: images.product,
  },
  {
    id: 3,
    name: "Premium Moving Blankets",
    price: 45.0,
    image: images.product,
  },
  {
    id: 4,
    name: "Professional Moving Dolly",
    price: 129.0,
    image: images.product,
  },
];

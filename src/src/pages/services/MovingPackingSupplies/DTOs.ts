interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  active: boolean;
  imageUrl: string;
  priceFormat: string;
}
interface CartItem extends Product {
  quantity: number;
}

export type { Product, CartItem };
import { api } from "./api";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  active: boolean;
  imageUrl: string;
  priceFormat: string;
}

export const postProducts= (data: Product) => {
  return api.post("/Product", data);
};

export const getProducts = () => {
  return api.get("/Product");
};

import { api } from "../lib/axios";

export const getProducts = () => {
  return api.get("/products");
};

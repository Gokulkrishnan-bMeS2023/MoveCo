import { api } from "./api";

export const getQuote = () => {
  return api.get("/quotes/inventory-list");
};

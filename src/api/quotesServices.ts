import { api } from "../lib/axios";

export interface InstantEstimateRequestDTO {
  firstName: string;
  lastName: string;
  moveDate: string;
  email: string;
  phoneNo: string;
  ipAddress: string;
}

export const getQuote = () => {
  return api.get("/quotes/inventory-list");
};

export const postRequestCallback = (data: InstantEstimateRequestDTO) => {
  return api.post("/quotes/request-callback", data);
};

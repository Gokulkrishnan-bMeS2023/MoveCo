import { api } from "../lib/axios";

export interface InventoryItemDTO {
  inventoryID: number;
  qty: number;
}

export interface QuoteRequestDTO {
  firstName: string;
  lastName: string;
  phoneNo: string;
  mobilePhone: string;
  workPhone: string;
  homePhone: string;
  email: string;

  moveDate: string;
  moveTime: string;

  dropDate: string;
  dropTime: string;

  fromAddress: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;

  flightOfStairs: string;
  doorToTruck: string;

  dropAddress: string;
  dropAddress2: string;
  dropCity: string;
  dropState: string;
  dropZipCode: string;

  dropFlightOfStairs: string;
  dropDoorToTruck: string;

  moveSize: string;
  heardBy: string;
  additionalInfo: string;

  quoteId: number;

  inventories: InventoryItemDTO[];
}

export const postOnlineEstimate = (data: QuoteRequestDTO) => {
  return api.post("/quotes/online-estimate", data);
};

import { api } from "./api";

export interface InHomeEstimatePayload {
  inHomeEstimateDate: string;
  inHomeEstimateTimeRange: string;
  moveDate: string;
  moveSize: string;
  referredBy: string;
  firstName: string;
  lastName: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  faxPhone: string;
  fromAddress: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  additionalInfo: string;
  quoteId: number;
}

export const postInHomeEstimate = (data: InHomeEstimatePayload) => {
  return api.post("/quotes/inhome-estimate", data);
};

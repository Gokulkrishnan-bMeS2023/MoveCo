import { api } from "./api";

export interface TestimonialPayload {
  firstName: string;
  lastName: string;
  moveDate: string;
  email: string;
  comments: string;
  isActive: boolean;
}

export const postTestimonial = (data: TestimonialPayload) => {
  return api.post("/v1/customer-testimonials", data);
};

export const getTestimonial = () => {
  return api.get("/v1/customer-testimonials");
};
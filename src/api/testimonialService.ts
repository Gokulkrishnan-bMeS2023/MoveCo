import { api } from "../lib/axios";

export interface TestimonialPayload {
  firstName: string;
  lastName: string;
  moveDate: string;
  email: string;
  comments: string;
}
export interface GetTestimonialsParams {
  page?: number;
  pageSize?: number;
}

export const postTestimonial = (data: TestimonialPayload) => {
  return api.post("/testimonials", data);
};

export const getTestimonial = (params?: GetTestimonialsParams) => {
  return api.get("/testimonials", { params });
};
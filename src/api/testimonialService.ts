import { api } from "./api";

export interface TestimonialPayload {
  firstName: string;
  lastName: string;
  moveDate: string;
  email: string;
  comments: string;
}

export const postTestimonial = (data: TestimonialPayload) => {
  return api.post("/Testimonial", data);
};

export const getTestimonial = () => {
  return api.get("/Testimonial");
};
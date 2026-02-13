import type { TestimonialFormValues, TestimonialErrors } from "./DTOs";

export const validateTestimonial = (
  values: TestimonialFormValues
): TestimonialErrors => {
  const errors: TestimonialErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!values.moveDate) {
    errors.moveDate = "Move date is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.comments.trim()) {
    errors.comments = "Comments are required";
  }

  return errors;
};

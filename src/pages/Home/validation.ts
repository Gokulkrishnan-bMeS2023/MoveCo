import type { QuoteFormDTO, QuoteFormErrors } from "./DTOs";
const PHONE_REGEX = /^\d{10}$/;

export const validateQuoteForm = (
  data: QuoteFormDTO
): QuoteFormErrors => {
  const errors: QuoteFormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!data.date) {
    errors.date = "Date is required";
  }

   if (!data.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  } else if (!PHONE_REGEX.test(data.phoneNumber)) {
    errors.phoneNumber = "Phone number must be 10 digits";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.estimate) {
    errors.estimate = "Please select an estimate type";
  }

  return errors;
};
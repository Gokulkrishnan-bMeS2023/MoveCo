import type {
  ContactFormValues,
  ReferralFormValues,
  FormErrors,
} from "./DTOs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/; 

export const validateContactForm = (
  values: ContactFormValues
): FormErrors<ContactFormValues> => {
  const errors: FormErrors<ContactFormValues> = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_REGEX.test(values.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  return errors;
};

export const validateReferralForm = (
  values: ReferralFormValues
): FormErrors<ReferralFormValues> => {
  const errors: FormErrors<ReferralFormValues> = {};

  if (!values.yourName.trim()) {
    errors.yourName = "Name is required";
  }

  if (!values.friendEmail.trim()) {
    errors.friendEmail = "Friend's email is required";
  } else if (!emailRegex.test(values.friendEmail)) {
    errors.friendEmail = "Enter a valid email";
  }

  if (!values.friendPhone) {
    errors.friendPhone = "Friend's phone number is required";
  } else if (!PHONE_REGEX.test(values.friendPhone)) {
    errors.friendPhone = "Phone number must be 10 digits";
  }

  return errors;
};
import type {
  ContactFormValues,
  ReferralFormValues,
  FormErrors,
} from "./DTOs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{7,}$/;

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

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "Enter a valid phone number";
  }

  return errors;
};

export const validateReferralForm = (
  values: ReferralFormValues
): FormErrors<ReferralFormValues> => {
  const errors: FormErrors<ReferralFormValues> = {};

  if (!values.yourName.trim()) {
    errors.yourName = "Your name is required";
  }

  if (!values.friendEmail.trim()) {
    errors.friendEmail = "Friend's email is required";
  } else if (!emailRegex.test(values.friendEmail)) {
    errors.friendEmail = "Enter a valid email";
  }

  if (!values.friendPhone.trim()) {
    errors.friendPhone = "Friend's phone number is required";
  }

  return errors;
};

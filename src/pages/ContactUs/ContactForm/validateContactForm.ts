import type { FormErrors } from "../../../types/forms";
import { isRequired, isValidEmail } from "../../../utils/validation";
import type { ContactFormValues } from "./DTOs";

export const validateContactForm = (
  values: ContactFormValues,
): FormErrors<ContactFormValues> => {
  const errors: FormErrors<ContactFormValues> = {};

  if (!isRequired(values.name)) errors.name = "Name is required";

  if (!isRequired(values.email)) errors.email = "Email is required";
  else if (!isValidEmail(values.email))
    errors.email = "Enter a valid email address";

  if (!values.phone) errors.phone = "Phone number is required";

  return errors;
};

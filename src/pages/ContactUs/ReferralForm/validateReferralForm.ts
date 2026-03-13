import type { FormErrors } from "../../../types/forms";
import { isRequired, isValidEmail } from "../../../utils/validation";
import type { ReferralFormValues } from "./DTOs";

export const validateReferralForm = (
  values: ReferralFormValues,
): FormErrors<ReferralFormValues> => {
  const errors: FormErrors<ReferralFormValues> = {};

  if (!isRequired(values.yourName)) errors.yourName = "Name is required";

  if (!isRequired(values.friendEmail))
    errors.friendEmail = "Friend's email is required";
  else if (!isValidEmail(values.friendEmail))
    errors.friendEmail = "Enter a valid email";

  if (!values.friendPhone)
    errors.friendPhone = "Friend's phone number is required";

  return errors;
};

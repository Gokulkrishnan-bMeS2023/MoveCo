import type {
  MoveEstimateFormValues,
  MoveEstimateErrors,
} from "./DTOs";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export const validateMoveEstimate = (
  values: MoveEstimateFormValues
): MoveEstimateErrors => {
  const errors: MoveEstimateErrors = {};

  // General Information
  if (!values.visitDate) errors.visitDate = "Visit date is required";
  if (!values.visitTime) errors.visitTime = "Preferred time is required";
  if (!values.moveDate) errors.moveDate = "Move date is required";
  if (!values.moveSize) errors.moveSize = "Move size is required";
  if (!values.hearAbout) errors.hearAbout = "This field is required";

  // Contact Information
  if (!values.firstName.trim())
    errors.firstName = "First name is required";

  if (!values.lastName.trim())
    errors.lastName = "Last name is required";

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.homePhone.trim())
    errors.homePhone = "Home phone is required";

  // Move Location
  if (!values.fromAddress.trim())
    errors.fromAddress = "From address is required";

  if (!values.city.trim())
    errors.city = "City is required";

  if (!values.state.trim())
    errors.state = "State is required";

  if (!values.zipCode.trim())
    errors.zipCode = "Zip code is required";

  return errors;
};

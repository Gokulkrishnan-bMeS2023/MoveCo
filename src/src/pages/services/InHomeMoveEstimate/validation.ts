import type { MoveEstimateFormValues, MoveEstimateErrors } from "./DTOs";
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^\d{10}$/;

export const validateMoveEstimate = (
  values: MoveEstimateFormValues,
): MoveEstimateErrors => {
  const errors: MoveEstimateErrors = {};
  if (!values.visitDate) errors.visitDate = "Visit date is required";
  if (!values.visitTime) errors.visitTime = "Preferred time is required";
  if (!values.moveDate) errors.moveDate = "Move date is required";
  if (!values.moveSize) errors.moveSize = "Move size is required";
  if (!values.hearAbout) errors.hearAbout = "This field is required";
  if (!values.firstName.trim()) errors.firstName = "First name is required";
  if (!values.lastName.trim()) errors.lastName = "Last name is required";
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.homePhone) {
    errors.homePhone = "Home phone is required";
  } else if (!PHONE_REGEX.test(values.homePhone.replace(/\D/g, ""))) {
    errors.homePhone = "Enter valid 10 digit phone number";
  }

  if (
    values.cellPhone &&
    !PHONE_REGEX.test(values.cellPhone.replace(/\D/g, ""))
  ) {
    errors.cellPhone = "Enter valid 10 digit phone number";
  }

  if (
    values.workPhone &&
    !PHONE_REGEX.test(values.workPhone.replace(/\D/g, ""))
  ) {
    errors.workPhone = "Enter valid 10 digit phone number";
  }

  if (
    values.faxPhone &&
    !PHONE_REGEX.test(values.faxPhone.replace(/\D/g, ""))
  ) {
    errors.faxPhone = "Enter valid 10 digit phone number";
  }
  if (!values.fromAddress.trim())
    errors.fromAddress = "From address is required";
  if (!values.city.trim()) errors.city = "City is required";
  if (!values.state.trim()) errors.state = "State is required";
  if (!values.zipCode.trim()) errors.zipCode = "Zip code is required";

  return errors;
};

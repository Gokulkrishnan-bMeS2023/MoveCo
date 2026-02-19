import type {
  MoveEstimateFormValues,
  MoveEstimateErrors,
} from "./DTOs";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^\d{10}$/; // ✅ exactly 10 digits

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

  // ✅ Home Phone — required + must be 10 digits
  if (!values.homePhone) {
    errors.homePhone = "Home phone is required";
  } else if (!PHONE_REGEX.test(values.homePhone)) {
    errors.homePhone = "Phone number must be 10 digits";
  }

  // ✅ Cell Phone — optional, but if entered must be 10 digits
  if (values.cellPhone && !PHONE_REGEX.test(values.cellPhone)) {
    errors.cellPhone = "Phone number must be 10 digits";
  }

  // ✅ Work Phone — optional, but if entered must be 10 digits
  if (values.workPhone && !PHONE_REGEX.test(values.workPhone)) {
    errors.workPhone = "Phone number must be 10 digits";
  }

  // ✅ Fax Phone — optional, but if entered must be 10 digits
  if (values.faxPhone && !PHONE_REGEX.test(values.faxPhone)) {
    errors.faxPhone = "Phone number must be 10 digits";
  }

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
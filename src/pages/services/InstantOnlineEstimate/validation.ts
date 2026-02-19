import type {
  InstantEstimateDTO,
  InstantEstimateErrors,
  MoveInformationDTO,
  MoveInformationErrors,
} from "./DTOs";
import type { InventoryDTO } from "./DTOs";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^\d{10}$/;

export const validateInstantEstimate = (
  data: InstantEstimateDTO
): InstantEstimateErrors => {
  const errors: InstantEstimateErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "Name is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!data.date) {
    errors.date = "Date is required";
  }

 const cleanedPhone = data.phone.replace(/\D/g, "");

if (!cleanedPhone) {
  errors.phone = "Phone number is required";
} else if (cleanedPhone.length !== 10) {
  errors.phone = "Phone number must be 10 digits";
}


  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export const validateMoveInformation = (
  data: MoveInformationDTO
): MoveInformationErrors => {
  const errors: MoveInformationErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Invalid email address";
  }

  const cleanedCell = data.phone.replace(/\D/g, "");



if (!cleanedCell) {
  errors.phone = "Phone number is required";
} else if (!PHONE_REGEX.test(cleanedCell)) {
  errors.phone = "Phone number must be 10 digits";
}


  if (!data.moveDate) {
    errors.moveDate = "Move date is required";
  }

  if (!data.fromZipCode.trim()) {
    errors.fromZipCode = "Zip code is required";
  }

  return errors;
};

export interface InventoryErrors {
  quantities?: string;
}

export const validateInventory = (
  data: InventoryDTO
): InventoryErrors => {
  const errors: InventoryErrors = {};

  const hasItems = Object.values(data.quantities).some(
    (qty) => qty > 0
  );

  if (!hasItems) {
    errors.quantities = "Please select at least one item.";
  }

  return errors;
};
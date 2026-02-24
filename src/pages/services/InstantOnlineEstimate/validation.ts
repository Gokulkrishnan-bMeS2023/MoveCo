import type {
  InstantEstimateDTO,
  InstantEstimateErrors,
  MoveInformationDTO,
  MoveInformationErrors,
} from "./DTOs";
import type { InventoryDTO } from "./DTOs";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^\d{10}$/;
const ZIP_REGEX = /^\d{5}$/;

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

  // Phone (required)
  const cleanedPhone = data.phone.replace(/\D/g, "");
  if (!cleanedPhone) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_REGEX.test(cleanedPhone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  // Work Phone (optional, 10-digit check if provided)
  if (data.workPhone) {
    const cleaned = data.workPhone.replace(/\D/g, "");
    if (!PHONE_REGEX.test(cleaned)) {
      errors.workPhone = "Phone number must be 10 digits";
    }
  }

  // Home Phone (optional, 10-digit check if provided)
  if (data.homePhone) {
    const cleaned = data.homePhone.replace(/\D/g, "");
    if (!PHONE_REGEX.test(cleaned)) {
      errors.homePhone = "Phone number must be 10 digits";
    }
  }

  // Fax Phone (optional, 10-digit check if provided)
  if (data.faxPhone) {
    const cleaned = data.faxPhone.replace(/\D/g, "");
    if (!PHONE_REGEX.test(cleaned)) {
      errors.faxPhone = "Phone number must be 10 digits";
    }
  }

  if (!data.moveDate) {
    errors.moveDate = "Move date is required";
  }

  // From Zip Code (required + 5 digits)
// From Zip
if (!data.fromZipCode.trim()) {
  errors.fromZipCode = "Zip code is required";
} else if (!ZIP_REGEX.test(data.fromZipCode)) {
  errors.fromZipCode = "Zip code must be 5 digits";
}

// To Zip
if (!data.toZipCode.trim()) {
  errors.toZipCode = "Zip code is required";
} else if (!ZIP_REGEX.test(data.toZipCode)) {
  errors.toZipCode = "Zip code must be 5 digits";
}

  return errors;
};

export interface InventoryErrors {
  quantities?: string;
}

export const validateInventory = (data: InventoryDTO): InventoryErrors => {
  const errors: InventoryErrors = {};

  const hasItems = Object.values(data.quantities).some((qty) => qty > 0);

  if (!hasItems) {
    errors.quantities = "Please select at least one item.";
  }

  return errors;
};
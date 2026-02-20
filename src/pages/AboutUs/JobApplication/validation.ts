import type {
  StepOneDTO,
  StepOneErrors,
  EducationDTO,
  EducationErrors,
  EmploymentExperienceDTO,
  EmploymentExperienceErrors,
  StepTwoDTO,
  StepTwoErrors,
} from "./DTOs";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^\d{10}$/;
const SSN_REGEX = /^\d{9}$/; // ✅ just 9 digits, no format check


// Step 1 Validation
export const validateStepOne = (data: StepOneDTO): StepOneErrors => {
  const errors: StepOneErrors = {};

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

  if (data.HomePhone) {
    const cleaned = data.HomePhone.replace(/\D/g, "");
    if (!PHONE_REGEX.test(cleaned)) {
      errors.HomePhone = "Enter valid 10 digit phone number";
    }
  }

  if (data.CellPhone) {
    const cleaned = data.CellPhone.replace(/\D/g, "");
    if (!PHONE_REGEX.test(cleaned)) {
      errors.CellPhone = "Enter valid 10 digit phone number";
    }
  }

  // ✅ Strip formatting, just check 9 digits
  if (data.SocialSecurityNumber) {
    const cleaned = data.SocialSecurityNumber.replace(/\D/g, "");
    if (!SSN_REGEX.test(cleaned)) {
      errors.SocialSecurityNumber = "Enter 9 digit SSN";
    }
  }

  if (!data.citizen) {
    errors.citizen = "This field is required";
  }

  if (!data.felony) {
    errors.felony = "This field is required";
  }

  if (!data.terminated) {
    errors.terminated = "This field is required";
  }

  if (!data.drugTest) {
    errors.drugTest = "This field is required";
  }

  return errors;
};

export const validateEducation = (_data: EducationDTO): EducationErrors => {
  const errors: EducationErrors = {};

  return errors;
};

// Employment Experience Validation
export const validateEmploymentExperience = (
  data: EmploymentExperienceDTO
): EmploymentExperienceErrors => {
  const errors: EmploymentExperienceErrors = {};

  if (data.supervisorPhone) {
    const cleaned = data.supervisorPhone.replace(/\D/g, "");
    if (cleaned.length !== 10) {
      errors.supervisorPhone = "Please enter a valid 10 digit phone number";
    }
  }

  return errors;
};

// Step 2 Validation (Education + Employment)
export const validateStepTwo = (data: StepTwoDTO): StepTwoErrors => {
  const errors: StepTwoErrors = {};

  const educationErrors = validateEducation(data.education);
  if (Object.keys(educationErrors).length > 0) {
    errors.education = educationErrors;
  }

  const experienceErrors: EmploymentExperienceErrors[] = [];
  data.experiences.forEach((exp, index) => {
    const expErrors = validateEmploymentExperience(exp);
    if (Object.keys(expErrors).length > 0) {
      experienceErrors[index] = expErrors;
    }
  });

  if (experienceErrors.length > 0) {
    errors.experiences = experienceErrors;
  }

  return errors;
};
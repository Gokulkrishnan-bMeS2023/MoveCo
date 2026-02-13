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

export const validateEducation = (data: EducationDTO): EducationErrors => {
  const errors: EducationErrors = {};

  if (!data.schoolName.trim()) {
    errors.schoolName = "School name is required";
  }

  if (!data.location.trim()) {
    errors.location = "Location is required";
  }

  return errors;
};

// Employment Experience Validation
export const validateEmploymentExperience = (
  data: EmploymentExperienceDTO
): EmploymentExperienceErrors => {
  const errors: EmploymentExperienceErrors = {};

  if (!data.employer.trim()) {
    errors.employer = "Employer is required";
  }

  if (!data.jobTitle.trim()) {
    errors.jobTitle = "Job title is required";
  }

  if (!data.from) {
    errors.from = "Start date is required";
  }

  if (!data.to) {
    errors.to = "End date is required";
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
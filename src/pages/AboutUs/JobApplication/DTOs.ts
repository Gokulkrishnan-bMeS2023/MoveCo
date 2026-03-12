
// Step 1 - Personal Information
export interface StepOneDTO {
  PositionSought: string;
  Howdidyoulearnabouttheposition: string;
  firstName: string;
  lastName: string;
  email: string;
  HomePhone: string;
  CellPhone: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;
  SocialSecurityNumber: string;
  Onwhatdatewouldyoubeavailableforwork: string;
  citizen: string;
  felony: string;
  terminated: string;
  drugTest: string;
}

// Step 2 - Education
export interface EducationDTO {
  schoolName: string;
  location: string;
  years: string;
  degree: string;
  major: string;
  otherTraining: string;
  additionalInfo: string;
 
}

// Step 2 - Employment Experience
export interface EmploymentExperienceDTO {
  employer: string;
  jobTitle: string;
  from: string;
  to: string;
  priorPosition: string;
  startSalary: string;
  endSalary: string;
  supervisorName: string;
  supervisorPhone: string;
  reason: string;
  duties: string;
}

// Step 2 - Complete
export interface StepTwoDTO {
  education: EducationDTO;
  experiences: EmploymentExperienceDTO[];
}

// Step 3 - Photo and Acknowledgment
export interface StepThreeDTO {
  photoFile: File | null;
  photoFileName: string;
  agreed: boolean;
}

// Complete Job Application
export interface JobApplicationDTO {
  stepOne: StepOneDTO;
  stepTwo: StepTwoDTO;
  stepThree: StepThreeDTO;
}

// Error types for each step
export type StepOneErrors = Partial<Record<keyof StepOneDTO, string>>;
export type EducationErrors = Partial<Record<keyof EducationDTO, string>>;
export type EmploymentExperienceErrors = Partial<Record<keyof EmploymentExperienceDTO, string>>;
export type StepTwoErrors = {
  education?: EducationErrors;
  experiences?: EmploymentExperienceErrors[];
};
export type StepThreeErrors = Partial<Record<keyof StepThreeDTO, string>>;


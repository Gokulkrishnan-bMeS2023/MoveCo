import type {
  EducationDTO,
  EmploymentExperienceDTO,
  EmploymentExperienceErrors,
} from "../DTOs";

export interface Step2AddressProps {
  education: EducationDTO;
  experiences: EmploymentExperienceDTO[];
  onEducationChange: <K extends keyof EducationDTO>(
    field: K,
    value: EducationDTO[K],
  ) => void;
  onExperienceChange: <K extends keyof EmploymentExperienceDTO>(
    index: number,
    field: K,
    value: EmploymentExperienceDTO[K],
  ) => void;
  onAddExperience: () => void;
  onRemoveExperience: (index: number) => void;
  experienceErrors?: EmploymentExperienceErrors[];
  onClearExperienceError: (
    index: number,
    field: keyof EmploymentExperienceDTO,
  ) => void;
}
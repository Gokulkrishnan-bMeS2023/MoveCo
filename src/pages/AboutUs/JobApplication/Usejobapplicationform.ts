import { useState, useRef, useEffect } from "react";
import type {
  StepOneDTO,
  StepOneErrors,
  StepTwoDTO,
  StepTwoErrors,
  StepThreeDTO,
  EmploymentExperienceDTO,
  EducationDTO,
} from "./DTOs";
import { validateStepOne, validateStepTwo } from "./validation";

export const useJobApplicationForm = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState<StepOneDTO>({
    PositionSought: "",
    Howdidyoulearnabouttheposition: "",
    firstName: "",
    lastName: "",
    email: "",
    HomePhone: "",
    CellPhone: "",
    Address: "",
    City: "",
    State: "",
    ZipCode: "",
    SocialSecurityNumber: "",
    Onwhatdatewouldyoubeavailableforwork: "",
    citizen: "",
    felony: "",
    terminated: "",
    drugTest: "",
  });

  const [stepTwoData, setStepTwoData] = useState<StepTwoDTO>({
    education: {
      schoolName: "",
      location: "",
      years: "",
      degree: "",
      major: "",
      otherTraining: "",
      additionalInfo: "",
    },
    experiences: [
      {
        employer: "",
        jobTitle: "",
        from: "",
        to: "",
        priorPosition: "",
        startSalary: "",
        endSalary: "",
        supervisorName: "",
        supervisorPhone: "",
        reason: "",
        duties: "",
      },
    ],
  });

  const [stepThreeData, setStepThreeData] = useState<StepThreeDTO>({
    photoFile: null,
    photoFileName: "",
    agreed: false,
  });

  const [errors, setErrors] = useState<StepOneErrors>({});
  const [stepTwoErrors, setStepTwoErrors] = useState<StepTwoErrors>({});

  const step3Ref = useRef<any>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Fixed: accepts string so Step1PersonalInfo props match cleanly
  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof StepOneErrors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleEducationChange = <K extends keyof EducationDTO>(
    field: K,
    value: EducationDTO[K],
  ) => {
    setStepTwoData((prev) => ({
      ...prev,
      education: { ...prev.education, [field]: value },
    }));
  };

  const handleExperienceChange = <K extends keyof EmploymentExperienceDTO>(
    index: number,
    field: K,
    value: EmploymentExperienceDTO[K],
  ) => {
    setStepTwoData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp,
      ),
    }));
  };

  const addExperience = () => {
    setStepTwoData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          employer: "",
          jobTitle: "",
          from: "",
          to: "",
          priorPosition: "",
          startSalary: "",
          endSalary: "",
          supervisorName: "",
          supervisorPhone: "",
          reason: "",
          duties: "",
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setStepTwoData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const handleStepThreeChange = <K extends keyof StepThreeDTO>(
    field: K,
    value: StepThreeDTO[K],
  ) => {
    setStepThreeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClearExperienceError = (
    index: number,
    field: keyof EmploymentExperienceDTO,
  ) => {
    setStepTwoErrors((prev) => {
      const updatedExperiences = [...(prev.experiences || [])];
      if (updatedExperiences[index]) {
        updatedExperiences[index] = {
          ...updatedExperiences[index],
          [field]: "",
        };
      }
      return { ...prev, experiences: updatedExperiences };
    });
  };

  const nextPage = () => {
    if (page === 0) {
      const validationErrors = validateStepOne(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
    }

    if (page === 1) {
      const stepTwoValidationErrors = validateStepTwo(stepTwoData);
      if (Object.keys(stepTwoValidationErrors).length > 0) {
        setStepTwoErrors(stepTwoValidationErrors);
        return;
      }
      setStepTwoErrors({});
    }

    if (page === 2) {
      if (!step3Ref.current?.validate()) return;
      const completeFormData = {
        stepOne: formData,
        stepTwo: stepTwoData,
        stepThree: stepThreeData,
      };
      alert("FORM SUBMITTED");
      console.log("Complete Form Data:", completeFormData);
      return;
    }

    setPage((p) => p + 1);
  };

  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  return {
    page,
    formData,
    errors,
    stepTwoData,
    stepTwoErrors,
    stepThreeData,
    step3Ref,
    handleChange,
    handleEducationChange,
    handleExperienceChange,
    addExperience,
    removeExperience,
    handleStepThreeChange,
    handleClearExperienceError,
    nextPage,
    prevPage,
  };
};

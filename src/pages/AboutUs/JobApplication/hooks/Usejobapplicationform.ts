import { useState, useRef, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"; // ← add
import type {
  StepOneDTO,
  StepOneErrors,
  StepTwoDTO,
  StepTwoErrors,
  StepThreeDTO,
  EmploymentExperienceDTO,
  EducationDTO,
} from "../types/DTOs";
import { validateStepOne, validateStepTwo } from "../validation/validation";
import { postJobApplication } from "../../../../api/jobApplicationService";
import { toaster } from "../../../../components/ui/toaster";

export const useJobApplicationForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha(); // ← add
  const [page, setPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false); // ← add

  const initialFormData: StepOneDTO = {
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
  };

  const initialStepTwoData: StepTwoDTO = {
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
  };

  const initialStepThreeData: StepThreeDTO = {
    photoFile: null,
    photoFileName: "",
    agreed: false,
  };

  const [formData, setFormData] = useState<StepOneDTO>(initialFormData);
  const [stepTwoData, setStepTwoData] =
    useState<StepTwoDTO>(initialStepTwoData);
  const [stepThreeData, setStepThreeData] =
    useState<StepThreeDTO>(initialStepThreeData);
  const [errors, setErrors] = useState<StepOneErrors>({});
  const [stepTwoErrors, setStepTwoErrors] = useState<StepTwoErrors>({});

  const step3Ref = useRef<any>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

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

  const resetForm = () => {
    setFormData(initialFormData);
    setStepTwoData(initialStepTwoData);
    setStepThreeData(initialStepThreeData);
    setErrors({});
    setStepTwoErrors({});
    setPage(0);
  };

  const nextPage = async () => {
    // ── Step 1 validation ──
    if (page === 0) {
      const validationErrors = validateStepOne(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toaster.create({
          title: "Please fix the errors before continuing.",
          type: "error",
        });
        return;
      }
      setErrors({});
    }

    // ── Step 2 validation ──
    if (page === 1) {
      const stepTwoValidationErrors = validateStepTwo(stepTwoData);
      if (Object.keys(stepTwoValidationErrors).length > 0) {
        setStepTwoErrors(stepTwoValidationErrors);
        toaster.create({
          title: "Please fix the errors before continuing.",
          type: "error",
        });
        return;
      }
      setStepTwoErrors({});
    }

    // ── Step 3 — final submission ──
    if (page === 2) {
      if (!step3Ref.current?.validate()) return;

      // ← check recaptcha ready
      if (!executeRecaptcha) {
        toaster.create({
          title: "reCAPTCHA not ready. Please try again.",
          type: "error",
        });
        return;
      }

      try {
        setIsSubmitting(true);

        // ← get token immediately before submission
        const recaptchaToken = await executeRecaptcha("job_application");

        const formDataPayload = new FormData();

        // Step 1
        formDataPayload.append("positionSought", formData.PositionSought);
        formDataPayload.append(
          "learnPosition",
          formData.Howdidyoulearnabouttheposition,
        );
        formDataPayload.append("firstName", formData.firstName);
        formDataPayload.append("lastName", formData.lastName);
        formDataPayload.append("emailAddress", formData.email);
        formDataPayload.append("homePhone", formData.HomePhone);
        formDataPayload.append("cellPhone", formData.CellPhone);
        formDataPayload.append("address", formData.Address);
        formDataPayload.append("city", formData.City);
        formDataPayload.append("state", formData.State);
        formDataPayload.append("zipCode", formData.ZipCode);
        formDataPayload.append(
          "socialSecurityNumber",
          formData.SocialSecurityNumber,
        );
        formDataPayload.append(
          "availableforWork",
          formData.Onwhatdatewouldyoubeavailableforwork,
        );
        formDataPayload.append("isUSCitizen", formData.citizen);
        formDataPayload.append("convictedofaFelony", formData.felony);
        formDataPayload.append("involuntarilyTerminated", formData.terminated);
        formDataPayload.append(
          "willSubmitPreEmploymentDrugScrnTest",
          formData.drugTest,
        );

        // Education
        formDataPayload.append("schoolname", stepTwoData.education.schoolName);
        formDataPayload.append("location", stepTwoData.education.location);
        formDataPayload.append("years", stepTwoData.education.years);
        formDataPayload.append("degreeReceived", stepTwoData.education.degree);
        formDataPayload.append("major", stepTwoData.education.major);

        // Experience 1
        const exp1 = stepTwoData.experiences[0];
        if (exp1) {
          formDataPayload.append("employer", exp1.employer);
          formDataPayload.append("jobTitle", exp1.jobTitle);
          formDataPayload.append("datesEmployedFrom", exp1.from);
          formDataPayload.append("datesEmployedTo", exp1.to);
          formDataPayload.append("priorPositions", exp1.priorPosition);
          formDataPayload.append("startingSalary", exp1.startSalary);
          formDataPayload.append("endingSalary", exp1.endSalary);
          formDataPayload.append("supervisorName", exp1.supervisorName);
          formDataPayload.append("supervisorPhone", exp1.supervisorPhone);
          formDataPayload.append("reasonforLeaving", exp1.reason);
          formDataPayload.append("dutiesPerformed", exp1.duties);
        }

        // Experience 2
        const exp2 = stepTwoData.experiences[1];
        if (exp2) {
          formDataPayload.append("secondEmployer", exp2.employer);
          formDataPayload.append("secondJobTitle", exp2.jobTitle);
          formDataPayload.append("secondDatesEmployedFrom", exp2.from);
          formDataPayload.append("secondDatesEmployedTo", exp2.to);
          formDataPayload.append("secondPriorPositions", exp2.priorPosition);
          formDataPayload.append("secondStartingSalary", exp2.startSalary);
          formDataPayload.append("secondEndingSalary", exp2.endSalary);
          formDataPayload.append("secondSupervisorName", exp2.supervisorName);
          formDataPayload.append("secondSupervisorPhone", exp2.supervisorPhone);
          formDataPayload.append("secondReasonforLeaving", exp2.reason);
          formDataPayload.append("secondDutiesPerformed", exp2.duties);
        }

        // Photo
        if (stepThreeData.photoFile) {
          formDataPayload.append("photoFile", stepThreeData.photoFile);
        }

        // ← append recaptcha token
        formDataPayload.append("recaptchaToken", recaptchaToken);

        const response = await postJobApplication(formDataPayload);
        toaster.create({
          title:
            response?.data?.message || "Application submitted successfully!",
          type: "success",
        });
        resetForm();
      } catch (error: any) {
        toaster.create({
          title:
            error?.response?.data?.message ||
            "Submission failed. Please try again.",
          type: "error",
        });
      } finally {
        setIsSubmitting(false); // ← add
      }

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
    isSubmitting, // ← expose
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

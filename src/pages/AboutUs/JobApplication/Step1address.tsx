import { useState, useRef, useEffect } from "react";
import {
  Stack,
  SimpleGrid,
  Heading,
  Box,
  Progress,
  Button,
} from "@chakra-ui/react";
import Step3Experience from "./Step3experience";
import InputField from "../../../components/common/Input/Input";
import DateInput from "../../../components/common/DateInput/DateInput";
import RadioField from "../../../components/common/Radio/Radio";
import SelectField from "../../../components/common/Select/Select";

import type { 
  StepOneDTO, 
  StepOneErrors, 
  StepTwoDTO, 
  StepThreeDTO,
  EmploymentExperienceDTO,
  EducationDTO 
} from "./DTOs";
import { validateStepOne } from "./validation";
import Step2Address from "./Step2address";

const stateOptions = [
  { label: "Texas", value: "TX" },
  { label: "Alaska", value: "AK" },
  { label: "Alabama", value: "AL" },
  { label: "Arkansas", value: "AR" },
  { label: "Arizona", value: "AZ" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "District of Columbia", value: "DC" },
  { label: "Delaware", value: "DE" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
  { label: "Hawaii", value: "HI" },
  { label: "Iowa", value: "IA" },
  { label: "Idaho", value: "ID" },
  { label: "Illinois", value: "IL" },
  { label: "Indiana", value: "IN" },
  { label: "Kansas", value: "KS" },
  { label: "Kentucky", value: "KY" },
  { label: "Louisiana", value: "LA" },
  { label: "Massachusetts", value: "MA" },
  { label: "Maryland", value: "MD" },
  { label: "Maine", value: "ME" },
  { label: "Michigan", value: "MI" },
  { label: "Minnesota", value: "MN" },
  { label: "Missouri", value: "MO" },
  { label: "Mississippi", value: "MS" },
  { label: "Montana", value: "MT" },
  { label: "North Carolina", value: "NC" },
  { label: "North Dakota", value: "ND" },
  { label: "Nebraska", value: "NE" },
  { label: "New Hampshire", value: "NH" },
  { label: "New Jersey", value: "NJ" },
  { label: "New Mexico", value: "NM" },
  { label: "Nevada", value: "NV" },
  { label: "New York", value: "NY" },
  { label: "Ohio", value: "OH" },
  { label: "Oklahoma", value: "OK" },
  { label: "Oregon", value: "OR" },
  { label: "Pennsylvania", value: "PA" },
  { label: "Puerto Rico", value: "PR" },
  { label: "Rhode Island", value: "RI" },
  { label: "South Carolina", value: "SC" },
  { label: "South Dakota", value: "SD" },
  { label: "Tennessee", value: "TN" },
  { label: "Utah", value: "UT" },
  { label: "Virginia", value: "VA" },
  { label: "Virgin Islands", value: "VI" },
  { label: "Vermont", value: "VT" },
  { label: "Washington", value: "WA" },
  { label: "Wisconsin", value: "WI" },
  { label: "West Virginia", value: "WV" },
  { label: "Wyoming", value: "WY" },
];

const JobApplicationForm = () => {
  const [page, setPage] = useState(0);
  const progressValue = ((page + 1) / 3) * 100;
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleChange = <K extends keyof StepOneDTO>(
    field: K,
    value: StepOneDTO[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleEducationChange = <K extends keyof EducationDTO>(
    field: K,
    value: EducationDTO[K],
  ) => {
    setStepTwoData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [field]: value,
      },
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
        i === index ? { ...exp, [field]: value } : exp
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
    setStepThreeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNextStep = () => {
    if (page === 0) {
      const validationErrors = validateStepOne(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
    }
    if (page === 1) {
      setPage((p) => p + 1);
      return;
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
      console.log("Photo File:", stepThreeData.photoFile);
      return;
    }

    setPage((p) => p + 1);
  };

  const yesNoOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const step3Ref = useRef<any>(null);

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <Stack gap={8}>
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
                Position Details
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <InputField
                  label="Position Sought"
                  value={formData.PositionSought}
                  onChange={(e) =>
                    handleChange("PositionSought", e.target.value)
                  }
                />
                <InputField
                  label="How did you learn about the position?"
                  value={formData.Howdidyoulearnabouttheposition}
                  onChange={(e) =>
                    handleChange(
                      "Howdidyoulearnabouttheposition",
                      e.target.value,
                    )
                  }
                />
              </SimpleGrid>
            </Box>
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Your Information
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField
                    label="First Name"
                    placeholder="First Name"
                    isRequired
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    errorMessage={errors.firstName}
                  />

                  <InputField
                    label="Last Name"
                    placeholder="Last Name"
                    isRequired
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    errorMessage={errors.lastName}
                  />

                  <InputField
                    label="Email"
                    placeholder="Email"
                    isRequired
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    errorMessage={errors.email}
                  />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField
                    label="Home Phone"
                    placeholder="Home Phone"
                    value={formData.HomePhone}
                    onChange={(e) => handleChange("HomePhone", e.target.value)}
                  />
                  <InputField
                    label="Cell Phone"
                    placeholder="Cell phone"
                    value={formData.CellPhone}
                    onChange={(e) => handleChange("CellPhone", e.target.value)}
                  />
                  <InputField
                    label="Address"
                    placeholder="Address"
                    value={formData.Address}
                    onChange={(e) => handleChange("Address", e.target.value)}
                  />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField
                    label="City"
                    placeholder="City"
                    value={formData.City}
                    onChange={(e) => handleChange("City", e.target.value)}
                  />
                  <SelectField
                    label="State"
                    options={stateOptions}
                    placeholder="State"
                    value={formData.State}
                    onValueChange={(d) => handleChange("State", d.value[0])}
                    isRequired
                    errorMessage={errors.State}
                  />

                  <InputField
                    label="Zip Code"
                    placeholder="Zip Code"
                    value={formData.ZipCode}
                    onChange={(e) => handleChange("ZipCode", e.target.value)}
                  />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <InputField
                    label="Social Security Number"
                    placeholder="Social Security Number"
                    value={formData.SocialSecurityNumber}
                    onChange={(e) =>
                      handleChange("SocialSecurityNumber", e.target.value)
                    }
                  />
                  <DateInput
                    label="Available Start Date"
                    placeholder="Available start Date"
                    value={formData.Onwhatdatewouldyoubeavailableforwork}
                    onChange={(e) =>
                      handleChange(
                        "Onwhatdatewouldyoubeavailableforwork",
                        e.target.value,
                      )
                    }
                  />
                </SimpleGrid>

                <Stack gap={4}>
                  <RadioField
                    label="Are you legally authorized to work in the U.S.?"
                    options={yesNoOptions}
                    value={formData.citizen}
                    onValueChange={(val) => handleChange("citizen", val)}
                    isRequired
                    errorMessage={errors.citizen}
                    direction="row"
                  />

                  <RadioField
                    label="Have you ever been convicted of a felony?"
                    options={yesNoOptions}
                    value={formData.felony}
                    onValueChange={(val) =>
                      handleChange("felony", val)
                    }
                    isRequired
                    errorMessage={errors.felony}
                    direction="row"
                  />

                  <RadioField
                    label="Have you ever been involuntarily terminated?"
                    options={yesNoOptions}
                    value={formData.terminated}
                    onValueChange={(val) =>
                      handleChange("terminated", val)
                    }
                    isRequired
                    errorMessage={errors.terminated}
                    direction="row"
                  />

                  <RadioField
                    label="Are you willing to submit to a drug test?"
                    options={yesNoOptions}
                    value={formData.drugTest}
                    onValueChange={(val) =>
                      handleChange("drugTest", val)
                    }
                    isRequired
                    errorMessage={errors.drugTest}
                    direction="row"
                  />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        );

      case 1:
        return (
          <Step2Address
            education={stepTwoData.education}
            experiences={stepTwoData.experiences}
            onEducationChange={handleEducationChange}
            onExperienceChange={handleExperienceChange}
            onAddExperience={addExperience}
            onRemoveExperience={removeExperience}
          />
        );

      case 2:
        return (
          <Step3Experience
            ref={step3Ref}
            photoFile={stepThreeData.photoFile}
            photoFileName={stepThreeData.photoFileName}
            agreed={stepThreeData.agreed}
            onPhotoChange={(file, fileName) => {
              handleStepThreeChange("photoFile", file);
              handleStepThreeChange("photoFileName", fileName);
            }}
            onAgreedChange={(agreed) =>
              handleStepThreeChange("agreed", agreed)
            }
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* PROGRESS BAR */}
      <Box py={12}>
        <Progress.Root value={progressValue}>
          <Progress.Track>
            <Progress.Range bg="brand.primary" />
          </Progress.Track>
        </Progress.Root>
      </Box>

      {/* PAGE CONTENT */}
      <Stack gap={8}>{renderPage()}</Stack>

      {/* FOOTER BUTTONS */}
      <Stack direction="row" justify="space-between" pt={10}>
        <Button
          variant="outline"
          fontSize="sm"
          color="brand.primary"
          borderWidth="1px"
          borderColor="brand.primary"
          _hover={{
            bg: "brand.primary",
            color: "white",
          }}
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Prev
        </Button>
        <Button
          bg="brand.primary"
          color="white"
          _hover={{ bg: "brand.primary" }}
          onClick={handleNextStep}
        >
          {page === 2 ? "Send" : "Next"}
        </Button>
      </Stack>
    </>
  );
};

export { JobApplicationForm };
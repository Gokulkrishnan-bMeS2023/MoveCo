import { Stack, Box, Button, Progress } from "@chakra-ui/react";
import { useJobApplicationForm } from "./Usejobapplicationform";
import Step1PersonalInfo from "./Step1personalInfo";
import Step2Address from "./Step2address";
import Step3Experience from "./Step3experience";

const JobApplicationForm = () => {
  const {
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
  } = useJobApplicationForm();

  const progressValue = ((page + 1) / 3) * 100;
  

  return (
    <>
      {/* Progress Bar */}
      <Box py={12}>
        <Progress.Root value={progressValue}>
          <Progress.Track>
            <Progress.Range bg="brand.primary" />
          </Progress.Track>
        </Progress.Root>
      </Box>

      {/* Step Content */}
      <Stack gap={8}>
        {page === 0 && (
          <Step1PersonalInfo
            formData={formData}
            errors={errors}
            handleChange={handleChange}
          />
        )}
        {page === 1 && (
          <Step2Address
            education={stepTwoData.education}
            experiences={stepTwoData.experiences}
            onEducationChange={handleEducationChange}
            onExperienceChange={handleExperienceChange}
            onAddExperience={addExperience}
            onRemoveExperience={removeExperience}
            experienceErrors={stepTwoErrors.experiences}
            onClearExperienceError={handleClearExperienceError}
          />
        )}
        {page === 2 && (
          <Step3Experience
            ref={step3Ref}
            photoFile={stepThreeData.photoFile}
            photoFileName={stepThreeData.photoFileName}
            agreed={stepThreeData.agreed}
            onPhotoChange={(file, fileName) => {
              handleStepThreeChange("photoFile", file);
              handleStepThreeChange("photoFileName", fileName);
            }}
            onAgreedChange={(agreed) => handleStepThreeChange("agreed", agreed)}
          />
        )}
      </Stack>

      {/* Navigation Buttons */}
      <Stack direction="row" justify="space-between" pt={10}>
        <Button
          variant="outline"
          fontSize="sm"
          color="brand.primary"
          borderWidth="1px"
          borderColor="brand.primary"
          _hover={{ bg: "brand.primary", color: "white" }}
          onClick={prevPage}
          disabled={page === 0}
        >
          Prev
        </Button>
        <Button
          bg="brand.primary"
          color="white"
          _hover={{ bg: "brand.primary" }}
          onClick={nextPage}
        >
          {page === 2 ? "Send" : "Next"}
        </Button>
      </Stack>
    </>
  );
};

export default JobApplicationForm;
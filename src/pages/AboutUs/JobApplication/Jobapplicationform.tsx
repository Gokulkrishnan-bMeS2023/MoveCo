import { Stack, Box } from "@chakra-ui/react";
import { useJobApplicationForm } from "./Usejobapplicationform";
import Step1PersonalInfo from "./Step1PersonalInfo/Step1PersonalInfo";
import Step2Address from "./Step2Address/Step2Address";
import Step3Experience from "./Step3Experience/Step3Experience";
import Button from "../../../components/common/Button/Button";

const steps = ["Personal Info", "Education", "Review"];
const JobApplicationForm = () => {
  const {
    page,
    formData,
    errors,
    stepTwoData,
    stepTwoErrors,
    stepThreeData,
    step3Ref,
    isSubmitting,
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

  return (
    <>
      <Box py={10}>
        <Box position="relative">
          <Box
            position="absolute"
            top="20px"
            left="20px"
            right="20px"
            height="2px"
            bg="brand.gray"
            zIndex={0}
          />

          <Box
            position="absolute"
            top="20px"
            left="20px"
            height="3px"
            bg="brand.primary"
            zIndex={0}
            transition="width 0.4s ease"
            width={
              page === 0
                ? "0%"
                : page === 1
                  ? "calc(50% - 20px)"
                  : "calc(100% - 40px)"
            }
          />

          <Stack
            direction="row"
            justify="space-between"
            position="relative"
            zIndex={1}
          >
            {steps.map((label, index) => {
              const isCompleted = index < page;
              const isActive = index === page;

              return (
                <Stack key={index} align="flex-start" gap={2} zIndex={1}>
                  <Box
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    bg={
                      isCompleted || isActive ? "brand.primary" : "brand.white"
                    }
                    border="2px solid"
                    borderColor={
                      isCompleted || isActive ? "brand.primary" : "brand.gray"
                    }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color={
                      isCompleted || isActive ? "brand.white" : "brand.gray"
                    }
                    fontWeight="bold"
                    textStyle="sm"
                    transition="all 0.3s ease"
                  >
                    {isCompleted ? "✓" : index + 1}
                  </Box>

                  <Box
                    textStyle="xs"
                    fontWeight={isActive ? "600" : "400"}
                    color={
                      isCompleted || isActive ? "brand.primary" : "brand.gray"
                    }
                    textAlign="center"
                    transition="all 0.3s ease"
                  >
                    {label}
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Box>
      </Box>

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

      <Stack direction="row" justify="space-between" pt={10}>
        <Button
          variant="outline"
          label="Prev"
          textStyle="sm"
          onClick={prevPage}
          disabled={page === 0}
        />

        <Button
          variant="primary"
          label={
            isSubmitting ? "Submitting..." : page === 2 ? "Submit" : "Next"
          }
          onClick={nextPage}
          disabled={isSubmitting}
        />
      </Stack>
    </>
  );
};

export default JobApplicationForm;

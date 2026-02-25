import { Stack, Box, Button } from "@chakra-ui/react";
import { useJobApplicationForm } from "./Usejobapplicationform";
import Step1PersonalInfo from "./Step1personalInfo";
import Step2Address from "./Step2address";
import Step3Experience from "./Step3experience";

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
      {/* ── Progress Bar ── */}
      <Box py={12}>
        <Box position="relative">
          {/* Base gray line */}
          <Box
            position="absolute"
            top="20px"
            left="20px"
            right="20px"
            height="2px"
            bg="brand.gray"
            zIndex={0}
          />

          {/* Active progress line */}
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

          {/* Step circles + labels */}
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
                <Stack key={index} align="center" gap={2} zIndex={1}>
                  {/* Circle */}
                  <Box
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    bg={isCompleted || isActive ? "brand.primary" : "brand.white"}
                    border="2px solid"
                    borderColor={
                      isCompleted || isActive ? "brand.primary" : "brand.gray"
                    }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color={isCompleted || isActive ? "brand.white" : "brand.gray"}
                    fontWeight="bold"
                    textStyle="sm"
                    transition="all 0.3s ease"
                  >
                    {isCompleted ? "✓" : index + 1}
                  </Box>

                  {/* Label */}
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

      {/* ── Step Content ── */}
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

      {/* ── Navigation Buttons ── */}
      <Stack direction="row" justify="space-between" pt={10}>
        <Button
          variant="outline"
          textStyle="sm"
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


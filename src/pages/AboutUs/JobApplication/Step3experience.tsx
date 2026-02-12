import {
  Stack,
  Input,
  Field,
  Heading,
  Text,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useState } from "react";
interface Step3Values {
  agreed: boolean;
}
const Step3Experience = forwardRef((_, ref) => {
  const [values, setValues] = useState<Step3Values>({
    agreed: false,
  });
  const [showError, setShowError] = useState(false);

  // Expose validation to parent
  useImperativeHandle(ref, () => ({
    validate() {
      if (!values.agreed) {
        setShowError(true);
        return false;
      }
      return true;
    },
  }));

  return (
    <>
      {/* PHOTO UPLOAD */}
      <Box
        bg="white"
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.100"
      >
        <Heading as="h3" mb={4} color="brand.primary" fontWeight="normal">
          Attach a photo of yourself (JPEG format)
        </Heading>

        <Stack gap={4}>
          <Field.Root>
            <Field.Label>Upload Photo</Field.Label>
            <Input
              type="file"
              accept="image/jpeg"
              border="none"
              boxShadow="none"
              p={0}
              _file={{
                border: "1px solid",
                borderColor: "gray.300",
                borderRadius: "md",
                bg: "gray.50",
                px: 4,
                py: 2,
                cursor: "pointer",
                _hover: { bg: "gray.100" },
              }}
            />
          </Field.Root>
        </Stack>
      </Box>

      {/* POLICY SECTION */}
      <Box
        bg="white"
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.100"
      >
        <Heading as="h3" mb={4} color="brand.primary" fontWeight="normal">
          Acknowledgments & Authorization
        </Heading>

        <Stack gap={4}>
          <Text textStyle="size-sm">
            1. I certify that answers given herein are true and complete to the best of my knowledge.
          </Text>
          <Text textStyle="size-sm">
            2. I authorize investigation of all statements contained in this application for employment as may be necessary in arriving at an employment decision.
          </Text>
          <Text textStyle="size-sm">
            3. This application for employment shall be considered active for a period of time not to exceed 45 days. Any applicant wishing to be considered for employment beyond this time period should inquire as to whether or not applications are being accepted at that time.
          </Text>
          <Text textStyle="size-sm">
            4. I hereby understand and acknowledge that, unless otherwise defined by applicable law, any employment relationship with this organization is of an “at will” nature, which means that the Employee may resign at any time and the Employer may discharge Employee at any time with or without cause. It is further understood that this “at will” employment relationship may not be changed by any written document or by conduct unless such change is specifically acknowledged in writing by an authorized executive of this organization.
          </Text>
          <Text textStyle="size-sm">
            5. In the event of employment, I understand that false or misleading information given in my application or interview(s) may result in discharge. I understand, also, that I am required to abide by all rules and regulations of the employer.
          </Text>

          {/* CHECKBOX + ERROR */}
          <Field.Root invalid={showError && !values.agreed}>
            <Checkbox.Root
              checked={values.agreed}
              onCheckedChange={(e) => {
                setValues({ agreed: !!e.checked });
                setShowError(false);
              }}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Label textStyle="size-md">
                I have read and agree to the "Acknowledgments & Authorization"
                outlined above.
              </Checkbox.Label>
            </Checkbox.Root>

            {showError && (
              <Field.ErrorText>You need to accept the policy</Field.ErrorText>
            )}
          </Field.Root>
        </Stack>
      </Box>
    </>
  );
});

export default Step3Experience;

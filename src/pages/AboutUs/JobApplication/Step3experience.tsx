import {
  Stack,
  Input,
  Field,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useState, useRef } from "react";
import CheckboxField from "../../../components/common/CheckBox/Checkbox";

interface Step3ExperienceProps {
  photoFile: File | null;
  photoFileName: string;
  agreed: boolean;
  onPhotoChange: (file: File | null, fileName: string) => void;
  onAgreedChange: (agreed: boolean) => void;
}

const Step3Experience = forwardRef<any, Step3ExperienceProps>(
  ({ photoFileName, agreed, onPhotoChange, onAgreedChange }, ref) => {
    const [showError, setShowError] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      validate() {
        if (!agreed) {
          setShowError(true);
          return false;
        }
        return true;
      },
    }));

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onPhotoChange(file, file.name);
      } else {
        onPhotoChange(null, "");
      }
    };

    return (
      <>
        <Box
          bg="brand.white"
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
                ref={fileInputRef}
                type="file"
                accept="image/jpeg"
                onChange={handleFileChange}
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
              {photoFileName && (
                <Text mt={2} fontSize="sm" color="brand.primary">
                  Selected file: {photoFileName}
                </Text>
              )}
            </Field.Root>
          </Stack>
        </Box>

        <Box
          bg="brand.white"
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
              1. I certify that answers given herein are true and complete to
              the best of my knowledge.
            </Text>
            <Text textStyle="size-sm">
              2. I authorize investigation of all statements contained in this
              application for employment as may be necessary in arriving at an
              employment decision.
            </Text>
            <Text textStyle="size-sm">
              3. This application for employment shall be considered active for
              a period of time not to exceed 45 days. Any applicant wishing to
              be considered for employment beyond this time period should
              inquire as to whether or not applications are being accepted at
              that time.
            </Text>
            <Text textStyle="size-sm">
              4. I hereby understand and acknowledge that, unless otherwise
              defined by applicable law, any employment relationship with this
              organization is of an "at will" nature, which means that the
              Employee may resign at any time and the Employer may discharge
              Employee at any time with or without cause. It is further
              understood that this "at will" employment relationship may not be
              changed by any written document or by conduct unless such change
              is specifically acknowledged in writing by an authorized executive
              of this organization.
            </Text>
            <Text textStyle="size-sm">
              5. In the event of employment, I understand that false or
              misleading information given in my application or interview(s) may
              result in discharge. I understand, also, that I am required to
              abide by all rules and regulations of the employer.
            </Text>
            <CheckboxField
              label='I have read and agree to the "Acknowledgments & Authorization" outlined above.'
              isChecked={agreed}
              onChange={(e) => {
                onAgreedChange(e.target.checked);
                setShowError(false);
              }}
              errorMessage={showError && !agreed ? "You need to accept the policy" : ""}
            />

          </Stack>
        </Box>
      </>
    );
  }
);

export default Step3Experience;
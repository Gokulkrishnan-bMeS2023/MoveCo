import {
  Stack,
  Input,
  Field,
  Heading,
  Text,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

const Step3Experience = () => {
  const [agreed, setAgreed] = useState(false);
  const [showError, setShowError] = useState(false);
  // const handleNext = () => {
  //   if (!agreed) {
  //     setShowError(true);
  //     return;
  //   }
  //   console.log("Form valid");
  // };

  return (
    <>
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
          <Field.Root >
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
          <Text fontSize="sm">
            1. I certify that answers given herein are true and complete to the
            best of my knowledge.
          </Text>

          <Text fontSize="sm">
            2. I authorize investigation of all statements contained in this
            application for employment as may be necessary in arriving at an
            employment decision.
          </Text>

          <Text fontSize="sm">
            3. This application for employment shall be considered active for a
            period of time not to exceed 45 days.
          </Text>

          <Text fontSize="sm">
            4. Employment is “at will” and may be terminated at any time by
            either party.
          </Text>

          <Text fontSize="sm">
            5. False or misleading information may result in discharge.
          </Text>
          {/* Checkbox with Error */}
          <Field.Root invalid={showError && !agreed}>
            <Checkbox.Root
              checked={agreed}
              onCheckedChange={(e) => {
                setAgreed(!!e.checked);
                setShowError(false);
              }}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Label fontSize="sm" fontWeight="normal">
                I have read and agree to the "Acknowledgments & Authorization"
                outlined above.
              </Checkbox.Label>
            </Checkbox.Root>

            <Field.ErrorText>You must agree before continuing.</Field.ErrorText>
          </Field.Root>
        </Stack>
      </Box>
    </>
  );
};

export default Step3Experience;

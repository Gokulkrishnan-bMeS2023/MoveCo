import {
  Stack,
  Input,
  Field,
  Heading,
  Text,
  Box,
  Checkbox, // Ensure this is imported correctly
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
      <Heading size="md" mb={4}>
        Attach a photo of yourself (JPEG format)
      </Heading>

      <Field.Root mb={8}>
        <Field.Label>Upload Photo</Field.Label>
        <Input type="file" accept="image/jpeg" />
      </Field.Root>

      {/* Acknowledgements */}
      <Heading size="md" mb={4}>
        Acknowledgments & Authorization
      </Heading>

      <Box
        borderWidth="1px"
        borderRadius="md"
        p={4}
        maxH="300px"
        overflowY="auto"
        mb={4}
      >
        <Stack gap={3}>
          <Text fontSize="sm">
            1. I certify that answers given herein are true and complete to the best
            of my knowledge.
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
            4. Employment is “at will” and may be terminated at any time by either
            party.
          </Text>

          <Text fontSize="sm">
            5. False or misleading information may result in discharge.
          </Text>
        </Stack>
      </Box>


      {/* Checkbox with Error */}
      <Field.Root invalid={showError && !agreed}>
        <Checkbox.Root 
          checked={agreed} 
          onCheckedChange={(e) => {
            setAgreed(!!e.checked); // e.checked is a boolean or "indeterminate"
            setShowError(false);
          }}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label fontSize="sm">
            I have read and agree to the "Acknowledgments & Authorization" outlined above.
          </Checkbox.Label>
        </Checkbox.Root>

        <Field.ErrorText>
          You must agree before continuing.
        </Field.ErrorText>
      </Field.Root>
    </>
  );
};

export default Step3Experience;



import { useState } from "react";
import {
  Stack,
  SimpleGrid,
  Heading,
  Box,
  Progress,
  Button,
} from "@chakra-ui/react";

import Step2Address from "../JobApplicationForm/Step2address";
import Step3Experience from "./Step3experience";
import InputField from "../../../components/common/Input/Input";
import DateInput from "../../../components/common/DateInput/DateInput";
import RadioField from "../../../components/common/Radio/Radio";

const JobApplicationForm = () => {
  const [page, setPage] = useState(0);

  const [citizen, setCitizen] = useState("no");
  const [felony, setFelony] = useState("no");
  const [terminated, setTerminated] = useState("no");
  const [drugTest, setDrugTest] = useState("yes");

  const yesNoOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const progressValue = ((page + 1) / 3) * 100;

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <Stack gap={8}>
            {/* CARD 1 */}
            <Box
              bg="white"
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
                <InputField label="Position Sought" />
                <InputField label="How did you learn about the position?" />
              </SimpleGrid>
            </Box>

            {/* CARD 2 */}
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={6}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Your Information
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField label="First Name" isRequired />
                  <InputField label="Last Name" isRequired />
                  <InputField label="Email" isRequired />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField label="Home Phone" />
                  <InputField label="Cell Phone" />
                  <InputField label="Address" />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField label="City" />
                  <InputField label="State" />
                  <InputField label="Zip Code" />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <InputField label="Social Security Number" />
                  <DateInput label="Available Start Date" />
                </SimpleGrid>

                <Stack gap={4}>
                  <RadioField
                    label="Are you legally authorized to work in the U.S.?"
                    options={yesNoOptions}
                    value={citizen}
                    onValueChange={setCitizen}
                    isRequired
                    direction="row"
                  />

                  <RadioField
                    label="Have you ever been convicted of a felony?"
                    options={yesNoOptions}
                    value={felony}
                    onValueChange={setFelony}
                    isRequired
                    direction="row"
                  />

                  <RadioField
                    label="Have you ever been involuntarily terminated?"
                    options={yesNoOptions}
                    value={terminated}
                    onValueChange={setTerminated}
                    isRequired
                    direction="row"
                  />

                  <RadioField
                    label="Are you willing to submit to a drug test?"
                    options={yesNoOptions}
                    value={drugTest}
                    onValueChange={setDrugTest}
                    isRequired
                    direction="row"
                  />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        );

      case 1:
        return <Step2Address />;

      case 2:
        return <Step3Experience />;

      default:
        return null;
    }
  };

  return (
    <>
      {/* PROGRESS BAR — ALWAYS VISIBLE */}
      <Box py={12}>
        <Progress.Root value={progressValue}>
          <Progress.Track>
            <Progress.Range bg="brand.primary" />
          </Progress.Track>
        </Progress.Root>
      </Box>

      {/* PAGE CONTENT */}
       <Stack gap={8}>
        {renderPage()}
        </Stack>

        {/* FOOTER BUTTONS */}
        <Stack direction="row" justify="space-between" pt={10}>
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
          >
            Prev
          </Button>

          <Button
            bg="brand.primary"
            color="white"
            _hover={{ bg: "brand.primary" }}
            onClick={() =>
              page === 2 ? alert("FORM SUBMITTED") : setPage((p) => p + 1)
            }
          >
            {page === 2 ? "Send" : "Next"}
          </Button>
        </Stack>
     
    </>
  );
};

export { JobApplicationForm };


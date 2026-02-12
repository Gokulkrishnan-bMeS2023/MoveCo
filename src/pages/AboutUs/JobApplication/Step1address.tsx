import { useState, useRef } from "react";

import {
  Stack,
  SimpleGrid,
  Heading,
  Box,
  Progress,
  Button,
} from "@chakra-ui/react";

import Step2Address from "./Step2address";
import Step3Experience from "./Step3experience";
import InputField from "../../../components/common/Input/Input";
import DateInput from "../../../components/common/DateInput/DateInput";
import RadioField from "../../../components/common/Radio/Radio";

type YesNo = "yes" | "no";
interface StepOneValues {
  PositionSought: string;
  Howdidyoulearnabouttheposition?: string;
  HomePhone: string;
  CellPhone: string;
  EmailAddress: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;
  firstName: string;
  lastName: string;
  email: string;
  SocialSecurityNumber: string;
  Onwhatdatewouldyoubeavailableforwork?: string;
   citizen: YesNo;
  felony: YesNo;
  terminated: YesNo;
  drugTest: YesNo;
}


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

const [values, setValues] = useState<StepOneValues>({
  PositionSought: "",
  Howdidyoulearnabouttheposition: "",

  HomePhone: "",
  CellPhone: "",
  EmailAddress: "",

  Address: "",
  City: "",
  State: "",
  ZipCode: "",

  firstName: "",
  lastName: "",
  email: "",

  SocialSecurityNumber: "",
  Onwhatdatewouldyoubeavailableforwork: "",

  citizen: "no",
  felony: "no",
  terminated: "no",
  drugTest: "yes",
});

  const [errors, setErrors] = useState<any>({});
const handleChange = <K extends keyof StepOneValues>(
  field: K,
  value: string
) => {
  setValues((prev) => ({
    ...prev,
    [field]: value as StepOneValues[K],
  }));

  if (errors[field]) {
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [field]: "",
    }));
  }
};

  const validateStepOne = () => {
    const newErrors: any = {};

    if (!values.firstName) newErrors.firstName = "First name is required";
    if (!values.lastName) newErrors.lastName = "Last name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (!citizen) newErrors.citizen = "Required";
    if (!felony) newErrors.felony = "Required";
    if (!terminated) newErrors.terminated = "Required";
    if (!drugTest) newErrors.drugTest = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };
  const step3Ref = useRef<any>(null);

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
              <Stack gap={4}>
                <Heading as="h3" color="brand.primary" fontWeight="normal">
                  Your Information
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField
                    label="First Name"
                    placeholder="First Name"
                    isRequired
                    value={values.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    errorMessage={errors.firstName}
                  />

                  <InputField
                    label="Last Name"
                    placeholder="Last Name"
                    isRequired
                    value={values.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    errorMessage={errors.lastName}
                  />

                  <InputField
                    label="Email"
                    placeholder="Email"
                    isRequired
                    value={values.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    errorMessage={errors.email}
                  />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField label="Home Phone" placeholder="Home Phone" />
                  <InputField label="Cell Phone" placeholder="Cell phone" />
                  <InputField label="Address" placeholder="Address" />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  <InputField label="City" placeholder="City" />
                  <InputField label="State" placeholder="State" />
                  <InputField label="Zip Code" placeholder="Zip Code" />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <InputField
                    label="Social Security Number"
                    placeholder="Social Security Number"
                  />
                  <DateInput
                    label="Available Start Date"
                    placeholder="Available start Date"
                  />
                </SimpleGrid>

                <Stack gap={4}>
                  <RadioField
                    label="Are you legally authorized to work in the U.S.?"
                    options={yesNoOptions}
                    value={citizen}
                    onValueChange={setCitizen}
                    isRequired
                    errorMessage={errors.citizen}
                    direction="row"
                  />

                  <RadioField
                    label="Have you ever been convicted of a felony?"
                    options={yesNoOptions}
                    value={felony}
                    onValueChange={setFelony}
                    isRequired
                    errorMessage={errors.felony}
                    direction="row"
                  />

                  <RadioField
                    label="Have you ever been involuntarily terminated?"
                    options={yesNoOptions}
                    value={terminated}
                    onValueChange={setTerminated}
                    isRequired
                    errorMessage={errors.terminated}
                    direction="row"
                  />

                  <RadioField
                    label="Are you willing to submit to a drug test?"
                    options={yesNoOptions}
                    value={drugTest}
                    onValueChange={setDrugTest}
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
        return <Step2Address />;

      case 2:
        return <Step3Experience ref={step3Ref} />;

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
          onClick={() => {
            // STEP 1 validation
            if (page === 0) {
              if (!validateStepOne()) return;
            }

            if (page === 2) {
              if (!step3Ref.current?.validate()) return;
              alert("FORM SUBMITTED");
              return;
            }
            setPage((p) => p + 1);
          }}
        >
          {page === 2 ? "Send" : "Next"}
        </Button>
      </Stack>
    </>
  );
};

export { JobApplicationForm };

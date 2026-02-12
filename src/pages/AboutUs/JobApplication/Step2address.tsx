import {
  Stack,
  Field,
  Heading,
  SimpleGrid,
  Button,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InputField from "../../../components/common/Input/Input";
import DateInput from "../../../components/common/DateInput/DateInput";

export interface EducationValues {
  schoolName: string;
  location: string;
  years: string;
  degree: string;
  major: string;
  otherTraining: string;
  additionalInfo: string;
}

export interface EmploymentExperience {
  employer: string;
  jobTitle: string;
  from: string;
  to: string;
  priorPosition: string;
  startSalary: string;
  endSalary: string;
  supervisorName: string;
  supervisorPhone: string;
  reason: string;
  duties: string;
}

const Step2Address = () => {
  const emptyExperience: EmploymentExperience = {
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
  };

  const [experiences, setExperiences] =
    React.useState<EmploymentExperience[]>([emptyExperience]);

  const addExperience = () => {
    setExperiences((prev) => [...prev, emptyExperience]);
  };

  const removeExperience = (index: number) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

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
        <Stack gap={4}>
          <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
            Education
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            <InputField label="School Name" placeholder="School Name" />
            <InputField label="Location" placeholder="Location" />
            <InputField label="Years" placeholder="Years" />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            <InputField label="Degree Received" placeholder="Degree Received" />
            <InputField label="Major" placeholder="Major" />
            <InputField label="Other training, certifications, or licenses held" placeholder="Other training, certifications, or licenses held"/>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <InputField label="List other information pertinent to the employment you are seeking:" placeholder="Additional Information" />
          </SimpleGrid>
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
        <Stack gap={4}>
          <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
            Previous Employment (Most Recent First)
          </Heading>

          {experiences.map((_, index) => (
            <Box>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="sm">Employment #{index + 1}</Heading>
                {experiences.length > 1 && (
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => removeExperience(index)}
                  >
                    Remove
                  </Button>
                )}
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                <InputField label="Employer" placeholder="Employer"/>
                <InputField label="Job Title" placeholder="Job Title" />
                <Field.Root>
                  <Field.Label>Dates Employed from &amp; to</Field.Label>

                  <Flex gap={3} align="center">
                    <DateInput label="" placeholder="From" />
                    <Text color="gray.500" fontSize="sm">
                      to
                    </Text>
                    <DateInput label="" placeholder="To" />
                  </Flex>
                </Field.Root>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={4}>
                <InputField label="Prior Positions" placeholder="Prior Positions"/>
                <InputField label="Starting Salary" placeholder="Starting salary" />
                <InputField label="Ending Salary" placeholder="Ending Salary" />
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={4}>
                 <InputField label="Supervisor Name" placeholder="Supervisor Name" />
                <InputField label="Supervisor Phone" placeholder="Supervisor Phone"/>
                <InputField label="Reason for Leaving" placeholder="Reason for Leaving" />
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 1 }} gap={4} mt={4}>
               <InputField label="Duties Performed" placeholder="Duties Performed" />
              </SimpleGrid>
            </Box>
          ))}

          <Button onClick={addExperience} bg={"brand.primary"}>
            + Add Another Experience
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Step2Address;

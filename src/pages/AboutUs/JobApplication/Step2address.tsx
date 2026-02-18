import {
  Stack,
  Field,
  Heading,
  SimpleGrid,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InputField from "../../../components/common/Input/Input";
import DateInput from "../../../components/common/DateInput/DateInput";

import type {
  EducationDTO,
  EmploymentExperienceDTO,
  EmploymentExperienceErrors, // 👈 ADD THIS
} from "./DTOs";

import Button from "../../../components/common/Button/Button";

interface Step2AddressProps {
  education: EducationDTO;
  experiences: EmploymentExperienceDTO[];
  onEducationChange: <K extends keyof EducationDTO>(field: K, value: EducationDTO[K]) => void;
  onExperienceChange: <K extends keyof EmploymentExperienceDTO>(
    index: number, field: K, value: EmploymentExperienceDTO[K]
  ) => void;
  onAddExperience: () => void;
  onRemoveExperience: (index: number) => void;
  experienceErrors?: EmploymentExperienceErrors[]; // 👈 ADD THIS
  onClearExperienceError: (index: number, field: keyof EmploymentExperienceDTO) => void;
}

const formatUSPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const validateUSPhone = (value: string) => {
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phoneRegex.test(value);
};



const Step2Address: React.FC<Step2AddressProps> = ({
  education,
  experiences,
  onEducationChange,
  onExperienceChange,
  onAddExperience,
  onRemoveExperience,
  experienceErrors,
  onClearExperienceError,
}) => {

  
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
        <Stack gap={4}>
          <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
            Education
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <InputField
              label="School Name"
              placeholder="School Name"
              value={education.schoolName}
              onChange={(e) => onEducationChange("schoolName", e.target.value)}
            />
            <InputField
              label="Location"
              placeholder="Location"
              value={education.location}
              onChange={(e) => onEducationChange("location", e.target.value)}
            />
            <InputField
              label="Years"
              placeholder="Years"
              value={education.years}
              onChange={(e) => onEducationChange("years", e.target.value)}
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <InputField
              label="Degree Received"
              placeholder="Degree Received"
              value={education.degree}
              onChange={(e) => onEducationChange("degree", e.target.value)}
            />
            <InputField
              label="Major"
              placeholder="Major"
              value={education.major}
              onChange={(e) => onEducationChange("major", e.target.value)}
            />
            <InputField
              label="Other training, certifications, or licenses held"
              placeholder="Other training, certifications, or licenses held"
              value={education.otherTraining}
              onChange={(e) =>
                onEducationChange("otherTraining", e.target.value)
              }
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <InputField
              label="List other information pertinent to the employment you are seeking:"
              placeholder="Additional Information"
              value={education.additionalInfo}
              onChange={(e) =>
                onEducationChange("additionalInfo", e.target.value)
              }
            />
          </SimpleGrid>
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
        <Stack gap={4}>
          <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
            Previous Employment (Most Recent First)
          </Heading>

          {experiences.map((experience, index) => (
            <Box key={index}>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading as="h4">Employment #{index + 1}</Heading>
                {experiences.length > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => onRemoveExperience(index)} label={"Remove"}                   >
                  </Button>
                )}
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                <InputField
                  label="Employer"
                  placeholder="Employer"
                  value={experience.employer}
                  onChange={(e) =>
                    onExperienceChange(index, "employer", e.target.value)
                  }
                />
                <InputField
                  label="Job Title"
                  placeholder="Job Title"
                  value={experience.jobTitle}
                  onChange={(e) =>
                    onExperienceChange(index, "jobTitle", e.target.value)
                  }
                />
                 <Field.Root>
                  <Field.Label  p={0}>Dates Employed from &amp; to</Field.Label>
                  <Flex gap={4} align="center">
                    <DateInput
                      placeholder="From"
                      value={experience.from}
                      variant="today-and-past"
                      onChange={(e) =>
                        onExperienceChange(index, "from", e.target.value)
                      }
                      />
                    <Text color="gray.500" fontSize="sm">
                      to
                    </Text>
                    <DateInput
                      placeholder="To"
                      value={experience.to}
                      variant="today-and-past"
                      min={experience.from} // 👈 From date-ku munnadi disable
                      onChange={(e) =>
                        onExperienceChange(index, "to", e.target.value)
                      }
                    />
                  </Flex>

                </Field.Root>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
                <InputField
                  label="Prior Positions"
                  placeholder="Prior Positions"
                  value={experience.priorPosition}
                  onChange={(e) =>
                    onExperienceChange(index, "priorPosition", e.target.value)
                  }
                />
                <InputField
                  label="Starting Salary"
                  placeholder="Starting salary"
                  value={experience.startSalary}
                  onChange={(e) =>
                    onExperienceChange(index, "startSalary", e.target.value)
                  }
                />
                <InputField
                  label="Ending Salary"
                  placeholder="Ending Salary"
                  value={experience.endSalary}
                  onChange={(e) =>
                    onExperienceChange(index, "endSalary", e.target.value)
                  }
                />
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
                <InputField
                  label="Supervisor Name"
                  placeholder="Supervisor Name"
                  value={experience.supervisorName}
                  onChange={(e) =>
                    onExperienceChange(index, "supervisorName", e.target.value)
                  }
                />
<InputField
  label="Supervisor Phone"
  placeholder="(XXX) XXX-XXXX"
  value={experience.supervisorPhone}
  errorMessage={experienceErrors?.[index]?.supervisorPhone}
  onChange={(e) => {
    const formatted = formatUSPhone(e.target.value);
    onExperienceChange(index, "supervisorPhone", formatted);

    // ✅ Auto-clear error once user reaches 10 digits
    const digits = e.target.value.replace(/\D/g, "");
    if (digits.length === 10) {
      onClearExperienceError(index, "supervisorPhone");
    }
  }}
/>

                <InputField
                  label="Reason for Leaving"
                  placeholder="Reason for Leaving"
                  value={experience.reason}
                  onChange={(e) =>
                    onExperienceChange(index, "reason", e.target.value)
                  }
                />
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 1 }} gap={6} mt={4}>
                <InputField
                  label="Duties Performed"
                  placeholder="Duties Performed"
                  value={experience.duties}
                  onChange={(e) =>
                    onExperienceChange(index, "duties", e.target.value)
                  }
                />
              </SimpleGrid>
            </Box>
          ))}
          <Button onClick={onAddExperience} label={"+ Add Another Experience"} variant={"primary"}>
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Step2Address;
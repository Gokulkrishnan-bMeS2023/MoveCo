// import {
//   Stack,
//   Input,
//   Field,
//   Heading,
//   SimpleGrid,
//   Button,
//   Box,
//   Flex,
//   Text,
// } from "@chakra-ui/react";
// import React from "react";

// const Step2Address = () => {
//   const emptyExperience = {
//     employer: "",
//     jobTitle: "",
//     from: "",
//     to: "",
//     priorPosition: "",
//     startSalary: "",
//     endSalary: "",
//     supervisorName: "",
//     supervisorPhone: "",
//     reason: "",
//     duties: "",
//   };

//   const [experiences, setExperiences] = React.useState([emptyExperience]);

//   const addExperience = () => {
//     setExperiences([...experiences, emptyExperience]);
//   };

//   const removeExperience = (index: number) => {
//     setExperiences(experiences.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//       <Stack gap={6}>
//         <Heading size="md" mb={6}>
//           Education
//         </Heading>
//         <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
//           <Field.Root>
//             <Field.Label>School Name</Field.Label>
//             <Input type="text" />
//           </Field.Root>

//           <Field.Root>
//             <Field.Label>Location</Field.Label>
//             <Input type="text" />
//           </Field.Root>

//           <Field.Root>
//             <Field.Label>Years</Field.Label>
//             <Input type="email" />
//           </Field.Root>
//         </SimpleGrid>

//         <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
//           <Field.Root>
//             <Field.Label>Degree received</Field.Label>
//             <Input type="text" />
//           </Field.Root>

//           <Field.Root>
//             <Field.Label>Major</Field.Label>
//             <Input type="text" />
//           </Field.Root>

//           <Field.Root>
//             <Field.Label>
//               Other training, certifications, or licenses held:
//             </Field.Label>
//             <Input type="email" />
//           </Field.Root>
//         </SimpleGrid>

//         <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
//           <Field.Root>
//             <Field.Label>
//               List other information pertinent to the employment you are
//               seeking:
//             </Field.Label>
//             <Input type="text" />
//           </Field.Root>
//         </SimpleGrid>
//         <Heading size="md" mb={6}>
//           Previous Employment (Most Recent First)
//         </Heading>

//         {experiences.map((exp, index) => (
//           <Box>
//             <Flex justify="space-between" align="center" mb={4}>
//               <Heading size="sm">Employment #{index + 1}</Heading>
//               {experiences.length > 1 && (
//                 <Button
//                   size="sm"
//                   colorScheme="red"
//                   onClick={() => removeExperience(index)}
//                 >
//                   Remove
//                 </Button>
//               )}
//             </Flex>

//             <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
//               <Field.Root>
//                 <Field.Label>Employer</Field.Label>
//                 <Input />
//               </Field.Root>

//               <Field.Root>
//                 <Field.Label>Job Title</Field.Label>
//                 <Input />
//               </Field.Root>

//               <Field.Root>
//                 <Field.Label>Dates Employed from &amp; to</Field.Label>
//                 <Flex gap={2} align="center">
//                   <Input type="date" />
//                   <Text>to</Text>
//                   <Input type="date" />
//                 </Flex>
//               </Field.Root>
//             </SimpleGrid>

//             <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
//               <Field.Root>
//                 <Field.Label>Prior Position</Field.Label>
//                 <Input />
//               </Field.Root>

//               <Field.Root>
//                 <Field.Label>Starting Salary</Field.Label>
//                 <Input />
//               </Field.Root>

//               <Field.Root>
//                 <Field.Label>Ending Salary</Field.Label>
//                 <Input />
//               </Field.Root>
//             </SimpleGrid>

//             <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
//               <Field.Root>
//                 <Field.Label>Supervisor Name</Field.Label>
//                 <Input />
//               </Field.Root>

//               <Field.Root>
//                 <Field.Label>Supervisor Phone</Field.Label>
//                 <Input />
//               </Field.Root>

//               <Field.Root>
//                 <Field.Label>Reason for Leaving</Field.Label>
//                 <Input />
//               </Field.Root>
//             </SimpleGrid>

//             <SimpleGrid columns={{ base: 1, md: 1 }} gap={6} mt={4}>
//               <Field.Root>
//                 <Field.Label>Duties Performed</Field.Label>
//                 <Input />
//               </Field.Root>
//             </SimpleGrid>
//           </Box>
//         ))}

//         <Button onClick={addExperience} bg={"brand.primary"}>
//           + Add Another Experience
//         </Button>
//       </Stack>
//     </>
//   );
// };

// export default Step2Address;

//2

import {
  Stack,
  Input,
  Field,
  Heading,
  SimpleGrid,
  Button,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Step2Address = () => {
  const emptyExperience = {
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

  const [experiences, setExperiences] = React.useState([emptyExperience]);

  const addExperience = () => {
    setExperiences([...experiences, emptyExperience]);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updated = experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp,
    );
    setExperiences(updated);
  };

  return (
    <>
      <Stack gap={6}>
        <Heading size="md" mb={6}>
          Education
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <Field.Root>
            <Field.Label>School Name</Field.Label>
            <Input type="text" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Location</Field.Label>
            <Input type="text" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Years</Field.Label>
            <Input type="text" />
          </Field.Root>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <Field.Root>
            <Field.Label>Degree received</Field.Label>
            <Input type="text" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Major</Field.Label>
            <Input type="text" />
          </Field.Root>

          <Field.Root>
            <Field.Label>
              Other training, certifications, or licenses held:
            </Field.Label>
            <Input type="text" />
          </Field.Root>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <Field.Root>
            <Field.Label>
              List other information pertinent to the employment you are
              seeking:
            </Field.Label>
            <Input type="text" />
          </Field.Root>
        </SimpleGrid>

        <Heading size="md" mb={6}>
          Previous Employment (Most Recent First)
        </Heading>

        {experiences.map((exp, index) => (
          <Box key={index}>
            <Flex justify="space-between" align="center" mb={4}>
              <Heading size="sm">Employment - {index + 1}</Heading>
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

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
              <Field.Root>
                <Field.Label>Employer</Field.Label>
                <Input
                  value={exp.employer}
                  onChange={(e) =>
                    updateExperience(index, "employer", e.target.value)
                  }
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Job Title</Field.Label>
                <Input
                  value={exp.jobTitle}
                  onChange={(e) =>
                    updateExperience(index, "jobTitle", e.target.value)
                  }
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Dates Employed from &amp; to</Field.Label>
                <Flex gap={2} align="center">
                  <Input
                    type="date"
                    value={exp.from}
                    onChange={(e) =>
                      updateExperience(index, "from", e.target.value)
                    }
                  />
                  <Text>to</Text>
                  <Input
                    type="date"
                    value={exp.to}
                    onChange={(e) =>
                      updateExperience(index, "to", e.target.value)
                    }
                  />
                </Flex>
              </Field.Root>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
              <Field.Root>
                <Field.Label>Prior Position</Field.Label>
                <Input
                  value={exp.priorPosition}
                  onChange={(e) =>
                    updateExperience(index, "priorPosition", e.target.value)
                  }
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Starting Salary</Field.Label>
                <Input
                  value={exp.startSalary}
                  onChange={(e) =>
                    updateExperience(index, "startSalary", e.target.value)
                  }
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Ending Salary</Field.Label>
                <Input
                  value={exp.endSalary}
                  onChange={(e) =>
                    updateExperience(index, "endSalary", e.target.value)
                  }
                />
              </Field.Root>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
              <Field.Root>
                <Field.Label>Supervisor Name</Field.Label>
                <Input
                  value={exp.supervisorName}
                  onChange={(e) =>
                    updateExperience(index, "supervisorName", e.target.value)
                  }
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Supervisor Phone</Field.Label>
                <Input
                  value={exp.supervisorPhone}
                  onChange={(e) =>
                    updateExperience(index, "supervisorPhone", e.target.value)
                  }
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Reason for Leaving</Field.Label>
                <Input
                  value={exp.reason}
                  onChange={(e) =>
                    updateExperience(index, "reason", e.target.value)
                  }
                />
              </Field.Root>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 1 }} gap={6} mt={4}>
              <Field.Root>
                <Field.Label>Duties Performed</Field.Label>
                <Input
                  value={exp.duties}
                  onChange={(e) =>
                    updateExperience(index, "duties", e.target.value)
                  }
                />
              </Field.Root>
            </SimpleGrid>
          </Box>
        ))}

        <Button onClick={addExperience} bg={"brand.primary"}>
          + Add Another Experience
        </Button>
      </Stack>
    </>
  );
};

export default Step2Address;

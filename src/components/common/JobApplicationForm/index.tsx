import { useState } from "react";
import {
  Stack,
  Input,
  Field,
  Container,
  SimpleGrid,
  Heading,
  Box,
  NativeSelect,
  Progress,
  Button,
  RadioGroup,
  HStack,
} from "@chakra-ui/react";

import Step2Address from "../JobApplicationForm/Step2address";
import Step3Experience from "./Step3experience";

const JobApplicationForm = () => {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <>
          <Box>
            <Heading size="md" mb={6} textStyle="size-lg">
              Position Details
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <Field.Root required>
                <Field.Label>Position Applied For</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field placeholder="Select position">
                    <option value="mover">Mover / Helper</option>
                    <option value="driver">Driver</option>
                    <option value="crew-lead">Crew Lead</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
              <Field.Root required>
                <Field.Label>How did you learn about the position?</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field placeholder="Select source">
                    <option value="linkedin">LinkedIn</option>
                    <option value="indeed">Indeed</option>
                    <option value="glassdoor">Glassdoor</option>
                    <option value="google-jobs">Google Jobs</option>
                    <option value="company-website">Company Website</option>
                    <option value="referral">Employee Referral</option>
                    <option value="social-media">Social Media</option>
                    <option value="recruiter">Recruiter / Agency</option>
                    <option value="other">Other</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
            </SimpleGrid>
          </Box>

          <Stack gap={6} mt={10}>
            <Heading >Your Information</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} >

            <Field.Root>
              <Field.Label>First Name</Field.Label>
              <Input type="text" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Last Name</Field.Label>
              <Input type="text"/>
            </Field.Root>

             <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input type="email"/>
            </Field.Root>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} >
             <Field.Root>
              <Field.Label>Home Phone</Field.Label>
              <Input type="text"/>
            </Field.Root>

            <Field.Root>
              <Field.Label>Cell Phone</Field.Label>
              <Input type="text"/>
            </Field.Root>

            <Field.Root>
              <Field.Label>Address</Field.Label>
              <Input type="text"/>
            </Field.Root>
          </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} >
             <Field.Root>
              <Field.Label>City</Field.Label>
              <Input type="text"/>
            </Field.Root>

            <Field.Root>
              <Field.Label>State</Field.Label>
              <Input type="text"/>
            </Field.Root>

            <Field.Root>
              <Field.Label>Zip Code</Field.Label>
              <Input type="text"/>
            </Field.Root>
          </SimpleGrid>

           <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} >
             <Field.Root>
              <Field.Label>Social Security Number</Field.Label>
              <Input type="text"/>
            </Field.Root>

            <Field.Root>
              <Field.Label>On what date would you be available for work?</Field.Label>
              <Input type="date"/>
            </Field.Root>
            </SimpleGrid>


             <Field.Root required>
                      <Field.Label>
                        Are you a U.S. citizen, or are you otherwise authorized to work
                        in the U.S. without any restriction?
                      </Field.Label>
            
                      <RadioGroup.Root defaultValue="no">
                        <HStack gap={6}>
                          <RadioGroup.Item value="yes">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                          </RadioGroup.Item>
            
                          <RadioGroup.Item value="no">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>No</RadioGroup.ItemText>
                          </RadioGroup.Item>
                        </HStack>
                      </RadioGroup.Root>
                    </Field.Root>
                    
            
                    <Field.Root required>
                      <Field.Label>
                        Have you ever been convicted of a felony?
                      </Field.Label>
            
                      <RadioGroup.Root defaultValue="no">
                        <HStack gap={6}>
                          <RadioGroup.Item value="yes">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                          </RadioGroup.Item>
            
                          <RadioGroup.Item value="no">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>No</RadioGroup.ItemText>
                          </RadioGroup.Item>
                        </HStack>
                      </RadioGroup.Root>
                    </Field.Root>
                  
                    <Field.Root required>
                      <Field.Label>
                        Have you ever been involuntarily terminated or asked to resign
                        from any position of employment?
                      </Field.Label>
            
                      <RadioGroup.Root defaultValue="no">
                        <HStack gap={6}>
                          <RadioGroup.Item value="yes">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                          </RadioGroup.Item>
            
                          <RadioGroup.Item value="no">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>No</RadioGroup.ItemText>
                          </RadioGroup.Item>
                        </HStack>
                      </RadioGroup.Root>
                    </Field.Root>
            
                    <Field.Root required>
                      <Field.Label>
                        If selected for employment, are you willing to submit to a
                        pre-employment drug screening test?
                      </Field.Label>
            
                      <RadioGroup.Root defaultValue="yes">
                        <HStack gap={6}>
                          <RadioGroup.Item value="yes">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                          </RadioGroup.Item>
            
                          <RadioGroup.Item value="no">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>No</RadioGroup.ItemText>
                          </RadioGroup.Item>
                        </HStack>
                      </RadioGroup.Root>
                    </Field.Root>

            
          
          </Stack>
        </>
      );
    }

    if (page === 1) return <Step2Address />;
    if (page === 2) return <Step3Experience />;
  };

  const progressValue = page === 0 ? 33.33 : page === 1 ? 66.66 : 100;

  return (
    <Container
      maxW="100%"
      py={16}
      bg="white"
      border="1px solid"
      borderColor="brand.primary"
      borderRadius="xl"
      boxShadow="lg"
    >
      <Box mb={6}>
        <Progress.Root value={progressValue}>
          <Progress.Track>
            <Progress.Range bg="brand.primary" />
          </Progress.Track>
        </Progress.Root>
      </Box>
      {PageDisplay()}

      {/* FOOTER BUTTONS */}
      <Stack direction="row" justify="space-between" mt={10}>
         <Button
    bg="brand.primary"
    color="white"
    _hover={{ bg: "brand.primary" }}
    variant="solid"
    disabled={page === 0}
    onClick={() => setPage((p) => p - 1)}
  >
    Prev
  </Button>

  <Button
    bg="brand.primary"
    color="white"
    _hover={{ bg: "brand.primary" }}
    variant="solid"
    onClick={() => {
      if (page === 2) {
        alert("FORM SUBMITTED");
      } else {
        setPage((p) => p + 1);
      }
    }}
  >
    {page === 2 ? "Send" : "Next"}
  </Button>
      </Stack>
    </Container>
  );
};

export { JobApplicationForm };

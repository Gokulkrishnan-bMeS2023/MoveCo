import { Box, Heading, Text, Flex, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { JobApplicationForm } from "./Step1address";

const JobApplication = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container maxW="100%" px={8} py={{ base: 10, md: 12 }} >
        <Flex direction="column" align="flex-start" gap={4} >
          <Box maxW="800px" w="100%">
            <Heading as="h1" fontWeight="normal">
              Join the {""}
              <Text as="span" color="brand.primary">
                MoveCo
              </Text>{" "}
              Team
            </Heading>
          </Box>
          <Box  w="100%">
            <Text textStyle="size-lg">
              All potential employees are evaluated without regard to race,
              color, religion, gender, national origin, age, marital or veteran
              status, the presence of a non-job related handicap or any other
              legally protected status. Please take a moment to read our{" "}
              <Text
                as="span"
                color="brand.primary"
                textDecoration="underline"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
                onClick={() => navigate("/AssociateCodeofConduct")}
              >
                Associate Code of Conduct
              </Text>
            </Text>
          </Box>
        </Flex>
        
          <JobApplicationForm />
       
      </Container>
    </>
  );
};
export default JobApplication;

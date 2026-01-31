import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
} from "@chakra-ui/react";
import { JobApplicationForm } from "../../components/common/JobApplicationForm/index";
 
const JobApplication = () => {
  return (
    <>
      <Container maxW="100%" px={8} py={12}>
        <Flex direction="column" align="center" textAlign="center" gap={2}>
          {/* Heading */}
          <Heading as="h1" fontWeight="normal">
            Join the{" "}
            <Text as="span" color="brand.primary">
              MoveCo
            </Text>{" "}
            Team
          </Heading>
 
          {/* Subtitle */}
          <Text fontSize="md" color="gray.600">
            Apply for a position below
          </Text>
 
          {/* Divider */}
          <Box w="80px" h="2px" bg="brand.primary" my={4} />
 
          {/* Equal Opportunity Notice */}
          <Flex
            align="center"
            gap={2}
            bg="gray.50"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            px={4}
            py={3}
            maxW="700px"
          >
            <Text fontSize="sm" color="gray.700">
              <Text as="span" fontWeight="medium">
                ℹ️ Equal Opportunity Employer
              </Text>{" "}
              — MoveCo evaluates all applicants without regard to race, color,
              religion, gender, national origin, age, marital or veteran status,
              disability, or any other legally protected status.
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Container maxW="100%" px={8} py={12} >
        <JobApplicationForm />
      </Container>
    </>
  );
};
export default JobApplication;
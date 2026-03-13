import { Stack, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import DateInput from "../../../components/common/DateInput/DateInput";
import InputField from "../../../components/common/Input/Input";
import Notes from "../../../components/common/Notes/Notes";
import Button from "../../../components/common/Button/Button";
import { useTestimonialForm } from "./useTestimonialForm";

export const TestimonialForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useTestimonialForm();
  return (
    <Box
      bg="brand.white"
      p={{ base: 6, md: 8 }}
      borderRadius="3xl"
      boxShadow="xl"
      border="1px solid"
      borderColor="gray.100"
    >
      <Stack gap={4}>
        <Heading as="h3" fontWeight="normal" color="brand.primary">
          Add Testimonial
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
          <InputField
            label="First Name"
            placeholder="First Name"
            value={values.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            errorMessage={errors.firstName}
            isRequired
          />
          <InputField
            label="Last Name"
            placeholder="Last Name"
            value={values.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            errorMessage={errors.lastName}
            isRequired
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
          <DateInput
            label="Move Date"
            variant="future-only"
            value={values.moveDate}
            onChange={(e) => handleChange("moveDate", e.target.value)}
            errorMessage={errors.moveDate}
            isRequired
          />
          <Box>
            <InputField
              label="Email(Email address WILL NOT be displayed on the Testimonial board)"
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              errorMessage={errors.email}
              isRequired
            />
          </Box>
        </SimpleGrid>
        <Notes
          label="Comments"
          value={values.comments}
          onChange={(value) => handleChange("comments", value)}
          isRequired
          errorMessage={errors.comments}
        />
        <Box textAlign={{ base: "center", md: "right" }} mt={4}>
          <Button
            label={isSubmitting ? "Sending..." : "Send"}
            variant="primary"
            onClick={handleSubmit}
            disabled={isSubmitting}
            px="16"
          />
        </Box>
      </Stack>
    </Box>
  );
};

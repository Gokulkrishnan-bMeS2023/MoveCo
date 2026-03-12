import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import InputField from "../../../components/common/Input/Input";
import Notes from "../../../components/common/Notes/Notes";
import DateInput from "../../../components/common/DateInput/DateInput";
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAddTestimonial } from "./useAddTestimonial";

const AddTestimonial = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useAddTestimonial();

  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ base: "left", md: "center" }}
        mb={{ base: 4, lg: 6 }}
        gap={{ base: 4, md: 10 }}
      >
        <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{ base: "center", md: "left" }}>
          Add
          <Text as="span" color="brand.primary">
            {" "}
            Testimonial
          </Text>
        </Heading>
        <Text textStyle={"size-2xl"} maxW={{ lg: "46%" }} textAlign={{ base: "center", md: "left" }}>
          You are about to post a comment on our “testimonial board”.If you
          need to contact customer service please {" "}
          <Text
            as="span"
            color="brand.primary"
            textDecoration="underline"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/contact-us")}
          >
            email us
          </Text>
          . This board is for actual customers only.
        </Text>
      </Flex>
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
              label="Send"
              variant="primary"
              onClick={handleSubmit}
              px="16"
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default AddTestimonial;

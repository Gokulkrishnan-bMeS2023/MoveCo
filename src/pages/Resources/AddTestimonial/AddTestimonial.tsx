import { useState } from "react";
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
import type { TestimonialFormValues, TestimonialErrors } from "./DTOs";
import { validateTestimonial } from "./validation";
import { postTestimonial } from "../../../api/testimonialService";

const AddTestimonial = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<TestimonialFormValues>({
    firstName: "",
    lastName: "",
    moveDate: "",
    email: "",
    comments: "",
  });
  const [errors, setErrors] = useState<TestimonialErrors>({});

  const handleChange = (field: keyof TestimonialFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

const handleSubmit = async () => {
    const newErrors = validateTestimonial(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

   const payload = {
  FirstName: values.firstName,
  LastName: values.lastName,
  MoveDate: values.moveDate, 
  Email: values.email,
  Comments: values.comments,
  IsActive: true,
} as any; // Type error-a avoid panna 'as any' use pannunga
    console.log("Sending payload:", payload);

    try {
      await postTestimonial(payload);
      alert("Testimonial submitted successfully!");
      navigate("/");
    } catch (error: any) {
      if (error.response) {
        // Console-la intha array-va click panni '0' index-la enna irukunu paarunga
        console.error("Exact Error:", error.response.data);
        
        // Error details-a screen-la kaata
        const errorDetails = error.response.data[0]?.errorMessage || "Validation failed";
        alert(`Server Error: ${errorDetails}`);
      } else {
        alert("Something went wrong");
      }
    }
};

  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{base:"left",md:"center"}}
        mb={{ base: 4, lg: 6 }}
         gap={{ base: 4, md: 10 }}
      >
        <Box maxW={{ lg: "45%" }}>
          <Heading as="h1" fontWeight="normal" textAlign={{base: "center", md: "left"}}>
            Add
            <Text as="span" color="brand.primary">
              {" "}
              Testimonial
            </Text>
          </Heading>
        </Box>
        <Box maxW={{ lg: "46%" }} textAlign={{base: "center", md: "left"}}>
          <Text textStyle={"size-2xl"}>
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
        </Box>
      </Flex>
      <Box
        bg="brand.white"
        p={{ base: 6, md: 10 }}
        borderRadius="3xl"
        boxShadow="xl"
        border="1px solid"
        borderColor="gray.100"
      >
        <Stack gap={4}>
          <Heading as="h3" fontWeight="normal" color="brand.primary">
              Add Testimonial
            </Heading>
         <SimpleGrid columns={{ base: 1, md: 2 }} gap={{base: 4,md: 6}}>
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

         <SimpleGrid columns={{ base: 1, md: 2 }} gap={{base: 4,md: 6}}>
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

import { Container, Heading, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RecaptchaWrapper from "../../../utils/RecaptchaWrapper";
import { TestimonialForm } from "./TestimonialForm";

const AddTestimonial = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ base: "left", md: "center" }}
        mb={{ base: 4, lg: 6 }}
        gap={{ base: 4, md: 10 }}
      >
        <Heading
          as="h1"
          fontWeight="normal"
          maxW={{ lg: "45%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Add
          <Text as="span" color="brand.primary">
            {" "}
            Testimonial
          </Text>
        </Heading>
        <Text
          textStyle={"size-2xl"}
          maxW={{ lg: "46%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          You are about to post a comment on our “testimonial board”.If you need
          to contact customer service please{" "}
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
      <RecaptchaWrapper>
        <TestimonialForm />
      </RecaptchaWrapper>
    </Container>
  );
};

export default AddTestimonial;

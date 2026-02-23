import { Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
import QuoteFormImage from "../../assets/quote-form-image.webp";
import { useNavigate, useLocation } from "react-router-dom";
import type { QuoteFormDTO } from "./DTOs";
import { validateQuoteForm } from "./validation";
import { useState, useEffect } from "react";
import DateInput from "../../components/common/DateInput/DateInput";
import InputField from "../../components/common/Input/Input";
import RadioField from "../../components/common/Radio/Radio";
import Button from "../../components/common/Button/Button";
import PhoneField from "../../components/common/PhoneInput/PhoneInput";

const QuoteForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<QuoteFormDTO>({
    firstName: "",
    lastName: "",
    date: "",
    phoneNumber: "",
    email: "",
    estimate: "Instant Online Estimate",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof QuoteFormDTO, string>>
  >({});
  useEffect(() => {
    if (location.state) {
      setFormData(location.state as QuoteFormDTO);
    }
  }, [location.state]);

  const handleChange = (field: keyof QuoteFormDTO, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateQuoteForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    if (formData.estimate === "Instant Online Estimate") {
      navigate("/move-information", { state: formData });
    } else if (formData.estimate === "In-Home Move Estimate") {
      navigate("/InHomeMoveEstimate", { state: formData });
    } else if (formData.estimate === "Request a call back") {
      navigate("/contact-us", { state: formData });
    }
  };

  return (
    <Box>
      <Image src={QuoteFormImage} alt="Quote Form" w="100%" rounded="2xl" />
      <Box bg="brand.white" p={6} mt={4} rounded="2xl">
        <Heading as="h3" textAlign="center" fontWeight="normal" mb={4}>
          Get a Moving{" "}
          <Text as="span" color="brand.primary">
            Quote
          </Text>
        </Heading>

        <Stack gap={2}>
          <InputField
            label="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="First Name"
            isRequired
            errorMessage={errors.firstName}
          />
          <InputField
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Last Name"
            isRequired
            errorMessage={errors.lastName}
          />
          <DateInput
            label="Date"
            value={formData.date}
            variant="future-only"
            onChange={(e) => handleChange("date", e.target.value)}
            isRequired
            errorMessage={errors.date}
          />
          <PhoneField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={(digits) => handleChange("phoneNumber", digits)}
            isRequired
            errorMessage={errors.phoneNumber}
          />
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email"
            isRequired
            errorMessage={errors.email}
          />
          <RadioField
            options={[
              {
                label: "Instant Online Estimate",
                value: "Instant Online Estimate",
              },
              {
                label: "In-Home Move Estimate",
                value: "In-Home Move Estimate",
              },
              { label: "Request a call back", value: "Request a call back" },
            ]}
            value={formData.estimate}
            onValueChange={(val) => handleChange("estimate", val)}
            isRequired
            errorMessage={errors.estimate}
          />

          <Button variant="primary" label="Next" onClick={handleSubmit} mt={2}/>
        </Stack>
      </Box>
    </Box>
  );
};

export { QuoteForm };

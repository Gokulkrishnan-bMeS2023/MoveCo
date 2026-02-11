import { Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
import QuoteFormImage from "../../../assets/quote-form-image.webp";
import Button from "../Button/Button";
import DateInput from "../DateInput/DateInput";
import { useState } from "react";
import RadioField from "../Radio/Radio";
import InputField from "../Input/Input";
import { useNavigate } from "react-router-dom";
 
interface QuoteFormErrors {
  firstName?: string;
  lastName?: string;
  date?: string;
  phoneNumber?: string;
  email?: string;
  estimate?: string;
}
 
const QuoteForm = () => {
  const navigate = useNavigate();
 
  const handleChange = (field: keyof QuoteFormErrors, value: string) => {
    switch (field) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "date":
        setDate(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "estimate":
        setEstimate(value);
        break;
    }
 
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
 
  const handleSubmit = () => {
    const newErrors: QuoteFormErrors = {};
 
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!date) newErrors.date = "Date is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
 
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }
 
    if (!estimate) newErrors.estimate = "Please select an estimate type";
 
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
 
    setErrors({});
    navigate("/move-information");
  };
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [estimate, setEstimate] = useState("");
 
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  // const [submitted, setSubmitted] = useState(false);
 
  return (
    <Box>
      <Image src={QuoteFormImage} alt="Quote Form" w="100%" rounded="2xl" />
      <Box bg="brand.white" p={6} mt={4} rounded="2xl">
        <Heading fontSize="xl" textAlign="center" fontWeight="medium" mb={4}>
          Get a Moving{" "}
          <Text as="span" color="brand.primary">
            Quote
          </Text>
        </Heading>
 
        <Stack gap={2}>
          <Box>
            <InputField
              label="First Name"
              value={firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="First Name"
              isRequired
              errorMessage={errors.firstName}
            />
          </Box>
          <Box>
            <InputField
              label="Last Name"
              value={lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Last Name"
              isRequired
              errorMessage={errors.lastName}
            />
          </Box>
          <Box>
            <DateInput
              label="Date"
              value={date}
              onChange={(e) => handleChange("date", e.target.value)}
              isRequired
              errorMessage={errors.date}
            />
          </Box>
          <InputField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            placeholder="Phone"
            isRequired
            errorMessage={errors.phoneNumber}
          />
          <Box>
            <InputField
              label="Email"
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email"
              isRequired
              errorMessage={errors.email}
            />
          </Box>
 
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
            value={estimate}
            onValueChange={(val) => handleChange("estimate", val)}
            isRequired
            errorMessage={errors.estimate}
          />
          <Button variant="primary" label="Next" onClick={handleSubmit} />
        </Stack>
      </Box>
    </Box>
  );
};
 
export { QuoteForm };
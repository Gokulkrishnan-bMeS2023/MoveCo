import { useState } from "react";
import {
  Box,
  Image,
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
import SelectField from "../../../components/common/Select/Select";
import { useNavigate } from "react-router-dom";
import type { MoveEstimateFormValues, MoveEstimateErrors } from "./DTOs";
import { validateMoveEstimate } from "./validation";
import { images } from "../../../assets";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";

const timeOptions = [
  { label: "8AM - 10AM", value: "8AM-10AM" },
  { label: "10AM - 12PM", value: "10AM-12PM" },
  { label: "12PM - 2PM", value: "12PM-2PM" },
  { label: "2PM - 4PM", value: "2PM-4PM" },
];
const moveSizeOptions = [
  { label: "Home", value: "home" },
  { label: "Office", value: "office" },
  { label: "Apartment", value: "apartment" },
  { label: "Storage Room", value: "storage-room" },
];
const hearAboutOptions = [
  { label: "Other", value: "Other" },
  { label: "Yellow Pages", value: "Yellow Pages" },
  { label: "Better Business Bureau", value: "Better Business Bureau" },
  { label: "HMS", value: "HMS" },
  { label: "MoveCo Truck", value: "MoveCo Truck" },
  { label: "Referred By Someone", value: "Referred By Someone" },
  { label: "Repeat Customer", value: "Repeat Customer" },
  { label: "Received Mail", value: "Received Mail" },
  { label: "Online Methods", value: "Online Methods" },
  { label: "Online Yellow Pages", value: "Online Yellow Pages" },
  { label: "Yahoo", value: "Yahoo" },
  { label: "Google", value: "Google" },
  { label: "MSN", value: "MSN" },
  { label: "Ask.com", value: "Ask.com" },
  { label: "Other Search Engine", value: "Other Search Engine" },
  { label: "Other Internet", value: "Other Internet" },
];
const stateOptions = [
  { label: "Texas", value: "TX" },
  { label: "Alaska", value: "AK" },
  { label: "Alabama", value: "AL" },
  { label: "Arkansas", value: "AR" },
  { label: "Arizona", value: "AZ" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "District of Columbia", value: "DC" },
  { label: "Delaware", value: "DE" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
  { label: "Hawaii", value: "HI" },
  { label: "Iowa", value: "IA" },
  { label: "Idaho", value: "ID" },
  { label: "Illinois", value: "IL" },
  { label: "Indiana", value: "IN" },
  { label: "Kansas", value: "KS" },
  { label: "Kentucky", value: "KY" },
  { label: "Louisiana", value: "LA" },
  { label: "Massachusetts", value: "MA" },
  { label: "Maryland", value: "MD" },
  { label: "Maine", value: "ME" },
  { label: "Michigan", value: "MI" },
  { label: "Minnesota", value: "MN" },
  { label: "Missouri", value: "MO" },
  { label: "Mississippi", value: "MS" },
  { label: "Montana", value: "MT" },
  { label: "North Carolina", value: "NC" },
  { label: "North Dakota", value: "ND" },
  { label: "Nebraska", value: "NE" },
  { label: "New Hampshire", value: "NH" },
  { label: "New Jersey", value: "NJ" },
  { label: "New Mexico", value: "NM" },
  { label: "Nevada", value: "NV" },
  { label: "New York", value: "NY" },
  { label: "Ohio", value: "OH" },
  { label: "Oklahoma", value: "OK" },
  { label: "Oregon", value: "OR" },
  { label: "Pennsylvania", value: "PA" },
  { label: "Puerto Rico", value: "PR" },
  { label: "Rhode Island", value: "RI" },
  { label: "South Carolina", value: "SC" },
  { label: "South Dakota", value: "SD" },
  { label: "Tennessee", value: "TN" },
  { label: "Utah", value: "UT" },
  { label: "Virginia", value: "VA" },
  { label: "Virgin Islands", value: "VI" },
  { label: "Vermont", value: "VT" },
  { label: "Washington", value: "WA" },
  { label: "Wisconsin", value: "WI" },
  { label: "West Virginia", value: "WV" },
  { label: "Wyoming", value: "WY" },
];

const InHomeMoveEstimate = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<MoveEstimateFormValues>({
    visitDate: "",
    visitTime: "",
    moveDate: "",
    moveSize: "",
    hearAbout: "",
    firstName: "",
    lastName: "",
    email: "",
    homePhone: "",
    cellPhone: "",
    workPhone: "",
    faxPhone: "",
    fromAddress: "",
    apt: "",
    city: "",
    state: "",
    zipCode: "",
    notes: "",
  });

  const [errors, setErrors] = useState<MoveEstimateErrors>({});

  const handleChange = (field: keyof MoveEstimateFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateMoveEstimate(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    alert("Form Submitted Successfully!");
  };

  return (
    <Container>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: 6, md: 10 }}
        mb={{ base: 6, lg: 8 }}
      >
        <Heading as="h1" fontWeight="normal" w={{ base: "100%", lg: "50%" }}>
          In-Home <br />
          <Text as="span" color="brand.primary">
            Move Estimate
          </Text>
        </Heading>

        <Box maxW={{ lg: "45%" }}>
          <Text textStyle="size-xl" textAlign={{ base: "left", md: "right" }}>
            All information will not be released to any other person or company,
            please read our{" "}
            <Text
              as="span"
              cursor="pointer"
              color="brand.primary"
              onClick={() => navigate("/privacy-policy")}
            >
              privacy policy
            </Text>
            .{" "}
            <Text as="span" fontWeight="500">
              Be sure to ask about our packing services!
            </Text>
          </Text>
        </Box>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
        <Box w="100%" maxW={{ base: "100%", md: "550px" }}>
          <Image
            src={images.inHomeMove}
            alt="footprint"
            w="100%"
            h="auto"
            borderRadius="2xl"
            loading="eager"
            fetchPriority="high"
          />
        </Box>

        <Box p={4}>
          <Text mt={{ base: "4", md: "6" }} textStyle="size-3xl">
            After filling out this form, an appointment will be made to have a
            real, live person come out and estimate your move costs. This is a
            free service, and is perfect for individuals who are unsure as to
            how items can and will be moved.
          </Text>
        </Box>
      </SimpleGrid>
      <Box pt="sectionTop">
        <Stack gap={8}>
          <Box
            bg="brand.white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
          >
            <Heading as="h3" fontWeight="normal" mb={4} color="brand.primary">
              General Information
            </Heading>

            <Stack gap={4}>
              <Text textStyle="size-md" color="brand.secondary">
                Which date and time is convenient for one of our trained
                professional estimators to come out and visit you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <DateInput
                  label="Date"
                  variant="future-only"
                  value={values.visitDate}
                  onChange={(e) => handleChange("visitDate", e.target.value)}
                  isRequired
                  errorMessage={errors.visitDate}
                />

                <SelectField
                  label="Preferred Time"
                  value={values.visitTime}
                  onValueChange={(e) => handleChange("visitTime", e.value[0])}
                  isRequired
                  options={timeOptions}
                  errorMessage={errors.visitTime}
                />
              </SimpleGrid>
              <DateInput
                label="On which date are you planning on moving?"
                value={values.moveDate}
                onChange={(e) => handleChange("moveDate", e.target.value)}
                isRequired
                errorMessage={errors.moveDate}
              />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <SelectField
                  label="What do you estimate your move size to be?"
                  value={values.moveSize}
                  onValueChange={(e) => handleChange("moveSize", e.value[0])}
                  isRequired
                  options={moveSizeOptions}
                  errorMessage={errors.moveSize}
                />
                <SelectField
                  label="How did you hear about MoveCo.net?"
                  value={values.hearAbout}
                  onValueChange={(e) => handleChange("hearAbout", e.value[0])}
                  isRequired
                  options={hearAboutOptions}
                  errorMessage={errors.hearAbout}
                />
              </SimpleGrid>
            </Stack>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
            >
              <Heading as="h3" fontWeight="normal" mb={4} color="brand.primary">
                Contact Information
              </Heading>

              <Stack gap={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  <InputField
                    label="First Name"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    isRequired
                    errorMessage={errors.firstName}
                  />

                  <InputField
                    label="Last Name"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    isRequired
                    errorMessage={errors.lastName}
                  />
                </SimpleGrid>

                <InputField
                  label="Email"
                  placeholder="Email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  isRequired
                  errorMessage={errors.email}
                />

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  <PhoneField
                    label="Home Phone"
                    value={values.homePhone}
                    onChange={(digits) => handleChange("homePhone", digits)}
                    isRequired
                    errorMessage={errors.homePhone}
                  />
                  <PhoneField
                    label="Cell Phone"
                    value={values.cellPhone}
                    onChange={(digits) => handleChange("cellPhone", digits)}
                    errorMessage={errors.cellPhone}
                  />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  <PhoneField
                    label="Work Phone"
                    value={values.workPhone}
                    onChange={(digits) => handleChange("workPhone", digits)}
                    errorMessage={errors.workPhone}
                  />
                  <PhoneField
                    label="Fax Phone"
                    value={values.faxPhone}
                    onChange={(digits) => handleChange("faxPhone", digits)}
                    errorMessage={errors.faxPhone}
                  />
                </SimpleGrid>
              </Stack>
            </Box>

            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
            >
              <Heading as="h3" fontWeight="normal" mb={4} color="brand.primary">
                Move Location
              </Heading>

              <Stack gap={4}>
                <InputField
                  label="From Address"
                  placeholder="From Address"
                  value={values.fromAddress}
                  onChange={(e) => handleChange("fromAddress", e.target.value)}
                  isRequired
                  errorMessage={errors.fromAddress}
                />

                <InputField
                  label="Apt / Suite / Other"
                  placeholder="Apt / Suite / Other"
                  value={values.apt}
                  onChange={(e) => handleChange("apt", e.target.value)}
                />

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                  <InputField
                    label="City"
                    placeholder="City"
                    value={values.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    isRequired
                    errorMessage={errors.city}
                  />
                  <SelectField
                    label="State"
                    options={stateOptions}
                    placeholder="State"
                    value={values.state}
                    onValueChange={(e) => handleChange("state", e.value[0])}
                    isRequired
                    errorMessage={errors.state}
                  />

                  <InputField
                    label="Zip Code"
                    placeholder="Zip Code"
                    type="number"
                    value={values.zipCode}
                    onChange={(e) =>
                      handleChange(
                        "zipCode",
                        e.target.value.replace(/\D/g, "").slice(0, 5),
                      )
                    }
                  />
                </SimpleGrid>

                <Notes
                  label="Additional Information"
                  placeholder="Specify and additional notes here"
                  value={values.notes}
                  onChange={(value) => handleChange("notes", value)}
                />
              </Stack>
            </Box>
          </SimpleGrid>

          <Box textAlign={{ base: "center", md: "right" }}>
            <Button
              label="Send"
              variant="primary"
              px="16"
              onClick={handleSubmit}
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default InHomeMoveEstimate;

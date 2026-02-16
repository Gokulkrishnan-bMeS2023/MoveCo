import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  VStack,
  Flex,
} from "@chakra-ui/react";
import InputField from "../../../components/common/Input/Input";
import Notes from "../../../components/common/Notes/Notes";
import DateInput from "../../../components/common/DateInput/DateInput";
import Button from "../../../components/common/Button/Button";
import SelectField from "../../../components/common/Select/Select";
import { useNavigate } from "react-router-dom";
import type { MoveInformationDTO, MoveInformationErrors } from "./DTOs";
import { validateMoveInformation } from "./validation";
import { useSearchParams } from "react-router-dom";

const InHomeMoveEstimate = () => {
  const [searchParams] = useSearchParams();
  const firstName = searchParams.get("firstName") || "";
  const lastName = searchParams.get("lastName") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const moveDate = searchParams.get("moveDate") || "";

  // 2️⃣ THEN use them in useState
 const [values, setValues] = useState<MoveInformationDTO>(() => {
  const saved = localStorage.getItem("moveInformation");

  if (saved) return JSON.parse(saved);

  return {
    firstName,
    lastName,
    email,
    cellPhone: phone,
    homePhone: "",
    workPhone: "",
    faxPhone: "",
    moveDate,
    moveTime: "",
    dropDate: "",
    dropTime: "",
    moveType: "",
    hearAbout: "",
    notes: "",
    fromAddress: "",
    fromApt: "",
    fromCity: "",
    fromState: "",
    fromZipCode: "",
    fromStairs: "",
    fromDistance: "",
    toAddress: "",
    toApt: "",
    toCity: "",
    toState: "",
    toZipCode: "",
    toStairs: "",
    toDistance: "",
  };
});


  const [errors, setErrors] = useState<MoveInformationErrors>({});

  const handleChange = (field: keyof MoveInformationDTO, value: string) => {
  const updatedValues = { ...values, [field]: value };
  setValues(updatedValues);

  // ⭐ save to localStorage
  localStorage.setItem("moveInformation", JSON.stringify(updatedValues));

  if (errors[field]) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }
};


  const moveTimeOptions = [
    { label: "8AM - 10AM", value: "8-10" },
    { label: "10AM - 12PM", value: "10-12" },
    { label: "12PM - 2PM", value: "12-2" },
    { label: "2PM - 4PM", value: "2-4" },
  ];

  const moveTypeOptions = [
    { label: "Home", value: "home" },
    { label: "Apartment", value: "apartment" },
    { label: "Office", value: "office" },
  ];

  const hearAboutOptions = [
    { label: "Other", value: "Other" },
    { label: "Yellow Pages", value: "Yellow Pages" },
    { label: "Better Business Bureau", value: "Better Business Bureau" },
    { label: "HMS", value: "HMS" },
    { label: "MoveCo Truck", value: "MoveCo Truck" },
    { label: "Referred By Someone ", value: "Referred By Someone" },
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

  const stairsOptions = [
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2+", value: "2+" },
    { label: "Elevator", value: "Elevator" },
  ];

  const distanceOptions = [
    { label: "Less than 100 feet", value: "<100" },
    { label: "100–200 feet", value: "100-200" },
    { label: "200–300 feet", value: "200-300" },
    { label: "300–400 feet", value: "300-400" },
  ];

  const navigate = useNavigate();

  const handleSubmit = () => {
    const newErrors = validateMoveInformation(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    navigate("/inventry");
  };

  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      <Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
          mb={8}
        >
          <Box maxW="400px" w="100%">
            <Heading as="h1" fontWeight="normal" mb={2}>
              Information{" "}
              <Text as="span" color="brand.primary">
                About me
              </Text>
            </Heading>
          </Box>
          <Box maxW="500px" w="100%">
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
              color="gray.600"
            >
              Please fill out the details below to continue your quote.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Stack gap={8}>
        <Box
          bg="white"
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <Heading as="h3" mb={4} color="brand.primary" fontWeight="normal">
            Contact Information
          </Heading>

          <VStack align="stretch" gap={4}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
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
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                isRequired
                errorMessage={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
              <InputField
                label="Phone"
                placeholder="Phone"
                value={values.cellPhone}
                onChange={(e) => handleChange("cellPhone", e.target.value)}
                isRequired
                errorMessage={errors.cellPhone}
              />
              <InputField
                label="Work Phone"
                placeholder="Work Phone"
                value={values.workPhone}
                onChange={(e) => handleChange("workPhone", e.target.value)}
              />
              <InputField
                label="Cell Phone"
                placeholder="Cell Phone"
                value={values.homePhone}
                onChange={(e) => handleChange("homePhone", e.target.value)}
              />
              <InputField
                label="Home Phone"
                placeholder="Home Phone"
                value={values.faxPhone}
                onChange={(e) => handleChange("faxPhone", e.target.value)}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        {/* ================= CARD 2 + 3 ================= */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {/* LEFT */}
          <Box
            bg="brand.white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.100"
          >
            <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
              Move - Drop date and time
            </Heading>

            <VStack align="stretch" gap={4}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <DateInput
                  label="Move Date"
                  variant="future-only"
                  placeholder="Move Date"
                  value={values.moveDate}
                  onChange={(e) => handleChange("moveDate", e.target.value)}
                  isRequired
                  errorMessage={errors.moveDate}
                />
                <SelectField
                  label="Move Time"
                  placeholder="Select time"
                  options={moveTimeOptions}
                  value={values.moveTime}
                  onValueChange={(d) => handleChange("moveTime", d.value[0])}
                />
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <DateInput
                  label="Drop Date"
                  variant="future-only"
                  placeholder="Drop Date"
                  value={values.dropDate}
                  onChange={(e) => handleChange("dropDate", e.target.value)}
                />
                <SelectField
                  label="Drop Time"
                  placeholder="Select time"
                  options={moveTimeOptions}
                  value={values.dropTime}
                  onValueChange={(d) => handleChange("dropTime", d.value[0])}
                />
              </SimpleGrid>
            </VStack>
          </Box>
          {/* RIGHT */}
          <Box
            bg="gray.50"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.200"
          >
            <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
              Move Type
            </Heading>

            <VStack align="stretch" gap={6}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <SelectField
                  label="Move Type"
                  options={moveTypeOptions}
                  value={values.moveType}
                  onValueChange={(d) => handleChange("moveType", d.value[0])}
                />
                <SelectField
                  label="How did you hear about MoveCo.Net?"
                  options={hearAboutOptions}
                  value={values.hearAbout}
                  onValueChange={(d) => handleChange("hearAbout", d.value[0])}
                />
              </SimpleGrid>
              <Notes
                label="Additional Information"
                value={values.notes}
                onChange={(value) => handleChange("notes", value)}
              />
            </VStack>
          </Box>
        </SimpleGrid>

        {/* ================= MOVE LOCATION ================= */}
        <Box
          bg="white"
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
            Move Location
          </Heading>
          <VStack align="stretch" gap={6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <InputField
                label="From Address"
                placeholder="From Address"
                value={values.fromAddress}
                onChange={(e) => handleChange("fromAddress", e.target.value)}
              />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <InputField
                  label="Apt / Suite / Other"
                  placeholder="Apt / Suite / Other"
                  value={values.fromApt}
                  onChange={(e) => handleChange("fromApt", e.target.value)}
                />
                <InputField
                  label="City"
                  placeholder="City"
                  value={values.fromCity}
                  onChange={(e) => handleChange("fromCity", e.target.value)}
                />
              </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
              <InputField
                label="State"
                placeholder="State"
                value={values.fromState}
                onChange={(e) => handleChange("fromState", e.target.value)}
              />
              <InputField
                label="Zip Code"
                placeholder="Zip Code"
                value={values.fromZipCode}
                onChange={(e) => handleChange("fromZipCode", e.target.value)}
                isRequired
                errorMessage={errors.fromZipCode}
              />
              <SelectField
                label="Flights of stairs at this address?"
                options={stairsOptions}
                value={values.fromStairs}
                onValueChange={(d) => handleChange("fromStairs", d.value[0])}
              />
              <SelectField
                label="Door to truck at this address?"
                options={distanceOptions}
                value={values.fromDistance}
                onValueChange={(d) => handleChange("fromDistance", d.value[0])}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        {/* ================= DROP LOCATION ================= */}
        <Box
          bg="white"
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
            Drop Location
          </Heading>
          <VStack align="stretch" gap={4}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <InputField
                label="To Address"
                placeholder="To Address"
                value={values.toAddress}
                onChange={(e) => handleChange("toAddress", e.target.value)}
              />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <InputField
                  label="Apt / Suite / Other"
                  placeholder="Apt / Suite / Other"
                  value={values.toApt}
                  onChange={(e) => handleChange("toApt", e.target.value)}
                />
                <InputField
                  label="City"
                  placeholder="City"
                  value={values.toCity}
                  onChange={(e) => handleChange("toCity", e.target.value)}
                />
              </SimpleGrid>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
              <InputField
                label="State"
                placeholder="State"
                value={values.toState}
                onChange={(e) => handleChange("toState", e.target.value)}
              />
              <InputField
                label="Zip Code"
                placeholder="Zip Code"
                value={values.fromZipCode}
                onChange={(e) => handleChange("fromZipCode", e.target.value)}
                isRequired
                errorMessage={errors.fromZipCode}
              />
              <SelectField
                label="Flights of stairs at this address?"
                options={stairsOptions}
                value={values.toStairs}
                onValueChange={(d) => handleChange("toStairs", d.value[0])}
              />
              <SelectField
                label="Door to truck at this address?"
                options={distanceOptions}
                value={values.toDistance}
                onValueChange={(d) => handleChange("toDistance", d.value[0])}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        {/* SUBMIT */}
        <Box textAlign={{ base: "center", md: "right" }}>
          <Button label="Next" variant="primary" onClick={handleSubmit} />
        </Box>
      </Stack>
    </Container>
  );
};

export default InHomeMoveEstimate;
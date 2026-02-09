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

interface MoveEstimateFormValues {
  visitDate: string;
  visitTime: string;
  moveDate: string;
  moveSize: string;
  hearAbout: string;

  firstName: string;
  lastName: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  faxPhone: string;

  fromAddress: string;
  apt: string;
  city: string;
  state: string;
  zipCode: string;

  notes: string;
}

const InHomeMoveEstimate = () => {
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

  const handleChange = (field: keyof MoveEstimateFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  // const handleSubmit = () => {
  //   console.log("Submitted Data:", values);
  // };

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
  const [moveTime, setMoveTime] = useState("");
  const [moveType, setMoveType] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [stairs, setStairs] = useState("");
  const [distance, setDistance] = useState("");
  const navigate = useNavigate();

  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      
      {/* HEADER */}
      <Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
          mb={8}
        >
          {/* Left */}
          <Box maxW="400px" w="100%">
            <Heading as="h1" fontWeight="normal" mb={2}>
              Information{" "}
              <Text as="span" color="brand.primary">
                About me
              </Text>
            </Heading>
          </Box>
          {/* Right */}
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
        {/* ================= CARD 1 – CONTACT INFO ================= */}
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
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <InputField label="First Name" placeholder="First Name" isRequired />
                <InputField label="Last Name" placeholder="Last Name" isRequired />
              </SimpleGrid>
              <InputField label="Email" placeholder="Eamil" isRequired />
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
              <InputField
                label="Phone"
                value={values.moveSize}
                placeholder="Phone"
                onChange={(e) => handleChange("moveSize", e.target.value)}
                isRequired
              />
              <InputField
                label="Work Phone"
                placeholder="Work Phone"
                value={values.hearAbout}
                onChange={(e) => handleChange("hearAbout", e.target.value)}
              />
              <InputField
                label="Cell Phone"
                placeholder="Cell Phone"
                value={values.moveSize}
                onChange={(e) => handleChange("moveSize", e.target.value)}
              />
              <InputField
                label="Home Phone"
                placeholder="Home Phone"
                value={values.moveSize}
                onChange={(e) => handleChange("moveSize", e.target.value)}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        {/* ================= CARD 2 + 3 ================= */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {/* LEFT */}
          <Box
            bg="white"
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
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <DateInput
                  label="Move Date"
                  placeholder="Move Date"
                  value={values.moveDate}
                  onChange={(e) => handleChange("moveDate", e.target.value)}
                  isRequired
                />
                <SelectField
                  label="Move Time"
                  placeholder="Select time"
                  options={moveTimeOptions}
                  value={moveTime}
                  onValueChange={(d) => setMoveTime(d.value[0])}
                />
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <DateInput
                  label="Drop Date"
                  placeholder="Drop Date"
                  value={values.moveDate}
                  onChange={(e) => handleChange("moveDate", e.target.value)}
                />
                <SelectField
                  label="Drop Time"
                  placeholder="Select time"
                  options={moveTimeOptions}
                  value={moveTime}
                  onValueChange={(d) => setMoveTime(d.value[0])}
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
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <SelectField
                  label="Move Type"
                  options={moveTypeOptions}
                  value={moveType}
                  onValueChange={(d) => setMoveType(d.value[0])}
                />
                <SelectField
                  label="How did you hear about MoveCo.Net?"
                  options={hearAboutOptions}
                  value={hearAbout}
                  onValueChange={(d) => setHearAbout(d.value[0])}
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
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <InputField label="From Address" placeholder="From Address" />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <InputField label="Apt / Suite / Other" placeholder="Apt / Suite / Other" />
                <InputField label="City" placeholder="City" />
              </SimpleGrid>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
              <InputField
                label="State"
                placeholder="State"
                value={values.moveSize}
                onChange={(e) => handleChange("moveSize", e.target.value)}
              />
              <InputField
                label="Zip Code"
                placeholder="Zip Code"
                value={values.hearAbout}
                onChange={(e) => handleChange("hearAbout", e.target.value)}
                isRequired
              />
              <SelectField
                label="Flights of stairs at this address?"
                options={stairsOptions}
                value={stairs}
                onValueChange={(d) => setStairs(d.value[0])}
              />
              <SelectField
                label="Door to truck at this address?"
                options={distanceOptions}
                value={distance}
                onValueChange={(d) => setDistance(d.value[0])}
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
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <InputField label="To Address" placeholder="To Address" />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <InputField label="Apt / Suite / Other" placeholder="Apt / Suite / Other"/>
                <InputField label="City" placeholder="City" />
              </SimpleGrid>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
              <InputField
                label="State"
                placeholder="State"
                value={values.moveSize}
                onChange={(e) => handleChange("moveSize", e.target.value)}
              />
              <InputField
                label="Zip Code"
                placeholder="Zip Code"
                value={values.hearAbout}
                onChange={(e) => handleChange("hearAbout", e.target.value)}
                isRequired
              />
              <SelectField
                label="Flights of stairs at this address?"
                options={stairsOptions}
                value={stairs}
                onValueChange={(d) => setStairs(d.value[0])}
              />
              <SelectField
                label="Door to truck at this address?"
                options={distanceOptions}
                value={distance}
                onValueChange={(d) => setDistance(d.value[0])}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        {/* SUBMIT */}
        <Box textAlign={{ base: "center", md: "right" }}>
          <Button
            label="Next"
            variant="primary"
            onClick={() => navigate("/inventry")}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default InHomeMoveEstimate;

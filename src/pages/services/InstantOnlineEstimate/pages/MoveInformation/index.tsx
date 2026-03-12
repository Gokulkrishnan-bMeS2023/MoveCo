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
import { useLocation, useNavigate} from "react-router-dom";
import type { MoveInformationDTO, MoveInformationErrors } from "./DTOs";
import { validateMoveInformation } from "./validation";
import { useEffect } from "react";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import InputField from "../../../../../components/common/Input/Input";
import Notes from "../../../../../components/common/Notes/Notes";
import DateInput from "../../../../../components/common/DateInput/DateInput";
import Button from "../../../../../components/common/Button/Button";
import SelectField from "../../../../../components/common/Select/Select";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  toOptions,
  toStateOptions,
} from "../../../InHomeMoveEstimate/selectOptionUtils";

import { validateMoveInformation } from "../../validation/validation";
import { useEffect } from "react";
import PhoneField from "../../../../../components/common/PhoneInput/PhoneInput";

import {
  getMoveSizes,
  getTimeSlots,
  getHearAbout,
  getStateInstant,
  getDoorToTruck,
  getFlightsOfStairs,
} from "../../../../../api/statciDataService";
import type { MoveInformationDTO, MoveInformationErrors, SelectOption } from "./types";


const MoveInformation = () => {

// const navigate = useNavigate();
//   const location = useLocation();
//   const data = location.state as any;

//   const [values, setValues] = useState<MoveInformationDTO>({
//     firstName: data?.firstName || "",
//     lastName: data?.lastName || "",
//     email: data?.email || "",
//     phone: data?.phone || "",
//     homePhone: "",
//     workPhone: "",
//     cellPhone: "",
//     moveDate: data?.date || "",
//     moveTime: "",
//     dropDate: "",
//     dropTime: "",
//     moveType: "",
//     hearAbout: "",
//     notes: "",
//     fromAddress: "",
//     fromApt: "",
//     fromCity: "",
//     fromState: "",
//     fromZipCode: "",
//     fromStairs: "",
//     fromDistance: "",
//     toAddress: "",
//     toApt: "",
//     toCity: "",
//     toState: "",
//     toZipCode: "",
//     toStairs: "",
//     toDistance: "",
//   });

//   const [errors, setErrors] = useState<MoveInformationErrors>({});

//   const handleChange = (field: keyof MoveInformationDTO, value: string) => {
//     const updated = { ...values, [field]: value };
//     setValues(updated);
//     sessionStorage.setItem("moveInfo", JSON.stringify(updated));

//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   const [moveSizeOptions, setMoveSizeOptions] = useState<SelectOption[]>([]);
//   const [timeOptions, setTimeOptions] = useState<SelectOption[]>([]);
//   const [hearAboutOptions, setHearAboutOptions] = useState<SelectOption[]>([]);
//   const [stateOptions, setStateOptions] = useState<SelectOption[]>([]);
//   const [stairsOptions, setStairsOptions] = useState<SelectOption[]>([]);
//   const [doortoTruckOptions, setDoortoTruckOptions] = useState<SelectOption[]>(
//     [],
//   );

//   const handleSubmit = () => {
//     const newErrors = validateMoveInformation(values);
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     setErrors({});

//     const params = new URLSearchParams();
//     (Object.keys(values) as Array<keyof MoveInformationDTO>).forEach((key) => {
//       if (values[key]) {
//         params.set(key, values[key]);
//       }
//     });

//     navigate(`/inventory?${params.toString()}`, {
//       state: { fromApp: true },
//     });
//   };

//   useEffect(() => {
//     const fetchStaticData = async () => {
//       try {
//         const [
//           moveSizesResponse,
//           timeSlotsResponse,
//           hearAboutResponse,
//           statesResponse,
//           stairsResponse,
//           doortoTruckResponse,
//         ] = await Promise.all([
//           getMoveSizes(),
//           getTimeSlots(),
//           getHearAbout(),
//           getStateInstant(),
//           getFlightsOfStairs(),
//           getDoorToTruck(),
//         ]);
//         setMoveSizeOptions(toOptions(moveSizesResponse.data || []));
//         setTimeOptions(toOptions(timeSlotsResponse.data || []));
//         setHearAboutOptions(toOptions(hearAboutResponse.data || []));
//         setStateOptions(toStateOptions(statesResponse.data || []));
//         setStairsOptions(stairsResponse.data || []);
//         setDoortoTruckOptions(doortoTruckResponse.data || []);
//       } catch (error: any) {
//         console.error("Failed to fetch static data:", error);
//       }
//     };
//     fetchStaticData();
//   }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state as any;

  const initialValues: MoveInformationDTO = {
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    email: data?.email || "",
    phone: data?.phone || "",
    homePhone: "",
    workPhone: "",
    cellPhone: "",
    moveDate: data?.date || "",
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

  const [values, setValues] = useState<MoveInformationDTO>(initialValues);
  const [errors, setErrors] = useState<MoveInformationErrors>({});

  // =========================
  // RELOAD → RESET FORM
  // =========================
  useEffect(() => {
    // Check if page was reloaded
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (nav?.type === "reload") {
      setValues(initialValues); // reset form
      sessionStorage.removeItem("moveInfo"); // remove saved data
    } else {
      // Back/forward navigation → restore saved data
      const saved = sessionStorage.getItem("moveInfo");
      if (saved) setValues(JSON.parse(saved));
    }
  }, []);

  const handleChange = (field: keyof MoveInformationDTO, value: string) => {
    setValues((prev) => {
      const updated = { ...prev, [field]: value };
      sessionStorage.setItem("moveInfo", JSON.stringify(updated));
      return updated;
    });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const [moveSizeOptions, setMoveSizeOptions] = useState<SelectOption[]>([]);
  const [timeOptions, setTimeOptions] = useState<SelectOption[]>([]);
  const [hearAboutOptions, setHearAboutOptions] = useState<SelectOption[]>([]);
  const [stateOptions, setStateOptions] = useState<SelectOption[]>([]);
  const [stairsOptions, setStairsOptions] = useState<SelectOption[]>([]);
  const [doortoTruckOptions, setDoortoTruckOptions] = useState<SelectOption[]>([]);

  const handleSubmit = () => {
    const newErrors = validateMoveInformation(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    sessionStorage.removeItem("moveInfo"); // clear on submit

    const params = new URLSearchParams();
    (Object.keys(values) as Array<keyof MoveInformationDTO>).forEach((key) => {
      if (values[key]) params.set(key, values[key]);
    });

    navigate(`/inventory?${params.toString()}`, { state: { fromApp: true } });
  };

  useEffect(() => {
    const fetchStaticData = async () => {
      try {
        const [
          moveSizesResponse,
          timeSlotsResponse,
          hearAboutResponse,
          statesResponse,
          stairsResponse,
          doortoTruckResponse,
        ] = await Promise.all([
          getMoveSizes(),
          getTimeSlots(),
          getHearAbout(),
          getStateInstant(),
          getFlightsOfStairs(),
          getDoorToTruck(),
        ]);
        setMoveSizeOptions(toOptions(moveSizesResponse.data || []));
        setTimeOptions(toOptions(timeSlotsResponse.data || []));
        setHearAboutOptions(toOptions(hearAboutResponse.data || []));
        setStateOptions(toStateOptions(statesResponse.data || []));
        setStairsOptions(stairsResponse.data || []);
        setDoortoTruckOptions(doortoTruckResponse.data || []);
      } catch (error: any) {
        console.error("Failed to fetch static data:", error);
      }
    };
    fetchStaticData();
  }, []);

  return (
    <Container>
      <Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 4, md: 10 }}
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
        {/* ================= CONTACT INFO ================= */}
        <Box
          bg="white"
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <VStack align="stretch" gap={4}>
            <Heading as="h3" color="brand.primary" fontWeight="normal">
              Contact Information
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
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
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: 4, md: 6 }}>
              <PhoneField
                label="Phone"
                value={values.phone}
                onChange={(v) => handleChange("phone", v)}
                errorMessage={errors.phone}
                isRequired
              />

              <PhoneField
                label="Work Phone"
                value={values.workPhone}
                onChange={(v) => handleChange("workPhone", v)}
                errorMessage={errors.workPhone}
              />

              <PhoneField
                label="Home Phone"
                value={values.homePhone}
                onChange={(v) => handleChange("homePhone", v)}
                errorMessage={errors.homePhone}
              />

              <PhoneField
                label="Cell Phone"
                value={values.cellPhone}
                onChange={(v) => handleChange("cellPhone", v)}
                errorMessage={errors.cellPhone}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <Box
            bg="brand.white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.100"
          >
            <VStack align="stretch" gap={4}>
              <Heading as="h3" color="brand.primary" fontWeight="normal">
                Move - Drop date and time
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
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
                  placeholder={timeOptions?.[0]?.label}
                  options={timeOptions}
                  value={values.moveTime}
                  onValueChange={(d) => handleChange("moveTime", d.value[0])}
                />
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                <DateInput
                  label="Drop Date"
                  variant="future-only"
                  placeholder="Drop Date"
                  value={values.dropDate}
                  onChange={(e) => handleChange("dropDate", e.target.value)}
                />
                <SelectField
                  label="Drop Time"
                  placeholder={timeOptions?.[0]?.label}
                  options={timeOptions}
                  value={values.dropTime}
                  onValueChange={(d) => handleChange("dropTime", d.value[0])}
                />
              </SimpleGrid>
            </VStack>
          </Box>

          {/* RIGHT */}
          <Box
            bg="brand.white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.200"
          >
            <VStack align="stretch" gap={4}>
              <Heading as="h3" color="brand.primary" fontWeight="normal">
                Move Type
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                <SelectField
                  label="Move Type"
                  options={moveSizeOptions}
                  placeholder={moveSizeOptions?.[0]?.label}
                  value={values.moveType}
                  onValueChange={(d) => handleChange("moveType", d.value[0])}
                />
                <SelectField
                  label="How did you hear about MoveCo.Net?"
                  options={hearAboutOptions}
                  placeholder={hearAboutOptions?.[0]?.label}
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
          bg="brand.white"
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <VStack align="stretch" gap={4}>
            <Heading as="h3" color="brand.primary" fontWeight="normal">
              Move Location
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
              <InputField
                label="From Address"
                type="alphanumeric"
                placeholder="From Address"
                value={values.fromAddress}
                onChange={(e) => handleChange("fromAddress", e.target.value)}
              />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                <InputField
                  label="Apt / Suite / Other"
                  placeholder="Apt / Suite / Other"
                  type="alphanumeric"
                  value={values.fromApt}
                  onChange={(e) => handleChange("fromApt", e.target.value)}
                />
                <InputField
                  label="City"
                  placeholder="City"
                  type="alphanumeric"
                  value={values.fromCity}
                  onChange={(e) => handleChange("fromCity", e.target.value)}
                />
              </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: 4, md: 6 }} alignItems="end">
              <SelectField
                label="State"
                placeholder={stateOptions?.[0]?.label}
                value={values.fromState}
                onValueChange={(e) => handleChange("fromState", e.value[0])}
                options={stateOptions}
              />
              <InputField
                label="Zip Code"
                placeholder="Zip Code"
                type="number"
                value={values.fromZipCode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 5);
                  handleChange("fromZipCode", value);
                }}
                errorMessage={errors.fromZipCode}
                isRequired
              />

              <SelectField
                label="How many flights of stairs at this address?"
                placeholder={stairsOptions?.[0]?.label}
                options={stairsOptions}
                value={values.fromStairs}
                onValueChange={(d) => handleChange("fromStairs", d.value[0])}
              />
              <SelectField
                label="Door to truck at this address?"
                placeholder={doortoTruckOptions?.[0]?.label}
                options={doortoTruckOptions}
                value={values.fromDistance}
                onValueChange={(d) => handleChange("fromDistance", d.value[0])}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        {/* ================= DROP LOCATION ================= */}
        <Box
          bg="brand.white"
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <VStack align="stretch" gap={4}>
            <Heading as="h3" color="brand.primary" fontWeight="normal">
              Drop Location
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
              <InputField
                label="To Address"
                placeholder="To Address"
                type="alphanumeric"
                value={values.toAddress}
                onChange={(e) => handleChange("toAddress", e.target.value)}
              />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                <InputField
                  label="Apt / Suite / Other"
                  placeholder="Apt / Suite / Other"
                  type="alphanumeric"
                  value={values.toApt}
                  onChange={(e) => handleChange("toApt", e.target.value)}
                />
                <InputField
                  label="City"
                  placeholder="City"
                  type="alphanumeric"
                  value={values.toCity}
                  onChange={(e) => handleChange("toCity", e.target.value)}
                />
              </SimpleGrid>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: 4, md: 6 }} alignItems="end">
              <SelectField
                label="State"
                placeholder={stateOptions?.[0]?.label}
                value={values.toState}
                onValueChange={(e) => handleChange("toState", e.value[0])}
                options={stateOptions}
              />
              <InputField
                label="Zip Code"
                placeholder="Zip Code"
                type="number"
                value={values.toZipCode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 5);
                  handleChange("toZipCode", value);
                }}
                errorMessage={errors.toZipCode}
                isRequired
              />

              <SelectField
                label="How many flights of stairs at this address?"
                placeholder={stairsOptions?.[0]?.label}
                options={stairsOptions}
                value={values.toStairs}
                onValueChange={(d) => handleChange("toStairs", d.value[0])}
              />
              <SelectField
                label="Truck to Door at this address?"
                placeholder={doortoTruckOptions?.[0]?.label}
                options={doortoTruckOptions}
                value={values.toDistance}
                onValueChange={(d) => handleChange("toDistance", d.value[0])}
              />
            </SimpleGrid>
          </VStack>
        </Box>

        <Box textAlign={{ base: "center", md: "right" }}>
          <Button label="Next" variant="primary" onClick={handleSubmit} />
        </Box>
      </Stack>
    </Container>
  );
};

export default MoveInformation;

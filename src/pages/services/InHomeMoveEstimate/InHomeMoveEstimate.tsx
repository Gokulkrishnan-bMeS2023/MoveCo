// import { useEffect, useState } from "react";
// import {
//   Box,
//   Image,
//   Container,
//   Heading,
//   Stack,
//   Text,
//   SimpleGrid,
//   Flex,
// } from "@chakra-ui/react";
// import InputField from "../../../components/common/Input/Input";
// import Notes from "../../../components/common/Notes/Notes";
// import DateInput from "../../../components/common/DateInput/DateInput";
// import Button from "../../../components/common/Button/Button";
// import SelectField from "../../../components/common/Select/Select";
// import { useNavigate } from "react-router-dom";
// import type { MoveEstimateFormValues, MoveEstimateErrors } from "./DTOs";
// import { validateMoveEstimate } from "./validation";
// import { images } from "../../../assets";
// import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
// import { postInHomeEstimate } from "../../../api/inhomeMoveEstimateService";
// import { getMoveSizes, getTimeSlots, getHearAbout, getStates } from "../../../api/statciDataService";


// const InHomeMoveEstimate = () => {
//   const navigate = useNavigate();
//   const [moveSizeOptions, setMoveSizeOptions] = useState<any[]>([]);
//   const [timeOptions, setTimeOptions] = useState<any[]>([]);
//   const [hearAboutOptions, setHearAboutOptions] = useState<any[]>([]);
//   const [stateOptions, setStateOptions] = useState<any[]>([]);

//   const [values, setValues] = useState<MoveEstimateFormValues>({
//     visitDate: "",
//     visitTime: "",
//     moveDate: "",
//     moveSize: "",
//     hearAbout: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     homePhone: "",
//     cellPhone: "",
//     workPhone: "",
//     faxPhone: "",
//     fromAddress: "",
//     apt: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     notes: "",

//   });

//   const [errors, setErrors] = useState<MoveEstimateErrors>({});

//   /* ---------- LOAD STATIC DATA ---------- */
//   useEffect(() => {
//     getMoveSizes().then(setMoveSizeOptions);
//     getTimeSlots().then(setTimeOptions);
//     getHearAbout().then(setHearAboutOptions);
//     getStates().then(setStateOptions);
//   }, []);

//   const handleChange = (field: keyof MoveEstimateFormValues, value: string) => {
//     setValues(prev => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: "" }));
//     }
//   };

//   /* ---------- SUBMIT ---------- */
// //   const handleSubmit = async () => {
// //     const newErrors = validateMoveEstimate(values);
// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors);
// //       return;
// //     }
// // const stripPhone = (v: string) => v.replace(/\D/g, "");
// //     const payload = {
// //   inHomeEstimateDate: new Date(values.visitDate).toISOString(),
// //   inHomeEstimateTimeRange: values.visitTime,
// //   moveDate: new Date(values.moveDate).toISOString(),
// //   moveSize: values.moveSize,
// //   referredBy: values.hearAbout,
// //   firstName: values.firstName,
// //   lastName: values.lastName,
// //   email: values.email,

// //   fromAddress: values.fromAddress,
// //   address2: values.apt,
// //   city: values.city,  // ✅ HERE IS THE FIX
// //   homePhone: stripPhone(values.homePhone),
// //   cellPhone: stripPhone(values.cellPhone),
// //   workPhone: stripPhone(values.workPhone),
// //   faxPhone: stripPhone(values.faxPhone),
// //   state: values.state,
// //   zipCode: values.zipCode,
// //   additionalInfo: values.notes,
// //   quoteId: 0,
// // };


// //     try {
// //   await postInHomeEstimate(payload);
// //   alert("Form submitted successfully!");
// // } catch (error: any) {
// //   console.error("API Error:", error.response?.data);
// //   alert(error.response?.data?.message || "Something went wrong");
// // }
// //   }
// const handleSubmit = async () => {
//   const clientErrors = validateMoveEstimate(values);
//   if (Object.keys(clientErrors).length > 0) {
//     setErrors(clientErrors);
//     return;
//   }
// const formatForApi = (v: string) => {
//   const digits = v.replace(/\D/g, "");
//   if (digits.length !== 10) return "";
//   return `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
// };
//   const normalizePhone = (v: string) => v.replace(/\D/g, "");

//   const homePhone = normalizePhone(values.homePhone);
//   const cellPhone = normalizePhone(values.cellPhone);
//   const workPhone = normalizePhone(values.workPhone);
//   const faxPhone = normalizePhone(values.faxPhone);

//   // 🔴 extra safety: must be 10 digits
//   if (homePhone.length !== 10) {
//     setErrors({ homePhone: "Enter valid 10 digit phone number" });
//     return;
//   }

//   const payload = {
//   inHomeEstimateDate: values.visitDate
//     ? new Date(values.visitDate).toISOString()
//     : "",

//   inHomeEstimateTimeRange: values.visitTime,

//   moveDate: values.moveDate
//     ? new Date(values.moveDate).toISOString()
//     : "",

//   moveSize: values.moveSize,
//   referredBy: values.hearAbout,

//   firstName: values.firstName,
//   lastName: values.lastName,
//   email: values.email,

//   homePhone: formatForApi(values.homePhone),
//   cellPhone: formatForApi(values.cellPhone),
//   workPhone: formatForApi(values.workPhone),
//   faxPhone: formatForApi(values.faxPhone),

//   fromAddress: values.fromAddress,
//   address2: values.apt,
//   city: values.city,
//   state: values.state,
//   zipCode: values.zipCode,

//   additionalInfo: values.notes,
//   quoteId: 0,
// };

//   console.log("PAYLOAD:", payload);

//   try {
//     await postInHomeEstimate(payload);
//     alert("Form submitted successfully!");
//     setErrors({});
//   } catch (error: any) {
//     console.error("API Error Response:", error.response?.data);

//     if (error.response?.status === 400 && error.response?.data?.errors) {
//       const serverErrors = error.response.data.errors;
//       const newMappedErrors: MoveEstimateErrors = {};

//       if (serverErrors.HomePhone)
//         newMappedErrors.homePhone = serverErrors.HomePhone[0];
//       if (serverErrors.CellPhone)
//         newMappedErrors.cellPhone = serverErrors.CellPhone[0];
//       if (serverErrors.Email)
//         newMappedErrors.email = serverErrors.Email[0];
//       if (serverErrors.FirstName)
//         newMappedErrors.firstName = serverErrors.FirstName[0];
//       if (serverErrors.LastName)
//         newMappedErrors.lastName = serverErrors.LastName[0];

//       setErrors(newMappedErrors);
//     } else {
//       alert(error.response?.data?.title || "Something went wrong");
//     }
//   }
// };
//   return (
//     <Container>
//       <Flex
//         direction={{ base: "column", lg: "row" }}
//         align="center"
//         justify="space-between"
//         gap={{ base: 4, lg: 10 }}
//         mb={{ base: 4, lg: 6 }}
//       >
//         <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{ base: "center", lg: "left" }}>
//           In-Home
//           <Text as="span" color="brand.primary">
//             Move Estimate
//           </Text>
//         </Heading>
//         <Text textStyle="size-xl" maxW={{ lg: "45%" }} textAlign={{ base: "center", lg: "right" }}>
//           All information will not be released to any other person or company,
//           please read our{" "}
//           <Text
//             as="span"
//             color="brand.primary"
//             textDecoration="underline"
//             cursor="pointer"
//             _hover={{ opacity: 0.8 }}
//             onClick={() => navigate("/privacy-policy")}
//           >
//             privacy policy
//           </Text>
//           .{" "}
//           <Text as="span" fontWeight="500">
//             Be sure to ask about our packing services!
//           </Text>
//         </Text>
//       </Flex>

//       <SimpleGrid
//         columns={{ base: 1, lg: 2 }}
//         alignItems="center"
//         gap={{ base: 4, lg: 16 }}>
//         <Box w="100%">
//           <Image
//             src={images.inHomeMove}
//             alt="footprint"
//             w="100%"
//             h="auto"
//             borderRadius="2xl"
//             loading="eager"
//             fetchPriority="high"
//           />
//         </Box>

//         <Text textStyle="size-3xl" textAlign={{ base: "center", lg: "left" }} >
//           After filling out this form, an appointment will be made to have a
//           real, live person come out and estimate your move costs. This is a
//           free service, and is perfect for individuals who are unsure as to
//           how items can and will be moved.
//         </Text>
//       </SimpleGrid>
//       <Box pt="sectionTop">
//         <Stack gap={8}>
//           <Box
//             bg="brand.white"
//             p={{ base: 6, md: 8 }}
//             borderRadius="2xl"
//             boxShadow="lg"
//           >
//             <Stack gap={4}>
//               <Heading as="h3" fontWeight="normal" color="brand.primary">
//                 General Information
//               </Heading>

//               <Text textStyle="size-md" color="brand.secondary">
//                 Which date and time is convenient for one of our trained
//                 professional estimators to come out and visit you?
//               </Text>
//               <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
//                 <DateInput
//                   label="Date"
//                   variant="future-only"
//                   value={values.visitDate}
//                   onChange={(e) => handleChange("visitDate", e.target.value)}
//                   isRequired
//                   errorMessage={errors.visitDate}
//                 />


//                 <SelectField
//                   label="Preferred Time"
//                   options={timeOptions}
//                   value={values.visitTime}
//                   onValueChange={(e) => handleChange("visitTime", e.value[0])}
//                   isRequired
//                   errorMessage={errors.visitTime}
//                 />

//               </SimpleGrid>
//               <DateInput
//                 label="On which date are you planning on moving?"
//                 value={values.moveDate}
//                 onChange={(e) => handleChange("moveDate", e.target.value)}
//                 isRequired
//                 errorMessage={errors.moveDate}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
//                 <SelectField
//                   label="What do you estimate your move size to be?"
//                   options={moveSizeOptions}
//                   value={values.moveSize}
//                   onValueChange={(e) => handleChange("moveSize", e.value[0])}
//                   isRequired
//                   errorMessage={errors.moveSize}
//                 />
//                 <SelectField
//                   label="How did you hear about MoveCo.net?"
//                   options={hearAboutOptions}
//                   value={values.hearAbout}
//                   onValueChange={(e) => handleChange("hearAbout", e.value[0])}
//                   errorMessage={errors.hearAbout}
//                 />

//               </SimpleGrid>
//             </Stack>
//           </Box>

//           <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
//             <Box
//               bg="brand.white"
//               p={{ base: 6, md: 8 }}
//               borderRadius="2xl"
//               boxShadow="lg"
//             >
//               <Stack gap={4}>
//                 <Heading as="h3" fontWeight="normal" color="brand.primary">
//                   Contact Information
//                 </Heading>

//                 <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
//                   <InputField
//                     label="First Name"
//                     placeholder="First Name"
//                     value={values.firstName}
//                     onChange={(e) => handleChange("firstName", e.target.value)}
//                     isRequired
//                     errorMessage={errors.firstName}
//                   />

//                   <InputField
//                     label="Last Name"
//                     placeholder="Last Name"
//                     value={values.lastName}
//                     onChange={(e) => handleChange("lastName", e.target.value)}
//                     isRequired
//                     errorMessage={errors.lastName}
//                   />
//                 </SimpleGrid>

//                 <InputField
//                   label="Email"
//                   placeholder="Email"
//                   type="email"
//                   value={values.email}
//                   onChange={(e) => handleChange("email", e.target.value)}
//                   isRequired
//                   errorMessage={errors.email}
//                 />

//                 <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
//                   <PhoneField
//                     label="Home Phone"
//                     value={values.homePhone}
//                     onChange={(digits) => handleChange("homePhone", digits)}
//                     isRequired
//                     errorMessage={errors.homePhone}
//                   />
//                   <PhoneField
//                     label="Cell Phone"
//                     value={values.cellPhone}
//                     onChange={(digits) => handleChange("cellPhone", digits)}
//                     errorMessage={errors.cellPhone}
//                   />
//                 </SimpleGrid>

//                 <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
//                   <PhoneField
//                     label="Work Phone"
//                     value={values.workPhone}
//                     onChange={(digits) => handleChange("workPhone", digits)}
//                     errorMessage={errors.workPhone}
//                   />
//                   <PhoneField
//                     label="Fax Phone"
//                     value={values.faxPhone}
//                     onChange={(digits) => handleChange("faxPhone", digits)}
//                     errorMessage={errors.faxPhone}
//                   />
//                 </SimpleGrid>
//               </Stack>
//             </Box>

//             <Box
//               bg="brand.white"
//               p={{ base: 6, md: 8 }}
//               borderRadius="2xl"
//               boxShadow="lg"
//             >

//               <Stack gap={4}>
//                 <Heading as="h3" fontWeight="normal" color="brand.primary">
//                   Move Location
//                 </Heading>
//                 <InputField
//                   label="From Address"
//                   placeholder="From Address"
//                   value={values.fromAddress}
//                   onChange={(e) => handleChange("fromAddress", e.target.value)}
//                   isRequired
//                   errorMessage={errors.fromAddress}
//                 />

//                 <InputField
//                   label="Apt / Suite / Other"
//                   placeholder="Apt / Suite / Other"
//                   value={values.apt}
//                   onChange={(e) => handleChange("apt", e.target.value)}
//                 />

//                 <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
//                   <InputField
//                     label="City"
//                     placeholder="City"
//                     value={values.city}
//                     onChange={(e) => handleChange("city", e.target.value)}
//                     isRequired
//                     errorMessage={errors.city}
//                   />
//                   <SelectField
//                     label="State"
//                     options={stateOptions}
//                     value={values.state}
//                     onValueChange={(e) => handleChange("state", e.value[0])}
//                     isRequired
//                     errorMessage={errors.state}
//                   />


//                   <InputField
//                     label="Zip Code"
//                     placeholder="Zip Code"
//                     type="number"
//                     value={values.zipCode}
//                     isRequired
//                     onChange={(e) =>
//                       handleChange(
//                         "zipCode",
//                         e.target.value.replace(/\D/g, "").slice(0, 5),
//                       )
//                     }
//                   />
//                 </SimpleGrid>

//                 <Notes
//                   label="Additional Information"
//                   placeholder="Specify and additional notes here"
//                   value={values.notes}
//                   onChange={(value) => handleChange("notes", value)}
//                 />
//               </Stack>
//             </Box>
//           </SimpleGrid>

//           <Box textAlign={{ base: "center", md: "right" }}>
//             <Button
//               label="Send"
//               variant="primary"
//               px="16"
//               onClick={handleSubmit}
//             />
//           </Box>
//         </Stack>
//       </Box>
//     </Container>
//   );
// };

// export default InHomeMoveEstimate;









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
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import { useNavigate } from "react-router-dom";
import { images } from "../../../assets";
import { useInHomeEstimateForm } from "./useInHomeMoveEstimate";

const InHomeMoveEstimate = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, moveSizeOptions, timeOptions, hearAboutOptions, stateOptions, } = useInHomeEstimateForm();

  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 4, lg: 10 }}
        mb={{ base: 4, lg: 6 }}
      >
        <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{ base: "center", lg: "left" }}>
          In-Home
          <Text as="span" color="brand.primary">
            Move Estimate
          </Text>
        </Heading>
        <Text textStyle="size-xl" maxW={{ lg: "45%" }} textAlign={{ base: "center", lg: "right" }}>
          All information will not be released to any other person or company,
          please read our{" "}
          <Text
            as="span"
            color="brand.primary"
            textDecoration="underline"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/privacy-policy")}
          >
            privacy policy
          </Text>
          .{" "}
          <Text as="span" fontWeight="500">
            Be sure to ask about our packing services!
          </Text>
        </Text>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        alignItems="center"
        gap={{ base: 4, lg: 16 }}>
        <Box w="100%">
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

        <Text textStyle="size-3xl" textAlign={{ base: "center", lg: "left" }} >
          After filling out this form, an appointment will be made to have a
          real, live person come out and estimate your move costs. This is a
          free service, and is perfect for individuals who are unsure as to
          how items can and will be moved.
        </Text>
      </SimpleGrid>
      <Box pt="sectionTop">
        <Stack gap={8}>
          <Box
            bg="brand.white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
          >
            <Stack gap={4}>
              <Heading as="h3" fontWeight="normal" color="brand.primary">
                General Information
              </Heading>

              <Text textStyle="size-md" color="brand.secondary">
                Which date and time is convenient for one of our trained
                professional estimators to come out and visit you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
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
                  options={timeOptions}
                  value={values.visitTime}
                  onValueChange={(e) => handleChange("visitTime", e.value[0])}
                  isRequired
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
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                <SelectField
                  label="What do you estimate your move size to be?"
                  options={moveSizeOptions}
                  value={values.moveSize}
                  onValueChange={(e) => handleChange("moveSize", e.value[0])}
                  isRequired
                  errorMessage={errors.moveSize}
                />
                <SelectField
                  label="How did you hear about MoveCo.net?"
                  options={hearAboutOptions}
                  value={values.hearAbout}
                  onValueChange={(e) => handleChange("hearAbout", e.value[0])}
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
              <Stack gap={4}>
                <Heading as="h3" fontWeight="normal" color="brand.primary">
                  Contact Information
                </Heading>

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

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
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

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
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

              <Stack gap={4}>
                <Heading as="h3" fontWeight="normal" color="brand.primary">
                  Move Location
                </Heading>
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

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
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
                    isRequired
                    onChange={(e) =>
                      handleChange(
                        "zipCode",
                        e.target.value.replace(/\D/g, "").slice(0, 5),
                      )
                    }
                    errorMessage={errors.zipCode}
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
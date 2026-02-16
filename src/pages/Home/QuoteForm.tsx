// // // // import { Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
// // // // import QuoteFormImage from "../../assets/quote-form-image.webp";
// // // // import { useNavigate } from "react-router-dom";
// // // // import type { QuoteFormDTO } from "./DTOs";
// // // // import { validateQuoteForm } from "./validation";
// // // // import { useState } from "react";
// // // // import DateInput from "../../components/common/DateInput/DateInput";
// // // // import InputField from "../../components/common/Input/Input";
// // // // import RadioField from "../../components/common/Radio/Radio";
// // // // import Button from "../../components/common/Button/Button";
 
// // // // const QuoteForm = () => {
// // // //   const navigate = useNavigate();
// // // //   const [formData, setFormData] = useState<QuoteFormDTO>({
// // // //     firstName: "",
// // // //     lastName: "",
// // // //     date: "",
// // // //     phoneNumber: "",
// // // //     email: "",
// // // //     estimate: "",
// // // //   });

// // // //   const [errors, setErrors] = useState<
// // // //     Partial<Record<keyof QuoteFormDTO, string>>
// // // //   >({});

// // // //   const handleChange = (field: keyof QuoteFormDTO, value: string) => {
// // // //     setFormData((prev) => ({ ...prev, [field]: value }));

// // // //     if (errors[field]) {
// // // //       setErrors((prev) => ({ ...prev, [field]: "" }));
// // // //     }
// // // //   };

// // // //   const handleSubmit = () => {
// // // //     const validationErrors = validateQuoteForm(formData);

// // // //     if (Object.keys(validationErrors).length > 0) {
// // // //       setErrors(validationErrors);
// // // //       return;
// // // //     }

// // // //     setErrors({});
// // // //     navigate("/move-information");
// // // //   };
// // // //   // const [submitted, setSubmitted] = useState(false);
 
// // // //   return (
// // // //     <Box>
// // // //       <Image src={QuoteFormImage} alt="Quote Form" w="100%" rounded="2xl" />
// // // //       <Box bg="brand.white" p={6} mt={4} rounded="2xl">
// // // //         <Heading fontSize="xl" textAlign="center" fontWeight="medium" mb={4}>
// // // //           Get a Moving{" "}
// // // //           <Text as="span" color="brand.primary">
// // // //             Quote
// // // //           </Text>
// // // //         </Heading>
 
// // // //         <Stack gap={2}>
// // // //             <InputField
// // // //               label="First Name"
// // // //               onChange={(e) => handleChange("firstName", e.target.value)}
// // // //               placeholder="First Name"
// // // //               isRequired
// // // //               errorMessage={errors.firstName}
// // // //             />
// // // //             <InputField
// // // //               label="Last Name"
// // // //               onChange={(e) => handleChange("lastName", e.target.value)}
// // // //               placeholder="Last Name"
// // // //               isRequired
// // // //               errorMessage={errors.lastName}
// // // //             />
// // // //             <DateInput
// // // //               label="Date"
// // // //               variant="future-only"
// // // //               onChange={(e) => handleChange("date", e.target.value)}
// // // //               isRequired
// // // //               errorMessage={errors.date}
// // // //             />
// // // //           <InputField
// // // //             label="Phone Number"
// // // //             onChange={(e) => handleChange("phoneNumber", e.target.value)}
// // // //             placeholder="Phone"
// // // //             isRequired
// // // //             errorMessage={errors.phoneNumber}
// // // //           />
// // // //             <InputField
// // // //               label="Email"
// // // //               onChange={(e) => handleChange("email", e.target.value)}
// // // //               placeholder="Email"
// // // //               isRequired
// // // //               errorMessage={errors.email}
// // // //             />
// // // //           <RadioField
// // // //             options={[
// // // //               {
// // // //                 label: "Instant Online Estimate",
// // // //                 value: "Instant Online Estimate",
// // // //               },
// // // //               {
// // // //                 label: "In-Home Move Estimate",
// // // //                 value: "In-Home Move Estimate",
// // // //               },
// // // //               { label: "Request a call back", value: "Request a call back" },
// // // //             ]}
        
// // // //             onValueChange={(val) => handleChange("estimate", val)}
// // // //             isRequired
// // // //             errorMessage={errors.estimate}
// // // //           />
// // // //           <Button variant="primary" label="Next" onClick={handleSubmit} />
// // // //         </Stack>
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // };
 
// // // // export { QuoteForm };







// // // import { Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
// // // import QuoteFormImage from "../../assets/quote-form-image.webp";
// // // import { useNavigate } from "react-router-dom";
// // // import type { QuoteFormDTO } from "./DTOs";
// // // import { validateQuoteForm } from "./validation";
// // // import { useState } from "react";
// // // import DateInput from "../../components/common/DateInput/DateInput";
// // // import InputField from "../../components/common/Input/Input";
// // // import RadioField from "../../components/common/Radio/Radio";
// // // import Button from "../../components/common/Button/Button";

// // // const QuoteForm = () => {
// // //   const navigate = useNavigate();

// // //   const [formData, setFormData] = useState<QuoteFormDTO>({
// // //     firstName: "",
// // //     lastName: "",
// // //     date: "",
// // //     phoneNumber: "",
// // //     email: "",
// // //     estimate: "",
// // //   });

// // //   const [errors, setErrors] = useState<
// // //     Partial<Record<keyof QuoteFormDTO, string>>
// // //   >({});

// // //   const handleChange = (field: keyof QuoteFormDTO, value: string) => {
// // //     setFormData((prev) => ({ ...prev, [field]: value }));
// // //     if (errors[field]) {
// // //       setErrors((prev) => ({ ...prev, [field]: "" }));
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     const validationErrors = validateQuoteForm(formData);

// // //     if (Object.keys(validationErrors).length > 0) {
// // //       setErrors(validationErrors);
// // //       return;
// // //     }

// // //     setErrors({});

// // //     // 👇 radio value base pannitu navigate
// // //     if (formData.estimate === "Instant Online Estimate") {
// // //       navigate("/move-information", { state: formData });
// // //     } else if (formData.estimate === "In-Home Move Estimate") {
// // //       navigate("/InHomeMoveEstimate", { state: formData });
// // //     } else if (formData.estimate === "Request a call back") {
// // //       navigate("/contact-us", { state: formData });
// // //     }
// // //   };

// // //   return (
// // //     <Box>
// // //       <Image src={QuoteFormImage} alt="Quote Form" w="100%" rounded="2xl" />

// // //       <Box bg="brand.white" p={6} mt={4} rounded="2xl">
// // //         <Heading fontSize="xl" textAlign="center" fontWeight="medium" mb={4}>
// // //           Get a Moving{" "}
// // //           <Text as="span" color="brand.primary">
// // //             Quote
// // //           </Text>
// // //         </Heading>

// // //         <Stack gap={2}>
// // //           <InputField
// // //             label="First Name"
// // //             value={formData.firstName}
// // //             onChange={(e) => handleChange("firstName", e.target.value)}
// // //             placeholder="First Name"
// // //             isRequired
// // //             errorMessage={errors.firstName}
// // //           />

// // //           <InputField
// // //             label="Last Name"
// // //             value={formData.lastName}
// // //             onChange={(e) => handleChange("lastName", e.target.value)}
// // //             placeholder="Last Name"
// // //             isRequired
// // //             errorMessage={errors.lastName}
// // //           />

// // //           <DateInput
// // //             label="Date"
// // //             value={formData.date}
// // //             variant="future-only"
// // //             onChange={(e) => handleChange("date", e.target.value)}
// // //             isRequired
// // //             errorMessage={errors.date}
// // //           />

// // //           <InputField
// // //             label="Phone Number"
// // //             value={formData.phoneNumber}
// // //             onChange={(e) => handleChange("phoneNumber", e.target.value)}
// // //             placeholder="Phone"
// // //             isRequired
// // //             errorMessage={errors.phoneNumber}
// // //           />

// // //           <InputField
// // //             label="Email"
// // //             value={formData.email}
// // //             onChange={(e) => handleChange("email", e.target.value)}
// // //             placeholder="Email"
// // //             isRequired
// // //             errorMessage={errors.email}
// // //           />

// // //           <RadioField
// // //             options={[
// // //               { label: "Instant Online Estimate", value: "Instant Online Estimate" },
// // //               { label: "In-Home Move Estimate", value: "In-Home Move Estimate" },
// // //               { label: "Request a call back", value: "Request a call back" },
// // //             ]}
// // //             value={formData.estimate}
// // //             onValueChange={(val) => handleChange("estimate", val)}
// // //             isRequired
// // //             errorMessage={errors.estimate}
// // //           />

// // //           <Button variant="primary" label="Next" onClick={handleSubmit} />
// // //         </Stack>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export { QuoteForm };








// // import { Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
// // import QuoteFormImage from "../../assets/quote-form-image.webp";
// // import { useNavigate, useSearchParams } from "react-router-dom";
// // import type { QuoteFormDTO } from "./DTOs";
// // import { validateQuoteForm } from "./validation";
// // import { useState, useEffect } from "react";
// // import DateInput from "../../components/common/DateInput/DateInput";
// // import InputField from "../../components/common/Input/Input";
// // import RadioField from "../../components/common/Radio/Radio";
// // import Button from "../../components/common/Button/Button";

// // const QuoteForm = () => {
// //   const navigate = useNavigate();
// //   const [searchParams] = useSearchParams();

// //   const [formData, setFormData] = useState<QuoteFormDTO>({
// //     firstName: "",
// //     lastName: "",
// //     date: "",
// //     phoneNumber: "",
// //     email: "",
// //     estimate: "",
// //   });

// //   const [errors, setErrors] = useState<
// //     Partial<Record<keyof QuoteFormDTO, string>>
// //   >({});

// //   // 1. URL-la irunthu data-va yeduthu form-la fill panna useEffect
// //   useEffect(() => {
// //     const urlData: any = {};
// //     let hasParams = false;

// //     searchParams.forEach((value, key) => {
// //       urlData[key] = value;
// //       hasParams = true;
// //     });

// //     if (hasParams) {
// //       setFormData((prev) => ({ ...prev, ...urlData }));
// //     }
// //   }, [searchParams]);

// //   const handleChange = (field: keyof QuoteFormDTO, value: string) => {
// //     setFormData((prev) => ({ ...prev, [field]: value }));
// //     if (errors[field]) {
// //       setErrors((prev) => ({ ...prev, [field]: "" }));
// //     }
// //   };

// //   const handleSubmit = () => {
// //     const validationErrors = validateQuoteForm(formData);

// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       return;
// //     }

// //     setErrors({});

// //     // 2. Data-va Query String-ah mathurathu
// //     const params = new URLSearchParams();
// //     Object.entries(formData).forEach(([key, value]) => {
// //       params.append(key, value);
// //     });

// //     const queryString = params.toString();

// //     // 3. Dynamic Navigation logic based on Radio selection
// //     if (formData.estimate === "Instant Online Estimate") {
// //       navigate(`/move-information?${queryString}`);
// //     } else if (formData.estimate === "In-Home Move Estimate") {
// //       navigate(`/InHomeMoveEstimate?${queryString}`);
// //     } else if (formData.estimate === "Request a call back") {
// //       navigate(`/contact-us?${queryString}`);
// //     }
// //   };

// //   return (
// //     <Box>
// //       <Image src={QuoteFormImage} alt="Quote Form" w="100%" rounded="2xl" />

// //       <Box bg="brand.white" p={6} mt={4} rounded="2xl">
// //         <Heading fontSize="xl" textAlign="center" fontWeight="medium" mb={4}>
// //           Get a Moving{" "}
// //           <Text as="span" color="brand.primary">
// //             Quote
// //           </Text>
// //         </Heading>

// //         <Stack gap={2}>
// //           <InputField
// //             label="First Name"
// //             value={formData.firstName}
// //             onChange={(e) => handleChange("firstName", e.target.value)}
// //             placeholder="First Name"
// //             isRequired
// //             errorMessage={errors.firstName}
// //           />

// //           <InputField
// //             label="Last Name"
// //             value={formData.lastName}
// //             onChange={(e) => handleChange("lastName", e.target.value)}
// //             placeholder="Last Name"
// //             isRequired
// //             errorMessage={errors.lastName}
// //           />

// //           <DateInput
// //             label="Date"
// //             value={formData.date}
// //             variant="future-only"
// //            onChange={(e) => handleChange("date", e.target.value)}
// //             isRequired
// //             errorMessage={errors.date}
// //           />

// //           <InputField
// //             label="Phone Number"
// //             value={formData.phoneNumber}
// //             onChange={(e) => handleChange("phoneNumber", e.target.value)}
// //             placeholder="Phone"
// //             isRequired
// //             errorMessage={errors.phoneNumber}
// //           />

// //           <InputField
// //             label="Email"
// //             value={formData.email}
// //             onChange={(e) => handleChange("email", e.target.value)}
// //             placeholder="Email"
// //             isRequired
// //             errorMessage={errors.email}
// //           />

// //           <RadioField
// //             options={[
// //               { label: "Instant Online Estimate", value: "Instant Online Estimate" },
// //               { label: "In-Home Move Estimate", value: "In-Home Move Estimate" },
// //               { label: "Request a call back", value: "Request a call back" },
// //             ]}
// //             value={formData.estimate}
// //             onValueChange={(val) => handleChange("estimate", val)}
// //             isRequired
// //             errorMessage={errors.estimate}
// //           />

// //           <Button variant="primary" label="Next" onClick={handleSubmit} />
// //         </Stack>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export { QuoteForm };







// import { Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
// import QuoteFormImage from "../../assets/quote-form-image.webp";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import type { QuoteFormDTO } from "./DTOs";
// import { validateQuoteForm } from "./validation";
// import { useState, useEffect } from "react";
// import DateInput from "../../components/common/DateInput/DateInput";
// import InputField from "../../components/common/Input/Input";
// import RadioField from "../../components/common/Radio/Radio";
// import Button from "../../components/common/Button/Button";

// const QuoteForm = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   // Initial State
//   const [formData, setFormData] = useState<QuoteFormDTO>({
//     firstName: "",
//     lastName: "",
//     date: "",
//     phoneNumber: "",
//     email: "",
//     estimate: "",
//   });

//   const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormDTO, string>>>({});

//   // ✅ 1. Back button press pannumpo URL-la irunthu data-va yeduthu form-la set pannum
//   useEffect(() => {
//     const urlData: any = {};
//     let hasData = false;

//     searchParams.forEach((value, key) => {
//       urlData[key] = value;
//       hasData = true;
//     });

//     if (hasData) {
//       setFormData((prev) => ({ ...prev, ...urlData }));
//     }
//   }, [searchParams]);

//   const handleChange = (field: keyof QuoteFormDTO, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   const handleSubmit = () => {
//     const validationErrors = validateQuoteForm(formData);

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setErrors({});

//     // ✅ 2. Data-va Query Parameters-ah mathurathu
//     const params = new URLSearchParams();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value) params.append(key, value);
//     });

//     const queryString = params.toString();

//     // ✅ 3. Radio selection base panni navigate + Query Params attach pannuvom
//     if (formData.estimate === "Instant Online Estimate") {
//       navigate(`/move-information?${queryString}`);
//     } else if (formData.estimate === "In-Home Move Estimate") {
//       navigate(`/InHomeMoveEstimate?${queryString}`);
//     } else if (formData.estimate === "Request a call back") {
//       navigate(`/contact-us?${queryString}`);
//     }
//   };

//   return (
//     <Box>
//       <Image src={QuoteFormImage} alt="Quote Form" w="100%" rounded="2xl" />

//       <Box bg="brand.white" p={6} mt={4} rounded="2xl">
//         <Heading fontSize="xl" textAlign="center" fontWeight="medium" mb={4}>
//           Get a Moving <Text as="span" color="brand.primary">Quote</Text>
//         </Heading>

//         <Stack gap={2}>
//           <InputField
//             label="First Name"
//             value={formData.firstName} // 👈 Mukkiyamaana vishayam: 'value' prop irukkanum
//             onChange={(e) => handleChange("firstName", e.target.value)}
//             placeholder="First Name"
//             isRequired
//             errorMessage={errors.firstName}
//           />

//           <InputField
//             label="Last Name"
//             value={formData.lastName}
//             onChange={(e) => handleChange("lastName", e.target.value)}
//             placeholder="Last Name"
//             isRequired
//             errorMessage={errors.lastName}
//           />

//           <DateInput
//             label="Date"
//             value={formData.date}
//             variant="future-only"
//             onChange={(e) => handleChange("date", e.target.value)}
//             isRequired
//             errorMessage={errors.date}
//           />

//           <InputField
//             label="Phone Number"
//             value={formData.phoneNumber}
//             onChange={(e) => handleChange("phoneNumber", e.target.value)}
//             placeholder="Phone"
//             isRequired
//             errorMessage={errors.phoneNumber}
//           />

//           <InputField
//             label="Email"
//             value={formData.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             placeholder="Email"
//             isRequired
//             errorMessage={errors.email}
//           />

//           <RadioField
//             options={[
//               { label: "Instant Online Estimate", value: "Instant Online Estimate" },
//               { label: "In-Home Move Estimate", value: "In-Home Move Estimate" },
//               { label: "Request a call back", value: "Request a call back" },
//             ]}
//             value={formData.estimate}
//             onValueChange={(val) => handleChange("estimate", val)}
//             isRequired
//             errorMessage={errors.estimate}
//           />

//           <Button variant="primary" label="Next" onClick={handleSubmit} />
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export { QuoteForm };



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

const QuoteForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<QuoteFormDTO>({
    firstName: "",
    lastName: "",
    date: "",
    phoneNumber: "",
    email: "",
    estimate: "",
  });

  const [errors, setErrors] =
    useState<Partial<Record<keyof QuoteFormDTO, string>>>({});
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
        <Heading fontSize="xl" textAlign="center" fontWeight="medium" mb={4}>
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

          <InputField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            placeholder="Phone"
            isRequired
            errorMessage={errors.phoneNumber}
          />

          <InputField
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email"
            isRequired
            errorMessage={errors.email}
          />

          <RadioField
            options={[
              { label: "Instant Online Estimate", value: "Instant Online Estimate" },
              { label: "In-Home Move Estimate", value: "In-Home Move Estimate" },
              { label: "Request a call back", value: "Request a call back" },
            ]}
            value={formData.estimate}
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

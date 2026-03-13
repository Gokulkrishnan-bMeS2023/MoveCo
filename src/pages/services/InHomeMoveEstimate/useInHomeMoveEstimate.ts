// import { use, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { postInHomeEstimate } from "../../../api/inhomeMoveEstimateService";
// import type { MoveEstimateErrors, MoveEstimateFormValues } from "./DTOs";
// import { validateMoveEstimate } from "./validation";
// import { toaster } from "../../../components/ui/toaster";
// import { inHomeStaticDataPromise } from "../../../lib/queries";

//  export const useInHomeEstimateForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { moveSizeOptions, timeOptions, hearAboutOptions, stateOptions } = use(
//     inHomeStaticDataPromise,
//   );

// const initialState: MoveEstimateFormValues = {
//   visitDate: "",
//   visitTime: timeOptions?.[0]?.value || "",
//   moveDate: "",
//   moveSize: moveSizeOptions?.[0]?.value || "",
//   hearAbout: hearAboutOptions?.[0]?.value || "",
//   firstName: "",
//   lastName: "",
//   email: "",
//   homePhone: "",
//   cellPhone: "",
//   workPhone: "",
//   faxPhone: "",
//   fromAddress: "",
//   apt: "",
//   city: "",
//   state: stateOptions?.[0]?.value || "",
//   zipCode: "",
//   notes: "",
//   quoteID: 0,
//   recaptchaToken: "",
// };

//   const [values, setValues] = useState<MoveEstimateFormValues>(() => {
//     const data = location.state as any;
//     if (!data) return initialState;

//     return {
//       ...initialState,
//       firstName: data.firstName || "",
//       lastName: data.lastName || "",
//       email: data.email || "",
//       homePhone: data.phoneNumber || "",
//       visitDate: data.date || "",
//       moveDate: data.date || "",
//     };
//   });

//   const [errors, setErrors] = useState<MoveEstimateErrors>({});

//   useEffect(() => {
//     if (location.state) {
//       navigate(location.pathname, { replace: true, state: null });
//     }
//   }, [location.pathname, navigate]);

// // useEffect(() => {
// //   setValues((prev) => ({
// //     ...prev,
// //     moveSize: prev.moveSize || moveSizeOptions?.[0]?.value || "",
// //     visitTime: prev.visitTime || timeOptions?.[0]?.value || "",
// //     hearAbout: prev.hearAbout || hearAboutOptions?.[0]?.value || "",
// //     state: prev.state || stateOptions?.[0]?.value || "",
// //   }));
// // }, [moveSizeOptions, timeOptions, hearAboutOptions, stateOptions]);

//   const handleChange = (field: keyof MoveEstimateFormValues, value: string) => {
//     setValues((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };
//   const handleSubmit = async () => {
//     const clientErrors = validateMoveEstimate(values);
//     setErrors(clientErrors);

//     if (Object.keys(clientErrors).length > 0) return;

//     const payload = {
//       inHomeEstimateDate: values.visitDate,
//       inHomeEstimateTimeRange: values.visitTime,
//       moveDate: values.moveDate,
//       moveSize: values.moveSize,
//       referredBy: values.hearAbout,
//       firstName: values.firstName,
//       lastName: values.lastName,
//       email: values.email,
//       homePhone: values.homePhone,
//       cellPhone: values.cellPhone,
//       workPhone: values.workPhone,
//       faxPhone: values.faxPhone,
//       fromAddress: values.fromAddress,
//       address2: values.apt,
//       city: values.city,
//       state: values.state,
//       zipCode: values.zipCode,
//       additionalInfo: values.notes,
//       quoteId: values.quoteID,
//     };

//     try {
//       const response = await postInHomeEstimate(payload);
//       toaster.create({
//         title:
//           response?.data?.message ||
//           "Please call the office at 972-250-1100 to give a deposit and confirm the schedule.Thank You..!!",
//         type: "success",
//       });
//       setValues(initialState);
//       setErrors({});
//     } catch (error: any) {
//       toaster.create({
//         title:
//           error?.response?.data?.message ||
//           "Submission failed. Please try again.",
//         type: "error",
//       });
//     }
//   };

//   return {
//     values,
//     errors,
//     handleChange,
//     handleSubmit,
//     moveSizeOptions,
//     timeOptions,
//     hearAboutOptions,
//     stateOptions,
//     setValues,
//   };
// };







import { use, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postInHomeEstimate } from "../../../api/inhomeMoveEstimateService";
import type { MoveEstimateErrors, MoveEstimateFormValues } from "./DTOs";
import { validateMoveEstimate } from "./validation";
import { toaster } from "../../../components/ui/toaster";
import { inHomeStaticDataPromise } from "../../../lib/queries";

export const useInHomeEstimateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { moveSizeOptions, timeOptions, hearAboutOptions, stateOptions } =
    use(inHomeStaticDataPromise);

  const getInitialState = (): MoveEstimateFormValues => ({
    visitDate: "",
    visitTime: timeOptions?.[0]?.value ?? "",
    moveDate: "",
    moveSize: moveSizeOptions?.[0]?.value ?? "",
    hearAbout: hearAboutOptions?.[0]?.value ?? "",
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
    state: stateOptions?.[0]?.value ?? "",
    zipCode: "",
    notes: "",
    recaptchaToken: "",
  });

  const [values, setValues] = useState<MoveEstimateFormValues>(() => {
    const data = location.state as any;
    const base = getInitialState();

    if (!data) return base;

    return {
      ...base,
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      homePhone: data.phoneNumber || "",
      visitDate: data.date || "",
      moveDate: data.date || "",
    };
  });

  const [errors, setErrors] = useState<MoveEstimateErrors>({});

  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, navigate]);

  const handleChange = (
    field: keyof MoveEstimateFormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async () => {
    const clientErrors = validateMoveEstimate(values);
    setErrors(clientErrors);

    if (Object.keys(clientErrors).length > 0) return;

    const payload = {
      inHomeEstimateDate: values.visitDate,
      inHomeEstimateTimeRange: values.visitTime,
      moveDate: values.moveDate,
      moveSize: values.moveSize,
      referredBy: values.hearAbout,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      homePhone: values.homePhone,
      cellPhone: values.cellPhone,
      workPhone: values.workPhone,
      faxPhone: values.faxPhone,
      fromAddress: values.fromAddress,
      address2: values.apt,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
      additionalInfo: values.notes,
      recaptchaToken: values.recaptchaToken, // ✅ important
    };

    try {
      const response = await postInHomeEstimate(payload);

      toaster.create({
        title:
          response?.data?.message ||
          "Please call the office at 972-250-1100 to confirm the schedule. Thank You!",
        type: "success",
      });

      setValues(getInitialState()); 
      setErrors({});
    } catch (error: any) {
      toaster.create({
        title:
          error?.response?.data?.message ||
          "Submission failed. Please try again.",
        type: "error",
      });
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    moveSizeOptions,
    timeOptions,
    hearAboutOptions,
    stateOptions,
    setValues,
  };
};
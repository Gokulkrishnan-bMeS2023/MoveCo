import { use, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { postInHomeEstimate } from "../../../api/inhomeMoveEstimateService";
import type { MoveEstimateErrors, MoveEstimateFormValues } from "./DTOs";
import { validateMoveEstimate } from "./validation";
import { toaster } from "../../../components/ui/toaster";
import { inHomeStaticDataPromise } from "../../../lib/queries";

export const useInHomeEstimateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { moveSizeOptions, timeOptions, hearAboutOptions, stateOptions } = use(
    inHomeStaticDataPromise,
  );

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
    const initialState = getInitialState();

    if (!data) return initialState;
    return {
      ...initialState,
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      homePhone: data.phoneNumber || "",
      visitDate: data.date || "",
      moveDate: data.date || "",
    };
  });

  const [errors, setErrors] = useState<MoveEstimateErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, navigate]);

  const handleChange = (field: keyof MoveEstimateFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async () => {
    const clientErrors = validateMoveEstimate(values);
    setErrors(clientErrors);

    if (Object.keys(clientErrors).length > 0) {
      toaster.create({
        title: "Please fix the errors before submitting.",
        type: "error",
      });
      return;
    }

    if (!executeRecaptcha) {
      toaster.create({
        title: "reCAPTCHA not ready. Please try again.",
        type: "error",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const recaptchaToken = await executeRecaptcha("inhome_estimate");
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
        recaptchaToken,
      };

      const response = await postInHomeEstimate(payload);
      toaster.create({
        title:
          response?.data?.message ||
          "Please call the office at 972-250-1100 to give a deposit and confirm the schedule. Thank You!",
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    moveSizeOptions,
    timeOptions,
    hearAboutOptions,
    stateOptions,
    setValues,
  };
};

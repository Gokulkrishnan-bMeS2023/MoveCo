import { use, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"; // ← add
import { postInHomeEstimate } from "../../../api/inhomeMoveEstimateService";
import type { MoveEstimateErrors, MoveEstimateFormValues } from "./DTOs";
import { validateMoveEstimate } from "./validation";
import { toaster } from "../../../components/ui/toaster";
import { inHomeStaticDataPromise } from "../../../lib/queries";

const initialState: MoveEstimateFormValues = {
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
  recaptchaToken: "",
};

export const useInHomeEstimateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [values, setValues] = useState<MoveEstimateFormValues>(() => {
    const data = location.state as any;
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
  const [isSubmitting, setIsSubmitting] = useState(false); // ← add

  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, navigate]);

  const { moveSizeOptions, timeOptions, hearAboutOptions, stateOptions } = use(
    inHomeStaticDataPromise,
  );

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
      setValues(initialState);
      setErrors({});
    } catch (error: any) {
      toaster.create({
        title:
          error?.response?.data?.message ||
          "Submission failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false); // ← add
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

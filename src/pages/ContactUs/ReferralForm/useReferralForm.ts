import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { postReferral } from "../../../api/contactServices";
import { validateReferralForm } from "./validateReferralForm";
import type { ReferralFormValues } from "./DTOs";
import { toaster } from "../../../components/ui/toaster";
import type { FormErrors } from "../../../types/forms";

const initialState: ReferralFormValues = {
  yourName: "",
  friendEmail: "",
  friendPhone: "",
};

export const useReferralForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [values, setValues] = useState<ReferralFormValues>(initialState);
  const [errors, setErrors] = useState<FormErrors<ReferralFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ReferralFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = useCallback(async () => {
    const validationErrors = validateReferralForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
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

      const recaptchaToken = await executeRecaptcha("referral_form");
      const response = await postReferral({
        name: values.yourName,
        customerEmail: values.friendEmail,
        customerPhoneNo: values.friendPhone,
        recaptchaToken,
      });

      setValues(initialState);
      toaster.create({
        title: response?.data?.message ?? "Referral sent successfully!",
        type: "success",
      });
    } catch (error: any) {
      toaster.create({
        title:
          error?.response?.data?.message ??
          "Submission failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [values, executeRecaptcha]);

  return { values, errors, isSubmitting, handleChange, handleSubmit };
};

import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { postContact } from "../../../api/contactServices";
import { validateContactForm } from "./validateContactForm";
import type { ContactFormValues } from "./DTOs";
import { toaster } from "../../../components/ui/toaster";
import type { FormErrors } from "../../../types/forms";

const initialState: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const useContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [values, setValues] = useState<ContactFormValues>(initialState);
  const [errors, setErrors] = useState<FormErrors<ContactFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = useCallback(async () => {
    const validationErrors = validateContactForm(values);
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

      const recaptchaToken = await executeRecaptcha("contact_form");
      const response = await postContact({
        name: values.name,
        customerEmail: values.email,
        telePhone: values.phone,
        comments: values.message ?? "",
        recaptchaToken,
      });

      setValues(initialState);
      toaster.create({
        title: response?.data?.message ?? "Message sent successfully!",
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

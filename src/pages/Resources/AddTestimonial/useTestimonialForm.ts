import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toaster } from "../../../components/ui/toaster";
import type { TestimonialFormValues, TestimonialErrors } from "./DTOs";
import { validateTestimonial } from "./validation";
import { postTestimonial } from "../../../api/testimonialService";

const initialState: TestimonialFormValues = {
  firstName: "",
  lastName: "",
  moveDate: "",
  email: "",
  comments: "",
};

export const useTestimonialForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [values, setValues] = useState<TestimonialFormValues>(initialState);
  const [errors, setErrors] = useState<TestimonialErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof TestimonialFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async () => {
    const newErrors = validateTestimonial(values);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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

      const recaptchaToken = await executeRecaptcha("add_testimonial");

      const payload = {
        FirstName: values.firstName,
        LastName: values.lastName,
        MoveDate: values.moveDate,
        Email: values.email,
        Comments: values.comments,
        IsActive: true,
        recaptchaToken,
      } as any;

      const response = await postTestimonial(payload);
      toaster.create({
        title: response?.data?.message || "Thank you for your message!",
        description: "It has been sent",
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
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
  };
};

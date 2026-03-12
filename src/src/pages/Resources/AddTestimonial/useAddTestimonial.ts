import { useState } from "react";
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

export const useAddTestimonial = () => {
  const [values, setValues] = useState<TestimonialFormValues>(initialState);
  const [errors, setErrors] = useState<TestimonialErrors>({});

  const handleChange = (field: keyof TestimonialFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async () => {
    const newErrors = validateTestimonial(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      FirstName: values.firstName,
      LastName: values.lastName,
      MoveDate: values.moveDate,
      Email: values.email,
      Comments: values.comments,
      IsActive: true,
    } as any;
    try {
      const response = await postTestimonial(payload);
      toaster.create({
        title:
          response?.data?.message ||
          "Thank you for your message!",
          description: "It has been sent",
        type: "success",
      });
        setValues(initialState);
    } catch (error: any) {
      toaster.create({
        title:
          error?.response?.data?.message ||
          "Submission failed. Please try again.",
        type: "error",
      });
    }
  };

  return { values, errors, handleChange, handleSubmit, setValues };
};

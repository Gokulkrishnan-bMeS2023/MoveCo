import { Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toaster } from "../../../components/ui/toaster";
import { postRequestCallback } from "../../../api/quotesServices";
import QuoteFormFields from "../QuoteForm/QuoteFields";
import { validateQuoteForm } from "../QuoteForm/validation";
import { createQueryString } from "../../../utils/queryParams";
import type { QuoteFormDTO } from "../QuoteForm/DTOs";

interface QuoteFormProps {
  showEstimate?: boolean;
}

const GetQuote = ({ showEstimate = false }: QuoteFormProps) => {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const storageKey = showEstimate ? "instantQuoteForm" : "homeQuoteForm";

  const [errors, setErrors] =
    useState<Partial<Record<keyof QuoteFormDTO, string>>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<QuoteFormDTO>(() => {
    const saved = sessionStorage.getItem(storageKey);

    return saved
      ? JSON.parse(saved)
      : {
        firstName: "",
        lastName: "",
        date: "",
        phone: "",
        email: "",
        estimate: "Instant Online Estimate",
      };
  });

  // persist form
  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(formData));
  }, [formData, storageKey]);

  // clear storage on refresh
  useEffect(() => {
    const handleBeforeUnload = () => sessionStorage.removeItem(storageKey);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () =>
      window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [storageKey]);

  const handleChange = (field: keyof QuoteFormDTO, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const navigateWithQuery = (path: string, state?: any) => {
    const query = createQueryString({
      firstName: formData.firstName,
      lastName: formData.lastName,
      date: formData.date,
      phone: formData.phone,
      email: formData.email,
      estimate: formData.estimate ?? " ",
    });

    navigate(`${path}?${query}`, { state });
  };

  const handleSubmit = async () => {
    const validationErrors = validateQuoteForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      toaster.create({
        title: "Please fix the errors before submitting.",
        type: "error",
      });

      return;
    }

    setErrors({});

    if (!showEstimate || formData.estimate === "Instant Online Estimate") {
      navigateWithQuery("/move-information", {
        fromApp: true,
      });
      return;
    }

    if (formData.estimate === "In-Home Move Estimate") {
      navigateWithQuery("/in-home-move-estimate");
      return;
    }

    if (formData.estimate === "Request a call back") {
      if (!executeRecaptcha) {
        toaster.create({
          title: "reCAPTCHA not ready. Please try again.",
          type: "error",
        });
        return;
      }

      try {
        setIsSubmitting(true);

        const recaptchaToken = await executeRecaptcha("request_callback");

        const response = await postRequestCallback({
          firstName: formData.firstName,
          lastName: formData.lastName,
          moveDate: formData.date,
          email: formData.email,
          phoneNo: formData.phone,
          ipAddress: "",
          recaptchaToken,
        });

        toaster.create({
          title: response?.data?.message || "We will call you back shortly!",
          description: "Your request has been received.",
          type: "success",
        });

        setFormData({
          firstName: "",
          lastName: "",
          date: "",
          phone: "",
          email: "",
          estimate: "Instant Online Estimate",
        });
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
    }
  };

  return (
    <>
      <Heading as="h3" textAlign="center" fontWeight="normal" mb={4}>
        Get a Moving{" "}
        <Text as="span" color="brand.primary">
          Quote
        </Text>
      </Heading>

      <QuoteFormFields
        values={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showEstimate={showEstimate}
        buttonLabel={isSubmitting ? "Sending..." : "Next"}
      />
    </>
  );
};

export { GetQuote };
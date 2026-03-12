import { Heading, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { postRequestCallback } from "../../../api/quotesServices";
import QuoteFormFields from "../QuoteForm/QuoteFields";
import { validateQuoteForm } from "../QuoteForm/validation";
import type { QuoteFormDTO } from "../QuoteForm/DTOs";

interface QuoteFormProps {
  showEstimate?: boolean;
}

const GetQuote = ({ showEstimate = false }: QuoteFormProps) => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const storageKey = showEstimate
    ? "instantQuoteForm"
    : "homeQuoteForm";

  const [errors, setErrors] = useState<
    Partial<Record<keyof QuoteFormDTO, string>>
  >({});

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

  // refresh remove
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem(storageKey);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [storageKey]);

  // save data
  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(formData));
  }, [formData, storageKey]);

  // remove location state
  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, navigate, location.state]);

  const handleChange = (field: keyof QuoteFormDTO, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateQuoteForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    if (!showEstimate || formData.estimate === "Instant Online Estimate") {
      navigate("/move-information", {
        state: { ...formData, fromApp: true },
      });
    } else if (formData.estimate === "In-Home Move Estimate") {
      navigate("/in-home-move-estimate", { state: formData });
    } else if (formData.estimate === "Request a call back") {
      await postRequestCallback({
        firstName: formData.firstName,
        lastName: formData.lastName,
        moveDate: formData.date,
        email: formData.email,
        phoneNo: formData.phone,
        ipAddress: "",
      });
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
        buttonLabel="Next"
      />
    </>
  );
};

export { GetQuote };
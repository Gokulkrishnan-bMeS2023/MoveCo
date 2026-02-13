import { useState } from "react";
import {
  validateContactForm,
  validateReferralForm,
} from "./contactValidation";
import type { ContactFormValues, FormErrors, ReferralFormValues } from "./DTOs";

const initialContactState: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const initialReferralState: ReferralFormValues = {
  yourName: "",
  friendEmail: "",
  friendPhone: "",
};

export const useContactForms = () => {
  const [contactValues, setContactValues] =
    useState<ContactFormValues>(initialContactState);
  const [contactErrors, setContactErrors] = useState<
    FormErrors<ContactFormValues>
  >({});

  const [referralValues, setReferralValues] =
    useState<ReferralFormValues>(initialReferralState);
  const [referralErrors, setReferralErrors] = useState<
    FormErrors<ReferralFormValues>
  >({});

  const handleContactChange = (
    field: keyof ContactFormValues,
    value: string,
  ) => {
    setContactValues((prev) => ({ ...prev, [field]: value }));
    setContactErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleReferralChange = (
    field: keyof ReferralFormValues,
    value: string,
  ) => {
    setReferralValues((prev) => ({ ...prev, [field]: value }));
    setReferralErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const submitContactForm = () => {
    const errors = validateContactForm(contactValues);
    setContactErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const submitReferralForm = () => {
    const errors = validateReferralForm(referralValues);
    setReferralErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return {
    contactValues,
    contactErrors,
    referralValues,
    referralErrors,
    handleContactChange,
    handleReferralChange,
    submitContactForm,
    submitReferralForm,
  };
};

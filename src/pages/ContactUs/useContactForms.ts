import { useState } from "react";
import { validateContactForm, validateReferralForm } from "./contactValidation";
import type { ContactFormValues, FormErrors, ReferralFormValues } from "./DTOs";
import { postContact, postReferral } from "../../api/contactServices";

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

  const handleSubmitContact = async () => {
    const errors = validateContactForm(contactValues);
    setContactErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      const payload = {
        name: contactValues.name,
        customerEmail: contactValues.email,
        telePhone: contactValues.phone,
        comments: contactValues.message,
        referralUrl:
          window.location.href || "https://www.moveco.com/contact-us",
      };

      await postContact(payload);
      setContactValues(initialContactState);
      console.log("Contact form submitted successfully");
    } catch (error) {
      console.error("Error submitting contact form", error);
    }
  };

  const handleSubmitReferral = async () => {
    const errors = validateReferralForm(referralValues);
    setReferralErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      const payload = {
        customerEmail: referralValues.friendEmail,
        name: referralValues.yourName,
        customerPhoneNo: referralValues.friendPhone,
      };

      await postReferral(payload);
      setReferralValues(initialReferralState);
      console.log("Referral submitted successfully");
    } catch (error) {
      console.error("Error submitting referral", error);
    }
  };

  return {
    contactValues,
    contactErrors,
    referralValues,
    referralErrors,
    handleContactChange,
    handleReferralChange,
    handleSubmitContact,
    handleSubmitReferral,
  };
};

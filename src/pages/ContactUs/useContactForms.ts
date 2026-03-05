import { useState } from "react";
import { validateContactForm, validateReferralForm } from "./contactValidation";
import type { ContactFormValues, FormErrors, ReferralFormValues } from "./DTOs";
import { postContact, postReferral } from "../../api/contactServices";
import { toaster } from "../../components/ui/toaster";

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

    if (Object.keys(errors).length > 0) {
      toaster.create({
        title: "Please fix the errors before submitting.",
        type: "error",
      });
      return;
    }

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

      toaster.create({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        type: "success",
      });
    } catch (error) {
      console.error("Error submitting contact form", error);
      toaster.create({
        title: "Failed to send message.",
        description: "Something went wrong. Please try again later.",
        type: "error",
      });
    }
  };

  const handleSubmitReferral = async () => {
    const errors = validateReferralForm(referralValues);
    setReferralErrors(errors);

    if (Object.keys(errors).length > 0) {
      toaster.create({
        title: "Please fix the errors before submitting.",
        type: "error",
      });
      return;
    }

    try {
      const payload = {
        customerEmail: referralValues.friendEmail,
        name: referralValues.yourName,
        customerPhoneNo: referralValues.friendPhone,
      };

      await postReferral(payload);
      setReferralValues(initialReferralState);

      toaster.create({
        title: "Referral sent successfully!",
        description: "Your friend will receive an invitation shortly.",
        type: "success",
      });
    } catch (error) {
      console.error("Error submitting referral", error);
      toaster.create({
        title: "Failed to send referral.",
        description: "Something went wrong. Please try again later.",
        type: "error",
      });
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

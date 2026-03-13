import { useState, useCallback } from "react";
import { validateContactForm, validateReferralForm } from "./contactValidation";
import type { ContactFormValues, FormErrors, ReferralFormValues } from "./DTOs";
import { postContact, postReferral } from "../../api/contactServices";
import { toaster } from "../../components/ui/toaster";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

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
  const { executeRecaptcha } = useGoogleReCaptcha();

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

  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isReferralSubmitting, setIsReferralSubmitting] = useState(false);

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

  const handleSubmitContact = useCallback(async () => {
    const errors = validateContactForm(contactValues);
    setContactErrors(errors);

    if (Object.keys(errors).length > 0) {
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
      setIsContactSubmitting(true);

      const recaptchaToken = await executeRecaptcha("contact_form");

      const payload = {
        name: contactValues.name,
        customerEmail: contactValues.email,
        telePhone: contactValues.phone,
        comments: contactValues?.message || "",
        referralUrl:
          window.location.href || "https://www.moveco.com/contact-us",
        recaptchaToken,
      };

      const response = await postContact(payload);
      setContactValues(initialContactState);
      toaster.create({
        title: response?.data?.message || "Application submitted successfully!",
        type: "success",
      });
    } catch (error: any) {
      console.log(error);
      console.error(error);
      toaster.create({
        title:
          error?.response?.data?.message ||
          "Submission failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsContactSubmitting(false);
    }
  }, [contactValues, executeRecaptcha]);

  const handleSubmitReferral = useCallback(async () => {
    // 1. validate form
    const errors = validateReferralForm(referralValues);
    setReferralErrors(errors);

    if (Object.keys(errors).length > 0) {
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
      setIsReferralSubmitting(true);

      const recaptchaToken = await executeRecaptcha("referral_form");

      const payload = {
        customerEmail: referralValues.friendEmail,
        name: referralValues.yourName,
        customerPhoneNo: referralValues.friendPhone,
        recaptchaToken,
      };

      const response = await postReferral(payload);
      setReferralValues(initialReferralState);
      toaster.create({
        title: response?.data?.message || "Application submitted successfully!",
        type: "success",
      });
    } catch (error: any) {
      console.log(error);
      console.error(error);
      toaster.create({
        title:
          error?.response?.data?.message ||
          "Submission failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsReferralSubmitting(false);
    }
  }, [referralValues, executeRecaptcha]);

  return {
    contactValues,
    contactErrors,
    referralValues,
    referralErrors,
    isContactSubmitting,
    isReferralSubmitting,
    handleContactChange,
    handleReferralChange,
    handleSubmitContact,
    handleSubmitReferral,
  };
};

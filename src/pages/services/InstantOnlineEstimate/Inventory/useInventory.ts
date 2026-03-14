import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { validateInventory } from "../validation";
import { getQuote } from "../../../../api/quotesServices";
import {
  postOnlineEstimate,
  type QuoteRequestDTO,
} from "../../../../api/onlineEstimateService";
import { toaster } from "../../../../components/ui/toaster";
import type {
  Quantities,
  InventoryErrors,
  MoveInformationDTO,
  InventorySection,
} from "./DTOs";

export const useInventory = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [quantities, setQuantities] = useState<Quantities>({});
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [errors, setErrors] = useState<InventoryErrors>({});
  const [inventorySections, setInventorySections] = useState<
    InventorySection[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<MoveInformationDTO>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homePhone: "",
    workPhone: "",
    cellPhone: "",
    moveDate: "",
    moveTime: "",
    dropDate: "",
    dropTime: "",
    moveType: "",
    hearAbout: "",
    notes: "",
    fromAddress: "",
    fromApt: "",
    fromCity: "",
    fromState: "",
    fromZipCode: "",
    fromStairs: "",
    fromDistance: "",
    toAddress: "",
    toApt: "",
    toCity: "",
    toState: "",
    toZipCode: "",
    toStairs: "",
    toDistance: "",
  });

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    setValues((prev) => ({
      ...prev,
      ...params,
    }));
  }, [searchParams]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await getQuote();
        setInventorySections(response.data || []);
      } catch (error) {
        console.error("Failed to fetch inventory sections:", error);

        toaster.create({
          title: "Failed to load inventory. Please refresh.",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchInventory();
  }, []);

  const increase = (inventoryID: number) => {
    const key = String(inventoryID);

    setQuantities((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
  };

  const decrease = (inventoryID: number) => {
    const key = String(inventoryID);

    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max((prev[key] || 0) - 1, 0),
    }));
  };

  const handleCollapseAll = () => setOpenItems([]);

  const handleExpandAll = () =>
    setOpenItems(inventorySections.map((_, index) => `section-${index}`));

  const handleSubmit = async () => {
    const validationErrors = validateInventory(quantities);

    

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      toaster.create({
        title: "Please add at least one item to your inventory.",
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

      const recaptchaToken = await executeRecaptcha("inventory_submit");

      const finalPayload: QuoteRequestDTO = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNo: values.phone,
        mobilePhone: values.cellPhone,
        workPhone: values.workPhone,
        homePhone: values.homePhone,

        moveDate: values.moveDate,
        moveTime: values.moveTime,
        dropDate: values.dropDate,
        dropTime: values.dropTime,

        fromAddress: values.fromAddress,
        address2: values.fromApt,
        city: values.fromCity,
        state: values.fromState,
        zipCode: values.fromZipCode,
        flightOfStairs: values.fromStairs,
        doorToTruck: values.fromDistance,

        dropAddress: values.toAddress,
        dropAddress2: values.toApt,
        dropCity: values.toCity,
        dropState: values.toState,
        dropZipCode: values.toZipCode,
        dropFlightOfStairs: values.toStairs,
        dropDoorToTruck: values.toDistance,

        moveSize: values.moveType,
        heardBy: values.hearAbout,
        additionalInfo: values.notes,

        recaptchaToken,

        inventories: Object.entries(quantities)
          .filter(([, qty]) => qty >= 1)
          .map(([id, qty]) => ({
            inventoryID: Number(id),
            qty,
          })),
      };

      await postOnlineEstimate(finalPayload);

      setQuantities({});
      setOpenItems([]);
      setErrors({});

      toaster.create({
        title: "Inventory submitted successfully!",
        type: "success",
      });

      navigate("/confirmation", { state: { fromApp: true } });
    } catch (error: any) {
      console.error(error);

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
    quantities,
    openItems,
    setOpenItems,
    errors,
    inventorySections,
    isLoading,
    isSubmitting,
    increase,
    decrease,
    handleCollapseAll,
    handleExpandAll,
    handleSubmit,
  };
};

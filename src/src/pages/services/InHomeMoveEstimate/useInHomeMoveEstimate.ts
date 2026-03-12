import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postInHomeEstimate } from "../../../api/inhomeMoveEstimateService";
import type { MoveEstimateErrors, MoveEstimateFormValues } from "./DTOs";
import { validateMoveEstimate } from "./validation";
import {
  getMoveSizes,
  getTimeSlots,
  getHearAbout,
  getStateInstant,
} from "../../../api/statciDataService";
import {
  toOptions,
  toStateOptions,
  type SelectOption,
} from "./selectOptionUtils";
import { toaster } from "../../../components/ui/toaster";

const initialState: MoveEstimateFormValues = {
  visitDate: "",
  visitTime: "",
  moveDate: "",
  moveSize: "",
  hearAbout: "",
  firstName: "",
  lastName: "",
  email: "",
  homePhone: "",
  cellPhone: "",
  workPhone: "",
  faxPhone: "",
  fromAddress: "",
  apt: "",
  city: "",
  state: "",
  zipCode: "",
  notes: "",
  quoteID: 0,
};

export const useInHomeEstimateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [values, setValues] = useState<MoveEstimateFormValues>(() => {
    const data = location.state as any;
    if (!data) return initialState;

    return {
      ...initialState,
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      homePhone: data.phoneNumber || "",
      visitDate: data.date || "",
      moveDate: data.date || "",
    };
  });

  const [errors, setErrors] = useState<MoveEstimateErrors>({});
  const [moveSizeOptions, setMoveSizeOptions] = useState<SelectOption[]>([]);
  const [timeOptions, setTimeOptions] = useState<SelectOption[]>([]);
  const [hearAboutOptions, setHearAboutOptions] = useState<SelectOption[]>([]);
  const [stateOptions, setStateOptions] = useState<SelectOption[]>([]);

  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const fetchStaticData = async () => {
      try {
        const [
          moveSizesResponse,
          timeSlotsResponse,
          hearAboutResponse,
          statesResponse,
        ] = await Promise.all([
          getMoveSizes(),
          getTimeSlots(),
          getHearAbout(),
          getStateInstant(),
        ]);
        setMoveSizeOptions(toOptions(moveSizesResponse.data || []));
        setTimeOptions(toOptions(timeSlotsResponse.data || []));
        setHearAboutOptions(toOptions(hearAboutResponse.data || []));
        setStateOptions(toStateOptions(statesResponse.data || []));
      } catch (error: any) {
        console.error("Failed to fetch static data:", error);
      }
    };
    fetchStaticData();
  }, []);

  const handleChange = (field: keyof MoveEstimateFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
  const handleSubmit = async () => {
    const clientErrors = validateMoveEstimate(values);
    setErrors(clientErrors);

    if (Object.keys(clientErrors).length > 0) return;

    const payload = {
      inHomeEstimateDate: values.visitDate,
      inHomeEstimateTimeRange: values.visitTime,
      moveDate: values.moveDate,
      moveSize: values.moveSize,
      referredBy: values.hearAbout,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      homePhone: values.homePhone,
      cellPhone: values.cellPhone,
      workPhone: values.workPhone,
      faxPhone: values.faxPhone,
      fromAddress: values.fromAddress,
      address2: values.apt,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
      additionalInfo: values.notes,
      quoteId: values.quoteID,
    };

    try {
      const response = await postInHomeEstimate(payload);
      toaster.create({
        title:
          response?.data?.message ||
          "Please call teh office at 972-250-1100 to give a deposit and confirm the schedule.Thank You..!!",
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
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    moveSizeOptions,
    timeOptions,
    hearAboutOptions,
    stateOptions,
    setValues,
  };
};

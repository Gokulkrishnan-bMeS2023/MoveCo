import { useEffect, useState } from "react";
import { postInHomeEstimate } from "../../../api/inhomeMoveEstimateService";
import type { MoveEstimateErrors, MoveEstimateFormValues } from "./DTOs";
import { validateMoveEstimate } from "./validation";
import {
  getMoveSizes,
  getTimeSlots,
  getHearAbout,
  getStateInstant,
} from "../../../api/statciDataService";
import { toOptions, toStateOptions, type SelectOption } from "./selectOptionUtils";

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
  const [values, setValues] = useState<MoveEstimateFormValues>(initialState);
  const [errors, setErrors] = useState<MoveEstimateErrors>({});
  const [moveSizeOptions, setMoveSizeOptions] = useState<SelectOption[]>([]);
  const [timeOptions, setTimeOptions] = useState<SelectOption[]>([]);
  const [hearAboutOptions, setHearAboutOptions] = useState<SelectOption[]>([]);
  const [stateOptions, setStateOptions] = useState<SelectOption[]>([]);

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
      } catch (error:any) {
        console.error("Failed to fetch static data:", error);
      }
    };
    fetchStaticData();
  }, []);

  const handleChange = (
    field: keyof MoveEstimateFormValues,
    value: string
  ) => {
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
      inHomeEstimateDate: values.visitDate
        ? new Date(values.visitDate).toISOString()
        : "",
      inHomeEstimateTimeRange: values.visitTime,
      moveDate: values.moveDate
        ? new Date(values.moveDate).toISOString()
        : "",
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
      quoteId: 0,
    };

    try {
      await postInHomeEstimate(payload);
      alert("Form submitted successfully!");
      setValues(initialState);
      setErrors({});
    } catch (error: any) {
      console.error("API Error:", error.response?.data);
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
  };
};
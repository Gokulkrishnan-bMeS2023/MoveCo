import { use, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { validateMoveInformation } from "../validation";
import type {
  MoveInformationDTO,
  MoveInformationErrors,
} from "./DTOs";

import { instantOnlineStaticDataPromise } from "../../../../lib/queries";

export const useMoveInformationForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    moveSizeOptions,
    timeOptions,
    stateOptions,
    stairsOptions,
    doorToTruckOptions,
    hearAboutOptions,
  } = use(instantOnlineStaticDataPromise);

  const query = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const getInitialState = (): MoveInformationDTO => ({
    firstName: query.firstName ?? "",
    lastName: query.lastName ?? "",
    email: query.email ?? "",
    phone: query.phone ?? "",
    homePhone: "",
    workPhone: "",
    cellPhone: "",

    moveDate: query.date ?? "",
    moveTime: timeOptions?.[0]?.value ?? "",

    dropDate: "",
    dropTime: timeOptions?.[0]?.value ?? "",

    moveType: moveSizeOptions?.[0]?.value ?? "",
    hearAbout: hearAboutOptions?.[0]?.value ?? "",
    notes: "",

    fromAddress: "",
    fromApt: "",
    fromCity: "",
    fromState: stateOptions?.[0]?.value ?? "",
    fromZipCode: "",
    fromStairs: stairsOptions?.[0]?.value ?? "",
    fromDistance: doorToTruckOptions?.[0]?.value ?? "",

    toAddress: "",
    toApt: "",
    toCity: "",
    toState: stateOptions?.[0]?.value ?? "",
    toZipCode: "",
    toStairs: stairsOptions?.[0]?.value ?? "",
    toDistance: doorToTruckOptions?.[0]?.value ?? "",
  });

  const [values, setValues] = useState<MoveInformationDTO>(() =>
    getInitialState()
  );

  const [errors, setErrors] = useState<MoveInformationErrors>({});

  const handleChange = (field: keyof MoveInformationDTO, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = () => {
    const clientErrors = validateMoveInformation(values);

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});

    const params = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    navigate(`/inventory?${params.toString()}`, {
      state: { fromApp: true },
    });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    moveSizeOptions,
    timeOptions,
    stateOptions,
    stairsOptions,
    doorToTruckOptions,
    hearAboutOptions,
  };
};
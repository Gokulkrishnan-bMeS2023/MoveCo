import React from "react";
import { Field, Input, InputGroup, Text } from "@chakra-ui/react";

export type DateVariant =
  | "all"
  | "today-and-future"
  | "future-only"
  | "past-only";

export interface DateInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  variant?: DateVariant;
}

const getToday = () => new Date().toISOString().split("T")[0];

const getTomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

const getYesterday = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
};

const DateInput: React.FC<DateInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  isRequired = false,
  errorMessage,
  leftIcon,
  variant = "all",
}) => {
  const isInvalid = !!errorMessage;

  const today = getToday();
  const tomorrow = getTomorrow();
  const yesterday = getYesterday();

  let minDate: string | undefined;
  let maxDate: string | undefined;

  switch (variant) {
    case "today-and-future":
      minDate = today;
      break;

    case "future-only":
      minDate = tomorrow;
      break;

    case "past-only":
      maxDate = yesterday;
      break;

    default:
      break;
  }

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Field.Label fontWeight="medium">
        {label}
        {isRequired && (
          <Text as="span" color="brand.red" ml={1}>
            *
          </Text>
        )}
      </Field.Label>

      <InputGroup startElement={leftIcon}>
        <Input
          type="date"
          value={value}
          placeholder={placeholder}
          ps={leftIcon ? "30px" : "10px"}
          onChange={onChange}
          min={minDate}
          max={maxDate}
          onClick={(e) => e.currentTarget.showPicker()}
          onKeyDown={(e) => e.preventDefault()}
          _hover={{ borderColor: "brand.primary" }}
          _focusVisible={{ borderColor: "brand.primary" }}
          css={{
            // Right side native calendar icon-ai remove panna intha selector venum
            "&::-webkit-calendar-picker-indicator": {
              display: "none",
              WebkitAppearance: "none",
            },
            "&::-webkit-datetime-edit": {
              color: value ? "inherit" : "gray.500", // gray.400
            },
            // // Native "dd-mm-yyyy" placeholder-ai invisible aaka
            // "&::-webkit-datetime-edit": {
            //   color: value ? "inherit" : "transparent",
            // },
          }}
        />
      </InputGroup>

      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default DateInput;

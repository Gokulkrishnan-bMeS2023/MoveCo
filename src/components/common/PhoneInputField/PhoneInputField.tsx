import React from "react";
import { Field, Input, InputGroup, Text } from "@chakra-ui/react";

interface PhoneInputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
  placeholder?: string;
}

const PhoneInputField: React.FC<PhoneInputProps> = ({
  label,
  value = "",
  onChange,
  isRequired = false,
  errorMessage,
  placeholder = "(123) 456-7890",
}) => {
  const isInvalid = Boolean(errorMessage);

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);

    const area = digits.slice(0, 3);
    const middle = digits.slice(3, 6);
    const last = digits.slice(6, 10);

    if (digits.length > 6) {
      return `(${area}) ${middle}-${last}`;
    }
    if (digits.length > 3) {
      return `(${area}) ${middle}`;
    }
    if (digits.length > 0) {
      return `(${area}`;
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);

    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: formatted,
      },
    };

    onChange?.(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Field.Label fontWeight="medium" display="block">
        <Text as="span">
          {label}
          {isRequired && (
            <Text as="span" color="brand.red" ml={1}>
              *
            </Text>
          )}
        </Text>
      </Field.Label>

      <InputGroup>
        <Input
          type="tel"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={14} // (123) 456-7890
        />
      </InputGroup>

      {isInvalid && (
        <Field.ErrorText color="brand.red">{errorMessage}</Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default PhoneInputField;

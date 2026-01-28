import React from "react";
import { Field, Input, InputGroup, Text } from "@chakra-ui/react";

export interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
}

const InputField: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isRequired = false,
  errorMessage,
  leftIcon,
}) => {
  const isInvalid = Boolean(errorMessage);

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Field.Label fontWeight="medium">
        {label}
        {isRequired && (
          <Text fontWeight={"900"} fontSize={16} as="span" color="red.500" ml={1}>
            *
          </Text>
        )}
      </Field.Label>

      <InputGroup startElement={leftIcon}>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          outline="none"
          focusRing="inside"
          focusRingColor="green.500"
          _focusVisible={{
            borderColor: "green.500",
          }}
        />
      </InputGroup>
      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default InputField;

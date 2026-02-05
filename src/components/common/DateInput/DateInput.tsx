
import React from "react";
import { Field, Input, InputGroup, Text } from "@chakra-ui/react";

export interface DateInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  isRequired = false,
  errorMessage,
  leftIcon,
}) => {
  const isInvalid = !!errorMessage && errorMessage.length > 0;
  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Field.Label fontWeight="medium">
        {label}
        {isRequired && (
          <Text fontWeight={"500"} fontSize={16} as="span" color="brand.red">
            *
          </Text>
        )}
      </Field.Label>
      <InputGroup
        startElement={leftIcon}
      >
        <Input
          type="date"
          placeholder={placeholder}
          value={value}
          ps={leftIcon ? "30px" : "10px"}
          onChange={onChange}
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

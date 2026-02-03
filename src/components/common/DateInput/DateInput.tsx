
import React from "react";
import { Field, Input, InputGroup, Text, Box } from "@chakra-ui/react";
import { AiOutlineCalendar } from "react-icons/ai";

export interface DateInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  isRequired = false,
  errorMessage,
}) => {
  const isInvalid = !!errorMessage && errorMessage.length > 0;
  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Field.Label fontWeight="medium">
        {label}
        {isRequired && (
          <Text fontWeight="900" fontSize={16} as="span" color="red.500" ml={1}>
            *
          </Text>
        )}
      </Field.Label>

      <InputGroup
        startElement={
          <Box pointerEvents="none">
            <AiOutlineCalendar color="gray.200" />
          </Box>
        }
      >
        <Input
  type="date"
  placeholder={placeholder}
  value={value}
   ps="30px" 
  onChange={onChange}
  onClick={(e) => e.currentTarget.showPicker()} 
  onKeyDown={(e) => e.preventDefault()}
  borderColor="gray.200"
  _hover={{ borderColor: "brand.primary" }}
  _focusVisible={{ borderColor: "brand.primary" }}
  css={{
            // Right side native calendar icon-ai remove panna intha selector venum
            "&::-webkit-calendar-picker-indicator": {
              display: "none",
              WebkitAppearance: "none",
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

import React from "react";
import { Field, Textarea, Text } from "@chakra-ui/react";

interface NotesProps {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  isRequired?: boolean;
  errorMessage?: string;
}

const Notes: React.FC<NotesProps> = ({
  label = "Notes",
  value,
  placeholder = "Enter notes...",
  onChange,
  isRequired = false,
  errorMessage,
}) => {
  const isInvalid = Boolean(errorMessage);

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Field.Label fontWeight="medium" >
        {label}
        {isRequired && (
          <Text as="span" fontWeight="500" fontSize={16} color="brand.red">
            *
          </Text>
        )}
      </Field.Label>

      <Textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        resize="vertical"
        outline="none"
        focusRing="inside"
        focusRingColor="brand.primary"
        _focusVisible={{
          borderColor: "brand.primary",
        }}
      />

      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default Notes;

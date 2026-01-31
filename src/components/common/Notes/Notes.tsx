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
      <Field.Label fontWeight="medium">
        {label}
        {isRequired && (
          <Text as="span" fontWeight="900" fontSize={16} color="red.500" ml={1}>
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
        focusRingColor="green.500"
        _focusVisible={{
          borderColor: "green.500",
        }}
      />

      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default Notes;

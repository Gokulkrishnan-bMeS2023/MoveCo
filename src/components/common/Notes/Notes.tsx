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
      {label && <Field.Label fontWeight="medium" display="block">
        <Text as="span">
          {label}
          {isRequired && (
            <Text fontWeight={"500"} textStyle={16} as="span" color="brand.red" ml={1}>
              *
            </Text>
          )}
        </Text>
      </Field.Label>
      }

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
      {isInvalid && <Field.ErrorText color="brand.red" fontWeight="400">{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default Notes;

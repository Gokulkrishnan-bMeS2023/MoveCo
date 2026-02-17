import React from "react";
import { Field, Checkbox, Text } from "@chakra-ui/react";

export interface CheckboxProps {
  label: string;
  isChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
}

const CheckboxField: React.FC<CheckboxProps> = ({
  label,
  isChecked,
  onChange,
  isRequired = false,
  errorMessage,
}) => {
  const isInvalid = Boolean(errorMessage);

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Checkbox.Root
        checked={isChecked}
        onCheckedChange={(e) => {
          onChange?.({
            target: { checked: !!e.checked },
          } as React.ChangeEvent<HTMLInputElement>);
        }}
      >
        <Checkbox.HiddenInput />

        <Checkbox.Control
          _checked={{
            bg: "brand.primary",
            borderColor: "brand.primary",
          }}
        >
          <Checkbox.Indicator />
        </Checkbox.Control>

        <Checkbox.Label>
          <Text as="span">
            {label}
            {isRequired && (
              <Text as="span" ml={1} fontWeight="500" color="brand.red">
                *
              </Text>
            )}
          </Text>
        </Checkbox.Label>
      </Checkbox.Root>

      {isInvalid && (
        <Field.ErrorText color="brand.red">{errorMessage}</Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default CheckboxField;

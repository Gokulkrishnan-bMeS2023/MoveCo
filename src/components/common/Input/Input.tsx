
import React from "react";
import { Field, Input, InputGroup, Text } from "@chakra-ui/react";

export interface InputProps {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // ✅ ADD THIS
  isRequired?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  autoComplete?: string;
  inputMode?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      type = "text",
      placeholder,
      value = "",
      onChange,
      onKeyDown,   // ✅ receive prop
      isRequired = false,
      errorMessage,
      leftIcon,
      autoComplete,
      inputMode,
    },
    ref
  ) => {
    const isInvalid = Boolean(errorMessage);

    const regexRules: Record<string, RegExp> = {
      number: /^[0-9]*$/,
      email: /^[a-zA-Z0-9@._%+\-]*$/,
      text: /^[A-Za-z\s]*$/,
      alphanumeric: /^[A-Za-z0-9\s$,./]*$/,
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // allow phone inputs fully
      if (type === "tel") {
        onChange?.(e);
        return;
      }

      const pattern = regexRules[type];

      if (pattern) {
        if (pattern.test(newValue)) {
          onChange?.(e);
        }
      } else {
        onChange?.(e);
      }
    };

    return (
      <Field.Root invalid={isInvalid} required={isRequired}>
        {label && (
          <Field.Label fontWeight="medium" display="block">
            <Text as="span">
              {label}
              {isRequired && (
                <Text
                  fontWeight="500"
                  fontSize={16}
                  as="span"
                  color="brand.red"
                  ml={1}
                >
                  *
                </Text>
              )}
            </Text>
          </Field.Label>
        )}

        <InputGroup startElement={leftIcon}>
          <Input
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={onKeyDown}   // ✅ wire it up
            autoComplete={autoComplete}
            inputMode={inputMode as any}
            outline="none"
            focusRing="inside"
            focusRingColor="brand.primary"
            _focusVisible={{
              borderColor: "brand.primary",
            }}
          />
        </InputGroup>

        {isInvalid && (
          <Field.ErrorText color="brand.red" fontWeight="400">
            {errorMessage}
          </Field.ErrorText>
        )}
      </Field.Root>
    );
  }
);

export default InputField;
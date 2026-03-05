import React, { useRef } from "react";
import InputField from "../Input/Input";

interface PhoneFieldProps {
  label: string;
  value: string;
  onChange: (phone: string) => void;
  errorMessage?: string;
  isRequired?: boolean;
}

const formatUSPhone = (digits: string) => {
  if (!digits) return "";

  if (digits.length <= 3) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)})-${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)})-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

const PhoneField: React.FC<PhoneFieldProps> = ({
  label,
  value,
  onChange,
  errorMessage,
  isRequired,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Extract digits only
    const digits = inputValue.replace(/\D/g, "").slice(0, 10);

    // Format phone number
    const formatted = formatUSPhone(digits);

    // Return formatted value
    onChange(formatted);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (!input) return;

    const digits = input.value.replace(/\D/g, "");

    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Home",
      "End",
    ];

    if (
      digits.length >= 10 &&
      /^\d$/.test(e.key) &&
      !allowedKeys.includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  return (
    <InputField
      ref={inputRef}
      label={label}
      name="phone"
      type="tel"
      placeholder="(736)-437-4637"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      errorMessage={errorMessage}
      isRequired={isRequired}
      autoComplete="tel"
      inputMode="numeric"
    />
  );
};

export default PhoneField;

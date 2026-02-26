import React, { useRef } from "react";
import InputField from "../Input/Input";

interface SSNFieldProps {
  label: string;
  value: string; // raw digits only (e.g. "123456789")
  onChange: (digits: string) => void;
  errorMessage?: string;
  isRequired?: boolean;
}

// Format: XXX-XX-XXXX
const formatSSN = (digits: string) => {
  if (!digits) return "";
  if (digits.length <= 3) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`;
};

const countDigitsBeforePos = (formatted: string, pos: number) => {
  return formatted.slice(0, pos).replace(/\D/g, "").length;
};

const getCursorPosAfterDigit = (formatted: string, digitIndex: number) => {
  let count = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      count++;
      if (count === digitIndex) return i + 1;
    }
  }
  return formatted.length;
};

const SSNField: React.FC<SSNFieldProps> = ({
  label,
  value,
  onChange,
  errorMessage,
  isRequired,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const nativeEvent = e.nativeEvent as InputEvent;

    // ── Autofill ────────────────────────────────────────────────────────────
    const isAutofill =
      nativeEvent.inputType === "insertReplacementText" ||
      (nativeEvent.inputType === undefined && nativeEvent.data === null);

    if (isAutofill) {
      const digits = input.value.replace(/\D/g, "").slice(0, 9);
      onChange(digits); // ✅ raw digits to parent
      return;
    }

    // ── Capture cursor before change ────────────────────────────────────────
    const cursorPos = input.selectionStart ?? input.value.length;
    const digitsBeforeCursor = countDigitsBeforePos(input.value, cursorPos);

    // ── Raw digits, max 9 ───────────────────────────────────────────────────
    const rawDigits = input.value.replace(/\D/g, "").slice(0, 9);

    onChange(rawDigits); // ✅ always send raw digits to parent

    // ── Restore cursor ──────────────────────────────────────────────────────
    requestAnimationFrame(() => {
      if (!inputRef.current) return;
      const newFormatted = formatSSN(rawDigits);
      const newCursor = getCursorPosAfterDigit(
        newFormatted,
        digitsBeforeCursor,
      );
      inputRef.current.setSelectionRange(newCursor, newCursor);
    });
  };

  // ── Block beyond 9 digits ───────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (!input) return;

    const currentDigits = input.value.replace(/\D/g, "");
    const isNavigationKey = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
      "Home",
      "End",
    ].includes(e.key);

    if (currentDigits.length >= 9 && /^\d$/.test(e.key) && !isNavigationKey) {
      e.preventDefault();
    }
  };

  return (
    <InputField
      ref={inputRef}
      label={label}
      name="ssn"
      type="tel"
      placeholder="XXX-XX-XXXX"
      value={formatSSN(value)} // ✅ display formatted
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      errorMessage={errorMessage}
      isRequired={isRequired}
      autoComplete="off"
      inputMode="numeric"
    />
  );
};

export default SSNField;

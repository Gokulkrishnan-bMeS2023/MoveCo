import React, { useRef } from "react";
import InputField from "../Input/Input";

interface PhoneFieldProps {
  label: string;
  value: string; // digits only
  onChange: (digits: string) => void;
  errorMessage?: string;
  isRequired?: boolean;
}

const formatUSPhone = (digits: string) => {
  if (!digits) return "";
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Given a formatted string, count how many digits exist up to (but not including) position `pos`
const countDigitsBeforePos = (formatted: string, pos: number) => {
  return formatted.slice(0, pos).replace(/\D/g, "").length;
};

// Given a formatted string and a digit index, return the cursor position AFTER that digit
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

const PhoneField: React.FC<PhoneFieldProps> = ({
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

    // ── Autofill detection ──────────────────────────────────────────────────
    const isAutofill =
      nativeEvent.inputType === "insertReplacementText" ||
      (nativeEvent.inputType === undefined && nativeEvent.data === null);

    if (isAutofill) {
      const digits = input.value.replace(/\D/g, "").slice(0, 10);
      onChange(digits);
      // Let React re-render; cursor will land at end naturally
      return;
    }

    // ── Capture cursor BEFORE we touch anything ─────────────────────────────
    const cursorPos = input.selectionStart ?? input.value.length;
    const prevFormatted = input.value;                          // current (old) formatted value
    const digitsBeforeCursor = countDigitsBeforePos(prevFormatted, cursorPos);

    // ── Extract new digits ──────────────────────────────────────────────────
    const rawDigits = input.value.replace(/\D/g, "").slice(0, 10);

    // If nothing changed in digit count beyond 10, ignore extra input
    if (rawDigits === value && input.value === formatUSPhone(value)) return;

    onChange(rawDigits);

    // ── Restore cursor after React re-renders ───────────────────────────────
    requestAnimationFrame(() => {
      if (!inputRef.current) return;

      const newFormatted = formatUSPhone(rawDigits);

      // digitsBeforeCursor tells us how many digits were before the old cursor.
      // We place cursor after the same digit count in the new formatted string.
      const newCursor = getCursorPosAfterDigit(newFormatted, digitsBeforeCursor);

      inputRef.current.setSelectionRange(newCursor, newCursor);
    });
  };

  // ── Block any keypress beyond 10 digits (prevents flicker) ───────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (!input) return;

    const currentDigits = input.value.replace(/\D/g, "");
    const isNavigationKey = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight",
      "ArrowUp", "ArrowDown", "Tab", "Home", "End",
    ].includes(e.key);

    if (currentDigits.length >= 10 && /^\d$/.test(e.key) && !isNavigationKey) {
      e.preventDefault();
    }
  };

  return (
    <InputField
      ref={inputRef}
      label={label}
      name="phone"
      type="tel"
      placeholder="(555) 555-5555"
      value={formatUSPhone(value)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}   // ← pass this down (see note below)
      errorMessage={errorMessage}
      isRequired={isRequired}
      autoComplete="tel"
      inputMode="numeric"
    />
  );
};

export default PhoneField;
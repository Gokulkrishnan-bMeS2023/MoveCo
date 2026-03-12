import { Stack } from "@chakra-ui/react";
import DateInput from "../../../components/common/DateInput/DateInput";
import InputField from "../../../components/common/Input/Input";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import RadioField from "../../../components/common/Radio/Radio";
import Button from "../../../components/common/Button/Button";

interface Props {
  values: any;
  errors: any;
  handleChange: (field: any, value: string) => void;
  handleSubmit: () => void;
  showEstimate?: boolean;
  buttonLabel: string;
  isLoading?: boolean;
}

const QuoteFormFields = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  showEstimate,
  buttonLabel,
  isLoading,
}: Props) => {
  return (
    <Stack gap={2}>
      <InputField
        label="First Name"
        value={values.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        placeholder="First Name"
        isRequired
        errorMessage={errors.firstName}
      />

      <InputField
        label="Last Name"
        value={values.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        placeholder="Last Name"
        isRequired
        errorMessage={errors.lastName}
      />

      <DateInput
        label="Date"
        value={values.date}
        variant="future-only"
        onChange={(e) => handleChange("date", e.target.value)}
        isRequired
        errorMessage={errors.date}
      />

      <PhoneField
        label="Phone Number"
        value={values.phone}
        onChange={(digits) => handleChange("phone", digits)}
        isRequired
        errorMessage={errors.phone}
      />

      <InputField
        label="Email"
        type="email"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email"
        isRequired
        errorMessage={errors.email}
      />

      {showEstimate && (
        <RadioField
          options={[
            {
              label: "Instant Online Estimate",
              value: "Instant Online Estimate",
            },
            {
              label: "In-Home Move Estimate",
              value: "In-Home Move Estimate",
            },
            { label: "Request a call back", value: "Request a call back" },
          ]}
          value={values.estimate}
          onValueChange={(val) => handleChange("estimate", val)}
          isRequired
          errorMessage={errors.estimate}
        />
      )}

      <Button
        variant="primary"
        label={isLoading ? "Submitting..." : buttonLabel}
        onClick={handleSubmit}
        mt={2}
      />
    </Stack>
  );
};

export default QuoteFormFields;

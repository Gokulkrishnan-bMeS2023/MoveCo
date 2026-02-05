
import { Field, RadioGroup, Stack, For,Text } from "@chakra-ui/react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioFieldProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  isRequired?: boolean;
  errorMessage?: string;
  direction?: "column" | "row";
}

const RadioField = ({
  label,
  options,
  value,
  onValueChange,
  isRequired = false,
  errorMessage,
  direction = "column",
}: RadioFieldProps) => {
  const isInvalid = Boolean(errorMessage);

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      {label && <Field.Label fontWeight="medium">
              {label}
              {isRequired && (
                <Text fontWeight={"500"} fontSize={16} as="span" color="brand.red">
                  *
                </Text>
              )}
            </Field.Label>
}
      <RadioGroup.Root
        value={value}
        size="md"
        variant="outline"
        colorPalette="teal" 
        onValueChange={(details:any) => onValueChange?.(details.value)}
      >
        <Stack direction={direction} gap="2">
          <For each={options}>
            {(option) => (
              <RadioGroup.Item 
                key={option.value} 
                value={option.value} 
                cursor="pointer"
              >
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText fontSize="sm" color="brand.secondary">
                  {option.label}
                </RadioGroup.ItemText>
              </RadioGroup.Item>
            )}
          </For>
        </Stack>
      </RadioGroup.Root>

      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default RadioField;
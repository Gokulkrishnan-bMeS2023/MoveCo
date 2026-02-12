import React from "react";
import { Box, Field, createListCollection, Text } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectIndicator,
  SelectPositioner,
} from "@chakra-ui/react/select";
import { FaSortDown } from "react-icons/fa";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onValueChange?: (e: { value: string[] }) => void;
  isRequired?: boolean;
  errorMessage?: string;
}

const SelectField: React.FC<SelectProps> = ({
  label,
  options,
  placeholder = "Select",
  value,
  onValueChange,
  isRequired = false,
  errorMessage,
}) => {
  const collection = createListCollection({
    items: options,
  });

  const isInvalid = Boolean(errorMessage);

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      <Field.Label fontWeight="medium" fontSize="16">
        {label}
        {isRequired && (
          <Text fontWeight={"500"} fontSize={16} as="span" color="brand.red">
            *
          </Text>
        )}
      </Field.Label>

      <SelectRoot
        collection={collection}
        value={value ? [value] : []}
        onValueChange={onValueChange}
      >
        <SelectTrigger
          _hover={{ borderColor: "brand.primary" }}
          _focus={{
            borderColor: "brand.primary",
            ring: "1px",
            ringColor: "brand.primary",
          }}
        >
          <SelectValueText placeholder={placeholder} />
          <SelectIndicator>
            <Box mb={1}>
              <FaSortDown size={16} />
            </Box>
          </SelectIndicator>
        </SelectTrigger>
        <SelectPositioner>
          <SelectContent
            maxH="260px"
            overflowY="auto"
            css={{
              // 1. Scrollbar overall width
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              // 2. Scrollbar track (pinnaadi irukura path)
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              // 3. Scrollbar thumb (antha moving indicator)
              "&::-webkit-scrollbar-thumb": {
                background: "gray.300",
                borderRadius: "10px",
              },
              // Hover pannum pothu indicator dark-ah theriyum
              "&::-webkit-scrollbar-thumb:hover": {
                background: "brand.primary",
              },
            }}
          >
            {collection.items.map((option) => (
              <SelectItem
                item={option}
                key={option.value}
                _highlighted={{ bg: "brand.primary", color: "brand.white" }}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
      </SelectRoot>

      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default SelectField;

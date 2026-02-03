// // import React from "react";
// // import { Field, NativeSelect, Text } from "@chakra-ui/react";

// // export interface SelectOption {
// //   label: string;
// //   value: string;
// // }

// // export interface SelectProps {
// //   label: string;
// //   options: SelectOption[];
// //   placeholder?: string;
// //   value?: string;
// //   onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// //   isRequired?: boolean;
// //   errorMessage?: string;
// // }

// // const SelectField: React.FC<SelectProps> = ({
// //   label,
// //   options,
// //   placeholder = "Select",
// //   value,
// //   onChange,
// //   isRequired = false,
// //   errorMessage,
// // }) => {
// //   const isInvalid = Boolean(errorMessage);

// //   return (
// //     <Field.Root invalid={isInvalid} required={isRequired}>
// //       <Field.Label fontWeight="medium">
// //         {label}
// //         {isRequired && (
// //           <Text fontWeight={"900"} fontSize={16} as="span" color="red.500" ml={1}>
// //             *
// //           </Text>
// //         )}
// //       </Field.Label>

// //       <NativeSelect.Root>
// //         <NativeSelect.Field
// //           placeholder={placeholder}
// //           value={value}
// //           onChange={onChange}
// //           focusRing="inside"
// //           focusRingColor="brand.primary"
// //           borderColor="#e9e5e5"
// //           _hover={{ borderColor: "brand.primary" }}
// //           _focusVisible={{
// //             borderColor: "brand.primary",
// //           }}
// //         >
// //           {options.map((option) => (
// //             <option key={option.value} value={option.value}>
// //               {option.label}
// //             </option>
// //           ))}
// //         </NativeSelect.Field>

// //         <NativeSelect.Indicator />
// //       </NativeSelect.Root>

// //       {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
// //     </Field.Root>
// //   );
// // };

// // export default SelectField;










// import React from "react";
// import { Field, createListCollection } from "@chakra-ui/react";
// import {
//   SelectContent,
//   SelectItem,
//   SelectRoot,
//   SelectTrigger,
//   SelectValueText,
//   SelectIndicator,
// } from "@chakra-ui/react/select";
// import { AiOutlineDown } from "react-icons/ai"; // 👈 react icon

// export interface SelectOption {
//   label: string;
//   value: string;
// }

// export interface SelectProps {
//   label: string;
//   options: SelectOption[];
//   placeholder?: string;
//   value?: string;
//   onValueChange?: (details: { value: string[] }) => void;
//   isRequired?: boolean;
//   errorMessage?: string;
// }

// // const SelectField: React.FC<SelectProps> = ({
// //   label,
// //   options,
// //   placeholder = "Select",
// //   value,
// //   onValueChange,
// //   isRequired = false,
// //   errorMessage,
// // }) => {
// //   const collection = createListCollection({
// //     items: options,
// //     itemToString: (item) => item.label, // important
// //   });

// //   const isInvalid = Boolean(errorMessage);

// //   return (
// //     <Field.Root invalid={isInvalid} required={isRequired}>
// //       <Field.Label fontWeight="medium">{label}</Field.Label>

// //       <SelectRoot
// //         collection={collection}
// //         value={value ? [value] : []}
// //         onValueChange={onValueChange}
// //       >
// //         <SelectTrigger
// //           borderColor="#e9e5e5"
// //           _hover={{ borderColor: "brand.primary" }}
// //           _focus={{ borderColor: "brand.primary", ring: "1px", ringColor: "brand.primary" }}
// //         >
// //           <SelectValueText placeholder={placeholder} />

// //           <SelectIndicator>
// //             <AiOutlineDown size={18} /> {/* ✅ React icon */}
// //           </SelectIndicator>
// //         </SelectTrigger>

// //         <SelectContent>
// //           {collection.items.map((option) => (
// //             <SelectItem
// //               item={option}
// //               key={option.value}
// //               cursor="pointer"
// //               _hover={{ bg: "brand.primary", color: "brand.white" }}
// //               _highlighted={{ bg: "brand.primary", color: "brand.white" }}
// //             >
// //               {option.label}
// //             </SelectItem>
// //           ))}
// //         </SelectContent>
// //       </SelectRoot>

// //       {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
// //     </Field.Root>
// //   );
// // };

// // export default SelectField;


// // ... (imports and interfaces stay the same)

// const SelectField: React.FC<SelectProps> = ({
//   label,
//   options,
//   placeholder = "Select",
//   value,
//   onValueChange,
//   isRequired = false,
//   errorMessage,
// }) => {
//   const collection = createListCollection({
//     items: options,
//   });

//   const isInvalid = Boolean(errorMessage);

//   return (
//     <Field.Root invalid={isInvalid} required={isRequired}>
//       <Field.Label fontWeight="medium">{label}</Field.Label>

//       <SelectRoot
//         collection={collection}
//         value={value ? [value] : []}
//         onValueChange={onValueChange}
//       >
//         <SelectTrigger
//           borderColor="#e9e5e5"
//           _hover={{ borderColor: "brand.primary" }}
//           _focus={{ borderColor: "brand.primary", ring: "1px", ringColor: "brand.primary" }}
//         >
//           <SelectValueText placeholder={placeholder} />

//           {/* Indicator behavior fixed */}
//           <SelectIndicator>
//             <AiOutlineDown size={14} /> 
//           </SelectIndicator>
//         </SelectTrigger>

//         {/* <SelectContent
//           maxH="200px" // 👈 Maximum height inga set pannunga
//           overflowY="auto" // 👈 Scroll vara idhu mukkiyam
//           css={{
//             // Scrollbar-ai hide panna intha styling use pannunga
//             "&::-webkit-scrollbar": {
//               display: "none",
//             },
//             msOverflowStyle: "none",
//             scrollbarWidth: "none",
//           }}
//         >
//           {collection.items.map((option) => (
//             <SelectItem
//               item={option}
//               key={option.value}
//               cursor="pointer"
//               _hover={{ bg: "brand.primary", color: "white" }}
//               _highlighted={{ bg: "brand.primary", color: "white" }}
//             >
//               {option.label}
//             </SelectItem>
//           ))}
//         </SelectContent> */}
//         <SelectContent
//   maxH="250px"
//   overflowY="auto"
//   css={{
//     // 1. Scrollbar overall width
//     "&::-webkit-scrollbar": {
//       width: "5px",
//     },
//     // 2. Scrollbar track (pinnaadi irukura path)
//     "&::-webkit-scrollbar-track": {
//       background: "transparent",
//     },
//     // 3. Scrollbar thumb (antha moving indicator)
//     "&::-webkit-scrollbar-thumb": {
//       background: "gray.300",
//       borderRadius: "10px",
//     },
//     // Hover pannum pothu indicator dark-ah theriyum
//     "&::-webkit-scrollbar-thumb:hover": {
//       background: "brand.primary",
//     },
//   }}
// >
//   {collection.items.map((option) => (
//     <SelectItem
//       item={option}
//       key={option.value}
//       _highlighted={{ bg: "brand.primary", color: "white" }}
//     >
//       {option.label}
//     </SelectItem>
//   ))}
// </SelectContent>
//       </SelectRoot>

//       {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
//     </Field.Root>
//   );
// };

// export default SelectField;



















import React from "react";
import { Box, Field, createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectIndicator,
} from "@chakra-ui/react/select";
import { FaSortDown } from "react-icons/fa";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onValueChange?: (details: { value: string[] }) => void;
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
      <Field.Label fontWeight="medium">{label}</Field.Label>

      <SelectRoot
        collection={collection}
        value={value ? [value] : []}
        onValueChange={onValueChange}
      >
        <SelectTrigger
          borderColor="#e9e5e5"
          _hover={{ borderColor: "brand.primary" }}
          _focus={{ borderColor: "brand.primary", ring: "1px", ringColor: "brand.primary" }}
        >
          <SelectValueText placeholder={placeholder} />

          {/* Indicator behavior fixed */}
          <SelectIndicator>
            <Box mb={1}>
              <FaSortDown size={16} />
            </Box>
          </SelectIndicator>
        </SelectTrigger>


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
      </SelectRoot>

      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default SelectField;
// // import { Field, RadioGroup, Stack } from "@chakra-ui/react";

// // const RadioField = ({
// //   label,
// //   options,
// //   value,
// //   onValueChange,
// //   isRequired = false,
// //   errorMessage,
// //   direction = "column",
// // }: any) => {
// //   const isInvalid = Boolean(errorMessage);

// //   return (
// //     <Field.Root invalid={isInvalid} required={isRequired}>
// //       <Field.Label fontWeight="medium">{label}</Field.Label>

// //       <RadioGroup.Root
// //         value={value}
// //         onValueChange={(details: any) =>
// //           onValueChange?.(details.value)
// //         }
// //       >
// //         <Stack direction={direction} gap="4">
// //           {options.map((option: any) => (
// //             <RadioGroup.Item
// //               key={option.value}
// //               value={option.value}
// //             >
// //               {/* 🔴 THIS IS IMPORTANT */}
// //               <RadioGroup.ItemHiddenInput />

// //               <RadioGroup.ItemControl />
// //               <RadioGroup.ItemText>
// //                 {option.label}
// //               </RadioGroup.ItemText>
// //             </RadioGroup.Item>
// //           ))}
// //         </Stack>
// //       </RadioGroup.Root>

// //       {isInvalid && (
// //         <Field.ErrorText>{errorMessage}</Field.ErrorText>
// //       )}
// //     </Field.Root>
// //   );
// // };

// // export default RadioField;



// import { Field, RadioGroup, Stack } from "@chakra-ui/react";

// const RadioField = ({
//   label,
//   options,
//   value,
//   onValueChange,
//   isRequired = false,
//   errorMessage,
//   direction = "column",
// }: any) => {
//   const isInvalid = Boolean(errorMessage);

//   return (
//     <Field.Root invalid={isInvalid} required={isRequired}>
//       <Field.Label fontWeight="medium">{label}</Field.Label>

//       <RadioGroup.Root
//         value={value}
//         size="sm"
//         variant="outline"
//         colorPalette="brand.primary" 
//         onValueChange={(details: any) => onValueChange?.(details.value)}
//       >
//         <Stack direction={direction} gap="2">
//           {options.map((option: any) => (
//             <RadioGroup.Item
//               key={option.value}
//               value={option.value}
//               cursor="pointer"
//             >
//               <RadioGroup.ItemHiddenInput />
//               <RadioGroup.ItemControl />
//               <RadioGroup.ItemText fontSize="sm" color="brand.secondary">
//                 {option.label}
//               </RadioGroup.ItemText>
//             </RadioGroup.Item>
//           ))}
//         </Stack>
//       </RadioGroup.Root>

//       {isInvalid && (
//         <Field.ErrorText>{errorMessage}</Field.ErrorText>
//       )}
//     </Field.Root>
//   );
// };

// export default RadioField;










import { Field, RadioGroup, Stack, For } from "@chakra-ui/react";

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
      {label && <Field.Label fontWeight="medium">{label}</Field.Label>}

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
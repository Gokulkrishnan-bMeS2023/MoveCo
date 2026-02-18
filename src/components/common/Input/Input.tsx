import React from "react";
import { Field, Input, InputGroup, Text } from "@chakra-ui/react";

export interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
}

const InputField: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isRequired = false,
  errorMessage,
  leftIcon,
}) => {
  const isInvalid = Boolean(errorMessage);

  return (
    <Field.Root invalid={isInvalid} required={isRequired}>
      {label && <Field.Label fontWeight="medium" display="block">
        <Text as="span">
          {label}
          {isRequired && (
            <Text fontWeight={"500"} fontSize={16} as="span" color="brand.red" ml={1}>
              *
            </Text>
          )}
        </Text>
      </Field.Label>
      }
      <InputGroup startElement={leftIcon}>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          outline="none"
          focusRing="inside"
          focusRingColor="brand.primary"
          _focusVisible={{
            borderColor: "brand.primary",
          }}
        />
      </InputGroup>
      {isInvalid && <Field.ErrorText color="brand.red" fontWeight="400">{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default InputField;

// import React from "react";
// import { Field, Input, InputGroup, Text } from "@chakra-ui/react";

// export interface InputProps {
//   label: string;
//   type?: string;
//   placeholder?: string;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   isRequired?: boolean;
//   errorMessage?: string;
//   leftIcon?: React.ReactNode;
// }

// const InputField: React.FC<InputProps> = ({
//   label,
//   type = "text",
//   placeholder,
//   value = "",
//   onChange,
//   isRequired = false,
//   errorMessage,
//   leftIcon,
// }) => {
//   const isInvalid = Boolean(errorMessage);

//   // ✅ Regex rules to restrict typing
//   const regexRules: Record<string, RegExp> = {
//     tel: /^[0-9]*$/, // only numbers
//     number: /^[0-9]*$/, // only numbers
//     email: /^[^\s]*$/, // no spaces allowed
//     text: /^[A-Za-z\s]*$/, // only letters + space
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     const pattern = regexRules[type];

//     if (pattern) {
//       if (pattern.test(newValue)) {
//         onChange?.(e);
//       }
//     } else {
//       onChange?.(e);
//     }
//   };

//   return (
//     <Field.Root invalid={isInvalid} required={isRequired}>
//       {label && (
//         <Field.Label fontWeight="medium" display="block">
//           <Text as="span">
//             {label}
//             {isRequired && (
//               <Text
//                 fontWeight="500"
//                 fontSize={16}
//                 as="span"
//                 color="brand.red"
//                 ml={1}
//               >
//                 *
//               </Text>
//             )}
//           </Text>
//         </Field.Label>
//       )}

//       <InputGroup startElement={leftIcon}>
//         <Input
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={handleChange} // 👈 restricted typing
//           outline="none"
//           focusRing="inside"
//           focusRingColor="brand.primary"
//           _focusVisible={{
//             borderColor: "brand.primary",
//           }}
//         />
//       </InputGroup>

//       {isInvalid && (
//         <Field.ErrorText color="brand.red" fontWeight="400">
//           {errorMessage}
//         </Field.ErrorText>
//       )}
//     </Field.Root>
//   );
// };

// export default InputField;

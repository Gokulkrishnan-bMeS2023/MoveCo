// import {
//   Button as ChakraButton,
//   useToken,
//   type ButtonProps,
//   HStack,
// } from "@chakra-ui/react";
// import React from "react";

// interface CommonButtonProps extends Omit<ButtonProps, "variant"> {
//   label?: string;
//   variant: "primary" | "outline" | "warning";
//   fontSize?: string;
//   rounded?: string;
//   px?: number | string;
//   py?: number | string;
//   onClick?: () => void;
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode; 
//   children?: React.ReactNode; 
//   href?: string;
//   as?: any;
// }

// const Button = ({
//   label,
//   variant,
//   fontSize = "md",
//   rounded = "md",
//   px = 6,
//   py = 5,
//   onClick,
//   leftIcon,
//   rightIcon, 
//   children,
//   href,
//   as,
//   ...props
// }: CommonButtonProps) => {
//   const [primary, white, warning, secondary] = useToken("colors", [
//     "brand.primary",
//     "brand.white",
//     "brand.warning",
//     "brand.secondary",
//   ]);

//   let styleProps: any = {};

//   switch (variant) {
//     case "primary":
//       styleProps = {
//         bg: primary,
//         color: white,
//       };
//       break;
//     case "warning":
//       styleProps = {
//         bg: warning,
//         color: secondary,
//         _hover: { bg: white, color: secondary },
//       };
//       break;
//     case "outline":
//       styleProps = {
//         bg: white,
//         color: primary,
//         border: `1px solid ${primary}`,
//         _hover: { bg: primary, color: white },
//       };
//       break;
//     default:
//       styleProps = {
//         bg: primary,
//         color: white,
//         border: `1px solid ${primary}`,
//       };
//       break;
//   }

//   return (
//     <ChakraButton
//       fontSize={fontSize}
//       rounded={rounded}
//       px={px}
//       py={py}
//       fontWeight="400"
//       transition="all 0.2s"
//       onClick={onClick}
//       href={href}
//       as={as}
//       {...styleProps}
//       {...props}
//     >
//       {children ? (
//         children
//       ) : (
//         <HStack gap={2} justify="center">
//           {leftIcon && <span>{leftIcon}</span>}
//           {label && <span>{label}</span>}
//           {rightIcon && <span>{rightIcon}</span>}
//         </HStack>
//       )}
//     </ChakraButton>
//   );
// };

// export default Button;








import {
  Button as ChakraButton,
  useToken,
  type ButtonProps,
  HStack,
} from "@chakra-ui/react";
import React from "react";

interface CommonButtonProps extends Omit<ButtonProps, "variant"> {
  label?: string;
  variant: "primary" | "outline" | "warning";
  fontSize?: string;
  rounded?: string;
  px?: number | string;
  py?: number | string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  as?: any;
}

const Button = ({
  label,
  variant,
  fontSize = "md",
  rounded = "md",
  px = 6,
  py = 5,
  onClick,
  leftIcon,
  rightIcon,
  children,
  href,
  as,
  ...props
}: CommonButtonProps) => {
  const [primary, white, warning, secondary] = useToken("colors", [
    "brand.primary",
    "brand.white",
    "brand.warning",
    "brand.secondary",
  ]);

  let styleProps: any = {};

  switch (variant) {
    case "primary":
      styleProps = {
        bg: primary,
        color: white,
      };
      break;
    case "warning":
      styleProps = {
        bg: warning,
        color: secondary,
        _hover: { bg: white, color: secondary },
      };
      break;
    case "outline":
      styleProps = {
        bg: white,
        color: primary,
        border: `1px solid ${primary}`,
        _hover: { bg: primary, color: white },
      };
      break;
    default:
      styleProps = {
        bg: primary,
        color: white,
        border: `1px solid ${primary}`,
      };
      break;
  }

  return (
    <ChakraButton
      fontSize={fontSize}
      rounded={rounded}
      px={px}
      py={py}
      fontWeight="400"
      transition="all 0.2s"
      onClick={onClick}
      href={href}
      as={as}
      role="group"   // 👈 IMPORTANT
      _groupHover={{
        ".right-icon": {
          transform: "translate(3px, -3px)", // ↗ move
        },
      }}
      {...styleProps}
      {...props}
    >
      {children ? (
        children
      ) : (
        <HStack gap={2} justify="center">
          {leftIcon && <span>{leftIcon}</span>}

          {label && <span>{label}</span>}

          {rightIcon && (
            <span
              className="right-icon"
              style={{
                display: "flex",
                transition: "transform 0.3s ease",
              }}
            >
              {rightIcon}
            </span>
          )}
        </HStack>
      )}
    </ChakraButton>
  );
};

export default Button;
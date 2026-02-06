import {
  Button as ChakraButton,
  useToken,
  type ButtonProps,
  HStack,
} from "@chakra-ui/react";
import React from "react";

interface CommonButtonProps extends Omit<ButtonProps, "variant"> {
  label: string;
  variant: "primary" | "outline" | "warning"; // chakra variant conflict avoid
  fontSize?: string;
  rounded?: string;
  px?: number | string;
  py?: number | string;
  onClick?: () => void;
  leftIcon?: React.ReactNode; // icon on the right
  href?: string; // ✅ add this
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
  href,
  as,
  ...props
}: CommonButtonProps) => {
  const [primary, white, warning,secondary] = useToken("colors", ["brand.primary", "brand.white", "brand.warning", "brand.secondary"]);

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
      {...styleProps}
      {...props}
    >
      <HStack gap={2} justify="center">
        {leftIcon && <span>{leftIcon}</span>}
        <span>{label}</span>
      </HStack>
    </ChakraButton>
  );
};

export default Button;

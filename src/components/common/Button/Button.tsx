import {
  Button as ChakraButton,
  useToken,
  type ButtonProps,
  HStack,
  Text
} from "@chakra-ui/react";
import React from "react";

interface CommonButtonProps extends Omit<ButtonProps, "variant"> {
  label?: string;
  variant: "primary" | "outline" | "warning";
  textStyle?: string;
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
  textStyle= "size-md",
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
    fontWeight="400"
      rounded={rounded}
      px={px}
      py={py}
      transition="all 0.2s"
      onClick={onClick}
      href={href}
      as={as}
      role="group"
      {...styleProps}
      {...props}
    >
      {children ? (
        children
      ) : (
        <HStack gap={2} justify="center" align="center">
          {leftIcon && <span>{leftIcon}</span>}

          {label && <Text textStyle={textStyle}>{label}</Text>}

          {rightIcon && <span>{rightIcon}</span>}
        </HStack>
      )}
    </ChakraButton>
  );
};

export default Button;

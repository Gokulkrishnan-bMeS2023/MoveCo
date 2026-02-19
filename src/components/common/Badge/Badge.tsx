import { Box } from "@chakra-ui/react";

interface CommonButtonProps {
  label?: string;
}

const Button = ({ label }: CommonButtonProps) => {
  return (
    <Box
      px={6}
      py={2}
      fontWeight="400"
      transition="all 0.2s"
      fontSize="xl"
      rounded="full"
      mb={{ base: 4, lg: 6 }}
      bg={"brand.primary"}
      w={"fit-content"}
      color={"brand.white"}
    >
      {label}
    </Box>
  );
};

export default Button;

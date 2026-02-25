import { Box } from "@chakra-ui/react";

interface CommonBadgeProps {
  label?: string;
  mb?: any;
}

const Badge = ({ label, mb }: CommonBadgeProps) => {
  return (
    <Box
      px={6}
      py={2}
      fontWeight="400"
      transition="all 0.2s"
      textStyle="xl"
      rounded="full"
      bg="brand.primary"
      w="fit-content"
      color="brand.white"
      mb={mb}
    >
      {label}
    </Box>
  );
};

export default Badge;

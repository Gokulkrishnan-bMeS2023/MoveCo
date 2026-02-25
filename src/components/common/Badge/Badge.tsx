import { Box } from "@chakra-ui/react";

interface CommonBadgeProps {
  label?: string;
  mb?: any;
}

const Badge = ({ label }: CommonBadgeProps) => {
  return (
    <Box
      px={6}
      py={2}
      fontWeight="400"
      transition="all 0.2s"
      fontSize="xl"
      rounded="full"
      bg="brand.primary"
      w="fit-content"
      color="brand.white"
      mb={4}
    >
      {label}
    </Box>
  );
};

export default Badge;

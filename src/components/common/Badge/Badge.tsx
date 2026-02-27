import { Box ,Text } from "@chakra-ui/react";

interface CommonBadgeProps {
  label?: string;
  mb?: any;
}

const Badge = ({ label,mb }: CommonBadgeProps) => {
  return (
    <Box
      px={6}
      py={2}
      transition="all 0.2s"
      rounded="full"
      bg="brand.primary"
      w="fit-content"
      color="brand.white"
      mb={mb}
    >
      <Text textStyle="size-xl" fontWeight="400">
      {label}
      </Text>
    </Box>
  );
};

export default Badge;

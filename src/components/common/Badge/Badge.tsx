import { Box } from "@chakra-ui/react";

interface CommonBadgeProps {
  label?: string;
}

const Badge = ({ label }: CommonBadgeProps) => {
  return (
    <Box
      px={6}
      py={1.5}
      fontWeight="400"
      transition="all 0.2s"
      fontSize="xl"
      rounded="full"
      // mb={{ base: 4, lg: 6 }}
      bg={"brand.primary"}
      w={"fit-content"}
      color={"brand.white"}
    >
      {label}
    </Box>
  );
};

export default Badge;

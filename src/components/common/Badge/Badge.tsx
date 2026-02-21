// import { Box } from "@chakra-ui/react";

// interface CommonButtonProps {
//   label?: string;
// }

// const Button = ({ label }: CommonButtonProps) => {
//   return (
//     <Box
//       px={6}
//       py={2}
//       fontWeight="400"
//       transition="all 0.2s"
//       fontSize="xl"
//       rounded="full"
//       // mb={{ base: 4, lg: 6 }}
//       bg={"brand.primary"}
//       w={"fit-content"}
//       color={"brand.white"}
//     >
//       {label}
//     </Box>
//   );
// };

// export default Button;


import { Box } from "@chakra-ui/react";

interface CommonBadgeProps {
  label?: string;
  mb?: any; // optional margin-bottom
}

const Badge = ({ label, mb }: CommonBadgeProps) => {
  return (
    <Box
      px={{base:2, md:6}}
      py={2}
      fontWeight="400"
      transition="all 0.2s"
      fontSize="xl"
      rounded="full"
      bg="brand.primary"
      w="fit-content"
      color="brand.white"
      mb={mb}   // control from outside
    >
      {label}
    </Box>
  );
};

export default Badge;
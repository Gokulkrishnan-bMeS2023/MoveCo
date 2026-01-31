import { Box, Spinner, Text, Stack } from "@chakra-ui/react";

const AppLoader = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.bgGray"
    >
      <Stack align="center" gap={4}>
        <Spinner size="xl" color="brand.primary" />
        <Text textStyle="size-lg" color="brand.secondary">
          Loading, please wait...
        </Text>
      </Stack>
    </Box>
  );
};

export default AppLoader;

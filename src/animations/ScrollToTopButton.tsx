import { useEffect, useState } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <Box
      position="fixed"
      bottom={20}
      right={{ base: 4, md: 6 }}
      zIndex={9999}
      w={{ base: "42px", md: "48px" }}
      h={{ base: "42px", md: "48px" }}
      bg="brand.primary"
      color="white"
      rounded="md"
      border="1px solid"
      borderColor="brand.primary"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      boxShadow="sm"
      transition="all 0.2s ease"
      onClick={scrollToTop}
      _hover={{ bg: "brand.secondary", borderColor: "brand.secondary" }}
      _active={{ transform: "scale(0.95)" }}
    >
      <Icon as={FaArrowUp} boxSize={{ base: 4, md: 5 }} />
    </Box>
  );
};

export default ScrollToTopButton;

import { useEffect, useState } from "react";
import { Box, Icon, Circle } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / windowHeight) * 100;

      setVisible(scrolled > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      position="fixed"
      bottom={{ base: 6, md: 8 }}
      right={{ base: 6, md: 8 }}
      zIndex={9999}
      opacity={visible ? 1 : 0}
      transform={
        visible ? "scale(1) translateY(0)" : "scale(0.8) translateY(20px)"
      }
      transition="all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      pointerEvents={visible ? "auto" : "none"}
    >
      {/* Outer glow circle */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="70px"
        h="70px"
        rounded="full"
        bg="brand.primary"
        opacity={0.2}
        animation="pulse 2s ease-in-out infinite"
        css={{
          "@keyframes pulse": {
            "0%, 100%": {
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 0.2,
            },
            "50%": {
              transform: "translate(-50%, -50%) scale(1.2)",
              opacity: 0,
            },
          },
        }}
      />

      {/* Progress circle SVG */}
      <svg
        width="60"
        height="60"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg)",
        }}
      >
        {/* Background circle */}
        <circle
          cx="30"
          cy="30"
          r="26"
          fill="none"
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth="3"
        />
        {/* Progress circle */}
        <circle
          cx="30"
          cy="30"
          r="26"
          fill="none"
          stroke="var(--chakra-colors-brand-primary)"
          strokeWidth="3"
          strokeDasharray={`${2 * Math.PI * 26}`}
          strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.1s ease",
          }}
        />
      </svg>

      {/* Main button */}
      <Circle
        size="54px"
        bg="brand.primary"
        color="white"
        cursor="pointer"
        position="relative"
        boxShadow="0 8px 24px rgba(0, 0, 0, 0.15)"
        transition="all 0.3s ease"
        onClick={scrollToTop}
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
          bg: "brand.secondary",
        }}
        _active={{
          transform: "translateY(-2px) scale(0.95)",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
        }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          rounded: "full",
          bg: "white",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
        css={{
          "&:hover::before": {
            opacity: 0.1,
          },
        }}
      >
        {/* Arrow icon with animation */}
        <Icon
          as={FaArrowUp}
          boxSize={5}
          animation="bounce 2s ease-in-out infinite"
          css={{
            "@keyframes bounce": {
              "0%, 100%": {
                transform: "translateY(0)",
              },
              "50%": {
                transform: "translateY(-4px)",
              },
            },
          }}
        />
      </Circle>

      {/* Ripple effect on click */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="54px"
        h="54px"
        rounded="full"
        pointerEvents="none"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          rounded: "full",
          border: "2px solid",
          borderColor: "brand.primary",
          opacity: 0,
        }}
        css={{
          "&:active::after": {
            animation: "ripple 0.6s ease-out",
          },
          "@keyframes ripple": {
            "0%": {
              transform: "scale(1)",
              opacity: 1,
            },
            "100%": {
              transform: "scale(1.5)",
              opacity: 0,
            },
          },
        }}
      />
    </Box>
  );
};

export default ScrollToTopButton;

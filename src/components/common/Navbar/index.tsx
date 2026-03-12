import { Box, Flex, Text, Stack, Span, Container } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { FiPhone, FiMenu, FiX, FiUsers, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { RouteName } from "../../../app/routeNames";
import { isNavLink, isNavGroup, type NavItem } from "./nav";
import { NAV_ITEMS } from "./navItems";

interface NavItemProps {
  item: NavItem;
}

const DesktopNavItem = ({ item }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <Box
      position="relative"
      px={4}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Text
        position="relative"
        fontWeight="600"
        cursor="pointer"
        color={isOpen ? "brand.primary" : "brand.secondary"}
        onClick={() => isNavLink(item) && handleNavigation(item.path)}
        transition="color 0.3s ease"
        _after={{
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: "-6px",
          width: isOpen ? "32px" : "0px",
          height: "3px",
          bg: "brand.primary",
          borderRadius: "full",
          transform: "translateX(-50%)",
          transition: "width 0.3s ease",
        }}
      >
        {item.label}
      </Text>

      {isNavGroup(item) && isOpen && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          bg="brand.white"
          py={2}
          minW="240px"
          rounded="md"
          shadow="lg"
          zIndex={1500}
          border="1px solid"
          borderColor="gray.100"
          animation="slideDown 0.3s ease"
          css={{
            "@keyframes slideDown": {
              from: { opacity: 0, transform: "translateY(-10px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {item.items.map((child, index) => (
            <Box
              key={child.label}
              px={4}
              py={2.5}
              fontWeight="500"
              textStyle="sm"
              cursor="pointer"
              color="gray.700"
              transition="all 0.3s ease"
              animation={`fadeInLeft 0.3s ease ${index * 0.05}s both`}
              css={{
                "@keyframes fadeInLeft": {
                  from: { opacity: 0, transform: "translateX(-10px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
              }}
              _hover={{
                bg: "brand.primary",
                color: "white",
                transform: "translateX(4px)",
              }}
              onClick={() => handleNavigation(child.path)}
            >
              {child.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

interface MobileNavItemProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

const MobileNavItem = ({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: MobileNavItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isNavGroup(item)) {
      onToggle();
    } else {
      navigate(item.path);
      onNavigate();
    }
  };

  const handleChildClick = (path: string) => {
    navigate(path);
    onNavigate();
  };

  return (
    <Box w="100%">
      <Flex
        align="center"
        justify="space-between"
        cursor="pointer"
        onClick={handleClick}
        py={3}
        px={4}
        rounded="lg"
        bg={isOpen ? "brand.primary/10" : "transparent"}
        transition="all 0.3s ease"
        _hover={{
          bg: isOpen ? "brand.primary/15" : "gray.50",
          transform: "translateX(2px)",
        }}
        _active={{ transform: "scale(0.98)" }}
      >
        <Text
          fontWeight="600"
          textStyle="md"
          color={isOpen ? "brand.primary" : "brand.secondary"}
          transition="color 0.3s ease"
        >
          {item.label}
        </Text>

        {isNavGroup(item) && (
          <Box
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.4s ease"
            color={isOpen ? "brand.primary" : "brand.secondary"}
          >
            <FiChevronDown size={20} />
          </Box>
        )}
      </Flex>

      {isNavGroup(item) && (
        <Box
          overflow="hidden"
          maxH={isOpen ? "500px" : "0"}
          opacity={isOpen ? 1 : 0}
          transition="all 0.4s ease"
        >
          <Stack
            mt={2}
            mb={2}
            gap={1}
            pl={4}
            borderLeft="2px solid"
            borderColor="brand.primary"
            ml={4}
          >
            {item.items.map((child, index) => (
              <Text
                key={child.label}
                cursor="pointer"
                py={2}
                px={3}
                textStyle="sm"
                fontWeight="500"
                color="gray.600"
                rounded="md"
                transition="all 0.3s ease"
                animation={
                  isOpen ? `slideIn 0.3s ease ${index * 0.05}s both` : "none"
                }
                css={{
                  "@keyframes slideIn": {
                    from: { opacity: 0, transform: "translateX(-20px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                  },
                }}
                _hover={{
                  color: "brand.primary",
                  bg: "gray.50",
                  transform: "translateX(4px)",
                  shadow: "sm",
                }}
                _active={{ transform: "translateX(2px) scale(0.98)" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleChildClick(child.path);
                }}
              >
                {child.label}
              </Text>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleSubmenu = (label: string) =>
    setOpenSubmenu(openSubmenu === label ? null : label);
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) setOpenSubmenu(null);
  };

  return (
    <Box pt={6} ref={navbarRef}>
      <Container py={0}>
        <Box
          bg="brand.white"
          px={{ base: 5, lg: 10 }}
          rounded="full"
          shadow="xl"
          position="relative"
          zIndex={1000}
          transition="all 0.3s ease"
        >
          <Flex h="70px" align="center" justify="space-between">
            {/* Logo */}
            <Text
              textStyle="size-2xl"
              fontWeight="500"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
              _active={{ transform: "scale(0.95)" }}
              onClick={() => navigate(RouteName.HOME)}
            >
              Move<Span color="brand.primary">Co</Span>
            </Text>

            {/* Desktop Nav */}
            <Flex display={{ base: "none", lg: "flex" }} align="center">
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </Flex>

            {/* Desktop Actions */}
            <Flex
              display={{ base: "none", lg: "flex" }}
              gap={4}
              alignItems="center"
            >
              <Button
                label="Contact Us"
                variant="outline"
                leftIcon={<FiPhone />}
                rounded="full"
                onClick={() => navigate(RouteName.CONTACT_US)}
              />
              <Box
                bg="brand.primary"
                p={3}
                rounded="full"
                color="white"
                border="1px solid"
                borderColor="brand.primary"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  bg: "white",
                  color: "brand.primary",
                  transform: "rotate(15deg) scale(1.1)",
                }}
                _active={{ transform: "rotate(0deg) scale(0.95)" }}
                onClick={() =>
                  navigate(RouteName.CONTACT_US, {
                    state: { focus: "friend-form" },
                  })
                }
              >
                <FiUsers size={20} />
              </Box>
            </Flex>

            {/* Mobile Icons */}
            <Flex display={{ base: "flex", lg: "none" }} gap={3} align="center">
              <Box
                bg="brand.primary"
                p={2}
                rounded="full"
                color="white"
                border="1px solid"
                borderColor="brand.primary"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  bg: "white",
                  color: "brand.primary",
                  transform: "scale(1.1)",
                }}
                _active={{ transform: "scale(0.9)" }}
                onClick={() =>
                  navigate(RouteName.CONTACT_US, {
                    state: { focus: "friend-form" },
                  })
                }
              >
                <FiUsers />
              </Box>
              <Box
                onClick={toggleMenu}
                cursor="pointer"
                color="brand.secondary"
                transition="all 0.3s ease"
                _hover={{ color: "brand.primary", transform: "scale(1.1)" }}
                _active={{ transform: "scale(0.9)" }}
              >
                {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
              </Box>
            </Flex>
          </Flex>

          {/* Mobile Menu */}
          {menuOpen && (
            <Box
              position="absolute"
              top="100%"
              left={0}
              right={0}
              mt={4}
              bg="white"
              rounded="xl"
              shadow="2xl"
              p={5}
              display={{ base: "block", lg: "none" }}
              border="1px solid"
              borderColor="gray.100"
              maxH="calc(100vh - 150px)"
              overflowY="auto"
              animation="fadeInDown 0.4s ease"
              css={{
                "@keyframes fadeInDown": {
                  from: { opacity: 0, transform: "translateY(-20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-track": { background: "transparent" },
                "&::-webkit-scrollbar-thumb": {
                  background: "var(--chakra-colors-brand-primary)",
                  borderRadius: "3px",
                },
              }}
            >
              <Stack gap={2}>
                {NAV_ITEMS.map((item, index) => (
                  <Box
                    key={item.label}
                    animation={`fadeInUp 0.3s ease ${index * 0.08}s both`}
                    css={{
                      "@keyframes fadeInUp": {
                        from: { opacity: 0, transform: "translateY(20px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                  >
                    <MobileNavItem
                      item={item}
                      isOpen={openSubmenu === item.label}
                      onToggle={() => toggleSubmenu(item.label)}
                      onNavigate={closeMobileMenu}
                    />
                  </Box>
                ))}

                <Box
                  pt={4}
                  borderTop="1px solid"
                  borderColor="gray.100"
                  mt={2}
                  animation="fadeIn 0.5s ease 0.4s both"
                  css={{
                    "@keyframes fadeIn": {
                      from: { opacity: 0 },
                      to: { opacity: 1 },
                    },
                  }}
                >
                  <Button
                    label="Contact Us"
                    variant="outline"
                    leftIcon={<FiPhone />}
                    rounded="full"
                    w="full"
                    onClick={() => {
                      navigate(RouteName.CONTACT_US);
                      closeMobileMenu();
                    }}
                  />
                </Box>
              </Stack>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

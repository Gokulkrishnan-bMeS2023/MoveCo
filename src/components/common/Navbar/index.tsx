import { Box, Flex, Text, Stack, Span, Container } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { FiPhone, FiMenu, FiX, FiUsers, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export const NAV_ITEMS = [
  { label: "Home", path: "/" },

  {
    label: "About Us",
    items: [
      { label: "About MoveCo", path: "/about-us" },
      { label: "Our Insurance", path: "/our-insurance" },
      { label: "Our Standards", path: "/our-standard" },
      { label: "Job Application", path: "/job-application" },
      {
        label: "Associate Code of Conduct",
        path: "/associate-code-of-conduct",
      },
      { label: "Supported Charity", path: "/supported-charity" },
    ],
  },

  {
    label: "Product & Services",
    items: [
      { label: "Instant Online Estimate", path: "/online-estimate" },
      { label: "In-Home Move Estimate", path: "/in-home-move-estimate" },
      { label: "Moving & Packing Supplies", path: "/product" },
      {
        label: "Professional Packing Services",
        path: "/professional-packing-services",
      },
      { label: "Storage", path: "/storage" },
    ],
  },

  {
    label: "Resources",
    items: [
      { label: "Add Testimonial", path: "/add-testimonial" },
      { label: "Client Testimonial", path: "/client-testimonial" },
      { label: "Video Review", path: "/video-review" },
    ],
  },
];

/* ================= DESKTOP NAV ITEM ================= */

const NavItem = ({ label, items, path }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (navPath: string) => {
    navigate(navPath);
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
        onClick={() => handleNavigation(path)}
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
        {label}
      </Text>

      {items && isOpen && (
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
              from: {
                opacity: 0,
                transform: "translateY(-10px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {items.map((item: any, index: number) => (
            <Box
              key={item.label}
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
                  from: {
                    opacity: 0,
                    transform: "translateX(-10px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateX(0)",
                  },
                },
              }}
              _hover={{
                bg: "brand.primary",
                color: "white",
                transform: "translateX(4px)",
              }}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

/* ================= MOBILE NAV ITEM ================= */

const MobileNavItem = ({
  label,
  items,
  path,
  isOpen,
  onToggle,
  onNavigate,
}: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (items) {
      onToggle();
    } else {
      navigate(path);
      onNavigate();
    }
  };

  const handleItemClick = (itemPath: string) => {
    navigate(itemPath);
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
        _active={{
          transform: "scale(0.98)",
        }}
      >
        <Text
          fontWeight="600"
          textStyle="md"
          color={isOpen ? "brand.primary" : "brand.secondary"}
          transition="color 0.3s ease"
        >
          {label}
        </Text>

        {items && (
          <Box
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.4s ease"
            color={isOpen ? "brand.primary" : "brand.secondary"}
          >
            <FiChevronDown size={20} />
          </Box>
        )}
      </Flex>

      {/* Submenu with animation */}
      <Box
        overflow="hidden"
        maxH={isOpen ? "500px" : "0"}
        opacity={isOpen ? 1 : 0}
        transition="all 0.4s ease"
      >
        {items && (
          <Stack
            mt={2}
            mb={2}
            gap={1}
            pl={4}
            borderLeft="2px solid"
            borderColor="brand.primary"
            ml={4}
          >
            {items.map((item: any, index: number) => (
              <Text
                key={item.label}
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
                    from: {
                      opacity: 0,
                      transform: "translateX(-20px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
                _hover={{
                  color: "brand.primary",
                  bg: "gray.50",
                  transform: "translateX(4px)",
                  shadow: "sm",
                }}
                _active={{
                  transform: "translateX(2px) scale(0.98)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item.path);
                }}
              >
                {item.label}
              </Text>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

/* ================= NAVBAR ================= */

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();

  // Ref to the entire navbar wrapper for outside-click detection
  const navbarRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleSubmenuToggle = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setOpenSubmenu(null);
    }
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
          {/* LOGO */}
          <Text
            textStyle={"size-xl"}
            fontWeight="500"
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
            }}
            _active={{
              transform: "scale(0.95)",
            }}
            onClick={() => (window.location.href = "/")}
          >
            Move<Span color="brand.primary">Co</Span>
          </Text>

          {/* DESKTOP NAV */}
          <Flex display={{ base: "none", lg: "flex" }} align="center">
            {NAV_ITEMS.map((nav) => (
              <NavItem
                key={nav.label}
                label={nav.label}
                items={nav.items}
                path={nav.path}
              />
            ))}
          </Flex>

          {/* DESKTOP ACTIONS */}
          <Flex display={{ base: "none", lg: "flex" }} gap={4} alignItems={"center"}>
            <Button
              label="Contact Us"
              variant="outline"
              leftIcon={<FiPhone />}
              rounded="full"
              onClick={() => navigate("/contact-us")}
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
                borderColor: "brand.primary",
                transform: "rotate(15deg) scale(1.1)",
              }}
              _active={{
                transform: "rotate(0deg) scale(0.95)",
              }}
              onClick={() =>
                navigate("/contact-us", { state: { focus: "friend-form" } })
              }
            >
              <FiUsers size={20} />
            </Box>
          </Flex>

          {/* MOBILE ICONS */}
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
                borderColor: "brand.primary",
                transform: "scale(1.1)",
              }}
              _active={{
                transform: "scale(0.9)",
              }}
              onClick={() =>
                navigate("/contact-us", { state: { focus: "friend-form" } })
              }
            >
              <FiUsers />
            </Box>
            <Box
              onClick={toggleMenu}
              textStyle="28px"
              cursor="pointer"
              color="brand.secondary"
              transition="all 0.3s ease"
              _hover={{
                color: "brand.primary",
                transform: "scale(1.1)",
              }}
              _active={{
                transform: "scale(0.9)",
              }}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </Box>
          </Flex>
        </Flex>

        {/* MOBILE MENU */}
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
                from: {
                  opacity: 0,
                  transform: "translateY(-20px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "var(--chakra-colors-brand-primary)",
                borderRadius: "3px",
              },
            }}
          >
            <Stack gap={2}>
              {NAV_ITEMS.map((nav, index) => (
                <Box
                  key={nav.label}
                  animation={`fadeInUp 0.3s ease ${index * 0.08}s both`}
                  css={{
                    "@keyframes fadeInUp": {
                      from: {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  <MobileNavItem
                    label={nav.label}
                    items={nav.items}
                    path={nav.path}
                    isOpen={openSubmenu === nav.label}
                    onToggle={() => handleSubmenuToggle(nav.label)}
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
                    navigate("/contact-us");
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

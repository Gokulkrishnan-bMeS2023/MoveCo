import { Box, Flex, Text, Stack, Span } from "@chakra-ui/react";
import { useState } from "react";
import { FiPhone, FiUser, FiMenu, FiX, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

/* ================= NAV DATA ================= */

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/#",
    items: [
      { label: "About MoveCo", path: "/about-us" },
      { label: "Our Insurance", path: "/our-insurance" },
      { label: "Our Standards", path: "/our-standard" },
      { label: "Job Application", path: "/about/jobs" },
      { label: "Associate Code of Conduct", path: "/AssociateCodeofConduct" },
      { label: "Supported Charity", path: "/supported-charity" },
    ],
  },
  {
    label: "Product & Services",
    path: "/#",
    items: [
      { label: "Instant Online Estimate", path: "/estimate" },
      { label: "In-Home Move Estimate", path: "/inhome-estimate" },
      { label: "Moving & Packing Supplies", path: "/supplies" },
      {
        label: "Professional Packing Services",
        path: "/professionalpackingservices",
      },
      { label: "Storage", path: "/storages" },
    ],
  },
  {
    label: "Resources",
    path: "/#",
    items: [
      { label: "Add Testimonial", path: "/testimonial/add" },
      { label: "Client Testimonial", path: "/client-testimonial" },
      { label: "Video Review", path: "/video-review" },
    ],
  },
  { label: "Blog", path: "/blog" },
];

/* ================= DESKTOP NAV ITEM ================= */

const NavItem = ({ label, items, path }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
        onClick={() => navigate(path)}
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
          transition: "width 0.25s ease",
        }}
      >
        {label}
      </Text>

      {items && isOpen && (
        <Box
          position="absolute"
          top="100%"
          left="25"
          mt={1}
          bg="brand.white"
          py={2}
          minW="240px"
          rounded="md"
          shadow="lg"
          zIndex={1500}
        >
          {items.map((item: any) => (
            <Box
              key={item.label}
              px={4}
              py={2}
              fontWeight="600"
              cursor="pointer"
              _hover={{
                bg: "brand.bgGray",
                color: "brand.primary",
              }}
              onClick={() => navigate(item.path)}
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

const MobileNavItem = ({ label, items, path }: any) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Box w="100%" textAlign="center" onClick={() => navigate(path)}>
      <Box
        position="relative"
        display="inline-block"
        cursor="pointer"
        onClick={() => setOpen(!open)}
      >
        <Text
          fontWeight="600"
          color={open ? "brand.primary" : "brand.secondary"}
        >
          {label}
        </Text>

        <Box
          position="absolute"
          left="50%"
          bottom="-6px"
          h="3px"
          w={open ? "28px" : "0px"}
          bg="brand.primary"
          borderRadius="full"
          transform="translateX(-50%)"
          transition="width 0.25s ease"
        />
      </Box>

      {items && open && (
        <Stack mt={4} gap={3} align="center">
          {items.map((item: any) => (
            <Text
              key={item.label}
              cursor="pointer"
              _hover={{ color: "brand.primary" }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Text>
          ))}
        </Stack>
      )}
    </Box>
  );
};

/* ================= NAVBAR ================= */

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Box pt={6}>
      <Box
        bg="brand.white"
        mx={{ base: 6, lg: 8 }}
        px={{ base: 5, lg: 10 }}
        rounded="full"
        shadow="xl"
        position="relative"
        zIndex={1000}
      >
        <Flex h="70px" align="center" justify="space-between">
          {/* LOGO */}
          <Text
            textStyle="size-md"
            cursor="pointer"
            onClick={() => (window.location.href = "/")}
          >
            Move <Span color="brand.primary">Co</Span>
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
          <Flex display={{ base: "none", lg: "flex" }} gap={4}>
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
              color="brand.white"
              border="1px solid"
              _hover={{
                bg: "brand.white",
                color: "brand.primary",
                borderColor: "brand.primary",
              }}
            >
              <FiUsers size={20} />
            </Box>
          </Flex>

          {/* MOBILE ICONS */}
          <Flex display={{ base: "flex", lg: "none" }} gap={3}>
            <Box
              bg="brand.primary"
              p={2}
              rounded="full"
              color="brand.white"
              border="1px solid"
              _hover={{
                bg: "brand.white",
                color: "brand.primary",
                borderColor: "brand.primary",
              }}
            >
              <FiUser />
            </Box>
            <Box onClick={() => setMenuOpen(!menuOpen)} fontSize="32px">
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
            shadow="lg"
            p={6}
            display={{ base: "block", lg: "none" }}
          >
            <Stack gap={5}>
              {NAV_ITEMS.map((nav) => (
                <MobileNavItem
                  key={nav.label}
                  label={nav.label}
                  items={nav.items}
                  path={nav.path}
                />
              ))}

              <Button
                label="Contact Us"
                variant="outline"
                leftIcon={<FiPhone />}
                rounded="full"
                w="fit-content"
                alignSelf="center"
              />
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};

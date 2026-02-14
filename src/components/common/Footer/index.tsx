import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Heading,
  Stack,
  Grid,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import MoveCo from "../../../assets/moveco.webp";
import BBB from "../../../assets/card-item-3.webp";
import SMA from "../../../assets/smalogo.png";
import AMSA from "../../../assets/amsa-logo-blue.png";
import MFH from "../../../assets/mfh.svg";
import { useNavigate } from "react-router-dom";
import { memo, useMemo } from "react";

const RESPONSIVE_ALIGN = { base: "center", md: "flex-start" } as const;
const RESPONSIVE_TEXT_ALIGN = { base: "center", md: "start" } as const;

const CERTIFICATIONS = [
  { img: BBB, link: "https://www.bbb.org/", alt: "Better Business Bureau" },
  {
    img: SMA,
    link: "https://www.mytexasmover.com/",
    alt: "Southwest Movers Association",
  },
  {
    img: AMSA,
    link: "https://www.moving.org/",
    alt: "American Moving & Storage Association",
  },
  { img: MFH, link: "https://www.moveforhunger.org/", alt: "Move For Hunger" },
];

const CONTACT_INFO = [
  { label: "Local", number: "(972) 250-1100", href: "tel:9722501100" },
  { label: "Metro", number: "(817) 380-5398", href: "tel:8173805398" },
  { label: "Toll Free", number: "(800) 590-0928", href: "tel:8005900928" },
];

const SOCIAL_LINKS = [
  { icon: FaWhatsapp, link: "https://wa.me/18005900928", label: "WhatsApp" },
  { icon: FaInstagram, link: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebook, link: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, link: "https://youtube.com", label: "YouTube" },
];

const FOOTER_LINKS = [
  { label: "Terms of Service", path: "/terms-of-service" },
  { label: "Privacy Notice", path: "/privacy-policy" },
  { label: "Cookies Policy", path: "/cookies-policy" },
  { label: "Compliance", path: "/compliance" },
];

const LICENSING_INFO = [
  {
    label: "TX DMV Number",
    value: "006044279C",
    href: "https://www.txdmv.gov/motor-carriers",
  },
  {
    label: "US DOT Number",
    value: "#1432374",
    href: "https://safer.fmcsa.dot.gov/",
  },
  {
    label: "MC Number",
    value: "#541225",
    href: "https://safer.fmcsa.dot.gov/",
  },
];

// Subcomponents
const SocialMediaIcons = memo(() => (
  <Box pt="4">
    <Text
      textStyle="size-lg"
      fontWeight="600"
      color="brand.warning"
      mb="3"
      textAlign={RESPONSIVE_TEXT_ALIGN}
    >
      Follow Us
    </Text>
    <Flex gap="3" justifyContent={RESPONSIVE_ALIGN}>
      {SOCIAL_LINKS.map(({ icon: Icon, link, label }) => (
        <IconButton
          key={label}
          asChild
          aria-label={label}
          size="md"
          variant="outline"
          borderColor="whiteAlpha.300"
          color="brand.white"
          borderRadius="full"
          _hover={{
            bg: "brand.warning",
            color: "brand.secondary",
            borderColor: "brand.warning",
            transform: "translateY(-3px)",
            boxShadow: "0 4px 12px rgba(255, 215, 10, 0.3)",
          }}
          transition="all 0.3s"
        >
          <Link href={link} target="_blank">
            <Icon size={18} />
          </Link>
        </IconButton>
      ))}
    </Flex>
  </Box>
));
SocialMediaIcons.displayName = "SocialMediaIcons";

const ContactNumber = memo(
  ({
    label,
    number,
    href,
  }: {
    label: string;
    number: string;
    href: string;
  }) => (
    <Box w="100%">
      <Text
        textStyle="size-lg"
        color="brand.warning"
        mb="1"
        fontWeight="600"
        textTransform="uppercase"
        letterSpacing="wide"
        textAlign={RESPONSIVE_TEXT_ALIGN}
      >
        {label}
      </Text>
      <Link
        href={href}
        textStyle="size-xl"
        fontWeight="700"
        color="brand.white"
        _hover={{ color: "brand.warning", textDecoration: "none" }}
        transition="all 0.2s"
        display="block"
        textAlign={RESPONSIVE_TEXT_ALIGN}
      >
        {number}
      </Link>
    </Box>
  ),
);
ContactNumber.displayName = "ContactNumber";

const TollFreeBox = memo(() => (
  <Flex
    bg="brand.white"
    direction={{ base: "column", md: "row" }}
    alignItems="center"
    justifyContent="center"
    gap={4}
    py={2}
  >
    <Image
      src="https://d3eaozktcyljdh.cloudfront.net/themes/custom/txdmv/logo.svg"
      alt="TX DMV Certified"
      height="45px"
      width="auto"
      objectFit="contain"
    />
    <Flex alignItems="center" gap="2" direction={"row"} justify={"center"}>
      <Text
        textStyle="size-md"
        color="brand.black"
        textTransform="uppercase"
        letterSpacing="wider"
        textAlign={RESPONSIVE_TEXT_ALIGN}
      >
        24/7 Toll Free
      </Text>
      <Link
        href="tel:8005900928"
        textStyle="size-3xl"
        color="brand.black"
        _hover={{ color: "brand.warning" }}
        display="block"
        textAlign="center"
        letterSpacing="tight"
      >
        1 (888) 368-4689
      </Link>
    </Flex>
  </Flex>
));
TollFreeBox.displayName = "TollFreeBox";

const LicensingItem = memo(
  ({ label, value, href }: { label: string; value: string; href: string }) => (
    <Box textAlign={RESPONSIVE_TEXT_ALIGN}>
      <Text textStyle="size-lg" color="whiteAlpha.700" mb="1">
        {label}
      </Text>
      <Link
        href={href}
        target="_blank"
        color="brand.white"
        fontWeight="600"
        textStyle="size-lg"
        _hover={{ color: "brand.warning", textDecoration: "underline" }}
        transition="all 0.2s"
      >
        {value}
      </Link>
    </Box>
  ),
);
LicensingItem.displayName = "LicensingItem";

const CertificationGrid = memo(() => (
  <Grid gridTemplateColumns="repeat(2, 1fr)" gap="5" w="100%">
    {CERTIFICATIONS.map(({ img, link, alt }) => (
      <Link
        key={alt}
        href={link}
        target="_blank"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
        borderRadius="md"
        p="3"
        borderWidth="1px"
        borderColor="whiteAlpha.100"
        _hover={{
          transform: "scale(1.05)",
          borderColor: "brand.warning",
          boxShadow: "0 4px 12px rgba(255, 215, 10, 0.2)",
        }}
        transition="all 0.3s"
      >
        <Image
          src={img}
          alt={alt}
          height="45px"
          w="100%"
          objectFit="contain"
          opacity="0.85"
          _hover={{ opacity: 1 }}
        />
      </Link>
    ))}
  </Grid>
));
CertificationGrid.displayName = "CertificationGrid";

const Footer = () => {
  const navigate = useNavigate();

  const footerNavigation = useMemo(
    () =>
      FOOTER_LINKS.map((link, i) => (
        <Flex key={link.path} align="center">
          <Text
            onClick={() => navigate(link.path)}
            cursor="pointer"
            color="whiteAlpha.800"
            textStyle="size-lg"
            px="3"
            py="2"
            _hover={{ color: "brand.warning" }}
            transition="all 0.2s"
            whiteSpace="nowrap"
          >
            {link.label}
          </Text>
          {i < FOOTER_LINKS.length - 1 && (
            <Box height="14px" width="1px" bg="whiteAlpha.300" />
          )}
        </Flex>
      )),
    [navigate],
  );

  return (
    <Box
      as="footer"
      bg="brand.secondary"
      color="brand.white"
      w="100%"
      position="relative"
    >
      {/* Decorative Top Border */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="4px"
        bgGradient="to-r"
        gradientFrom="brand.primary"
        gradientTo="brand.warning"
      />

      {/* Main Footer Content */}
      <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
        <Box
        // mx="auto"
        // px={{ base: "4", md: "6", lg: "8" }}
        // py={{ base: "10", md: "14", lg: "16" }}
        >
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: "10", md: "8", lg: "10" }}
          >
            {/* Company Info Section */}
            <Stack gap="5" alignItems={RESPONSIVE_ALIGN}>
              <Image
                src={MoveCo}
                alt="MoveCo.Net Logo"
                height="55px"
                objectFit="contain"
                filter="drop-shadow(0 2px 8px rgba(255, 215, 10, 0.2))"
              />
              <Stack gap="2" alignItems={RESPONSIVE_ALIGN}>
                <Text textStyle="size-xl" fontWeight="700" color="brand.white">
                  MoveCo.Net
                </Text>
                <Text textStyle="size-lg" color="whiteAlpha.800">
                  21439 Crescent Ave
                </Text>
                <Text textStyle="size-lg" color="whiteAlpha.800">
                  Lewisville, TX 75057
                </Text>
              </Stack>
              <SocialMediaIcons />
            </Stack>

            {/* Contact Numbers */}
            <Stack gap="5" alignItems={RESPONSIVE_ALIGN}>
              <Heading as="h5" color="brand.warning">
                Contact Us
              </Heading>
              <Stack gap="4" alignItems={RESPONSIVE_ALIGN} w="100%">
                {CONTACT_INFO.map((contact) => (
                  <ContactNumber key={contact.label} {...contact} />
                ))}
              </Stack>
            </Stack>
            {/* Licensing & Compliance */}
            <Stack gap="5" alignItems={RESPONSIVE_ALIGN}>
              <Heading as="h5" color="brand.warning">
                Licensing & Compliance
              </Heading>
              <Stack gap="3" alignItems={RESPONSIVE_ALIGN} w="100%">
                {LICENSING_INFO.map((item) => (
                  <LicensingItem key={item.label} {...item} />
                ))}
              </Stack>
            </Stack>

            {/* Accreditations & Memberships */}
            <Stack gap="5" alignItems={RESPONSIVE_ALIGN}>
              <Heading as="h5" color="brand.warning">
                Accreditations
              </Heading>
              <Text
                textStyle="size-lg"
                textAlign={RESPONSIVE_TEXT_ALIGN}
                color="whiteAlpha.800"
                lineHeight="1.6"
              >
                Proud members of leading industry organizations
              </Text>
              <CertificationGrid />
            </Stack>
          </Grid>
        </Box>
      </Container>
      <TollFreeBox />

      {/* Bottom Bar */}
      <Box
        borderTopWidth="1px"
        borderColor="whiteAlpha.200"
        bg="rgba(0,0,0,0.3)"
      >
        <Box
          maxW="1400px"
          mx="auto"
          px={{ base: "4", md: "6", lg: "8" }}
          py={{ base: "5", md: "4" }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={{ base: "4", md: "6" }}
          >
            <Text
              textStyle="size-lg"
              color="whiteAlpha.700"
              textAlign={{ base: "center", md: "left" }}
            >
              © 2025 MoveCo.Net. All rights reserved.
            </Text>
            <Flex
              gap="0"
              flexWrap="wrap"
              justify={{ base: "center", md: "flex-end" }}
              align="center"
            >
              {footerNavigation}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export { Footer };


import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Customer1 from "../../../assets/client1.webp";
import Customer2 from "../../../assets/customer2.webp";
import Customer3 from "../../../assets/Customer3.jpg";
import Customer4 from "../../../assets/Customer4.webp";
import Customer5 from "../../../assets/Customer5.webp";
import MainBannerBG from "../../../assets/main-banner-bg.png";
import MainBannerMobileBG from "../../../assets/main-banner-mobile.jpg";
import Button from "../Button/Button";

const MainBanner = () => {
  return (
    <>
      {/* ================== DESKTOP BANNER ================== */}
      <Box
        display={{ base: "none", lg: "block" }}
        minHeight="82vh"
        backgroundImage={`url(${MainBannerBG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="xl"
      >
        <Flex
          minHeight="82vh"
          justifyContent="flex-end"
          alignItems="center"
          color="brand.white"
          p={6}
        >
          <Box width="45%">
            <Stack gap={6}>
              <Heading
                as="h2"
              >
                Your{" "}
                <Box
                  as="span"
                  backgroundImage="linear-gradient(to top, #22c55ebe 75%, transparent 0)"
                  backgroundSize="100% 75%"
                  backgroundPosition="bottom"
                  backgroundRepeat="no-repeat"
                >
                  Authentic
                </Box>
                <br />
                Local & Distant
                <br />
                Logistics Partner
              </Heading>

              <Text textStyle={"size-md"}>
                Let us take care of packing & unpacking of your household goods,
                make your shifting smooth
              </Text>
              <Box>
                <Button
                  variant="outline"
                  label="Learn More"
                />
              </Box>
              <Flex
                p={4}
                bg="rgba(255,255,255,0.2)"
                borderRadius="xl"
                width="85%"
                gap={6}
                flexWrap="wrap"
                justifyContent={{ lg: "center", xl: "space-between" }}
                alignItems="center"
              >
                {/* Customers */}
                <Stack alignItems="center" gap={2}>
                  <Heading as="h3">
                    5000+
                  </Heading>
                  <Flex>
                    {[Customer1, Customer2, Customer3, Customer4, Customer5].map(
                      (img, i) => (
                        <Image
                          key={i}
                          src={img}
                          alt="customer"
                          boxSize="30px"
                          borderRadius="full"
                          ml={i === 0 ? 0 : "-8px"}
                        />
                      )
                    )}
                  </Flex>
                </Stack>

                {/* Rating */}
                <Stack alignItems="center" gap={2}>
                  <Flex>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon as={FaStar} key={i} boxSize="22px" color="brand.warning" />
                    ))}
                  </Flex>
                  <Text textStyle="size-md">Valuable Customers</Text>
                </Stack>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* ================== MOBILE BANNER ================== */}
      <Box
        display={{ base: "block", lg: "none" }}
        backgroundImage={`url(${MainBannerMobileBG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="xl"
        px={6}
        py={10}
        color="brand.white"
      >
        <Stack gap={4}>
          <Heading as="h2">
            Your Authentic Local & Distant Logistics Partner
          </Heading>

          <Text textStyle={"size-md"}>
            Let us take care of packing & unpacking of your household goods, make your shifting smooth
          </Text>
          <Box>
            <Button
              variant="primary"
              label="Learn More"
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export { MainBanner };

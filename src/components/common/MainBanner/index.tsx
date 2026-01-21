import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Customer1 from "../../../assets/client1.webp";
import Customer2 from "../../../assets/customer2.webp";
import Customer3 from "../../../assets/Customer3.jpg";
import Customer4 from "../../../assets/Customer4.webp";
import Customer5 from "../../../assets/Customer5.webp";
import MainBannerBG from "../../../assets/main-banner-bg.png";

const MainBanner = () => {
  return (
    <>
      {/* DESKTOP */}
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
          color="white"
          padding={6}
        >
          <Box width={{ base: "100%", lg: "45%" }}>
            <Heading
              fontSize={{ base: "2xl", lg: "3xl", xl: "5xl" }}
              fontWeight="medium"
              lineHeight="short"
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

            <Text paddingTop={4} opacity={0.75}>
              Let us take care of packing & unpacking of your household goods,
              make your shifting smooth
            </Text>

            <Button
              marginTop={8}
              size="lg"
              backgroundColor="#ffd70a"
              color="black"
              _hover={{ backgroundColor: "#ffd70a" }}
            >
              Learn More
            </Button>

            {/* INFO BOX */}
            <Flex
              marginTop={{ base: 8, xl: 12 }}
              padding={4}
              backgroundColor="rgba(255,255,255,0.2)"
              borderRadius="xl"
              width="85%"
              gap={6}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              {/* CUSTOMERS */}
              <Stack alignItems="center" gap={2}>
                <Heading fontSize={{ base: "xl", lg: "3xl" }} fontWeight="bold">
                  5000+
                </Heading>

                <Flex>
                  {[Customer1, Customer2, Customer3, Customer4, Customer5].map(
                    (img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt="customer"
                        width="30px"
                        height="30px"
                        borderRadius="full"
                        marginLeft={i === 0 ? "0" : "-8px"}
                      />
                    )
                  )}
                </Flex>
              </Stack>

              {/* RATING */}
              <Stack alignItems="center" gap={2}>
                <Flex>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={22} color="#ffd70a" />
                  ))}
                </Flex>
                <Text>Valuable Customers</Text>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* MOBILE */}
      <Box
        display={{ base: "block", lg: "none" }}
        backgroundImage="url('/shared/assets/main-banner-mobile.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="xl"
        paddingX={8}
        paddingY={12}
        color="white"
      >
        <Stack gap={4}>
          <Heading fontSize="2xl" fontWeight="medium">
            Your Authentic Local & Distant Logistics Partner
          </Heading>

          <Text opacity={0.75}>
            Let us take care of packing & unpacking of your household goods,
            make your shifting smooth
          </Text>

          <Button
            size="lg"
            backgroundColor="#ffd70a"
            color="black"
            alignSelf="flex-start"
            _hover={{ backgroundColor: "#ffd70a" }}
          >
            Learn More
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export { MainBanner };

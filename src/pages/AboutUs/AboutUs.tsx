import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Badge,
  Button,
  Icon,
} from "@chakra-ui/react";
import { section } from "framer-motion/client";
import BannerImg from "../../assets/about-us-banner.webp";
import ServiceImg from "../../assets/service1.webp";
import CardImg1 from "../../assets/card-item-1.webp";
import CardImg2 from "../../assets/card-item-2.webp";
import CardImg3 from "../../assets/card-item-3.webp";
import CardImg4 from "../../assets/card-item-4.webp";
import {
  FaTruckMoving,
  FaUserShield,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <Box as={section}>
      <Box px={{ base: 4, md: 8 }} py={6}>
        <Box
          bgImage={`url(${BannerImg})`}
          bgSize="cover"
          borderRadius="lg"
          minH={{ base: "230px", md: "320px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" inset={0} bg="green.900" opacity={0.1} />
          <Box position="relative" textAlign="center">
            <Heading
              fontWeight="medium"
              fontSize={{ base: "lg", md: "2xl" }}
              color="white"
            >
              Wanna Know More{" "}
              <Text as="span" color="yellow.400">
                About Us?
              </Text>
            </Heading>
          </Box>
        </Box>
        <Box mt={12}>
          <Badge
            bg="green.700"
            color="white"
            px={4}
            py={1}
            borderRadius="full"
            mb={4}
          >
            About Us
          </Badge>
          <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
            <Box>
              <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>
                What Do We Do <br />
                In{" "}
                <Text as="span" color="green.700">
                  MoveCo?
                </Text>
              </Heading>
              <Text color="gray.600" fontSize="sm" maxW="400px">
                For more than 100 years experience, We move coast to coast under
                our own authority.
              </Text>
              <Image
                src={ServiceImg}
                alt="footprint"
                borderRadius="md"
                mt={6}
                maxW="500px"
              />
            </Box>
            <Box>
              <Badge
                bg="green.700"
                color="white"
                px={4}
                py={1}
                borderRadius="full"
                mb={3}
              >
                Our Mission
              </Badge>
              <Text color="gray.600" fontSize="sm" lineHeight="1.8">
                We aim to impress you with our service so much that you'll share
                our business cards with your friends and colleagues, post your
                text and video testimonials on our website, and choose us for
                your next move.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt={16}>
          <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="start">
            <Box>
              <Badge
                bg="green.700"
                color="white"
                px={4}
                py={1}
                borderRadius="full"
                mb={4}>
                Licenses
              </Badge>
              <Heading fontSize="lg" mb={3}>
                What does BBB and SMA membership mean to you?
              </Heading>
              <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                It ensures MoveCo follows strict ethical standards and gives you
                access to arbitration or mediation if you're ever dissatisfied,
                protecting your rights as a customer.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2 }}>
              {[
                { title: "Licensed With", img: CardImg1 },
                { title: "Membership With", img: CardImg2 },
                { title: "DOT", img: CardImg3 },
                { title: "SMA", img: CardImg4 },
              ].map((item, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="sm"
                  p={2}
                  textAlign="center"
                >
                  <Text fontSize="sm" mb={4} fontWeight="medium">
                    {item.title}
                  </Text>
                  <Image
                    src={item.img}
                    alt={item.title}
                    maxH="60px"
                    mx="auto"
                  />
                </Box>
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Box>
        <Box mt={16}>
          <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Customer testimonial"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h={{ base: "220px", md: "300px" }}
            />
            <Box>
              <Badge
                bg="green.700"
                color="white"
                px={4}
                py={1}
                borderRadius="full"
                mb={4}
              >
                Testimonials
              </Badge>
              <Text fontSize="sm" color="gray.600" lineHeight="1.8" mb={6}>
                Our online testimonial board goes a step further. You can post
                your moving experience for our future customers to see. You can
                also go to our website & see over 10 years of customer reviews.
                Our crews make the difference. We conduct background checks and
                random drug tests.
              </Text>
              <Button
                variant="outline"
                colorScheme="green"
                size="sm"
                borderRadius="full"
              >
                View all
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt={16}>
          <Badge
            bg="green.700"
            color="white"
            px={4}
            py={1}
            borderRadius="full"
            mb={4}
          >
            Benefits
          </Badge>
          <Heading fontSize={{ base: "xl", md: "2xl" }} mb={8}>
            What Do You Get When You{" "}
            <Text as="span" color="green.700">
              Choose Us?
            </Text>
          </Heading>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
            {[
              {
                icon: FaTruckMoving,
                title: "Professional Movers",
                desc: "Experienced and trained movers ensuring safe and secure relocation.",
              },
              {
                icon: FaUserShield,
                title: "Trusted & Verified",
                desc: "Background-checked crews you can trust with your belongings.",
              },
              {
                icon: FaDollarSign,
                title: "Transparent Pricing",
                desc: "No hidden charges. Clear and honest pricing structure.",
              },
              {
                icon: FaClock,
                title: "On-Time Delivery",
                desc: "We value your time and ensure timely pickup and delivery.",
              },
            ].map((item, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="sm"
                textAlign="center">
                <Icon as={item.icon} boxSize={8} color="green.700" mb={4} />
                <Heading fontSize="md" mb={2}>
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {item.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box
          mt={20}
          bg="green.800"
          borderRadius="lg"
          py={{ base: 8, md: 12 }}
          px={{ base: 6, md: 10 }}
          textAlign="center">
          <Heading color="white" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
            Ready To Make Your Move?
          </Heading>
          <Text color="green.100" fontSize="sm" maxW="500px" mx="auto" mb={6}>
            Let MoveCo take the stress out of moving. Get in touch with us today
            and experience a smooth, secure, and professional move.
          </Text>
          <Button colorScheme="yellow" size="md" borderRadius="full">
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;

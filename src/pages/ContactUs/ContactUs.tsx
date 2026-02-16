import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Card,
} from "@chakra-ui/react";
import contactImage from "../../assets/contact.webp";
import HeroBanner from "../AboutUs/AboutUsComponents/HeroBanner";
import ContactCard from "./ContactCard";
import SendEmailForm from "./SendEmailForm";
import FriendForm from "./FriendForm";

const ContactUsPage = () => {
  return (
    <Container maxW="100%" py={{ base: 10, md: 12 }} px={8}>
      <HeroBanner bgImage={contactImage} title="Contact Us" />
      <Box pt={{ base: 10, md: 16 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
          mb={{ base: 6, lg: 8 }}
        >
          <Box maxW={{ lg: "45%" }}>
            <Heading as="h1" fontWeight="normal">
              Our {""}
              <Text as="span" color="brand.primary">
                Offices
              </Text>
            </Heading>
          </Box>
          <Box maxW={{ lg: "45%" }}>
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
            >
              Visit us at any of our convenient locations across Texas
            </Text>
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          <ContactCard
            city="Dallas"
            address="1439 Crescent Ave, Lewisville, TX-75057"
            office="972-250-1100"
            tollFree="800-590-0928"
          />
          <ContactCard city="Houston" office="281-825-5544" />
          <ContactCard city="Austin" office="512-366-7901" />
        </SimpleGrid>
      </Box>

      <Box pt={{ base: 10, md: 16 }}>
        <Box maxW={{ lg: "45%" }} mb={{ base: 6, lg: 8 }}>
          <Heading as="h1" fontWeight="normal">
            Visit Our {""}
            <Text as="span" color="brand.primary">
              Main Office
            </Text>
          </Heading>
          <Text textStyle="size-2xl">Located in Lewisville, Texas</Text>
        </Box>

        <Card.Root variant="elevated" overflow="hidden">
          <iframe
            title="MoveCo.net LLC Location"
            src="https://www.google.com/maps?q=MoveCo.net+LLC,+1439+Crescent+Ave,+Lewisville,+TX+75057&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            loading="lazy"
          />
        </Card.Root>
      </Box>

      <Box pt={{ base: 10, md: 16 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
          mb={{ base: 6, lg: 8 }}
        >
          <Box maxW={{ lg: "45%" }}>
            <Heading as="h1" fontWeight="normal">
              Send Us a {""}
              <Text as="span" color="brand.primary">
                Message
              </Text>
            </Heading>
          </Box>
          <Box maxW={{ lg: "35%" }}>
            <Text
              textStyle="size-2xl"
              textAlign={{ base: "left", md: "right" }}
            >
              Fill out the form below and We will get back to you as soon as
              possible.
            </Text>
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
          <SendEmailForm />
          <FriendForm />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ContactUsPage;

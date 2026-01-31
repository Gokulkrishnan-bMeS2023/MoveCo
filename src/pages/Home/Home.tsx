import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  Accordion,
} from "@chakra-ui/react";

import { MainBanner } from "../../components/common/MainBanner";
import VideoGrid from "../../components/common/VideoGrid";
import { useNavigate } from "react-router-dom";
import ClientSpeaks from "../../components/common/ReviewGrid";
import Button from "../../components/common/Button/Button";
import { QuoteForm } from "../../components/common/QuoteForm";

const faqList: [string, string][] = [
  ["How do I get a quote for my move?", "Get a free quote by filling out our online form or calling us today!"],
  ["What areas do you serve?", "We proudly serve all over UK and surrounding areas."],
  ["Are you licensed and insured?", "Yes, we are fully licensed and insured."],
  ["Do you provide packing services?", "Yes, we offer professional packing services."],
  ["Can I pack my own belongings?", "Yes, you're welcome to pack your own belongings."],
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* ---------------- Main Banner & Quote ---------------- */}
      <Container maxW="100%" px={8} py={10}>
        <Flex direction={{ base: "column", lg: "row" }} gap={6}>
          <Box flex="7">
            <MainBanner />
          </Box>

          <Box flex="3" py={{ base: 6, lg: 0 }}>
            <QuoteForm />
          </Box>
        </Flex>
      </Container>

      <Container maxW="100%" px={8} py={12}>
        <Flex justify="space-between" align="center">
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Client Review"
          />
          <Button
            fontSize="xl"
            rounded="full"
            variant="outline"
            onClick={() => navigate("/video-review")}
            label="View all"
          />
        </Flex>

        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
          mt={8}
          gap={{ base: 6, lg: 12 }}
        >
          <Heading
            as="h1" fontWeight="normal"                     // ⬅ MOST IMPORTANT
            maxW={{ lg: "45%" }}                   // ⬅ width control
            textAlign={{ base: "center", lg: "left" }}
          >
            What{" "}
            <Text as="span" color="brand.primary">
              Our Clients
            </Text>{" "}
            Think About Us?
          </Heading>

          <Text
            textStyle={"size-2xl"}
            textAlign={{ base: "center", lg: "right" }}
            maxW={{ lg: "45%" }}
          >
            Watch Reviews from satisfied clients, sharing their experiences and
            successes with our services.
          </Text>
        </Flex>
        <VideoGrid limit={2} />
      </Container>

      {/* ---------------- Testimonials ---------------- */}
      <Container maxW="100%" px={8} py={12}>
        <Flex justify="space-between" align="center">
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="Client Speak"
          />
          <Button
            fontSize="xl"
            rounded="full"
            variant="outline"
            onClick={() => navigate("/client-testimonial")}
            label="View all"
          />
        </Flex>

        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
          mt={8}
          gap={{ base: 6, lg: 12 }}
        >
          <Heading
            as="h1" fontWeight="normal"                     // ⬅ MOST IMPORTANT
            maxW={{ lg: "45%" }}                   // ⬅ width control
            textAlign={{ base: "center", lg: "left" }}
          >
            What{" "}
            <Text as="span" color="brand.primary">
              Our Clients
            </Text>{" "}
            Say About Us?
          </Heading>

          <Text
            textStyle={"size-2xl"}
            textAlign={{ base: "center", lg: "right" }}
            maxW={{ lg: "45%" }}
          >
            Read feedback from clients who have experienced our professional moving services.
          </Text>
        </Flex>
        <ClientSpeaks limit={3} />

      </Container>

      {/* ---------------- FAQs ---------------- */}
      <Box bg="brand.black">
        <Box bg="brand.white" px={8} py={12} >
          <Button
            fontSize="xl"
            rounded="full"
            variant="primary"
            label="FAQs"
          />

          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align="center"
            gap={{ base: 6, lg: 8 }}
            mt={8}
          >
            <Heading
              as="h1"
              fontWeight="normal"
              textAlign={{ base: "center", lg: "left" }}
              maxW={{ lg: "45%" }}                    // ⬅ width control
            >
              <Box as="span" color="brand.primary">
                Having Doubts?
              </Box>
              <br />
              We got you covered!
            </Heading>

            <Text
              textStyle={"size-2xl"}
              textAlign={{ base: "center", lg: "right" }}
              maxW={{ lg: "45%" }}
            >
              Here are the list of some frequently asked questions from people,
              to help you understand more about our service
            </Text>
          </Flex>

          <Accordion.Root multiple mt={8}>
            {faqList.map(([q, a], i) => (
              <Accordion.Item key={i} value={`item-${i}`} py={3} >
                <Accordion.ItemTrigger>
                  <Box flex="1" textAlign="left">
                    <Heading as="h3"  >
                      {q}
                    </Heading>
                  </Box>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>

                <Accordion.ItemContent py={2}>
                  <Text textStyle="size-lg">
                    {a}
                  </Text>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>

        </Box>
      </Box>
    </>
  );
};

export default Home;

import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import VideoGrid from "./VideoGrid";
import { useNavigate } from "react-router-dom";
import ClientSpeaks from "./ReviewGrid";
import Button from "../../components/common/Button/Button";
import { MainBanner } from "./HomeBanner";
import { QuoteForm } from "./QuoteForm";

const Home = () => {
  const navigate = useNavigate();
  return (
      <Container>
        <Flex direction={{ base: "column", lg: "row" }} gap={6}>
          <Box flex="7">
            <MainBanner />
          </Box>

          <Box flex="3" py={{ base: 6, lg: 0 }}>
            <QuoteForm />
          </Box>
        </Flex>

        <Box pt="sectionTop">
          <Flex justify="space-between" align="center" mb={{ base: 6, lg: 8 }}>
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
            mb={{ base: 6, lg: 8 }}
            gap={{ base: 6, lg: 12 }}
          >
            <Heading
              as="h1" fontWeight="normal"
              maxW={{ lg: "45%" }}
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
        </Box>

        <Box pt="sectionTop">
          <Flex justify="space-between" align="center" mb={{ base: 6, lg: 8 }}>
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
           mb={{ base: 6, lg: 8 }}
            gap={{ base: 6, lg: 12 }}
          >
            <Heading
              as="h1" fontWeight="normal"
              maxW={{ lg: "45%" }}
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
        </Box>
      </Container>
  );
};

export default Home;
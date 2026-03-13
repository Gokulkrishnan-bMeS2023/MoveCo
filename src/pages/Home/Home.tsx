import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { MainBanner } from "./HomeBanner";
import QuoteFormImage from "../../assets/quote-form-image.webp";
import Badge from "../../components/common/Badge/Badge";
import { LuArrowUpRight } from "react-icons/lu";
import { GetQuote } from "./QuoteForm/Quote";
import ClientSpeaks from "./ReviewGrid/ClientSpeaks";
import VideoGrid from "./VideoGrid/ClientReview";
import { useClientSpeaks } from "./ReviewGrid/useClientSpeaks";

const Home = () => {
  const navigate = useNavigate();
  const { testimonials, isLoading } = useClientSpeaks(1, 3);
  return (
      <Container>
        <Flex direction={{ base: "column", lg: "row" }} gap={6}>
          <Box flex="7">
            <MainBanner />
          </Box>

          <Box flex="3">
            <Box>
                  <Image src={QuoteFormImage} alt="Quote Form" w="100%" rounded="2xl" />
            
                  <Box bg="brand.white" p={6} mt={4} rounded="2xl">
                    <GetQuote showEstimate={true} />
                  </Box>
                </Box>
          </Box>
        </Flex>

        <Box pt="sectionTop">
          <Flex justify="space-between" align="center" mb={4}>          
            <Badge label="Client Review" />
            <Button
             textStyle="size-xl"
              rounded="full"
              variant="outline"
              onClick={() => navigate("/video-review")}
              label="View all"
              rightIcon={<LuArrowUpRight size={16} />}
            />
          </Flex>

          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align="center"
            mb={{ base: 4, lg: 6 }}
            gap={{ base: 4, lg: 12 }}
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
          <Flex justify="space-between" align="center" mb={4}>
            <Badge label="Client Speaks" />
            <Button
             textStyle="size-xl"
              rounded="full"
              variant="outline"
              onClick={() => navigate("/client-testimonial")}
              label="View all"
              rightIcon={<LuArrowUpRight size={16} />}
            />
          </Flex>

          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align="center"
           mb={{ base: 4, lg: 6 }}
            gap={{ base: 4, lg: 12 }}
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
          <ClientSpeaks testimonials={testimonials} isLoading={isLoading} />
        </Box>
      </Container>
  );
};

export default Home;
import { useState, useRef } from "react";
import { Box, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import OnlineImg from "../../../assets/img1.webp";
import EstimateImg from "../../../assets/img2.webp";
import MovingImg from "../../../assets/img3.webp";
import StorageImg from "../../../assets/img5.webp";
import PackingImg from "../../../assets/img6.webp";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export default function AnimatedFeatureSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); 
  const features = [
    {
      title: "Online real-time quote",
      description: (
        <Text>
          Our advanced{" "}
          <Text
            as="span"
            color="brand.primary"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/online-estimate")}
          >
            real-time move quotation software
          </Text>{" "}
          allows you to create binding quotations just by specifying the inventory
          you want to move and their locations. It is that simple, in minutes you
          get your quotation number along with all the binding documents, sent
          directly to your email inbox.
        </Text>
      ),
      image: OnlineImg,
    },
    {
      title: "Schedule a free In-Home Estimate",
      description: (
        <Text>
          You also have option to online{" "}
          <Text
            as="span"
            color="brand.primary"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/in-home-move-estimate")}
          >
            schedule a free In-Home Estimate
          </Text>{" "}
          of your upcoming moving requirements. An In-Home Estimate is such that
          our moving specialists first visit your home and conduct a full
          walk-thru of the home, answer all the questions and concerns you might
          have, then analyze all the inventory and understand moving locations
          and at the end, calculate a quotation for you on the spot before
          leaving your home. So why not go ahead and{" "}
          <Text
            as="span"
            color="brand.primary"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/in-home-move-estimate")}
          >
            book a free In-Home Estimate
          </Text>{" "}
          of your upcoming move.
          <br />
          <br />
          A lot of our competitors do send out their sales personnel for their
          moving consultation, where as we send out current professional drivers
          who have years of real moving experience.
          <br />
          <br />
          During the In-Home Estimate appointment, you can also consider our{" "}
          <Text
            as="span"
            color="brand.primary"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/professional-packing-services")}
          >
            professional packing services
          </Text>{" "}
          in which our professional movers will estimate the cost it will take to
          pack your possessions safely in boxes.
        </Text>
      ),
      image: EstimateImg,
    },
    {
      title: "Moving Supplies",
      description: (
        <Text>
          When you plan a move, you certainly want to keep your possessions safe
          and organized. Boxes, packing material, moving safety material, and all
          the other rest of moving supplies are also sold here in our online
          shop. You can visit our<Text
            as="span"
            color="brand.primary"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/product")}
          >{" "}online Packing supply store </Text>and have them
          delivered directly at your doorstep with FREE* shipping.
        </Text>
      ),
      image: MovingImg,
    },
    {
      title: "Storage Services",
      description: (
        <Text>
          Moving from one house to another, and need an intermediate place to
          store your belongings? Out of Lewisville area for a few months and want
          to safely store your belongings? You can try MoveCo.Net as we offer{" "}
          <Text
            as="span"
            color="brand.primary"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/storage")}
          >
            professional storage services
          </Text>{" "}
          for our moving customers. Our professional storage service comes with
          free safety packing of your belongings, and offer hassle free
          end-to-end moving.
        </Text>
      ),
      image: StorageImg,
    },
    {
      title: "Professional Packing",
      description: (
        <Text>
          Get your belongings packaged by professionals right in front of you.
          Our professional movers can also give you an estimation of our{" "}
          <Text
            as="span"
            color="brand.primary"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/professional-packing-services")}
          >
            professional packing services
          </Text>{" "}
          when they visit your house for the free In-Home Estimate.
        </Text>
      ),
      image: PackingImg,
    },
  ];

  const handleTitleClick = (index: number) => {
    setActiveIndex(index);

    if (window.innerWidth < 768) {
      setTimeout(() => {
        descriptionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="start">
      <VStack align="start" gap={{ base: 1, md: 2 }}>
        {features.map((item, index) => (
          <Box
            key={index}
            w="100%"
            bg={activeIndex === index ? "white" : "transparent"}
            borderLeft={
              activeIndex === index
                ? "3px solid #266F5D"
                : "3px solid transparent"
            }
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ bg: "brand.white", color: "brand.primary" }}
            onClick={() => handleTitleClick(index)}
          >
            <Text
              pl={4}
              textStyle="size-xl"
              fontWeight={activeIndex === index ? "bold" : "normal"}
              color={
                activeIndex === index ? "brand.primary" : "brand.secondary"
              }
              py={4}
            >
              {item.title}
            </Text>
          </Box>
        ))}
      </VStack>

      <Box ref={descriptionRef} w="100%" overflow="hidden">
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeIndex}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              borderRadius="2xl"
              w="100%"
              h={{ base: "220px", md: "360px" }}
              objectFit="cover"
              mb={6}
            />

            <Text
              textStyle="size-xl"
              fontWeight="bold"
              color="brand.primary"
              mb={3}
            >
              {features[activeIndex].title}
            </Text>

            {/* ✅ Render JSX directly (no wrapping Text) */}
            {features[activeIndex].description}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </SimpleGrid>
  );
}
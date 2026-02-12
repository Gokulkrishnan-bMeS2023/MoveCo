import { useState } from "react";
import { Box, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import OnlineImg from "../../../assets/img1.webp";
import EstimateImg from "../../../assets/img2.webp";
import MovingImg from "../../../assets/img3.webp";
import StorageImg from "../../../assets/img5.webp";
import PackingImg from "../../../assets/img6.webp";

const MotionBox = motion(Box);

const features = [
  {
    label: "Online real-time quote",
    title: "Online real-time quote",
    description:
      "Our advanced  real-time move quotation software  allows you to create binding quotations just by specifying the inventory you want to move and their locations. It is that simple, in minutes you get your quotation number along with all the binding documents, sent directly to your email inbox.",
    image: OnlineImg,
  },
  {
    label: "Schedule a free In-Home Estimate",
    title: "Schedule a free In-Home Estimate",
    description: (
      <>
        You also have option to online schedule a free In-Home Estimate of your
        upcoming moving requirements. An In-Home Estimate is such that our
        moving specialists first visit your home and conduct a full walk-thru of
        the home, answer all the questions and concerns you might have, then
        analyze all the inventory and understand moving locations and at the
        end, calculate a quotation for you on the spot before leaving your home.
        So why not go ahead and book a free In-Home Estimate of your upcoming
        move.
        <br />
        A lot of our competitors do send out their sales personnel for their
        moving consultation, where as we send out current professional drivers
        who have years of real moving experience.
        <br />
        During the In-Home Estimate appointment, you can also consider our
        professional packing services in which our professional movers will
        estimate the cost it will take to pack your possessions safely in boxes.
      </>
    ),
    image: EstimateImg,
  },
  {
    label: "Moving Supplies",
    title: "Moving Supplies",
    description:
      "When you plan a move, you certainly want to keep your possessions safe and organized. Boxes, packing material, moving safety material, and all the other rest of moving supplies are also sold here in our online shop. You can visit our  online Packing supply store  and have them delivered directly at your doorstep with FREE* shipping",
    image: MovingImg,
  },
  {
    label: "Storage Services",
    title: "Storage Services",
    description:
      "Moving from one house to another, and need an intermediate place to store your belongings? Out of Lewisville area for a few months and want to safely store your belongings? You can try MoveCo.Net as we offer  professional storage services  for our moving customers. Our professional storage service comes with free safety Packing of your belongings, and offer hassle free end-to-end moving. You can buy storage space from 10×20 feet to a 10×30, with any number of multiples and combinations. This service is currently offered in the Dallas area only.",
    image: StorageImg,
  },
  {
    label: "Professional Packing",
    title: "Professional Packing",
    description:
      "Get your belongings packaged by professionals right in front of you: Our professional movers can also give you an estimation of our professional packing services when they visit your house for the free In-Home Estimate. Our  professional packing service  ensures just the right packing of your possessions by professional movers who have years of current experience in packing and moving valuable goods.",
    image: PackingImg,
  },
];

export default function AnimatedFeatureSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="start">
      {/* LEFT SIDE – 50% */}
      <VStack align="start" gap={{base: 1,md:2}}>
        {features.map((item, index) => (
          <Box
            key={index}
            w="100%" // make it full width of the VStack
            bg={activeIndex === index ? "white" : "transparent"} // white when active
            borderLeft={
              activeIndex === index
                ? "3px solid #266F5D"
                : "3px solid transparent"
            }
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ bg: "brand.white", color: "brand.primary" }} // hover effect
            onClick={() => setActiveIndex(index)}
          >
            <Text
              pl={4} 
              textStyle="size-xl"
              fontWeight={activeIndex === index ? "bold" : "normal"}
              color={activeIndex === index ? "brand.primary" : "brand.secondary"}
              py={4}
            >
              {item.label}
            </Text>
          </Box>
        ))}
      </VStack>

      {/* RIGHT SIDE – 50% */}
      <Box w="100%" overflow="hidden">
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeIndex}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {/* ✅ FIXED IMAGE SIZE */}
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              borderRadius="2xl"
              w="100%"
              h={{ base: "220px", md: "360px" }}
              objectFit="cover"
              mb={6}
            />

            <Text textStyle="size-xl" fontWeight="bold" color="brand.primary" mb={3}>
              {features[activeIndex].title}
            </Text>

            <Text  lineHeight="1.8">
              {features[activeIndex].description}
            </Text>
          </MotionBox>
        </AnimatePresence>
      </Box>
    </SimpleGrid>
  );
}

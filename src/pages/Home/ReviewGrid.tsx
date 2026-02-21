import { Grid, Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { images } from "../../assets";

export interface ClientSpeak {
  id: number;
  name: string;
  message: string;
  image?: string;
}

export const CLIENT_SPEAKS: ClientSpeak[] = [
  {
    id: 1,
    name: "Pamela Sanders",
    message:
      "The reason for this late testimonial is that I wanted to ensure all my storage items were packed in the storage undamaged. Now, your two guys were the best-ever movers! They arrived at my home on time. They filled the truck expeditiously, followed me to the storage unit, and thanked me for using their service. Wow! Your company employees are likely the most efficient, professional, kind, courteous, and proficient movers—no complaints from me. I'm genuinely grateful for calling your company. Thank you!!!",
  },
  {
    id: 2,
    name: "JD Lauramore",
    message:
      "We recently relocated to the southeast from Texas and for the third time used MoveCo. I cannot speak highly enough about their professionalism and commitment to excellence. Wes has been the team lead for us on every move and when you take his leadership and field knowledge combined with Jamie and her leadership and organization in the office and throughout the loading process there is no greater moving company to work with. A special thanks to all of the other MoveCo teammates especially Nico, Brandon, and Will for their hard work and care for our property.",
  },
  {
    id: 3,
    name: "Barion Mills",
    message:
      "We've used MOVECO multiple times, both our home moves, and our office move. Each time they went above and beyond what was needed to do a great job. I highly recommend them and will use them again!",
  },
  {
    id: 4,
    name: "Ronny Duwe",
    message:
      "This is the worst move experience I've ever had. The furniture was damaged, the workers did not care, were slow and even with me purchasing extra insurance to cover damages - it still has not been resolved in almost a year. No repairs have been made, no reimbursement has been received and no sense of responsibility or sense of urgency has been displayed by the company. Email inquiries go mostly ignored and they are very slow if they respond at all. My advice would be to NOT use this company if you value your belongings and NOT to purchase the extra insurance because that only gives them more profit with no apparent intentions of repairing, replacing or correcting any situation they are liable for. I am still waiting to clear this matter after almost a year of waiting.",
  },
  {
    id: 5,
    name: "Anthony Wainwright",
    message:
      "The guys did a great job, there was absolutely no breakage on my items or damage to either home during move.",
  },
  {
    id: 6,
    name: "Cayce Allen",
    message:
      "Movers were very cautious doing move, and very good in time management, customer service was awesome.",
  },
  {
    id: 7,
    name: "Willie Livingston",
    message: "On time and get the job done.",
  },
  {
    id: 8,
    name: "Mike Wilson",
    message:
      "We’ve been moved many times by large and small companies. MoveCo has provided the best service of all. They’ve treated our property like their own. Thumbs up for their service.",
  },
  {
    id: 9,
    name: "Steven Bryce",
    message: "Great Service",
  },
  {
    id: 10,
    name: "Tiffany Tyson",
    message:
      "The guys that run this company are awesome and they are very professional. I used to work for this company and they do a great job of packing and moving customer's belongings. Everything that is packed into the moving truck is properly covered so it's protected to keep it from getting damaged or broken. Every time a move is scheduled, the movers arrive on time with everything that they need to complete the move for the customer in a timely fashion. You should call this company when you are ready to move.",
  },
];

interface ClientSpeaksProps {
  limit?: number; // 👈 optional
}

const ClientSpeaks = ({ limit }: ClientSpeaksProps) => {
  const speaksToShow = limit ? CLIENT_SPEAKS.slice(0, limit) : CLIENT_SPEAKS;

  return (
    <Box mt={8}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        alignItems="start"
      >
        {speaksToShow.map((client) => (
          <ReviewCard key={client.id} client={client} />
        ))}
      </Grid>
    </Box>
  );
};

const ReviewCard = ({ client }: { client: ClientSpeak }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
      zIndex={isHovered ? 20 : 1}
      pb="10px"
    >
      <Box
        bg="brand.white"
        p={6}
        rounded="2xl"
        shadow={isHovered ? "2xl" : "sm"}
        border="1px solid"
        borderColor={isHovered ? "brand.primary" : "brand.white"}
        overflow="hidden"
      >
        <Flex align="center" gap={4} mb={4}>
          <Image
            src={client.image || images.profile}
            boxSize="50px"
            alt="review"
            borderRadius="full"
            objectFit="cover"
            loading="eager"
            fetchPriority="high"
          />
          <Heading as="h4" fontSize="lg">
            {client.name}
          </Heading>
        </Flex>

        <Box
          maxH={isHovered ? "none" : "100px"}
          overflow="hidden"
          position="relative"
        >
          <Text
            color="brand.secondary"
            lineHeight="1.6"
            lineClamp={isHovered ? "none" : 4}
          >
            {client.message}
          </Text>

          {!isHovered && (
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              h="50px"
              bgGradient="linear(to-t, white, transparent)"
              pointerEvents="none"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientSpeaks;

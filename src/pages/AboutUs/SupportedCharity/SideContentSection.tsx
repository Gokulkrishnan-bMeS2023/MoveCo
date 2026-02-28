import { Box, Flex, Heading, Text, Image, AspectRatio } from "@chakra-ui/react";
import Button from "../../../components/common/Button/Button";
import { LuArrowUpRight } from "react-icons/lu";

interface SideContentSectionProps {
  title: string;
  description: string;
  description2?: string;
  image: string;
  linkText?: string;
  linkHref?: string;
  reverse?: boolean;
}

const SideContentSection = ({
  title,
  description,
  description2,
  image,
  linkText = "Read More",
  linkHref = "#",
  reverse = false,
}: SideContentSectionProps) => {
  const words = title.split(" ");
  const normalText = words.slice(0, -1).join(" ");
  const coloredText = words.slice(-1).join(" ");

  const isExternal = linkHref?.startsWith("https");

  return (
    <>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading mb={{ base: 4, lg: 6 }} as="h2" fontWeight="normal" textAlign={{base: "center", lg: "left"}}>
          {normalText}{" "}
          <Text as="span" color="brand.primary">
            {coloredText}
          </Text>
        </Heading>
      </Box>

      <Flex
        direction={{
          base: "column",
          lg: reverse ? "row-reverse" : "row",
        }}
        gap={{ base: "6", lg: "14" }}
        align="center"
        justify="center"
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt={title}
              rounded="2xl"
              objectFit="cover"
              loading="eager"
              fetchPriority="high"
            />
          </AspectRatio>
        </Box>

        <Box w={{ base: "100%", lg: "50%" }} textAlign={{base: "center", lg: "left"}}>
          <Text textStyle="size-xl" mb={3}>
            {description}
          </Text>
          {description2 && (
            <Text textStyle="size-xl" mb={3}>
              {description2}
            </Text>
          )}

          <Button
           textStyle="size-xl"
            label={linkText}
            variant="outline"
            as="a"
            href={isExternal ? undefined : linkHref}
            rounded="full"
            rightIcon={<LuArrowUpRight size={16} />}
            onClick={() => {
              if (isExternal && linkHref) {
                window.open(linkHref, "_blank", "noopener,noreferrer");
              }
            }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default SideContentSection;
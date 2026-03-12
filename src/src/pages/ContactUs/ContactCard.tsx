import {
  Heading,
  Text,
  Stack,
  HStack,
  Flex,
  Card,
  Icon,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactCard = ({
  city,
  address,
  office,
  tollFree,
}: {
  city: string;
  address?: string;
  office: string;
  tollFree?: string;
}) => {
  return (
    <Card.Root
      variant="elevated"
      size="lg"
      _hover={{
        transform: "translateY(-8px)",
        shadow: "xl",
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      borderLeftWidth={4}
      borderColor="brand.primary"
    >
      <Card.Body gap={4}>
        <Heading as="h3" fontWeight="normal">
          {city}
        </Heading>

        {address && (
          <HStack align="start" gap={3}>
            <Flex align="center" gap={3}>
              <Icon
                as={FaMapMarkerAlt}
                boxSize={{ base: 3, md: 4 }}
                color="brand.primary"
              />
              <Text textStyle="size-lg">{address}</Text>
            </Flex>
          </HStack>
        )}

        <Stack gap={2}>
          <HStack gap={2}>
            <Flex align="center" gap={3}>
              <Icon
                as={FaPhoneAlt}
                boxSize={{ base: 3, md: 4 }}
                color="brand.primary"
              />
              <Text textStyle="size-lg">Office : {office}</Text>
            </Flex>
          </HStack>

          {tollFree && (
            <Text textStyle="size-lg" ml={7}>
              Toll Free : {tollFree}
            </Text>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default ContactCard;

import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Flex,
  Card,
  Icon,
} from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import InputField from "../../../components/common/Input/Input";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import Button from "../../../components/common/Button/Button";
import { useReferralForm } from "./useReferralForm";

const ReferralForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useReferralForm();

  return (
    <Card.Root variant="elevated" size="lg" h="100%">
      <Card.Body gap={{ base: 4, md: 6 }}>
        <HStack gap={3} alignItems="flex-start">
          <Flex bg="brand.primary" px={3} py={2} borderRadius="md">
            <Box color="brand.white">
              <Icon
                as={FaUserFriends}
                boxSize={{ base: 5, md: 6 }}
                color="brand.white"
              />
            </Box>
          </Flex>
          <Heading as="h3" fontWeight="normal">
            Tell a friend{" "}
            <Text as="span" color="brand.primary">
              about MoveCo
            </Text>
          </Heading>
        </HStack>

        <VStack gap={4} align="stretch">
          <Text textStyle="size-lg">
            To email a friend about MoveCo, fill out the information below
          </Text>

          <InputField
            label="Your Name"
            placeholder="Your Name"
            value={values.yourName}
            onChange={(e) => handleChange("yourName", e.target.value)}
            errorMessage={errors.yourName}
            isRequired
          />

          <PhoneField
            label="Friend's Phone Number"
            value={values.friendPhone}
            onChange={(digits) => handleChange("friendPhone", digits)}
            errorMessage={errors.friendPhone}
            isRequired
          />

          <InputField
            label="Friend's Email Address"
            placeholder="Friend's Email Address"
            type="email"
            value={values.friendEmail}
            onChange={(e) => handleChange("friendEmail", e.target.value)}
            errorMessage={errors.friendEmail}
            isRequired
          />

          <Box textAlign={{ base: "center", md: "right" }} mt={4}>
            <Button
              px="16"
              variant="primary"
              label={isSubmitting ? "Sending..." : "Send"}
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
          </Box>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export default ReferralForm;

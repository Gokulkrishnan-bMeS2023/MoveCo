import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Flex,
  Separator,
  Card,
  Icon,
} from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import { useContactForms } from "./useContactForms";
import Button from "../../components/common/Button/Button";
import InputField from "../../components/common/Input/Input";

const FriendForm = () => {
  const {
    referralValues,
    referralErrors,
    handleReferralChange,
    submitReferralForm,
  } = useContactForms();
  return (
    <>
      <Card.Root variant="elevated" size="lg">
        <Card.Body gap={{ base: 4, md: 6 }}>
          <HStack gap={3} flexWrap="wrap">
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

          <Text textStyle="size-lg">
            To email a friend about MoveCo, fill out the information below
          </Text>
          <Separator />

          <VStack gap={4} align="stretch">
            <InputField
              label="Your Name"
              placeholder="Your Name"
              value={referralValues.yourName}
              onChange={(e) => handleReferralChange("yourName", e.target.value)}
              errorMessage={referralErrors.yourName}
              isRequired
            />
            <InputField
              label="Friend's Phone Number"
              placeholder="Friend's Phone Number"
              value={referralValues.friendPhone}
              onChange={(e) =>
                handleReferralChange("friendPhone", e.target.value)
              }
              errorMessage={referralErrors.friendPhone}
              isRequired
            />
            <InputField
              label="Friend's Email Address"
              placeholder="Friend's Email Address"
              value={referralValues.friendEmail}
              onChange={(e) =>
                handleReferralChange("friendEmail", e.target.value)
              }
              errorMessage={referralErrors.friendEmail}
              isRequired
            />
            <Box textAlign={{ base: "center", md: "right" }} mt={4}>
              <Button
                px="16"
                variant="primary"
                label="Send"
                onClick={() => {
                  if (submitReferralForm()) {
                    console.log("REFERRAL DATA", referralValues);
                    alert("Referral form submitted successfully!");
                  }
                }}
              />
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default FriendForm;

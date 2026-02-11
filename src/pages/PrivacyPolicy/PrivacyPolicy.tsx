import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import PolicySection from "./PolicySection";
import { POLICY_DATA } from "./data";

const PrivacyPolicyPage = () => {
  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {/* Header */}
      <Heading as="h1" fontWeight="normal" mb={{ base: 6, lg: 8 }}>
        Privacy &{" "}
        <Text as="span" color="brand.primary">
          Security Policy
        </Text>
      </Heading>

      <VStack gap={0} align="stretch">
        {POLICY_DATA.map((item) => (
          <PolicySection
            key={item.title}
            icon={item.icon}
            title={item.title}
            image={item.image}
            reverse={item.reverse}
          >
            {item.content.map((text, index) => (
              <Text key={index} color="brand.secondary" textStyle="size-lg">
                {text}
              </Text>
            ))}
          </PolicySection>
        ))}
      </VStack>
    </Container>
  );
};

export default PrivacyPolicyPage;

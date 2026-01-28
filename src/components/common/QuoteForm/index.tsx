import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Input,
  RadioGroup,
} from "@chakra-ui/react";
import QuoteFormImage from "../../../assets/quote-form-image.webp";
import Button from "../Button/Button";

const QuoteForm = () => {
  return (
    <Box>
      {/* Image */}
      <Image
        src={QuoteFormImage}
        alt="Quote Form"
        w="100%"
        rounded="2xl"
      />

      {/* Form */}
      <Box bg="white" p={6} mt={4} rounded="2xl">
        <Heading
          fontSize="xl"
          textAlign="center"
          fontWeight="medium"
          mb={4}
        >
          Get a Moving{" "}
          <Text as="span" color="blue.500">
            Quote
          </Text>
        </Heading>

        <Stack gap={4}>
          {/* Full Name */}
          <Box>
            <Text mb={1}>Full Name</Text>
            <Input placeholder="Enter full name" />
          </Box>

          {/* Date */}
          <Box>
            <Text mb={1}>Date</Text>
            <Input type="date" />
          </Box>

          {/* Phone */}
          <Box>
            <Text mb={1}>Phone Number</Text>
            <Input type="tel" placeholder="Enter phone number" />
          </Box>

          {/* Email */}
          <Box>
            <Text mb={1}>Email</Text>
            <Input type="email" autoComplete="email" />
          </Box>

          {/* ✅ Radio Group – Chakra v3 correct way */}
          <RadioGroup.Root defaultValue="1">
            <Stack gap={2}>
              <RadioGroup.Item value="1">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  Instant Online Estimate
                </RadioGroup.ItemText>
              </RadioGroup.Item>

              <RadioGroup.Item value="2">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  In-Home Move Estimate
                </RadioGroup.ItemText>
              </RadioGroup.Item>

              <RadioGroup.Item value="3">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  Request a call back
                </RadioGroup.ItemText>
              </RadioGroup.Item>
            </Stack>
          </RadioGroup.Root>

          {/* Button */}
          <Button
            variant="primary"
            label="Proceed"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export { QuoteForm };

import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import QuoteFormImage from "../../../assets/quote-form-image.webp";
import Button from "../Button/Button";
import DateInput from "../DateInput/DateInput";
import { useState } from "react";
import RadioField from "../Radio/Radio";
import InputField from "../Input/Input";
import { FaEnvelope, FaPhoneAlt, FaUserFriends } from "react-icons/fa";

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [estimate, setEstimate] = useState("");
  return (
    <Box>
      <Image
        src={QuoteFormImage}
        alt="Quote Form"
        w="100%"
        rounded="2xl"
      />
      <Box bg="brand.white" p={6} mt={4} rounded="2xl">
        <Heading
          fontSize="xl"
          textAlign="center"
          fontWeight="medium"
          mb={4}
        >
          Get a Moving{" "}
          <Text as="span" color="brand.primary">
            Quote
          </Text>
        </Heading>

        <Stack gap={4}>
          <Box>
            <InputField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<FaUserFriends />}
              isRequired
            />
          </Box>
          <Box>
            <DateInput
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              isRequired
            />
          </Box>
          <InputField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            leftIcon={<FaPhoneAlt />}
            isRequired
          />
          <Box>
            <InputField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               leftIcon={<FaEnvelope />}
              isRequired
            />
          </Box>

          <RadioField
            options={[
              { label: "Instant Online Estimate", value: "Instant Online Estimate" },
              { label: "In-Home Move Estimate", value: "In-Home Move Estimate" },
              { label: "Request a call back", value: "Request a call back" },
            ]}
            value={estimate}
            onValueChange={setEstimate}
            isRequired
          />
          <Button
            variant="primary"
            label="Next"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export { QuoteForm };

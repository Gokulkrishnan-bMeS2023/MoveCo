import {
  Box,
  Image,
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import InputField from "../../../components/common/Input/Input";
import Notes from "../../../components/common/Notes/Notes";
import DateInput from "../../../components/common/DateInput/DateInput";
import Button from "../../../components/common/Button/Button";
import SelectField from "../../../components/common/Select/Select";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import { useNavigate } from "react-router-dom";
import { images } from "../../../assets";
import { useInHomeEstimateForm } from "./useInHomeMoveEstimate";

const InHomeMoveEstimate = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, moveSizeOptions, timeOptions, hearAboutOptions, stateOptions, } = useInHomeEstimateForm();

  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 4, lg: 10 }}
        mb={{ base: 4, lg: 6 }}
      >
        <Heading as="h1" fontWeight="normal" maxW={{ lg: "45%" }} textAlign={{ base: "center", lg: "left" }}>
          In-Home
          <Text as="span" color="brand.primary">
            Move Estimate
          </Text>
        </Heading>
        <Text textStyle="size-xl" maxW={{ lg: "45%" }} textAlign={{ base: "center", lg: "right" }}>
          All information will not be released to any other person or company,
          please read our{" "}
          <Text
            as="span"
            color="brand.primary"
            textDecoration="underline"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            onClick={() => navigate("/privacy-policy")}
          >
            privacy policy
          </Text>
          .{" "}
          <Text as="span" fontWeight="500">
            Be sure to ask about our packing services!
          </Text>
        </Text>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        alignItems="center"
        gap={{ base: 4, lg: 16 }}>
        <Box w="100%">
          <Image
            src={images.inHomeMove}
            alt="footprint"
            w="100%"
            h="auto"
            borderRadius="2xl"
            loading="eager"
            fetchPriority="high"
          />
        </Box>

        <Text textStyle="size-3xl" textAlign={{ base: "center", lg: "left" }} >
          After filling out this form, an appointment will be made to have a
          real, live person come out and estimate your move costs. This is a
          free service, and is perfect for individuals who are unsure as to
          how items can and will be moved.
        </Text>
      </SimpleGrid>
      <Box pt="sectionTop">
        <Stack gap={8}>
          <Box
            bg="brand.white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
          >
            <Stack gap={4}>
              <Heading as="h3" fontWeight="normal" color="brand.primary">
                General Information
              </Heading>

              <Text textStyle="size-md" color="brand.secondary">
                Which date and time is convenient for one of our trained
                professional estimators to come out and visit you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                <DateInput
                  label="Date"
                  variant="future-only"
                  value={values.visitDate}
                  onChange={(e) => handleChange("visitDate", e.target.value)}
                  isRequired
                  errorMessage={errors.visitDate}
                />


                <SelectField
                  label="Preferred Time"
                  options={timeOptions}
                  value={values.visitTime}
                  onValueChange={(e) => handleChange("visitTime", e.value[0])}
                  isRequired
                  errorMessage={errors.visitTime}
                />

              </SimpleGrid>
              <DateInput
                label="On which date are you planning on moving?"
                value={values.moveDate}
                onChange={(e) => handleChange("moveDate", e.target.value)}
                isRequired
                errorMessage={errors.moveDate}
              />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                <SelectField
                  label="What do you estimate your move size to be?"
                  options={moveSizeOptions}
                  value={values.moveSize}
                  onValueChange={(e) => handleChange("moveSize", e.value[0])}
                  isRequired
                  errorMessage={errors.moveSize}
                />
                <SelectField
                  label="How did you hear about MoveCo.net?"
                  options={hearAboutOptions}
                  value={values.hearAbout}
                  onValueChange={(e) => handleChange("hearAbout", e.value[0])}
                  errorMessage={errors.hearAbout}
                />

              </SimpleGrid>
            </Stack>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
            >
              <Stack gap={4}>
                <Heading as="h3" fontWeight="normal" color="brand.primary">
                  Contact Information
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                  <InputField
                    label="First Name"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    isRequired
                    errorMessage={errors.firstName}
                  />

                  <InputField
                    label="Last Name"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    isRequired
                    errorMessage={errors.lastName}
                  />
                </SimpleGrid>

                <InputField
                  label="Email"
                  placeholder="Email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  isRequired
                  errorMessage={errors.email}
                />

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                  <PhoneField
                    label="Home Phone"
                    value={values.homePhone}
                    onChange={(digits) => handleChange("homePhone", digits)}
                    isRequired
                    errorMessage={errors.homePhone}
                  />
                  <PhoneField
                    label="Cell Phone"
                    value={values.cellPhone}
                    onChange={(digits) => handleChange("cellPhone", digits)}
                    errorMessage={errors.cellPhone}
                  />
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                  <PhoneField
                    label="Work Phone"
                    value={values.workPhone}
                    onChange={(digits) => handleChange("workPhone", digits)}
                    errorMessage={errors.workPhone}
                  />
                  <PhoneField
                    label="Fax Phone"
                    value={values.faxPhone}
                    onChange={(digits) => handleChange("faxPhone", digits)}
                    errorMessage={errors.faxPhone}
                  />
                </SimpleGrid>
              </Stack>
            </Box>

            <Box
              bg="brand.white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
            >

              <Stack gap={4}>
                <Heading as="h3" fontWeight="normal" color="brand.primary">
                  Move Location
                </Heading>
                <InputField
                  label="From Address"
                  placeholder="From Address"
                  value={values.fromAddress}
                  onChange={(e) => handleChange("fromAddress", e.target.value)}
                  isRequired
                  errorMessage={errors.fromAddress}
                />

                <InputField
                  label="Apt / Suite / Other"
                  placeholder="Apt / Suite / Other"
                  value={values.apt}
                  onChange={(e) => handleChange("apt", e.target.value)}
                />

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
                  <InputField
                    label="City"
                    placeholder="City"
                    value={values.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    isRequired
                    errorMessage={errors.city}
                  />
                  <SelectField
                    label="State"
                    options={stateOptions}
                    value={values.state}
                    onValueChange={(e) => handleChange("state", e.value[0])}
                    isRequired
                    errorMessage={errors.state}
                  />
                  <InputField
                    label="Zip Code"
                    placeholder="Zip Code"
                    type="number"
                    value={values.zipCode}
                    isRequired
                    onChange={(e) =>
                      handleChange(
                        "zipCode",
                        e.target.value.replace(/\D/g, "").slice(0, 5),
                      )
                    }
                    errorMessage={errors.zipCode}
                  />
                </SimpleGrid>

                <Notes
                  label="Additional Information"
                  placeholder="Specify and additional notes here"
                  value={values.notes}
                  onChange={(value) => handleChange("notes", value)}
                />
              </Stack>
            </Box>
          </SimpleGrid>

          <Box textAlign={{ base: "center", md: "right" }}>
            <Button
              label="Send"
              variant="primary"
              px="16"
              onClick={handleSubmit}
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default InHomeMoveEstimate;
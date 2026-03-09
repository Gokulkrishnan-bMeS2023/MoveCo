import { useState, useEffect } from "react";
import { Stack, SimpleGrid, Heading, Box } from "@chakra-ui/react";
import InputField from "../../../components/common/Input/Input";
import SelectField from "../../../components/common/Select/Select";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import DateInput from "../../../components/common/DateInput/DateInput";
import RadioField from "../../../components/common/Radio/Radio";
import SSNField from "../../../components/common/SsnInput/SsnInput";
import { getStateInstant } from "../../../api/statciDataService"; 
import { toStateOptions, type SelectOption } from "./selectOptionUtils";


const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

interface Props {
  formData: any;
  errors: any;
  handleChange: (field: string, value: any) => void;
}

const Step1PersonalInfo = ({ formData, errors, handleChange }: Props) => {
  const [stateOptions, setStateOptions] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await getStateInstant();
        setStateOptions(toStateOptions(response.data || []));
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
    };
    fetchStates();
  }, []);

  return (
    <Stack gap={8}>
      <Box
        bg="brand.white"
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.100"
      >
        <Stack gap={4}>
          <Heading as="h3" color="brand.primary" fontWeight="normal">
            Position Details
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
            <InputField
              label="Position Sought"
              value={formData.PositionSought}
              onChange={(e) => handleChange("PositionSought", e.target.value)}
              type="alphanumeric"
            />
            <InputField
              label="How did you learn about the position?"
              value={formData.Howdidyoulearnabouttheposition}
              type="alphanumeric"
              onChange={(e) =>
                handleChange("Howdidyoulearnabouttheposition", e.target.value)
              }
            />
          </SimpleGrid>
        </Stack>
      </Box>

      {/* Personal Information */}
      <Box
        bg="brand.white"
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.100"
      >
        <Stack gap={4}>
          <Heading as="h3" color="brand.primary" fontWeight="normal">
            Your Information
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
            <InputField
              label="First Name"
              placeholder="First Name"
              isRequired
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              errorMessage={errors.firstName}
            />
            <InputField
              label="Last Name"
              placeholder="Last Name"
              isRequired
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              errorMessage={errors.lastName}
            />
            <InputField
              label="Email"
              placeholder="Email"
              type="email"
              isRequired
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              errorMessage={errors.email}
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
            <PhoneField
              label="Home Phone"
              value={formData.HomePhone}
              errorMessage={errors.HomePhone}
              onChange={(digits) => handleChange("HomePhone", digits)}
            />
            <PhoneField
              label="Cell Phone"
              value={formData.CellPhone}
              errorMessage={errors.CellPhone}
              onChange={(digits) => handleChange("CellPhone", digits)}
            />
            <InputField
              label="Address"
              placeholder="Address"
              type="alphanumeric"
              value={formData.Address}
              onChange={(e) => handleChange("Address", e.target.value)}
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
            <InputField
              label="City"
              placeholder="City"
              value={formData.City}
              onChange={(e) => handleChange("City", e.target.value)}
            />
            <SelectField
              label="State"
              options={stateOptions} 
              placeholder={stateOptions?.[0]?.label}
              value={formData.State}
              onValueChange={(d) => handleChange("State", d.value[0])}
              errorMessage={errors.State}
            />
            <InputField
              label="Zip Code"
              placeholder="Zip Code"
              type="number"
              value={formData.ZipCode}
              onChange={(e) =>
                handleChange(
                  "ZipCode",
                  e.target.value.replace(/\D/g, "").slice(0, 5),
                )
              }
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
            <SSNField
              label="Social Security Number"
              value={formData.SocialSecurityNumber}
              onChange={(digits) => handleChange("SocialSecurityNumber", digits)}
              errorMessage={errors.SocialSecurityNumber}
            />
            <DateInput
              label="Available Start Date"
              placeholder="Available start Date"
              value={formData.Onwhatdatewouldyoubeavailableforwork}
              onChange={(e) =>
                handleChange(
                  "Onwhatdatewouldyoubeavailableforwork",
                  e.target.value,
                )
              }
            />
          </SimpleGrid>

          <Stack gap={4}>
            <RadioField
              label="Are you a U.S. citizen, or are you otherwise authorized to work in the U.S. without any restriction?"
              options={yesNoOptions}
              value={formData.citizen}
              onValueChange={(val) => handleChange("citizen", val)}
              isRequired
              errorMessage={errors.citizen}
              direction="row"
            />
            <RadioField
              label="Have you ever been convicted of a felony?"
              options={yesNoOptions}
              value={formData.felony}
              onValueChange={(val) => handleChange("felony", val)}
              isRequired
              errorMessage={errors.felony}
              direction="row"
            />
            <RadioField
              label="Have you ever been involuntarily terminated or asked to resign from any position of employment?"
              options={yesNoOptions}
              value={formData.terminated}
              onValueChange={(val) => handleChange("terminated", val)}
              isRequired
              errorMessage={errors.terminated}
              direction="row"
            />
            <RadioField
              label="If selected for employment, are you willing to submit to a pre-employment drug screening test?"
              options={yesNoOptions}
              value={formData.drugTest}
              onValueChange={(val) => handleChange("drugTest", val)}
              isRequired
              errorMessage={errors.drugTest}
              direction="row"
            />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Step1PersonalInfo;
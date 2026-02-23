import { Stack, SimpleGrid, Heading, Box} from "@chakra-ui/react";
import InputField from "../../../components/common/Input/Input";
import SelectField from "../../../components/common/Select/Select";
import PhoneField from "../../../components/common/PhoneInput/PhoneInput";
import DateInput from "../../../components/common/DateInput/DateInput";
import RadioField from "../../../components/common/Radio/Radio";
import SSNField from "../../../components/common/SsnInput/SsnInput";

const stateOptions = [
  { label: "Texas", value: "TX" },
  { label: "Alaska", value: "AK" },
  { label: "Alabama", value: "AL" },
  { label: "Arkansas", value: "AR" },
  { label: "Arizona", value: "AZ" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "District of Columbia", value: "DC" },
  { label: "Delaware", value: "DE" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
  { label: "Hawaii", value: "HI" },
  { label: "Iowa", value: "IA" },
  { label: "Idaho", value: "ID" },
  { label: "Illinois", value: "IL" },
  { label: "Indiana", value: "IN" },
  { label: "Kansas", value: "KS" },
  { label: "Kentucky", value: "KY" },
  { label: "Louisiana", value: "LA" },
  { label: "Massachusetts", value: "MA" },
  { label: "Maryland", value: "MD" },
  { label: "Maine", value: "ME" },
  { label: "Michigan", value: "MI" },
  { label: "Minnesota", value: "MN" },
  { label: "Missouri", value: "MO" },
  { label: "Mississippi", value: "MS" },
  { label: "Montana", value: "MT" },
  { label: "North Carolina", value: "NC" },
  { label: "North Dakota", value: "ND" },
  { label: "Nebraska", value: "NE" },
  { label: "New Hampshire", value: "NH" },
  { label: "New Jersey", value: "NJ" },
  { label: "New Mexico", value: "NM" },
  { label: "Nevada", value: "NV" },
  { label: "New York", value: "NY" },
  { label: "Ohio", value: "OH" },
  { label: "Oklahoma", value: "OK" },
  { label: "Oregon", value: "OR" },
  { label: "Pennsylvania", value: "PA" },
  { label: "Puerto Rico", value: "PR" },
  { label: "Rhode Island", value: "RI" },
  { label: "South Carolina", value: "SC" },
  { label: "South Dakota", value: "SD" },
  { label: "Tennessee", value: "TN" },
  { label: "Utah", value: "UT" },
  { label: "Virginia", value: "VA" },
  { label: "Virgin Islands", value: "VI" },
  { label: "Vermont", value: "VT" },
  { label: "Washington", value: "WA" },
  { label: "Wisconsin", value: "WI" },
  { label: "West Virginia", value: "WV" },
  { label: "Wyoming", value: "WY" },
];


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
  return (
    <Stack gap={8}>
      {/* Position Details */}
      <Box
        bg="brand.white"
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.100"
      >
        <Heading as="h3" color="brand.primary" fontWeight="normal" mb={4}>
          Position Details
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <InputField
            label="Position Sought"
            value={formData.PositionSought}
            onChange={(e) => handleChange("PositionSought", e.target.value)}
          />
          <InputField
            label="How did you learn about the position?"
            value={formData.Howdidyoulearnabouttheposition}
            onChange={(e) => handleChange("Howdidyoulearnabouttheposition", e.target.value)}
          />
        </SimpleGrid>
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

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
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

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
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
              value={formData.Address}
              onChange={(e) => handleChange("Address", e.target.value)}
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <InputField
              label="City"
              placeholder="City"
              value={formData.City}
              onChange={(e) => handleChange("City", e.target.value)}
            />
            <SelectField
              label="State"
              options={stateOptions}
              placeholder="State"
              value={formData.State}
              onValueChange={(d) => handleChange("State", d.value[0])}
              isRequired
              errorMessage={errors.State}
            />
            <InputField
              label="Zip Code"
              placeholder="Zip Code"
              type="number"
              value={formData.ZipCode}
              onChange={(e) =>
                handleChange("ZipCode", e.target.value.replace(/\D/g, "").slice(0, 5))
              }
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
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
                handleChange("Onwhatdatewouldyoubeavailableforwork", e.target.value)
              }
            />
          </SimpleGrid>

          <Stack gap={4}>
            <RadioField
              label="Are you legally authorized to work in the U.S.?"
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
              label="Have you ever been involuntarily terminated?"
              options={yesNoOptions}
              value={formData.terminated}
              onValueChange={(val) => handleChange("terminated", val)}
              isRequired
              errorMessage={errors.terminated}
              direction="row"
            />
            <RadioField
              label="Are you willing to submit to a drug test?"
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
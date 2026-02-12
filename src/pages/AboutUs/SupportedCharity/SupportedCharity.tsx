import { Container, Box } from "@chakra-ui/react";
import { SUPPORTED_CHARITY_DATA } from "./data";
import SideContentSection from "./SideContentSection";

const SupportedCharity = () => {
  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {SUPPORTED_CHARITY_DATA.map((item,index) => (
        <Box key={item.title}  pt={index === 0 ? 0 : { base: 10, md: 16 }}>
          <SideContentSection
            title={item.title}
            description={item.description}
            image={item.image}
            linkText={item.linkText}
            linkHref={item.linkHref}
            reverse={item.reverse}
          />
        </Box>
      ))}
    </Container>
  );
};

export default SupportedCharity;

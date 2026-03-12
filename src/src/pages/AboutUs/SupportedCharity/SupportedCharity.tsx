import { Container, Box } from "@chakra-ui/react";
import { SUPPORTED_CHARITY_DATA } from "./data";
import SideContentSection from "./SideContentSection";

const SupportedCharity = () => {
  return (
    <Container>
      {SUPPORTED_CHARITY_DATA.map((item,index) => (
        <Box key={item.title}  pt={index === 0 ? 0 : "sectionTop"}>
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

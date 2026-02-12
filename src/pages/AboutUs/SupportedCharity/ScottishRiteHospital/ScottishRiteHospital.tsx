import { Container } from "@chakra-ui/react";
import { SCOTTISH_RITE_DATA } from "./data";
import SideContentSection from "../SideContentSection";

const ScottishRiteHospital = () => {
  return (
    <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      {SCOTTISH_RITE_DATA.map((item) => (
        <SideContentSection
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
          linkText={item.linkText}
          linkHref={item.linkHref}
          reverse={item.reverse}
        />
      ))}
    </Container>
  );
};

export default ScottishRiteHospital;

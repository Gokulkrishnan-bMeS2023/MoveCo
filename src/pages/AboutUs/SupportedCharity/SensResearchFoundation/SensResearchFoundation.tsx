import { Container } from "@chakra-ui/react";
import { SENS_DATA } from "./data";
import SideContentSection from "../SideContentSection";

const SensResearchFoundation = () => {
  return (
    <Container>
      {SENS_DATA.map((item) => (
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

export default SensResearchFoundation;

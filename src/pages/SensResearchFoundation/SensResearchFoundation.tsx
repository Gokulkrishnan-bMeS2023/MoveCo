import {Container } from "@chakra-ui/react";
import SensImg from "../../assets/SENS.jpg";
import SideContentSection from "../../components/common/SideContentSection/SideContentSection";

const SupportedCharity = () => {
  return (
   <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      <SideContentSection
        title="SENS Research Foundation"
        description="At SENS Research Foundation, we believe that a world free of age-related disease is possible. 
                    That’s why we’re funding work at universities across the world and at our own Research Center in Mountain View, 
                    CA.Our research emphasizes the application of regenerative medicine to age-related disease, with the intent of repairing underlying damage to the body’s tissues, cells, and molecules. 
                    Our goal is to help build the industry that will cure the diseases of aging."
        image={SensImg}
        linkText="Find more"
        linkHref="https://lifespan.io/"
      />
    </Container>
  );
};

export default SupportedCharity;

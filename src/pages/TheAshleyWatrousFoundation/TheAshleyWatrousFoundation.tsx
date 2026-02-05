import { Container } from "@chakra-ui/react";
import AshleyImg from "../../assets/ashley-watrous.jpg";
import SideContentSection from "../../components/common/SideContentSection/SideContentSection";

const TheAshleyWatrousFoundation = () => {
  return (
   <Container maxW="100%" px={8} py={{ base: 10, md: 12 }}>
      <SideContentSection
        title="The Ashley Watrous Foundation"
        description="Dedicated to America’s positive future. Our children are our future. The problems of tomorrow can 
                     only be confronted with well-educated, responsible, courageous and trustworthy people. A generation that does 
                     not want what others have, but wants to create for themselves."
        image={AshleyImg}
        linkText="Find more"
        linkHref="https://ashleywatrous.com/"
      />
    </Container>
  );
};

export default TheAshleyWatrousFoundation;

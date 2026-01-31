import { Container } from "@chakra-ui/react";
import ScottishImg from "../../assets/scottish-rite.jpg";
import SideContentSection from "../../components/common/SideContentSection/SideContentSection";

const SupportedCharity = () => {
  return (
   <Container maxW="100%" px={8} py={12}>
      <SideContentSection
        title="Scottish Rite Hospital"
        description="Every day world-renowned experts provide care, guidance and innovation to help kids run, jump and play.
                     The Scottish Rite Hospital’s orthopedic specialists are at the forefront of their profession and are 
                     recognized globally for their leadership in: Providing extraordinary patient care.  Treating a complete 
                     range of pediatric orthopedic conditions. Solving many of the world’s most complex orthopedic cases. 
                     Pioneering research and innovation of leading-edge technologies.  Discovering genetic breakthroughs. 
                     Educating future leaders in pediatric orthopedics."
        image={ScottishImg}
        linkText="Find more"
        linkHref="/ScottishRiteHospital"
      />
    </Container>
  );
};

export default SupportedCharity;

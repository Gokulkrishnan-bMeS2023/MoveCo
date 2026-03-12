import { Container, Box } from "@chakra-ui/react";
import { PRODUCT_AND_SERVICES_DATA } from "./data";
import SideContentSection from "../../AboutUs/SupportedCharity/SideContentSection";
import HeroBanner from "../../AboutUs/AboutUsComponents/HeroBanner";
import { images } from "../../../assets";

const ProductAndServices = () => {
  return (
    <Container>
      <HeroBanner bgImage={images.insuranceBanner} title="Product & Services" />
      <Box pt="sectionTop">
        {PRODUCT_AND_SERVICES_DATA.map((item, index) => (
          <Box key={item.title} pt={index === 0 ? 0 : "sectionTop"}>
            <SideContentSection
              title={item.title}
              description={item.description}
              description2={item.description2}
              image={item.image}
              linkText={item.linkText}
              linkHref={item.linkHref}
              reverse={item.reverse}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProductAndServices;

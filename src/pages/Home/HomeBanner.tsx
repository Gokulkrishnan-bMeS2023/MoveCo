import { Box, Flex, Heading, Text, Stack, Image, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Button from "../../components/common/Button/Button";
import { images } from "../../assets";
import { useNavigate } from "react-router-dom";

const MainBanner = () => {
   const navigate = useNavigate();
  return (
    <>
      <Box
        display={{ base: "none", lg: "block" }}
        minHeight="82vh"
        backgroundImage={`url(${images.mainBannerBg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="xl"
      >
        <Flex
          minHeight="82vh"
          justifyContent="flex-end"
          alignItems="center"
          color="brand.white"
          padding={4}
        >
          <Box width="45%">
            <Stack gap={4}>
              <Heading as="h2" lineHeight="1.1">
                Your{" "}
                <Box
                  as="span"
                  backgroundImage="linear-gradient(to top, #22c55ebe 75%, transparent 0)"
                  backgroundSize="100% 75%"
                  backgroundPosition="bottom"
                  backgroundRepeat="no-repeat"
                >
                  Authentic
                </Box>
                <br />
                Professional
                <br />
                Pack/Unpack Services
              </Heading>

              <Text textStyle={"size-md"}>
                Let us take care of packing and unpacking of your household
                goods, while keep your entire moving plan hassle free
              </Text>
              <Box>
                <Button variant="warning" label="Learn More"  onClick={() => navigate("/professional-packing-services")} />
              </Box>
              <Flex
                padding={4}
                bg="rgba(255,255,255,0.2)"
                borderRadius="xl"
                width="85%"
                gap={6}
                flexWrap="wrap"
                justifyContent={{ lg: "center", '2xl': "space-between" }}
                alignItems="center"
              >
                <Stack alignItems="center" gap={2}>
                  <Heading as="h3">5000+</Heading>
                  <Flex>
                    {[
                      images.customer1,
                      images.customer2,
                      images.customer3,
                      images.customer4,
                      images.customer5,
                    ].map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt="customer"
                        boxSize="30px"
                        borderRadius="full"
                        ml={i === 0 ? 0 : "-8px"}
                      />
                    ))}
                  </Flex>
                </Stack>

                <Stack alignItems="center" gap={2}>
                  <Flex>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        as={FaStar}
                        key={i}
                        boxSize="22px"
                        color="brand.warning"
                      />
                    ))}
                  </Flex>
                  <Text textStyle="size-md">Valuable Customers</Text>
                </Stack>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>

      <Box
        display={{ base: "block", lg: "none" }}
        backgroundImage={`url(${images.mainBannerMobile})`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="xl"
        px={6}
        py={6}
        color="brand.white"
      >
        <Stack gap={4}>
          <Heading as="h2">
            Your Authentic Professional Pack/Unpack Services
          </Heading>

          <Text textStyle={"size-md"}>
            Let us take care of packing and unpacking of your household goods,
            while keep your entire moving plan hassle free
          </Text>
          <Box>
            <Button variant="warning" label="Learn More"  onClick={() => navigate("/professional-packing-services")} />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export { MainBanner };




// import { Box, Flex, Heading, Text, Stack, Image, Icon } from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";
// import Button from "../../components/common/Button/Button";
// import { images } from "../../assets";
// import { useNavigate } from "react-router-dom";

// const MainBanner = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* DESKTOP */}
//       <Box display={{ base: "none", lg: "block" }} minHeight="82vh" position="relative" borderRadius="xl" overflow="hidden">
        
//         {/* HERO IMAGE */}
//         <Image
//           src={images.mainBannerBg}
//           alt="Main Banner"
//           position="absolute"
//           inset={0}
//           w="100%"
//           h="100%"
//           objectFit="cover"
//           loading="eager"
//           fetchPriority="high"
//         />

//         {/* CONTENT */}
//         <Flex
//           minHeight="82vh"
//           justifyContent="flex-end"
//           alignItems="center"
//           color="brand.white"
//           padding={4}
//           position="relative"
//           zIndex={1}
//         >
//           <Box width="45%">
//             <Stack gap={4}>
//               <Heading as="h2" lineHeight="1.1">
//                 Your{" "}
//                 <Box
//                   as="span"
//                   backgroundImage="linear-gradient(to top, #22c55ebe 75%, transparent 0)"
//                   backgroundSize="100% 75%"
//                   backgroundPosition="bottom"
//                   backgroundRepeat="no-repeat"
//                 >
//                   Authentic
//                 </Box>
//                 <br />
//                 Professional
//                 <br />
//                 Pack/Unpack Services
//               </Heading>

//               <Text textStyle="size-md">
//                 Let us take care of packing and unpacking of your household
//                 goods, while keep your entire moving plan hassle free
//               </Text>

//               <Box>
//                 <Button
//                   variant="warning"
//                   label="Learn More"
//                   onClick={() => navigate("/professional-packing-services")}
//                 />
//               </Box>

//               <Flex
//                 padding={4}
//                 bg="rgba(255,255,255,0.2)"
//                 borderRadius="xl"
//                 width="85%"
//                 gap={6}
//                 flexWrap="wrap"
//                 justifyContent={{ lg: "center", xl: "space-between" }}
//                 alignItems="center"
//               >
//                 <Stack alignItems="center" gap={2}>
//                   <Heading as="h3">5000+</Heading>
//                   <Flex>
//                     {[
//                       images.customer1,
//                       images.customer2,
//                       images.customer3,
//                       images.customer4,
//                       images.customer5,
//                     ].map((img, i) => (
//                       <Image
//                         key={i}
//                         src={img}
//                         alt="customer"
//                         boxSize="30px"
//                         borderRadius="full"
//                         ml={i === 0 ? 0 : "-8px"}
//                         loading="lazy"
//                       />
//                     ))}
//                   </Flex>
//                 </Stack>

//                 <Stack alignItems="center" gap={2}>
//                   <Flex>
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Icon as={FaStar} key={i} boxSize="22px" color="brand.warning" />
//                     ))}
//                   </Flex>
//                   <Text textStyle="size-md">Valuable Customers</Text>
//                 </Stack>
//               </Flex>
//             </Stack>
//           </Box>
//         </Flex>
//       </Box>

//       {/* MOBILE */}
//       <Box display={{ base: "block", lg: "none" }} position="relative" borderRadius="xl" overflow="hidden">

//         <Image
//           src={images.mainBannerMobile}
//           alt="Mobile Banner"
//           w="100%"
//           h="100%"
//           objectFit="cover"
//           loading="eager"
//           fetchPriority="high"
//         />

//         <Box px={6} py={10} color="brand.white" position="absolute" inset={0}>
//           <Stack gap={4}>
//             <Heading as="h2">
//               Your Authentic Professional Pack/Unpack Services
//             </Heading>

//             <Text textStyle="size-md">
//               Let us take care of packing and unpacking of your household goods,
//               while keep your entire moving plan hassle free
//             </Text>

//             <Box>
//               <Button
//                 variant="warning"
//                 label="Learn More"
//                 onClick={() => navigate("/professional-packing-services")}
//               />
//             </Box>
//           </Stack>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export { MainBanner };
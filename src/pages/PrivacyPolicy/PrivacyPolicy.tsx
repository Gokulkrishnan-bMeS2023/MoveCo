import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  FaShieldAlt,
  FaEnvelope,
  FaCookie,
  FaLink,
  FaLock,
  FaUserShield,
  FaInfoCircle,
} from "react-icons/fa";

// Image placeholders (replace with actual imports)
const images = {
  PersonalInformation:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  EMail:
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
  CookiesandTags:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  Linking:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  Security:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  Statement:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
};

const PolicySection = ({
  icon,
  title,
  image,
  children,
  reverse = false,
}: any) => {
  return (
    <Box py={8}>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={16}
        alignItems="center"
      >
        {/* Left Side */}
        <GridItem order={{ base: 1, lg: reverse ? 2 : 1 }}>
          <VStack align="start" gap={8}>
            <HStack gap={3}>
              <Icon fontSize="3xl" color="brand.primary">
                {React.createElement(icon)}
              </Icon>
              <Heading as="h3" color="brand.primary">
                {title}
              </Heading>
            </HStack>
            <Image
              src={image}
              alt={title}
              borderRadius="lg"
              w="80%"
              h="300px"
              objectFit="cover"
              shadow="md"
            />
          </VStack>
        </GridItem>

        {/* Right Side */}
        <GridItem order={{ base: 2, lg: reverse ? 1 : 2 }}>
          <Box>{children}</Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <Container maxW="100%" px={8} py={10}>
      {/* Header */}
      <HStack>
        <Icon fontSize="5xl">
          <FaShieldAlt />
        </Icon>
        <HStack>
          <Heading as="h1" fontWeight={"normal"}>
            Privacy &{" "}
          </Heading>
          <Heading as="h1" color={"brand.primary"} fontWeight={"normal"}>
            Security Policy
          </Heading>
        </HStack>
      </HStack>

      {/* Main Content */}

      <VStack gap={0} align="stretch">
        {/* Personal Information Collection - Image Left, Content Right */}
        <PolicySection
          icon={FaUserShield}
          title="Collecting and Using Personal Information"
          image={images.PersonalInformation}
          reverse={false}
        >
          <VStack align="stretch" gap={4}>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              Welcome to MoveCo.net's websites. We appreciate your interest in
              us. When you visit and navigate our sites and when you communicate
              with us via our sites, we will not collect personal information
              about you unless you provide us that information voluntarily. Any
              non-public personal information that you may provide via our sites
              will be used solely for the purpose stated on the page where it is
              collected. (In some cases, and in all cases where required by law
              or regulation, you will be able to update the information that you
              provide to us either by sending us an e-mail or, where you have
              established personal profiles with us, by updating your profile
              online. Please refer to the specific pages where data is collected
              for more information.) MoveCo.net will not sell, license, transmit
              or disclose this information outside of MoveCo.net and its
              affiliated companies unless (a) expressly authorized by you, (b)
              necessary to enable MoveCo.net contractors or agents to perform
              certain functions for us, or (c) required or permitted by law. In
              all cases, we will disclose the information consistent with
              applicable laws and regulations and we will require the recipient
              to protect the information and use it only for the purpose it was
              provided.
            </Text>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              By "personal information", we mean data that is unique to an
              individual, such as a name, address, Social Security number,
              e-mail address, or telephone number. From time to time, we may
              request personal information from you at our sites in order to
              deliver requested materials to you, respond to your questions, or
              deliver a product or service.
            </Text>
          </VStack>
        </PolicySection>

        {/* Email Communications - Content Left, Image Right */}
        <PolicySection
          icon={FaEnvelope}
          title="Your E-Mail"
          image={images.EMail}
          reverse={true}
        >
          <VStack align="stretch" gap={4}>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              We welcome your comments or questions about our websites and have
              provided e-mail boxes for that purpose. We will share your
              comments and questions with our customer service representatives
              and those employees most capable of addressing your questions and
              concerns.
            </Text>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              Please note that your e-mail, like most, if not all, non-encrypted
              Internet e-mail communications, may be accessed and viewed by
              other Internet users, without your knowledge and permission, while
              in transit to us. For that reason, to protect your privacy, please
              do not use e-mail to communicate information to us that you
              consider confidential. If you wish, you may contact us instead via
              non-cellular telephone at the numbers provided at various
              locations on our sites or, in the case of our health plan members,
              at the Member Services toll-free number that appears on your ID
              card.
            </Text>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              There are some locations on MoveCo.net’s websites where we have
              made special provisions for a more secure environment in which we
              can exchange information with you. At each of these locations, we
              will provide you with appropriate instructions.
            </Text>
          </VStack>
        </PolicySection>

        {/* Cookies and Tracking - Image Left, Content Right */}
        <PolicySection
          icon={FaCookie}
          title='Other Information; "Cookies" and "Tags"'
          image={images.CookiesandTags}
          reverse={false}
        >
          <VStack align="stretch" gap={4}>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              You should also be aware that when you visit our websites, we
              collect certain information that does not identify you personally,
              but provides us with "usage data," such as the number of visitors
              we receive or what pages are visited most often. This data helps
              us to analyze and improve the usefulness of the information we
              provide at these websites.
            </Text>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              Like most commercial website owners, we may use what is known as
              "cookie" technology. A "cookie" is an element of data that a
              website can send to your browser when you link to that website. It
              is not a computer program and has no ability to read data residing
              on your computer or instruct it to perform any step or function.
              By assigning a unique data element to each visitor, the website is
              able to recognize repeat users, track usage patterns and better
              serve you when you return to that site. The cookie does not
              extract other personal information about you, such as your name or
              address.
            </Text>
            <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
              We may also use what is known as "client-side page tagging", which
              uses code on each page to write certain information about the page
              and the visitor to a log when a page is rendered by your web
              browser. This technique is also commonly used on commercial
              websites. "Tagging" does result in a JavaScript program running on
              your computer, but it is limited to providing information about
              the page that you are requesting and the configuration of your
              browser. It will not read any of your data files, or execute any
              additional programs. It does not extract any personal information
              about you, such as your name or address. You can prevent tagging
              by disabling JavaScript in your browser, but that may prevent you
              from using all of our website's functions.
            </Text>
          </VStack>
        </PolicySection>

        {/* External Links - Content Left, Image Right */}
        <PolicySection
          icon={FaLink}
          title="Linking to Other Sites"
          image={images.Linking}
          reverse={true}
        >
          <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
            From time to time, MoveCo.net websites may provide links to other
            websites, not owned or controlled by MoveCo.net, that we think might
            be useful or of interest to you. We cannot, however, be responsible
            for the privacy practices used by other website owners or the
            content or accuracy of those other websites. Links to various
            non-MoveCo.net websites do not constitute or imply endorsement by
            MoveCo.net of these websites, any products or services described on
            these sites, or of any other material contained in them.
          </Text>
        </PolicySection>

        {/* Security - Image Left, Content Right */}
        <PolicySection
          icon={FaLock}
          title="Security"
          image={images.Security}
          reverse={false}
        >
          <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
            MoveCo.net has adopted and adheres to stringent security standards
            designed to protect non-public personal information at
            MoveCo.net.com against accidental or unauthorized access or
            disclosure. Among the safeguards that MoveCo.net has developed for
            this site are administrative, physical and technical barriers that
            together form a protective firewall around the information stored at
            this site. We periodically subject our site to simulated intrusion
            tests and have developed comprehensive disaster recovery plans.
          </Text>
        </PolicySection>

        {/* Policy Changes - Content Left, Image Right */}
        <PolicySection
          icon={FaInfoCircle}
          title="Changes to This Statement"
          image={images.Statement}
          reverse={true}
        >
          <Text color="brand.secondary" textStyle="size-lg" lineHeight="tall">
            MoveCo.net may change this Statement from time to time; when updates
            are made, the Privacy Policy version date (located at the bottom of
            this Policy) will also be updated to reflect that a revision
            occurred. We encourage you to periodically reread this Policy to see
            if there have been any changes that may affect you. This Statement
            is not intended to and does not create any contractual or other
            legal rights in or on behalf of any party.
          </Text>
        </PolicySection>
      </VStack>
    </Container>
  );
};

export default PrivacyPolicyPage;

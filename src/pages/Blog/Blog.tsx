// import { useState } from "react";
// import {
//   ChakraProvider,
//   Box,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   Input,
//   Button,
//   Card,
//   Badge,
//   Flex,
//   Separator,
//   Link,
//   defaultSystem,
// } from "@chakra-ui/react";

// const BlogPost = ({ title, date, author, content, category }: any) => (
//   <Card.Root
//     mb={6}
//     overflow="hidden"
//     bg="white"
//     shadow="lg"
//     _hover={{ shadow: "xl", transform: "translateY(-2px)" }}
//     transition="all 0.3s"
//   >
//     <Card.Body p={8}>
//       <VStack align="start" gap={4}>
//         <HStack>
//           <Badge colorPalette="blue" size="sm">
//             {category}
//           </Badge>
//           <Text color="gray.500" fontSize="sm">
//             {date}
//           </Text>
//         </HStack>
//         <Heading size="2xl" color="gray.800">
//           {title}
//         </Heading>
//         <Text color="gray.600" fontSize="sm">
//           by {author}
//         </Text>
//         <Separator />
//         <Box
//           color="gray.700"
//           fontSize="md"
//           lineHeight="tall"
//           css={{ whiteSpace: "pre-line" }}
//         >
//           {content}
//         </Box>
//       </VStack>
//     </Card.Body>
//   </Card.Root>
// );

// const Sidebar = ({ categories, onCategoryClick }: any) => (
//   <Box position="sticky" top={8}>
//     <Card.Root bg="white" shadow="md" mb={6}>
//       <Card.Body p={6}>
//         <Heading size="lg" mb={4} color="gray.800">
//           Categories
//         </Heading>
//         <VStack align="stretch" gap={2}>
//           {categories.map((cat: any, idx: any) => (
//             <Button
//               key={idx}
//               variant="ghost"
//               justifyContent="flex-start"
//               onClick={() => onCategoryClick(cat)}
//               _hover={{ bg: "blue.50", color: "blue.600" }}
//             >
//               {cat}
//             </Button>
//           ))}
//         </VStack>
//       </Card.Body>
//     </Card.Root>

//     <Card.Root bg="white" shadow="md">
//       <Card.Body p={6}>
//         <Heading size="lg" mb={4} color="gray.800">
//           Archive
//         </Heading>
//         <VStack align="stretch" gap={3}>
//           <Box>
//             <Text fontWeight="bold" color="gray.700" mb={2}>
//               2024
//             </Text>
//             <VStack align="stretch" gap={1} pl={4}>
//               <Link color="blue.600" _hover={{ textDecoration: "underline" }}>
//                 January (2)
//               </Link>
//             </VStack>
//           </Box>
//           <Box>
//             <Text fontWeight="bold" color="gray.700" mb={2}>
//               2023
//             </Text>
//             <VStack align="stretch" gap={1} pl={4}>
//               <Link color="blue.600" _hover={{ textDecoration: "underline" }}>
//                 December (2)
//               </Link>
//             </VStack>
//           </Box>
//         </VStack>
//       </Card.Body>
//     </Card.Root>
//   </Box>
// );

// export default function MoveCoNetBlog() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const blogPosts = [
//     {
//       title: "Packing the House!",
//       date: "18 January 2024",
//       author: "Administrator",
//       category: "Professional Services",
//       content: `PROFESSIONAL PACKING SERVICES

// It is 8am the day before your move. There is a knock at your door. The clean-cut packing crew is wearing matching uniforms. You know based on your prior research that this company does background checks, drug tests, and has vetted the references of each packing/moving crew member. It does not matter how skilled your mover is, if you would not trust him in your house. After introductory courtesies, you invite them into your house and do a quick walk through with the crew leader, identifying concerns and answering questions. All boxes will be labeled based on where you will want the items at your new address. As you have pointed out individual rooms, the crew leader has taken note: master bedroom, Emilie's bedroom, Wesley's bedroom, laundry, kitchenette, et cetera. Meanwhile, the other members of the crew have brought in piles of new sturdy boxes, and packing supplies.

// There is packing tape, shrink wrap, bubble wrap, wardrobe boxes, 1.5 cubic ft. book boxes, 3.1 cubic ft. median boxes, and 4.5 cubic ft. large boxes, 4.5 cubic ft. dish packs and picture/mirror boxes. You're asked to sign the contract before they start. The contract is familiar, it is the same proposal you reviewed when you reserved your move date.

// The crew gets to work. Carefully wrapping all breakable items, and labeling the boxes, "fragile" or "glass". Books and heavier items are packed in 1.5 cubic ft. book boxes. Lighter items are packed in larger boxes. Hanging clothes are packed in wardrobe boxes; which are like mini closets with a metal bar to hang the clothes.

// You are on hand to answer any questions the crew may have, one of which is, "What should be packed in your priority boxes?" The stuff you will need immediately after the move. Things like coffee, cups, coffee pot for you and tooth brushes, and pajamas for the kids. If what you need most is identified now, packed and labeled; you will not be searching every box on the move night just to put the kids to bed. The first day in your new home can be kind of chaotic. A few well packed "priority boxes" can make all the difference.

// The phone rings a few hours later, it is the moving company's office. The lady on the phone just wants to know if everything is all right, and going smoothly. She asks if you have any questions. She then confirms the time the move crew will be there in the morning. It was just a courtesy call.

// As the day progresses, neat stacks of boxes about 4-5 feet tall fill the house. Each box is labeled with its contents and what room it is destined for at the new house. Boxes that are sealed with tape are about 40 % stronger than boxes that are just folded. Every box is sealed with tape.

// As the day comes to a close, your entire home is packed by professionals. The crew leader does a walk through with you to double check that everything that needed to be packed, was indeed packed. Meanwhile, the crew picks up any trash, empty tape rolls, box bundle binders, et cetera.

// The crew leader asks you to sign the move contract acknowledging the packing services performed. He leaves you with a copy of the updated move contract with actual box numbers, as well as his business card. Goodbyes are said and the crew departs.

// You look around with great relief. What would have taken an average family (with friends helping) over a week of exhausting work, and multiple trips to the box store, has been completed in just one day. You think to yourself this is the way to prep for a move. You are ready for the movers tomorrow!`,
//     },
//     {
//       title: "Moving and Handling the Unpredictable",
//       date: "10 January 2024",
//       author: "Administrator",
//       category: "Moving Tips",
//       content: `What is the foundation of a professional stress-free move? Good communication and delivering on those expectations. Every move is unique with its own set of challenges. Moving your precious household goods is not like moving freight where everything is standard, sized, and sitting on a pallet.

// A highly skilled crew is a must for a damage free move. Loading a moving truck is a lot like playing Tetris, with every piece of furniture being wrapped and padded first. Like most skilled trades, experience makes all the difference. It will not matter how good the moving company is if you get a bad crew. The three main factors that will affect the happiness of your moving experience are: a good company, a fair moving quote, and a competent crew.

// Please note it's best to reserve your move date two weeks in advance, if not sooner. Reputable moving companies do not over book, and their calendars fill up quickly, especially at the end of the month.

// Make sure you know what your moving quote includes and that you have reviewed the written proposal/contract. Be sure the moving company you've selected is flexible with inventory adjustments, and/or move conditions. Make sure last-minute services have upfront pricing without penalties or surcharges. Sometimes your friend that was so happy you gave them your old sofa set just doesn't understand the importance of deadlines or move dates or answering their phone. Maybe at the last minute your husband decides to swing by the old storage unit to make use of this extra manpower and large moving truck. Sometimes you may need additional services.

// Life can be unpredictable, make sure your moving company isn't.`,
//     },
//     {
//       title: "Moving?",
//       date: "28 December 2023",
//       author: "Administrator",
//       category: "Getting Started",
//       content: `THE EASE OF A PROFESSIONAL MOVE

// Moving is one of the most stressful of life events. Just below death, divorce, bankruptcy and illness, but it doesn't have to be. A professional move performed by a quality crew will make all the difference.

// Just like most decisions in life, information and knowledge will make all the difference in making the right decision in whether or not to hire a moving company. As well as what moving company out of the thousands that are out there to choose from. Moving furniture is hard manual labor, which requires a unique skill set.

// There are enough questions about the moving process to fill a much larger book than the small book you hold in your hand. Here are just a few questions that you should be considering when making your decision on which moving company to hire.

// What classes of moving companies are there? Why is there such a dramatic range in quote prices for the exact same move? What is included in a moving quote? What are the pros and cons of hourly vs. itemized moving quotes? What is an "estimate" vs. a "not to exceed" moving quote? How much money do I really save if I pack myself?

// What about insurance? What is the difference between insurance and a guarantee? What does GL and cargo insurance cover? What is with this "supplemental insurance'' I keep hearing about? Who pays the deductible if there is a claim? What kind of coverage do I really need? How are the movers screened?

// What kind of men am I letting into my home and around my family? How long will my move take? I want my movers to be fast, but not at the expense of being careful. My friend moved twice in the last two years. One move took 3 days the other 8 hours, what gives?

// When you do not have all the answers, anxiety and stress is a normal emotional response.

// Research shows when most folks are asked to recommend a moving company, they start by saying who not to use. Reliving a bad moving experience in the process. People tend to be loyal to the companies they trust; the companies that treated them fairly in the past. A reputable mover will get most of their business from repeat customers and referrals.`,
//     },
//     {
//       title: "Our First Post!",
//       date: "20 December 2023",
//       author: "Administrator",
//       category: "Getting Started",
//       content: `KNOWING THE RIGHT QUESTIONS

// This about knowing the right questions to ask when hiring a professional moving company, and/or moving yourself. If you do not know how the moving industry operates it is easy to make assumptions, and have misunderstandings with the rental truck company or your moving company. Like with most things, knowledge is power. We will cover common pitfalls and mistakes people sometimes make, and how to avoid them.

// We will talk about the different kinds of moving quotes, and the different classes of moving companies. We will cover the complex and sometimes confusing subject of moving insurance. We will cover how to properly pack a moving truck, and what moving supplies are generally needed. We will cover packing boxes, everything from crystal and china, to clothes and pictures. We will cover the moving experience. How it should be, as well as the horror stories and how to avoid them. We will finish with a brief history of the moving industry and its unique place in our society.

// There is useful information in the appendix on a variety of topics, from an inventory sheet to change of address info. More and more DIYers are hiring a professional moving company to move the "big stuff". DIYers often will move all the small items and call the pros for the items that need more care, furniture dollys, and strong men. The point being, you do not have to do everything yourself, or hire a full-service mover to do everything, there is a lot of middle ground. Moving the small items yourself, and hiring the pros for the big stuff is becoming a more common solution to fit your budget and save your back. Of course, you can hire a full service moving company to do everything, so you do not have to lift a finger.

// Just make sure you pick the right moving company.

// This blog will help you know how to do the right research and pick the best moving company for your needs. People have many questions and concerns when it comes to relocating everything under their roof.

// The top five questions and concerns are, in order of importance:

// 5) Is the price competitive?

// 4) Will the movers show up on time?

// 3) Will my move price change once all my belongings are in the truck?

// 2) What if something gets damaged?

// 1) What about the quality of the moving crew that is working in my home, around my personal possessions and precious family?

// The information in this book can save you time, money and heart ache.`,
//     },
//   ];

//   const categories = [
//     "All",
//     "Professional Services",
//     "Moving Tips",
//     "Getting Started",
//   ];

//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesSearch =
//       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       post.content.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || post.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <ChakraProvider value={defaultSystem}>
//       <Box bg="gray.50" minH="100vh">
//         {/* Header */}
//         <Box bg="blue.600" color="white" py={6} shadow="md">
//           <Container maxW="1200px">
//             <Heading size="3xl" mb={2}>
//               MoveCo.Net
//             </Heading>
//             <Text fontSize="lg" opacity={0.9}>
//               Your trusted moving resource
//             </Text>
//           </Container>
//         </Box>

//         {/* Search Bar */}
//         <Box
//           bg="white"
//           py={6}
//           shadow="sm"
//           borderBottom="1px"
//           borderColor="gray.200"
//         >
//           <Container maxW="1200px">
//             <Flex gap={2}>
//               <Input
//                 placeholder="Search blog posts..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 size="lg"
//                 flex="1"
//               />
//               <Button colorPalette="blue" size="lg" px={8}>
//                 Search
//               </Button>
//             </Flex>
//           </Container>
//         </Box>

//         {/* Main Content */}
//         <Container maxW="1200px" py={10}>
//           <Flex gap={8} direction={{ base: "column", lg: "row" }}>
//             {/* Blog Posts */}
//             <Box flex="1">
//               {filteredPosts.map((post, idx) => (
//                 <BlogPost key={idx} {...post} />
//               ))}

//               {filteredPosts.length === 0 && (
//                 <Card.Root>
//                   <Card.Body p={8} textAlign="center">
//                     <Text color="gray.500" fontSize="lg">
//                       No posts found matching your search.
//                     </Text>
//                   </Card.Body>
//                 </Card.Root>
//               )}
//             </Box>

//             {/* Sidebar */}
//             <Box w={{ base: "full", lg: "320px" }}>
//               <Sidebar
//                 categories={categories}
//                 onCategoryClick={setSelectedCategory}
//               />
//             </Box>
//           </Flex>
//         </Container>

//         {/* Footer */}
//         <Box bg="gray.800" color="white" py={8} mt={12}>
//           <Container maxW="1200px">
//             <Text textAlign="center" opacity={0.8}>
//               Copyright © 2026 MoveCo.Net
//             </Text>
//           </Container>
//         </Box>
//       </Box>
//     </ChakraProvider>
//   );
// }

//3

import { useState } from "react";
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Button,
  Card,
  Badge,
  Flex,
  Separator,
  Link,
  defaultSystem,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaBox,
  FaTruck,
  FaCalendar,
  FaUser,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaArrowRight,
  FaHome,
  FaChevronRight,
  FaBookOpen,
  FaTag,
} from "react-icons/fa";

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  content: string;
  category: string;
  icon: React.ComponentType;
  readTime: string;
}

interface SidebarProps {
  categories: string[];
  onCategoryClick: (category: string) => void;
  selectedCategory: string;
}

const BlogPost = ({
  title,
  date,
  author,
  content,
  category,
  icon: IconComponent,
  readTime,
}: BlogPostProps) => (
  <Card.Root
    mb={8}
    overflow="hidden"
    bg="white"
    shadow="lg"
    _hover={{
      shadow: "2xl",
      transform: "translateY(-4px)",
      borderColor: "blue.400",
    }}
    transition="all 0.3s"
    borderWidth="1px"
    borderColor="gray.200"
  >
    <Card.Body p={0}>
      {/* Header with gradient */}
      <Box
        bgGradient="to-r"
        gradientFrom="blue.500"
        gradientTo="blue.600"
        p={6}
      >
        <HStack mb={3} flexWrap="wrap" gap={2}>
          <Badge
            colorPalette="white"
            size="md"
            px={3}
            py={1}
            borderRadius="full"
            bg="whiteAlpha.300"
          >
            <HStack gap={1}>
              <Box as={IconComponent} fontSize="sm" />
              <Text>{category}</Text>
            </HStack>
          </Badge>
          <HStack color="whiteAlpha.900" fontSize="sm" gap={3}>
            <HStack gap={1}>
              <Box as={FaCalendar} fontSize="sm" />
              <Text>{date}</Text>
            </HStack>
            <HStack gap={1}>
              <Box as={FaClock} fontSize="sm" />
              <Text>{readTime}</Text>
            </HStack>
          </HStack>
        </HStack>
        <Heading size="2xl" color="white" mb={2}>
          {title}
        </Heading>
        <HStack color="whiteAlpha.900" fontSize="sm">
          <Box as={FaUser} fontSize="sm" />
          <Text>by {author}</Text>
        </HStack>
      </Box>

      {/* Content */}
      <Box p={8}>
        <Text
          color="gray.700"
          fontSize="md"
          lineHeight="tall"
          css={{ whiteSpace: "pre-line" }}
        >
          {content}
        </Text>
        <Flex mt={6} pt={6} borderTop="1px" borderColor="gray.200">
          <Button colorPalette="blue" variant="ghost">
            <HStack>
              <Text>Read More</Text>
              <Box as={FaArrowRight} />
            </HStack>
          </Button>
        </Flex>
      </Box>
    </Card.Body>
  </Card.Root>
);

const Sidebar = ({
  categories,
  onCategoryClick,
  selectedCategory,
}: SidebarProps) => (
  <Box position="sticky" top={8}>
    {/* Categories Card */}
    <Card.Root
      bg="white"
      shadow="lg"
      mb={6}
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Card.Body p={6}>
        <HStack mb={4}>
          <Box as={FaTag} color="blue.600" fontSize="xl" />
          <Heading size="lg" color="gray.800">
            Categories
          </Heading>
        </HStack>
        <VStack align="stretch" gap={2}>
          {categories.map((cat, idx) => (
            <Button
              key={idx}
              variant={selectedCategory === cat ? "solid" : "ghost"}
              colorPalette={selectedCategory === cat ? "blue" : "gray"}
              justifyContent="space-between"
              onClick={() => onCategoryClick(cat)}
              _hover={{
                bg: selectedCategory === cat ? "blue.600" : "blue.50",
              }}
              size="md"
            >
              <Text>{cat}</Text>
              <Box as={FaChevronRight} fontSize="sm" />
            </Button>
          ))}
        </VStack>
      </Card.Body>
    </Card.Root>

    {/* Archive Card */}
    <Card.Root
      bg="white"
      shadow="lg"
      mb={6}
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Card.Body p={6}>
        <HStack mb={4}>
          <Box as={FaBookOpen} color="blue.600" fontSize="xl" />
          <Heading size="lg" color="gray.800">
            Archive
          </Heading>
        </HStack>
        <VStack align="stretch" gap={3}>
          <Box>
            <Text fontWeight="bold" color="gray.700" mb={2}>
              2024
            </Text>
            <VStack align="stretch" gap={1} pl={4}>
              <Link
                color="blue.600"
                _hover={{ textDecoration: "underline", color: "blue.700" }}
              >
                January (2)
              </Link>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" color="gray.700" mb={2}>
              2023
            </Text>
            <VStack align="stretch" gap={1} pl={4}>
              <Link
                color="blue.600"
                _hover={{ textDecoration: "underline", color: "blue.700" }}
              >
                December (2)
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Card.Body>
    </Card.Root>

    {/* Quick Stats Card */}
    <Card.Root
      bg="gradient-to-br"
      gradientFrom="blue.500"
      gradientTo="blue.600"
      color="white"
      shadow="lg"
      borderWidth="1px"
      borderColor="blue.400"
    >
      <Card.Body p={6}>
        <Heading size="md" mb={4}>
          Why Choose Us?
        </Heading>
        <VStack align="stretch" gap={3}>
          <HStack>
            <Box as={FaShieldAlt} fontSize="lg" />
            <Text fontSize="sm">Vetted Professionals</Text>
          </HStack>
          <HStack>
            <Box as={FaTruck} fontSize="lg" />
            <Text fontSize="sm">Expert Moving Crew</Text>
          </HStack>
          <HStack>
            <Box as={FaBox} fontSize="lg" />
            <Text fontSize="sm">Professional Packing</Text>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  </Box>
);

export default function MoveCoNetBlog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts: BlogPostProps[] = [
    {
      title: "Packing the House!",
      date: "18 January 2024",
      author: "Administrator",
      category: "Professional Services",
      icon: FaBox,
      readTime: "8 min read",
      content: `PROFESSIONAL PACKING SERVICES

It is 8am the day before your move. There is a knock at your door. The clean-cut packing crew is wearing matching uniforms. You know based on your prior research that this company does background checks, drug tests, and has vetted the references of each packing/moving crew member. It does not matter how skilled your mover is, if you would not trust him in your house. After introductory courtesies, you invite them into your house and do a quick walk through with the crew leader, identifying concerns and answering questions. All boxes will be labeled based on where you will want the items at your new address. As you have pointed out individual rooms, the crew leader has taken note: master bedroom, Emilie's bedroom, Wesley's bedroom, laundry, kitchenette, et cetera. Meanwhile, the other members of the crew have brought in piles of new sturdy boxes, and packing supplies.

There is packing tape, shrink wrap, bubble wrap, wardrobe boxes, 1.5 cubic ft. book boxes, 3.1 cubic ft. median boxes, and 4.5 cubic ft. large boxes, 4.5 cubic ft. dish packs and picture/mirror boxes. You're asked to sign the contract before they start. The contract is familiar, it is the same proposal you reviewed when you reserved your move date.

The crew gets to work. Carefully wrapping all breakable items, and labeling the boxes, "fragile" or "glass". Books and heavier items are packed in 1.5 cubic ft. book boxes. Lighter items are packed in larger boxes. Hanging clothes are packed in wardrobe boxes; which are like mini closets with a metal bar to hang the clothes.

You are on hand to answer any questions the crew may have, one of which is, "What should be packed in your priority boxes?" The stuff you will need immediately after the move. Things like coffee, cups, coffee pot for you and tooth brushes, and pajamas for the kids. If what you need most is identified now, packed and labeled; you will not be searching every box on the move night just to put the kids to bed. The first day in your new home can be kind of chaotic. A few well packed "priority boxes" can make all the difference.

The phone rings a few hours later, it is the moving company's office. The lady on the phone just wants to know if everything is all right, and going smoothly. She asks if you have any questions. She then confirms the time the move crew will be there in the morning. It was just a courtesy call.

As the day progresses, neat stacks of boxes about 4-5 feet tall fill the house. Each box is labeled with its contents and what room it is destined for at the new house. Boxes that are sealed with tape are about 40 % stronger than boxes that are just folded. Every box is sealed with tape.

As the day comes to a close, your entire home is packed by professionals. The crew leader does a walk through with you to double check that everything that needed to be packed, was indeed packed. Meanwhile, the crew picks up any trash, empty tape rolls, box bundle binders, et cetera.

The crew leader asks you to sign the move contract acknowledging the packing services performed. He leaves you with a copy of the updated move contract with actual box numbers, as well as his business card. Goodbyes are said and the crew departs.

You look around with great relief. What would have taken an average family (with friends helping) over a week of exhausting work, and multiple trips to the box store, has been completed in just one day. You think to yourself this is the way to prep for a move. You are ready for the movers tomorrow!`,
    },
    {
      title: "Moving and Handling the Unpredictable",
      date: "10 January 2024",
      author: "Administrator",
      category: "Moving Tips",
      icon: FaTruck,
      readTime: "5 min read",
      content: `What is the foundation of a professional stress-free move? Good communication and delivering on those expectations. Every move is unique with its own set of challenges. Moving your precious household goods is not like moving freight where everything is standard, sized, and sitting on a pallet.

A highly skilled crew is a must for a damage free move. Loading a moving truck is a lot like playing Tetris, with every piece of furniture being wrapped and padded first. Like most skilled trades, experience makes all the difference. It will not matter how good the moving company is if you get a bad crew. The three main factors that will affect the happiness of your moving experience are: a good company, a fair moving quote, and a competent crew.

Please note it's best to reserve your move date two weeks in advance, if not sooner. Reputable moving companies do not over book, and their calendars fill up quickly, especially at the end of the month.

Make sure you know what your moving quote includes and that you have reviewed the written proposal/contract. Be sure the moving company you've selected is flexible with inventory adjustments, and/or move conditions. Make sure last-minute services have upfront pricing without penalties or surcharges. Sometimes your friend that was so happy you gave them your old sofa set just doesn't understand the importance of deadlines or move dates or answering their phone. Maybe at the last minute your husband decides to swing by the old storage unit to make use of this extra manpower and large moving truck. Sometimes you may need additional services.

Life can be unpredictable, make sure your moving company isn't.`,
    },
    {
      title: "Moving?",
      date: "28 December 2023",
      author: "Administrator",
      category: "Getting Started",
      icon: FaHome,
      readTime: "7 min read",
      content: `THE EASE OF A PROFESSIONAL MOVE

Moving is one of the most stressful of life events. Just below death, divorce, bankruptcy and illness, but it doesn't have to be. A professional move performed by a quality crew will make all the difference.

Just like most decisions in life, information and knowledge will make all the difference in making the right decision in whether or not to hire a moving company. As well as what moving company out of the thousands that are out there to choose from. Moving furniture is hard manual labor, which requires a unique skill set.

There are enough questions about the moving process to fill a much larger book than the small book you hold in your hand. Here are just a few questions that you should be considering when making your decision on which moving company to hire.

What classes of moving companies are there? Why is there such a dramatic range in quote prices for the exact same move? What is included in a moving quote? What are the pros and cons of hourly vs. itemized moving quotes? What is an "estimate" vs. a "not to exceed" moving quote? How much money do I really save if I pack myself?

What about insurance? What is the difference between insurance and a guarantee? What does GL and cargo insurance cover? What is with this "supplemental insurance'' I keep hearing about? Who pays the deductible if there is a claim? What kind of coverage do I really need? How are the movers screened?

What kind of men am I letting into my home and around my family? How long will my move take? I want my movers to be fast, but not at the expense of being careful. My friend moved twice in the last two years. One move took 3 days the other 8 hours, what gives?

When you do not have all the answers, anxiety and stress is a normal emotional response.

Research shows when most folks are asked to recommend a moving company, they start by saying who not to use. Reliving a bad moving experience in the process. People tend to be loyal to the companies they trust; the companies that treated them fairly in the past. A reputable mover will get most of their business from repeat customers and referrals.`,
    },
    {
      title: "Our First Post!",
      date: "20 December 2023",
      author: "Administrator",
      category: "Getting Started",
      icon: FaMapMarkerAlt,
      readTime: "6 min read",
      content: `KNOWING THE RIGHT QUESTIONS

This about knowing the right questions to ask when hiring a professional moving company, and/or moving yourself. If you do not know how the moving industry operates it is easy to make assumptions, and have misunderstandings with the rental truck company or your moving company. Like with most things, knowledge is power. We will cover common pitfalls and mistakes people sometimes make, and how to avoid them.

We will talk about the different kinds of moving quotes, and the different classes of moving companies. We will cover the complex and sometimes confusing subject of moving insurance. We will cover how to properly pack a moving truck, and what moving supplies are generally needed. We will cover packing boxes, everything from crystal and china, to clothes and pictures. We will cover the moving experience. How it should be, as well as the horror stories and how to avoid them. We will finish with a brief history of the moving industry and its unique place in our society.

There is useful information in the appendix on a variety of topics, from an inventory sheet to change of address info. More and more DIYers are hiring a professional moving company to move the "big stuff". DIYers often will move all the small items and call the pros for the items that need more care, furniture dollys, and strong men. The point being, you do not have to do everything yourself, or hire a full-service mover to do everything, there is a lot of middle ground. Moving the small items yourself, and hiring the pros for the big stuff is becoming a more common solution to fit your budget and save your back. Of course, you can hire a full service moving company to do everything, so you do not have to lift a finger.

Just make sure you pick the right moving company.

This blog will help you know how to do the right research and pick the best moving company for your needs. People have many questions and concerns when it comes to relocating everything under their roof.

The top five questions and concerns are, in order of importance:

5) Is the price competitive?

4) Will the movers show up on time?

3) Will my move price change once all my belongings are in the truck?

2) What if something gets damaged?

1) What about the quality of the moving crew that is working in my home, around my personal possessions and precious family?

The information in this book can save you time, money and heart ache.`,
    },
  ];

  const categories = [
    "All",
    "Professional Services",
    "Moving Tips",
    "Getting Started",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg="gray.50" minH="100vh">
        {/* Hero Header */}
        <Box
          bgGradient="to-br"
          gradientFrom="blue.600"
          gradientVia="blue.700"
          gradientTo="blue.800"
          color="white"
          py={12}
          shadow="xl"
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            opacity={0.1}
            bgImage="radial-gradient(circle, white 1px, transparent 1px)"
            bgSize="30px 30px"
          />
          <Container maxW="1200px" position="relative">
            <VStack align="start" gap={4}>
              <HStack gap={2}>
                <Box as={FaTruck} fontSize="3xl" />
                <Heading size="4xl">MoveCo.Net</Heading>
              </HStack>
              <Text fontSize="xl" opacity={0.95} maxW="600px">
                Your trusted moving resource for professional packing, moving
                tips, and expert advice
              </Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full" mt={4}>
                <Card.Root bg="whiteAlpha.200" backdropFilter="blur(10px)">
                  <Card.Body p={4}>
                    <HStack>
                      <Box as={FaShieldAlt} fontSize="2xl" />
                      <VStack align="start" gap={0}>
                        <Text fontWeight="bold" fontSize="sm">
                          Trusted Service
                        </Text>
                        <Text fontSize="xs" opacity={0.9}>
                          Vetted professionals
                        </Text>
                      </VStack>
                    </HStack>
                  </Card.Body>
                </Card.Root>
                <Card.Root bg="whiteAlpha.200" backdropFilter="blur(10px)">
                  <Card.Body p={4}>
                    <HStack>
                      <Box as={FaBox} fontSize="2xl" />
                      <VStack align="start" gap={0}>
                        <Text fontWeight="bold" fontSize="sm">
                          Expert Packing
                        </Text>
                        <Text fontSize="xs" opacity={0.9}>
                          Professional care
                        </Text>
                      </VStack>
                    </HStack>
                  </Card.Body>
                </Card.Root>
                <Card.Root bg="whiteAlpha.200" backdropFilter="blur(10px)">
                  <Card.Body p={4}>
                    <HStack>
                      <Box as={FaCalendar} fontSize="2xl" />
                      <VStack align="start" gap={0}>
                        <Text fontWeight="bold" fontSize="sm">
                          On-Time Service
                        </Text>
                        <Text fontSize="xs" opacity={0.9}>
                          Reliable schedule
                        </Text>
                      </VStack>
                    </HStack>
                  </Card.Body>
                </Card.Root>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Search Bar */}
        <Box
          bg="white"
          py={8}
          shadow="md"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Container maxW="1200px">
            <HStack gap={3} flexWrap="wrap">
              <Box flex="1" minW="250px">
                <HStack
                  bg="gray.50"
                  borderRadius="lg"
                  borderWidth="2px"
                  borderColor="gray.200"
                  _focusWithin={{ borderColor: "blue.500", bg: "white" }}
                  transition="all 0.2s"
                >
                  <Box as={FaSearch} ml={4} color="gray.400" />
                  <Input
                    placeholder="Search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    size="lg"
                    border="none"
                    _focus={{ boxShadow: "none" }}
                  />
                </HStack>
              </Box>
              <Button colorPalette="blue" size="lg" px={8}>
                <HStack>
                  <Box as={FaSearch} />
                  <Text>Search</Text>
                </HStack>
              </Button>
            </HStack>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxW="1200px" py={12}>
          <Flex gap={8} direction={{ base: "column", lg: "row" }}>
            {/* Blog Posts */}
            <Box flex="1">
              <Heading size="xl" mb={6} color="gray.800">
                {selectedCategory === "All"
                  ? "Latest Articles"
                  : `${selectedCategory} Articles`}
              </Heading>
              {filteredPosts.map((post, idx) => (
                <BlogPost key={idx} {...post} />
              ))}

              {filteredPosts.length === 0 && (
                <Card.Root>
                  <Card.Body p={12} textAlign="center">
                    <Box as={FaSearch} fontSize="4xl" color="gray.300" mb={4} />
                    <Heading size="lg" color="gray.600" mb={2}>
                      No posts found
                    </Heading>
                    <Text color="gray.500" fontSize="lg">
                      Try adjusting your search or category filter
                    </Text>
                  </Card.Body>
                </Card.Root>
              )}
            </Box>

            {/* Sidebar */}
            <Box w={{ base: "full", lg: "340px" }}>
              <Sidebar
                categories={categories}
                onCategoryClick={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </Box>
          </Flex>
        </Container>

        {/* Footer */}
        <Box
          bgGradient="to-r"
          gradientFrom="gray.800"
          gradientTo="gray.900"
          color="white"
          py={12}
          mt={16}
        >
          <Container maxW="1200px">
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={8}>
              <VStack align="start" gap={3}>
                <HStack gap={2}>
                  <Box as={FaTruck} fontSize="2xl" />
                  <Heading size="lg">MoveCo.Net</Heading>
                </HStack>
                <Text fontSize="sm" opacity={0.8}>
                  Professional moving services and expert advice for a
                  stress-free relocation experience.
                </Text>
              </VStack>
              <VStack align="start" gap={2}>
                <Heading size="md" mb={2}>
                  Quick Links
                </Heading>
                <Link opacity={0.8} _hover={{ opacity: 1 }}>
                  About Us
                </Link>
                <Link opacity={0.8} _hover={{ opacity: 1 }}>
                  Services
                </Link>
                <Link opacity={0.8} _hover={{ opacity: 1 }}>
                  Contact
                </Link>
              </VStack>
              <VStack align="start" gap={2}>
                <Heading size="md" mb={2}>
                  Contact Info
                </Heading>
                <HStack opacity={0.8}>
                  <Box as={FaMapMarkerAlt} />
                  <Text fontSize="sm">Serving nationwide</Text>
                </HStack>
              </VStack>
            </SimpleGrid>
            <Separator mb={6} opacity={0.2} />
            <Text textAlign="center" opacity={0.7} fontSize="sm">
              Copyright © 2026 MoveCo.Net. All rights reserved.
            </Text>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

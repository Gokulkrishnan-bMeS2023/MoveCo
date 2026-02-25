import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
  Flex,
  Text,
  SimpleGrid,
  Container,
  Icon,
  Heading,
  Box,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import type { InventoryDTO, InventorySection, MoveInformationDTO } from "./DTOs";
import { validateInventory } from "./validation";
import { useEffect } from "react";


const inventorySections: InventorySection[] = [
  {
    title: "Appliances",
    items: [
      "AC / Window",
      "Cooler",
      "Ironing board",
      "Microwave",
      "Mob/Broom",
      "Refrigerator Large three door",
      "Refrigerator Stainless Steel",
      "Refrigerator/Freezer Reg.",
      "Refrigerator/Freezer Sm.",
      "Stove/Dishwasher",
      "Trash Can",
      "Trash Can Large",
      "Vacuum",
      "Washer/Dryer (if set, list 2)",
      "Washer/Dryer Front Load (if set, list 2)",
      "Washer/Dryer Front Load Over size (if set, list 2)",
    ],
  },
  {
    title: "Baby Nursery",
    items: [
      "Bassinette",
      "Bed, Youth",
      "Changing Table",
      "Child Chair",
      "Child Table",
      "Child Toy, Under 25 Lbs",
      "Crib",
      "Stroller/Car Seat",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Armoire Oversize",
      "Armoire Reg.",
      "Armoire Sm.",
      "Bed, Full",
      "Bed, King",
      "Bed, Queen",
      "Bed, Twin",
      "Bridge Bed",
      "Bunk Bed",
      "Cedar Chest/Trunk",
      "Chest of Drawers",
      "Daybed",
      "Dresser",
      "Dresser Oversize",
      "Footboard",
      "Footboard Oversize",
      "Headboard Oversize",
      "Headboard Reg.",
      "Mirror Oversize",
      "Mirror Reg.",
      "Mirror Sm.",
      "Nightstand",
      "Vanity",
      "Waterbed, (must be drained)",
    ],
  },
  {
    title: "Boxes moved by MoveCo (Moving ONLY)",
    items: [
      "Dish Pack, Less Than 5.2 Cubic FT and Under 60 LBS",
      "Large Box, Less Than 4.2 Cubic FT and Under 40 LBS",
      "Medium Box, Less Than 3.1 Cubic FT and Under 40 LBS",
      "Mirror/Picture Box, 2FT",
      "Mirror/Picture Box, 4FT",
      "Small Box , Less Than 1.5 Cubic FT",
      "TV/over size picture box",
      "Wardrobe Box, Less Than 10 Cubic FT and Under 50 LBS",
    ],
  },
  {
    title: "Boxes moved by MoveCo (Packaging ONLY)",
    items: [
      "Dish Pack, Less Than 5.2 Cubic FT and Under 60 LBS",
      "Large Box, Less Than 4.2 Cubic FT and Under 40 LBS",
      "Medium Box, Less Than 3.1 Cubic FT and Under 40 LBS",
      "Pictures Under 2 FT",
      "Pictures Under 4 FT",
      "Small Box , Less Than 1.5 Cubic FT",
      "TV/over size picture box",
      "Wardrobe Box, Less Than 10 Cubic FT and Under 50 LBS",
    ],
  },
  {
    title: "Garage and Outdoor",
    items: [
      "BBQ/Grill",
      "Bench",
      "Bicycle",
      "Garage Shelves/Cab. , Under 60 LBS",
      "Golf Clubs",
      "Ladder, Step",
      "Ladder, Under 10 FT (when closed)",
      "Mower, Push",
      "Mower, Ride-On",
      "Outside Arm Chair",
      "Outside chase lounge",
      "Outside Loveseat",
      "Outside Sofa",
      "Patio Chairs",
      "Patio End Tables",
      "Patio Table",
      "Patio Table Glass",
      "Patio Umbrella",
      "Toolbox Lg., Under 120LBS",
      "Toolbox Sm.",
      "Tools Lg. (e.g. saw table)",
      "Tools Sm.",
      "Weed Eater, Trimmer, Edger, Spreader, Ect.",
      "Work Bench, Under 6FT",
    ],
  },
  {
    title: "Kitchen and Dining",
    items: [
      "Baker's Rack",
      "Bar Stool",
      "Bar, Portable",
      "Buffet",
      "China Cabinet",
      "China Cabinet, 2 Pc.",
      "Curio Cabinet",
      "Dining Chairs",
      "Dining Table",
      "Dining Table Glass, Less Than 4FT",
      "Dining Table Glass, Less Than 6FT",
      "Dining Table Lg.",
      "Glass Shelves",
      "Kitchen Table",
      "Tea Cart",
      "Wine Rack",
    ],
  },
  {
    title: "Living Room",
    items: [
      "Area Rug",
      "Area Rug, Over 8 FT",
      "Bookcase",
      "Bookcase Oversize",
      "Chair Occasional/Straight",
      "Chair Overstuffed/Recliner",
      "Chair Wingback/Rocker",
      "Chaise Lounge",
      "Coffee/Sofa Table",
      "Coffee/Sofa Table, Glass Top",
      "DVD/CD Rack",
      "End/ Occasional Table",
      "End/Occasional Table, Glass Top",
      "Entertainment Center 1 Pc. Lg.",
      "Entertainment Center 1 Pc. Sm.",
      "Entertainment Center 3 Pc.",
      "Fan/Lamps, (shade must be boxed)",
      "Hall Tree",
      "Ottoman/Footstool",
      "Pictures Under 2 FT",
      "Pictures Under 4 FT",
      "Sofa Loveseat",
      "Sofa Recliner",
      "Sofa Reg.",
      "Sofa Sleeper/Hide-a-bed",
      "Stereo Components/Speakers Reg.",
      'TV 13"-19"',
      'TV 20"-29"',
      'TV 30"-36"',
      'TV 41"-59"',
      'TV 60"-70"',
      "TV Stand",
    ],
  },
  {
    title: "Miscellaneous Other Items",
    items: [
      "Assembly, Complex",
      "Assembly, Fridge Doors",
      "Assembly, Simple",
      "Exercise Equipment Standard, Elliptical",
      "Exercise Equipment Standard, Bike",
      "Exercise Equipment Standard, Bowflex",
      "Exercise Equipment Standard, Treadmill",
      "Exercise Equipment Standard; W/O D/R",
      "Exercise Equipment; Small",
      "Exercise Weights/Dumbbells (enter number of LBS)",
      "Fire Pit",
      "Folding Chairs",
      "Folding Table",
      "Glass Shelves",
      "Glass Top Less Than 2 FT",
      "Glass Top Less Than 4 FT",
      "Glass Top Less Than 6 FT",
      "Glass Top Less Than 8 Ft",
      "Glass Top, Less Than 10 FT",
      "Grandfather Clock",
      "Marble Top Less Than 2 FT",
      "Marble Top Less Than 4FT",
      "Marble Top Less Than 6 FT",
      "Marble Top Less Than 8 FT",
      "Piano Bench",
      "Piano Upright (downstairs)",
      "Piano, Baby Grand (downstairs)",
      "Plants Fake Less Than 6 FT",
      "Plants Less Than 60 LBS",
      "Plants Small",
      "Statue, Less Than 40LBS",
      "Vase",
    ],
  },
  {
    title: "Office",
    items: [
      "Computer Components",
      "Conference Table Reg.",
      "Copier/Printer Sm.",
      "Credenza",
      "Desk Chair",
      "Desk Computer",
      "Desk Extension",
      "Desk Hutch",
      "Desk Mat",
      "Desk Reg.",
      "Desk Roll Top",
      "Desk Secretary",
      "Desk Sm.",
      "Desk, Office",
      "Drafting Table",
      "File Cab. 2 Drawer",
      "File Cab. 2 Drawer, Lateral",
      "File Cab. 4 Drawer",
      "File Cab. 4 Drawer, Lateral",
      "Printer/Fax Stand",
    ],
  },
];

// All MoveInformationDTO keys to read from URL params
const MOVE_INFO_KEYS: Array<keyof MoveInformationDTO> = [
  "firstName", "lastName", "email", "phone", "homePhone", "workPhone", "faxPhone",
  "moveDate", "moveTime", "dropDate", "dropTime",
  "moveType", "hearAbout", "notes",
  "fromAddress", "fromApt", "fromCity", "fromState", "fromZipCode", "fromStairs", "fromDistance",
  "toAddress", "toApt", "toCity", "toState", "toZipCode", "toStairs", "toDistance",
];

const Inventory = () => {
  const [searchParams] = useSearchParams();

  // Read all move information from URL params (no localStorage needed)
  const moveInfo = MOVE_INFO_KEYS.reduce((acc, key) => {
    acc[key] = searchParams.get(key) || "";
    return acc;
  }, {} as MoveInformationDTO);

  const [quantities, setQuantities] = useState<InventoryDTO["quantities"]>({});
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ quantities?: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
  const saved = sessionStorage.getItem("inventory");
  if (saved) {
    setQuantities(JSON.parse(saved));
  }
}, []);


  const increase = (item: string) => {
  const updated = {
    ...quantities,
    [item]: (quantities[item] || 0) + 1,
  };
  setQuantities(updated);
  sessionStorage.setItem("inventory", JSON.stringify(updated));
};

const decrease = (item: string) => {
  const updated = {
    ...quantities,
    [item]: Math.max((quantities[item] || 0) - 1, 0),
  };
  setQuantities(updated);
  sessionStorage.setItem("inventory", JSON.stringify(updated));
};

  const handleCollapseAll = () => {
    setOpenItems([]);
  };

  const handleExpandAll = () => {
    const allSections = inventorySections.map((_, index) => `section-${index}`);
    setOpenItems(allSections);
  };

  const handleSubmit = () => {
  const inventoryData = { quantities };
  const validationErrors = validateInventory(inventoryData);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSuccessMessage("");
    return;
  }

 sessionStorage.clear(); 

  setQuantities({});
  setOpenItems([]);
  setErrors({});
  setSuccessMessage("Inventory successfully submitted!");

  const finalPayload = {
    ...moveInfo,
    inventory: quantities,
  };

  console.log("Final Submitted Data:", finalPayload);
};


  return (
    <Container>
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={{ base: 4, lg: 6 }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
      >
        <Heading as="h1" color="brand.primary" fontWeight="normal">
          Inventory
        </Heading>

        <Flex gap={3}>
          <Button
            label="Collapse All"
            variant="outline"
            fontSize="sm"
            px={5}
            py={3}
            onClick={handleCollapseAll}
          />
          <Button
            label="Expand All"
            variant="primary"
            fontSize="sm"
            px={5}
            py={3}
            onClick={handleExpandAll}
          />
        </Flex>
      </Flex>

      <AccordionRoot
        value={openItems}
        onValueChange={(e) => setOpenItems(e.value)}
        collapsible
      >
        {inventorySections.map((section, index) => (
          <AccordionItem
            key={index}
            value={`section-${index}`}
            bg="white"
            borderRadius="lg"
            boxShadow="sm"
            mb={4}
            px={4}
            py={4}
          >
            <AccordionItemTrigger px={0}>
              <Flex flex="1" justify="space-between" align="center">
                <Text textStyle="size-xl" fontWeight="600">
                  {section.title}
                </Text>
                <AccordionItemIndicator>
                  <Icon
                    as={FaPlus}
                    boxSize={4}
                    _groupExpanded={{ transform: "rotate(45deg)" }}
                  />
                </AccordionItemIndicator>
              </Flex>
            </AccordionItemTrigger>

            <AccordionItemContent py={2}>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                {section.items.map((item) => {
                  const count = quantities[item] || 0;

                  return (
                    <Flex
                      key={item}
                      justify="space-between"
                      align="center"
                      p={3}
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="md"
                    >
                      <Text fontSize="sm" fontWeight="500">
                        {item}
                      </Text>

                      <Flex align="center" gap={2}>
                        <Button
                          variant="outline"
                          minW="32px"
                          h="32px"
                          p="0"
                          rounded="md"
                          onClick={() => decrease(item)}
                          disabled={count === 0}
                        >
                          <FaMinus size={4} fontWeight="normal" />
                        </Button>

                        <Text w="20px" textAlign="center" fontSize="sm">
                          {count}
                        </Text>

                        <Button
                          variant="primary"
                          minW="32px"
                          h="32px"
                          p="0"
                          rounded="md"
                          onClick={() => increase(item)}
                        >
                          <FaPlus size={4} fontWeight="normal" />
                        </Button>
                      </Flex>
                    </Flex>
                  );
                })}
              </SimpleGrid>
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>

      {/* Submit Section */}
      <Box mt={8} textAlign={{ base: "center", md: "right" }}>
        <Button
          label="Submit Inventory"
          variant="primary"
          onClick={handleSubmit}
          px={8}
          py={6}
        />
        {errors.quantities && (
          <Text color="red.500" mt={4}>
            {errors.quantities}
          </Text>
        )}
        {successMessage && (
          <Text color="green.600" mt={4}>
            {successMessage}
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default Inventory;
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/common/Button/Button";
import { validateInventory } from "../../validation/validation";
import { getQuote } from "../../../../../api/quotesServices";
import {
  postOnlineEstimate,
  type QuoteRequestDTO,
} from "../../../../../api/onlineEstimateService";

import type {
  Quantities,
  InventoryErrors,
  MoveInformationDTO,
  InventorySection,
} from "./types";

const Inventory = () => {
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState<Quantities>({});
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [errors, setErrors] = useState<InventoryErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [inventorySections, setInventorySections] = useState<
    InventorySection[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState<MoveInformationDTO>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homePhone: "",
    workPhone: "",
    cellPhone: "",
    moveDate: "",
    moveTime: "",
    dropDate: "",
    dropTime: "",
    moveType: "",
    hearAbout: "",
    notes: "",
    fromAddress: "",
    fromApt: "",
    fromCity: "",
    fromState: "",
    fromZipCode: "",
    fromStairs: "",
    fromDistance: "",
    toAddress: "",
    toApt: "",
    toCity: "",
    toState: "",
    toZipCode: "",
    toStairs: "",
    toDistance: "",
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("moveInfo");
    if (saved) setValues(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await getQuote();
        setInventorySections(response.data || []);
      } catch (error) {
        console.error("Failed to fetch inventory sections:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInventory();
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("inventory");
    if (saved) {
      setQuantities(JSON.parse(saved));
    }
  }, []);

  const saveQuantities = (updated: Quantities) => {
    setQuantities(updated);
    sessionStorage.setItem("inventory", JSON.stringify(updated));
  };

  const increase = (inventoryID: number) => {
    const key = String(inventoryID);
    saveQuantities({ ...quantities, [key]: (quantities[key] || 0) + 1 });
  };

  const decrease = (inventoryID: number) => {
    const key = String(inventoryID);
    saveQuantities({
      ...quantities,
      [key]: Math.max((quantities[key] || 0) - 1, 0),
    });
  };

  const handleCollapseAll = () => setOpenItems([]);

  const handleExpandAll = () =>
    setOpenItems(inventorySections.map((_, index) => `section-${index}`));

  const handleSubmit = async () => {
    const validationErrors = validateInventory(quantities);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    if (!values) return;

    const finalPayload: QuoteRequestDTO = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,

      phoneNo: values.phone,
      mobilePhone: values.cellPhone,
      workPhone: values.workPhone,
      homePhone: values.homePhone,

      moveDate: values.moveDate,
      moveTime: values.moveTime,

      dropDate: values.dropDate,
      dropTime: values.dropTime,

      fromAddress: values.fromAddress,
      address2: values.fromApt,
      city: values.fromCity,
      state: values.fromState,
      zipCode: values.fromZipCode,

      flightOfStairs: values.fromStairs,
      doorToTruck: values.fromDistance,

      dropAddress: values.toAddress,
      dropAddress2: values.toApt,
      dropCity: values.toCity,
      dropState: values.toState,
      dropZipCode: values.toZipCode,

      dropFlightOfStairs: values.toStairs,
      dropDoorToTruck: values.toDistance,

      moveSize: values.moveType,
      heardBy: values.hearAbout,
      additionalInfo: values.notes,
      recaptchaToken: "test",
      inventories: Object.entries(quantities)
        .filter(([, qty]) => qty >= 1)
        .map(([id, qty]) => ({
          inventoryID: Number(id),
          qty,
        })),
    };

    try {
      await postOnlineEstimate(finalPayload);

      sessionStorage.clear();
      setQuantities({});
      setOpenItems([]);
      setErrors({});
      setSuccessMessage("Inventory successfully submitted!");
      navigate("/confirmation", {
        state: { fromApp: true },
      });
    } catch (error) {
      console.error("Failed to submit inventory:", error);
    }
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
            textStyle="sm"
            px={5}
            py={3}
            onClick={handleCollapseAll}
          />
          <Button
            label="Expand All"
            variant="primary"
            textStyle="sm"
            px={5}
            py={3}
            onClick={handleExpandAll}
          />
        </Flex>
      </Flex>

      {isLoading && (
        <Text color="gray.500" textAlign="center" py={8}>
          Loading inventory…
        </Text>
      )}

      {!isLoading && (
        <AccordionRoot
          value={openItems}
          onValueChange={(e) => setOpenItems(e.value)}
          collapsible
        >
          {inventorySections.map((section, index) => (
            <AccordionItem
              key={section.categoryID}
              value={`section-${index}`}
              bg="brand.white"
              borderRadius="lg"
              boxShadow="sm"
              mb={4}
              px={4}
              py={4}
            >
              <AccordionItemTrigger px={0}>
                <Flex flex="1" justify="space-between" align="center">
                  <Heading as="h4" fontWeight="500">
                    {section.category}
                  </Heading>
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
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                  {section.items.map((item) => {
                    const count = quantities[String(item.inventoryID)] || 0;

                    return (
                      <Flex
                        key={item.inventoryID}
                        justify="space-between"
                        align="center"
                        p={3}
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="md"
                      >
                        <Text textStyle="sm" fontWeight="500" flex="1" mr={2}>
                          {item.inventory}
                        </Text>

                        <Flex align="center" gap={2} flexShrink={0}>
                          <Button
                            variant="outline"
                            minW="32px"
                            h="32px"
                            p="0"
                            rounded="md"
                            onClick={() => decrease(item.inventoryID)}
                            disabled={count === 0}
                          >
                            <FaMinus size={10} />
                          </Button>

                          <Text w="20px" textAlign="center" textStyle="sm">
                            {count}
                          </Text>

                          <Button
                            variant="primary"
                            minW="32px"
                            h="32px"
                            p="0"
                            rounded="md"
                            onClick={() => increase(item.inventoryID)}
                          >
                            <FaPlus size={10} />
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
      )}

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

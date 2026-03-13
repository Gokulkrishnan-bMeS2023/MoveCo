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
import Button from "../../../../../components/common/Button/Button";
import { useInventory } from "./useInventory";

const InventoryContent = () => {
  const {
    quantities,
    openItems,
    setOpenItems,
    errors,
    isSubmitting,
    inventorySections,
    isLoading,
    increase,
    decrease,
    handleCollapseAll,
    handleExpandAll,
    handleSubmit,
  } = useInventory();

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
          label={isSubmitting ? "Submitting..." : "Submit Inventory"}
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
          px={8}
          py={6}
        />
        {errors.quantities && (
          <Text color="red.500" mt={4}>
            {errors.quantities}
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default InventoryContent;

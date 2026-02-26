import {
    Box,
    Flex,
    Text,
    Icon,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import {
    AccordionRoot,
    AccordionItem,
    AccordionItemTrigger,
    AccordionItemContent,
    AccordionItemIndicator,
} from "@chakra-ui/react/accordion";

export interface AccordionSection {
    title: string;
    items: string[];
}

interface CommonAccordionProps {
    sections: AccordionSection[];
}

export default function CommonAccordion({ sections }: CommonAccordionProps) {
    return (
        <Box>
            <AccordionRoot multiple style={{ padding: "0px" }}>
                {sections.map((section, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        borderBottom="1px solid"
                        borderColor="gray.200"
                        py={4}
                    >
                        <AccordionItemTrigger
                            px={0}
                            py={2}
                            _hover={{
                                textDecoration: "underline",
                                textUnderlineOffset: "6px",
                            }}
                        >
                            <Flex flex="1" align="center" justify="space-between">
                                <Text textStyle="size-2xl">{section.title}</Text>
                                <AccordionItemIndicator>
                                    <Icon as={FaPlus} boxSize={4} fontWeight="normal" />
                                </AccordionItemIndicator>
                            </Flex>
                        </AccordionItemTrigger>

                        <AccordionItemContent pt={4} color="gray.600">
                            <Box as="ul" pl={0} listStyleType="none">
                                {section.items.map((item, i) => (
                                    <Text as="li" key={i} textStyle="size-lg" mb={2}>
                                        {section.items.length > 1 && (
                                            <Text as="span" color="brand.primary" mr={2}>
                                                ➣
                                            </Text>
                                        )}
                                        {item}
                                    </Text>
                                ))}
                            </Box>
                        </AccordionItemContent>
                    </AccordionItem>
                ))}
            </AccordionRoot>
        </Box>
    );
}
